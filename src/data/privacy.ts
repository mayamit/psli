// Copy for the Privacy & Trust page (brief §7, the differentiator page).

export const canSee = {
  headline: 'What PSL/i can — and can’t — see.',
  subhead: 'No surprises. PSL/i only ever works with what you explicitly connect.',
  can: {
    title: 'What PSL/i can see',
    items: [
      'The apps you explicitly connect — and only those',
      'The meaning it resolves from them (people, commitments, money, documents)',
      'A source trace for every fact, so you can see where it came from',
    ],
  },
  cannot: {
    title: 'What PSL/i can’t do',
    items: [
      'Reach into anything you haven’t connected',
      'Send, change, or delete anything without your approval',
      'Hold a fact you can’t inspect, export, or erase',
    ],
  },
};

export const foundation = {
  headline: 'See everything PSL/i knows about you.',
  subhead:
    'Your Foundation is inspectable, down to the source. Every fact can be traced, edited, or deleted — by you, at any time.',
  facts: [
    {
      label: 'You owe Jane $480 — shared venue deposit',
      due: 'Due Fri, Jul 11',
      sources: ['Email · Jun 24', 'Calendar · Deposit'],
      accent: 'blue',
    },
    {
      label: 'Renewal with Acme — annual contract',
      due: 'Renews Aug 1',
      sources: ['Email · May 30', 'Document · Contract_v3.pdf'],
      accent: 'violet',
    },
    {
      label: 'Mark Lee — Phase 2 budget sign-off',
      due: 'Committed Friday',
      sources: ['Email · Jun 28'],
      accent: 'teal',
    },
  ],
};
