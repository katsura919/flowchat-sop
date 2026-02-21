import { Sidebar } from "@/components/docs/sidebar";
import { MobileNav } from "@/components/docs/mobile-nav";
import { ThemeToggle } from "@/components/docs/theme-toggle";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 items-center px-4 md:px-6">
          <div className="flex items-center gap-3">
            <MobileNav />
            <Link
              href="/overview"
              className="font-bold tracking-tight text-foreground"
            >
              FlowChat SOP
            </Link>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-7xl">
        {/* Sidebar — hidden on mobile */}
        <aside className="hidden md:block sticky top-14 h-[calc(100vh-3.5rem)] w-64 shrink-0 overflow-y-auto border-r py-8 pl-4 pr-4">
          <Sidebar />
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0 px-6 py-10 md:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
