// Derivation helpers for the /demo route. Pure logic — no copy lives here.
// All strings come from src/data/demo.ts (per Website/CLAUDE.md).
import {
  allPeople,
  allEmails,
  allCommitments,
  allMoney,
  allDocuments,
  lifeItems,
  connections,
  type Person,
  type Email,
  type Commitment,
  type MoneyItem,
  type Doc,
  type LifeItem,
  type Connection,
} from '../data/demo';
import type { Accent } from './accents';

// Built from the merged `all*` sets so the whole demo uses the richer dataset.
export const personById: Record<string, Person> = Object.fromEntries(allPeople.map((p) => [p.id, p]));
export const emailById: Record<string, Email> = Object.fromEntries(allEmails.map((e) => [e.id, e]));
export const commitmentById: Record<string, Commitment> = Object.fromEntries(allCommitments.map((c) => [c.id, c]));
export const moneyById: Record<string, MoneyItem> = Object.fromEntries(allMoney.map((m) => [m.id, m]));
export const docById: Record<string, Doc> = Object.fromEntries(allDocuments.map((d) => [d.id, d]));
export const lifeById: Record<string, LifeItem> = Object.fromEntries(lifeItems.map((l) => [l.id, l]));
export const connectionById: Record<string, Connection> = Object.fromEntries(connections.map((c) => [c.id, c]));

/** A person's accent, safely defaulting to violet (the PSL/i primary hue family). */
export function personAccent(personId: string): Accent {
  return (personById[personId]?.accent as Accent) ?? 'violet';
}

/** "Glenn Rivera — 'Re: Model' · Tue" — the canonical provenance label for an email. */
export function emailProvenance(emailId: string): string {
  const e = emailById[emailId];
  if (!e) return 'Unknown source';
  const p = personById[e.from];
  return `${p?.name ?? e.from} — “${e.subject}” · ${e.date}`;
}

// Status + direction display metadata (label + accent), kept out of components.
export const statusMeta: Record<Commitment['status'], { label: string; accent: Accent }> = {
  overdue: { label: 'Overdue', accent: 'rose' },
  'at-risk': { label: 'At risk', accent: 'amber' },
  'on-track': { label: 'On track', accent: 'green' },
  done: { label: 'Done', accent: 'green' },
};

export const moneyMeta: Record<MoneyItem['direction'], { label: string; accent: Accent }> = {
  owe: { label: 'You owe', accent: 'amber' },
  incoming: { label: 'Incoming', accent: 'green' },
  'spend-alert': { label: 'Spend alert', accent: 'rose' },
};

/** Everything the Foundation resolved out of a single email — the semantic-layer payoff. */
export function resolvedFrom(emailId: string): {
  commitments: Commitment[];
  money: MoneyItem[];
  documents: Doc[];
} {
  return {
    commitments: allCommitments.filter((c) => c.sourceEmailId === emailId),
    money: allMoney.filter((m) => m.sourceEmailId === emailId),
    documents: allDocuments.filter((d) => d.sourceEmailId === emailId),
  };
}
