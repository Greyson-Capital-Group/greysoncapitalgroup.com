import { SHOW_REVIEW_NOTES } from '@/data/site';
import { isOn, isVisible, type FlagName } from '@/lib/content';

/** Yellow review tag. Hidden on the launch build by CSS (.launch .note). */
export function Confirm({ children = 'Confirm' }: { children?: React.ReactNode }) {
  return <span className="note">{children}</span>;
}

/**
 * Review tag with a kind: DRAFT (copy written from sources, Justin to read), JUSTIN (only Justin
 * can supply/decide), COUNSEL (securities counsel), SUPPLY, CONFIRM. Hidden on the launch build.
 */
export function Tag({ kind, children }: { kind?: string; children?: React.ReactNode }) {
  if (!kind) return null;
  const k = kind.split(/[ +]/)[0].toLowerCase();
  const label = kind === 'DRAFT' ? 'DRAFT · Justin to read' : kind;
  return <span className={`note note-${k}`}>{label}{children ? <> — {children}</> : null}</span>;
}

/**
 * Content behind a launch switch in content/flags.json.
 * Public build: rendered only when the flag is true.
 * Preview build: always rendered; when the flag is off it gets a dashed yellow frame
 * saying it is hidden at launch, so Justin can review it.
 */
export function Gate({ flag, label, children, inline = false }: { flag: FlagName; label?: string; children: React.ReactNode; inline?: boolean }) {
  if (!isVisible(flag)) return null;
  if (isOn(flag) || !SHOW_REVIEW_NOTES) return <>{children}</>;
  const Tag = inline ? 'span' : 'div';
  return (
    <Tag className={inline ? 'gated inline' : 'gated'}>
      <span className="gated-label" title={`content/flags.json → ${flag}`}>Hidden at launch · {flag}{label ? ` · ${label}` : ''}</span>
      {children}
    </Tag>
  );
}
