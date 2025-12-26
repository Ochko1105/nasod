import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-[#00BCD4]" />
            <span className="font-bold text-xl text-foreground">UniAdmit</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-foreground hover:text-[#00BCD4] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/universities"
              className="text-muted-foreground hover:text-[#00BCD4] transition-colors"
            >
              Universities
            </Link>
            <Link
              href="/majors"
              className="text-muted-foreground hover:text-[#00BCD4] transition-colors"
            >
              Majors
            </Link>
            <Link
              href="/about"
              className="text-muted-foreground hover:text-[#00BCD4] transition-colors"
            >
              About
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" className="text-foreground">
              Login
            </Button>
            <Button className="bg-[#00BCD4] hover:bg-[#00ACC1] text-white">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
