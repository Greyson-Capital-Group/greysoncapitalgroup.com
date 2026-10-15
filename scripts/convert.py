import re,sys,pathlib
SRC=pathlib.Path('/home/claude/mockups')
ROUTES={'index.html':'/','current-holdings.html':'/current-holdings','track-record.html':'/track-record','strategy.html':'/strategy','about.html':'/about','investors.html':'/investors','contact.html':'/contact'}
def camel(p): return re.sub(r'-([a-z])',lambda m:m.group(1).upper(),p.strip())
def style(m):
    parts=[x for x in m.group(1).split(';') if x.strip()]
    kv=[]
    for x in parts:
        k,v=x.split(':',1); kv.append(f"{camel(k)}:{repr(v.strip())}")
    return 'style={{'+','.join(kv)+'}}'
def conv(h):
    h=re.sub(r'<!--.*?-->','',h,flags=re.S)
    h=h.replace('{','&#123;').replace('}','&#125;')
    h=re.sub(r'style="([^"]*)"',style,h)
    h=re.sub(r'\bclass="',r'className="',h); h=re.sub(r'\bfor="',r'htmlFor="',h)
    h=h.replace('className=""','').replace('className=" "','')
    h=re.sub(r'<(img|br|hr|input)\b([^>]*?)\s*/?>',lambda m:f'<{m.group(1)}{m.group(2)} />',h)
    h=re.sub(r'src="img/',r'src="/img/',h)
    def href(m):
        u=m.group(1)
        return f'href="{ROUTES.get(u,u)}"'
    h=re.sub(r'href="([^"]+)"',href,h)
    h=h.replace('https://greysoncapitalgroup.junipersquare.com/login?path=/offering/33153','{JUNIPER}').replace('href="{JUNIPER}"','href={JUNIPER_URL}')
    return h
for f,route in ROUTES.items():
    t=(SRC/f).read_text()
    body=t.split('</header>',1)[1].split('<footer',1)[0]
    title=re.search(r'<title>(.*?)</title>',t).group(1).split(' · ')[0]
    jsx=conv(body).strip()
    name=''.join(w.capitalize() for w in re.split(r'[-.]',f.replace('.html','')))
    d='app' if route=='/' else f'app{route}'
    pathlib.Path(d).mkdir(parents=True,exist_ok=True)
    imp="import { JUNIPER_URL } from '@/data/site';\n" if 'JUNIPER_URL' in jsx else ''
    meta=f"export const metadata = {{ title: {repr(title)} }};\n\n" if route!='/' else ''
    pathlib.Path(d,'page.tsx').write_text(f"{imp}{meta}export default function {name}Page() {{\n  return (\n    <>\n{jsx}\n    </>\n  );\n}}\n")
    print(d, len(jsx))
