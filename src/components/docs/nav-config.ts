export interface NavItem {
  title: string;
  href: string;
}

export interface NavGroup {
  label: string;
  items: NavItem[];
}

export const navConfig: NavGroup[] = [
  {
    label: "Introduction",
    items: [{ title: "Overview & Purpose", href: "/overview" }],
  },
  {
    label: "VA Setup",
    items: [
      { title: "Pre-Call Protocol", href: "/setup" },
      { title: "Compliance & Limits", href: "/compliance" },
    ],
  },
  {
    label: "Daily Walkthrough",
    items: [
      { title: "Day 1 — Overview & Strategy", href: "/day/1" },
      { title: "Day 2 — Lead Import & Logic", href: "/day/2" },
      { title: "Day 3 — Messaging & Nurturing", href: "/day/3" },
      { title: "Day 4 — Automation & Scaling", href: "/day/4" },
    ],
  },
  {
    label: "Operations",
    items: [
      { title: "30-Day Optimization Review", href: "/optimization" },
      { title: "Best Practices & Skills", href: "/best-practices" },
    ],
  },
];
