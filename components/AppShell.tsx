"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = { href: string; label: string; short: string };

const NAV: NavItem[] = [
  { href: "/", label: "Dashboard", short: "D" },
  { href: "/standings", label: "Weekly Standings", short: "W" },
  { href: "/races", label: "Race Weekends", short: "R" },
  { href: "/teams", label: "Teams", short: "T" },
  { href: "/stats", label: "Stats", short: "S" },
];

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);

  React.useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top bar */}
      <header className="sticky top-0 z-30 border-b border-white/15 bg-zinc-900/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-transparent hover:bg-white/5 md:hidden"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open navigation"
          >
            ☰
          </button>

          <div className="flex min-w-0 flex-1 items-baseline gap-3">
            <h1 className="truncate text-base font-semibold">F1 Fantasy 2026</h1>
            <span className="hidden text-xs text-white/70 sm:inline">
              Season: 2026
            </span>
          </div>

          <span className="rounded-full border border-white/20 bg-transparent px-2 py-1 text-xs text-white/80">
            Dark
          </span>
        </div>
      </header>

      <div className="mx-auto flex max-w-7xl">
        {/* Desktop sidebar */}
        <aside
          className={cn(
            "sticky top-[57px] hidden h-[calc(100vh-57px)] border-r border-white/15 bg-zinc-900 md:block",
            sidebarCollapsed ? "w-16" : "w-64"
          )}
        >
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between gap-2 px-3 py-3">
              <span
                className={cn(
                  "text-xs font-semibold tracking-wide text-white/70",
                  sidebarCollapsed && "hidden"
                )}
              >
                NAVIGATION
              </span>
              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 bg-transparent hover:bg-white/5"
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

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition",
                      active
                        ? "border border-white/20 bg-white/10 text-white"
                        : "text-white/80 hover:bg-white/5 hover:text-white"
                    )}
                  >
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-white/20 bg-transparent text-xs text-white">
                      {item.short}
                    </span>
                    <span
                      className={cn("truncate", sidebarCollapsed && "hidden")}
                    >
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </nav>

            <div className={cn("px-3 pb-4", sidebarCollapsed && "hidden")}>
              <div className="rounded-xl border border-white/15 bg-transparent p-3">
                <div className="text-xs font-semibold text-white">Status</div>
                <div className="mt-1 text-xs text-white/70">
                  Data loader: coming soon
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Mobile drawer */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            <div
              className="absolute inset-0 bg-black/70"
              onClick={() => setSidebarOpen(false)}
            />
            <div className="absolute left-0 top-0 h-full w-80 border-r border-white/15 bg-zinc-900">
              <div className="flex items-center justify-between border-b border-white/15 px-4 py-3">
                <div className="text-sm font-semibold text-white">
                  Navigation
                </div>
                <button
                  className="h-9 w-9 rounded-lg border border-white/20 bg-transparent hover:bg-white/5"
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

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition",
                        active
                          ? "border border-white/20 bg-white/10 text-white"
                          : "text-white/80 hover:bg-white/5 hover:text-white"
                      )}
                    >
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-white/20 bg-transparent text-xs text-white">
                        {item.short}
                      </span>
                      <span className="truncate">{item.label}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
        )}

        {/* Main content */}
        <main className="w-full bg-black px-4 py-6 md:px-6">
          <div className="mx-auto max-w-5xl">{children}</div>
        </main>
      </div>
    </div>
  );
}