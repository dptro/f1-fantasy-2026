"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  href: string;
  label: string;
  icon: (props: { className?: string }) => React.ReactNode;
};

function IconDashboard({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M4 13.5V6.8c0-1 0.8-1.8 1.8-1.8h4.4c1 0 1.8 0.8 1.8 1.8v6.7c0 1-0.8 1.8-1.8 1.8H5.8c-1 0-1.8-0.8-1.8-1.8Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M12 17.2v-3.4c0-1 0.8-1.8 1.8-1.8h4.4c1 0 1.8 0.8 1.8 1.8v3.4c0 1-0.8 1.8-1.8 1.8h-4.4c-1 0-1.8-0.8-1.8-1.8Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M12 8.2V6.8c0-1 0.8-1.8 1.8-1.8h4.4c1 0 1.8 0.8 1.8 1.8v1.4c0 1-0.8 1.8-1.8 1.8h-4.4c-1 0-1.8-0.8-1.8-1.8Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M4 17.2v-1.4c0-1 0.8-1.8 1.8-1.8h4.4c1 0 1.8 0.8 1.8 1.8v1.4c0 1-0.8 1.8-1.8 1.8H5.8c-1 0-1.8-0.8-1.8-1.8Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function IconFlag({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M6 3v18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M6 4.5h9.5c0.7 0 1.2 0.6 1.1 1.3l-0.4 2.4c-0.1 0.6 0.3 1.2 0.9 1.3l0.7 0.1c0.7 0.1 1.1 0.8 0.8 1.4l-0.9 2.1c-0.2 0.4-0.6 0.7-1.1 0.7H6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconTrophy({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M8 4h8v4c0 3-2 5-4 5s-4-2-4-5V4Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M6 6H4c0 3 1.5 5 4 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M18 6h2c0 3-1.5 5-4 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M12 13v3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M8.5 20h7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M9.5 16h5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconUsers({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M16.5 19c0-2.2-2-4-4.5-4s-4.5 1.8-4.5 4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M12 12.5c1.8 0 3.2-1.4 3.2-3.2S13.8 6.1 12 6.1 8.8 7.5 8.8 9.3 10.2 12.5 12 12.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M19.2 19c0-1.5-0.9-2.8-2.3-3.4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M17.6 6.6c1.3 0.7 1.8 2.4 1 3.7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

const NAV: NavItem[] = [
  { href: "/", label: "Dashboard", icon: IconDashboard },
  { href: "/race-weekend", label: "Race Weekend", icon: IconFlag },
  { href: "/standings", label: "Standings", icon: IconTrophy },
  { href: "/teams", label: "Teams", icon: IconUsers },
];

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function TopChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/15 bg-white/5 px-2 py-1 text-xs text-white/80">
      {children}
    </span>
  );
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);

  React.useEffect(() => setSidebarOpen(false), [pathname]);

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-zinc-900/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 md:hidden"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open navigation"
          >
            ☰
          </button>

          <div className="flex min-w-0 flex-1 items-baseline gap-3">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-500" />
              <h1 className="truncate text-base font-semibold tracking-wide">
                F1 Fantasy 2026
              </h1>
            </div>
            <span className="hidden text-xs text-white/60 sm:inline">
              League Dashboard
            </span>
          </div>

          <div className="hidden items-center gap-2 sm:flex">
            <TopChip>Season: 2026</TopChip>
            <TopChip>Snapshot: LATEST</TopChip>
            <TopChip>Updated: —</TopChip>
          </div>

          <span className="sm:hidden rounded-full border border-white/15 bg-white/5 px-2 py-1 text-xs text-white/80">
            2026
          </span>
        </div>
      </header>

      <div className="mx-auto flex max-w-7xl">
        <aside
          className={cn(
            "sticky top-[57px] hidden h-[calc(100vh-57px)] border-r border-white/10 bg-zinc-900 md:block",
            sidebarCollapsed ? "w-[72px]" : "w-64"
          )}
        >
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between gap-2 px-3 py-3">
              <span
                className={cn(
                  "text-xs font-semibold tracking-wide text-white/60",
                  sidebarCollapsed && "hidden"
                )}
              >
                NAVIGATION
              </span>
              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/5 hover:bg-white/10"
                onClick={() => setSidebarCollapsed((v) => !v)}
                aria-label="Toggle sidebar"
                title="Toggle sidebar"
              >
                ⇔
              </button>
            </div>

            <nav className="flex flex-1 flex-col gap-1 px-2 pb-3">
              {NAV.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                const Icon = item.icon;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "group relative flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition",
                      active
                        ? "bg-white/10 text-white"
                        : "text-white/80 hover:bg-white/5 hover:text-white"
                    )}
                  >
                    <span
                      className={cn(
                        "absolute left-0 top-2 bottom-2 w-[3px] rounded-full bg-red-500 opacity-0",
                        active && "opacity-100"
                      )}
                    />

                    <span
                      className={cn(
                        "inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-black/30",
                        active
                          ? "border-red-500/40"
                          : "group-hover:border-white/20"
                      )}
                    >
                      <Icon
                        className={cn(
                          "h-5 w-5",
                          active ? "text-white" : "text-white/75"
                        )}
                      />
                    </span>

                    <span className={cn("truncate", sidebarCollapsed && "hidden")}>
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </nav>

            <div className={cn("px-3 pb-4", sidebarCollapsed && "hidden")}>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                <div className="text-xs font-semibold text-white">Status</div>
                <div className="mt-1 text-xs text-white/60">
                  Live • premium UI pass • data wiring next
                </div>
              </div>
            </div>
          </div>
        </aside>

        {sidebarOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            <div
              className="absolute inset-0 bg-black/70"
              onClick={() => setSidebarOpen(false)}
            />
            <div className="absolute left-0 top-0 h-full w-80 border-r border-white/10 bg-zinc-900">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <div className="text-sm font-semibold text-white">Navigation</div>
                <button
                  className="h-9 w-9 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10"
                  onClick={() => setSidebarOpen(false)}
                  aria-label="Close navigation"
                >
                  ✕
                </button>
              </div>

              <nav className="flex flex-col gap-1 p-2">
                {NAV.map((item) => {
                  const active =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "group relative flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition",
                        active
                          ? "bg-white/10 text-white"
                          : "text-white/80 hover:bg-white/5 hover:text-white"
                      )}
                    >
                      <span
                        className={cn(
                          "absolute left-0 top-2 bottom-2 w-[3px] rounded-full bg-red-500 opacity-0",
                          active && "opacity-100"
                        )}
                      />
                      <span
                        className={cn(
                          "inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-black/30",
                          active
                            ? "border-red-500/40"
                            : "group-hover:border-white/20"
                        )}
                      >
                        <Icon
                          className={cn(
                            "h-5 w-5",
                            active ? "text-white" : "text-white/75"
                          )}
                        />
                      </span>
                      <span className="truncate">{item.label}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
        )}

        <main className="relative w-full bg-black px-4 py-6 md:px-6">
          {/* faint grid only */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.35) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          />
          <div className="relative mx-auto max-w-5xl">{children}</div>
        </main>
      </div>
    </div>
  );
}