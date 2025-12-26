import Link from "next/link";
import { GraduationCap, Globe, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-border pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-6 w-6 text-[#00BCD4]" />
              <span className="font-bold text-xl text-foreground">
                UniAdmit
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4 text-pretty">
              Making higher education accessible for everyone. Find your future
              today.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-muted-foreground hover:bg-[#00BCD4] hover:text-white transition-colors"
              >
                <Globe className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-muted-foreground hover:bg-[#00BCD4] hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-muted-foreground hover:bg-[#00BCD4] hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4">Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#00BCD4] hover:text-[#00ACC1]"
                >
                  Browse Universities
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#00BCD4] hover:text-[#00ACC1]"
                >
                  Majors & Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#00BCD4] hover:text-[#00ACC1]"
                >
                  Admission Deadlines
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#00BCD4] hover:text-[#00ACC1]"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#00BCD4] hover:text-[#00ACC1]"
                >
                  Student Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#00BCD4] hover:text-[#00ACC1]"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#00BCD4] hover:text-[#00ACC1]"
                >
                  Counselor Portal
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#00BCD4] hover:text-[#00ACC1]"
                >
                  API Documentation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#00BCD4] hover:text-[#00ACC1]"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#00BCD4] hover:text-[#00ACC1]"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#00BCD4] hover:text-[#00ACC1]"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 UniAdmit Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
