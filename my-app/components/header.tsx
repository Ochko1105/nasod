import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GraduationCap, Search, User } from "lucide-react";

export function Header() {
  return (
    <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-semibold text-lg">UniMatch</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Home
          </Link>
          <Link
            href="/universities"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Universities
          </Link>
          <Link
            href="/simulator"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Simulator
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Search className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            className="hidden md:inline-flex bg-transparent gap-2"
            asChild
          >
            <Link href="/profile">
              <User className="w-4 h-4" />
              My Profile
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
