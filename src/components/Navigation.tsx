import { Link, useLocation } from "react-router-dom";
import { Rocket, Users, Search, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface NavigationProps {
  onSearch?: (query: string) => void;
}

export const Navigation = ({ onSearch }: NavigationProps) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-10">
            <Link to="https://africa-capital-hub-frontend.vercel.app/" className="flex items-center gap-2 font-bold text-2xl">
              {/* <Rocket className="h-7 w-7 text-primary" /> */}
              <span className="text-foreground">Capital Hub </span>
            </Link>

            <div className="hidden md:flex items-center gap-2">
              <Link to="/projects">
                <Button
                  variant={isActive("/projects") ? "default" : "ghost"}
                  size="sm"
                  className={
                    isActive("/projects")
                      ? "bg-primary text-primary-foreground rounded-full font-semibold"
                      : "text-foreground font-medium rounded-full hover:bg-muted"
                  }
                >
                  Projects
                </Button>
              </Link>
              <Link to="/investors">
                <Button
                  variant={isActive("/investors") ? "default" : "ghost"}
                  size="sm"
                  className={
                    isActive("/investors")
                      ? "bg-primary text-primary-foreground rounded-full font-semibold"
                      : "text-foreground font-medium rounded-full hover:bg-muted"
                  }
                >
                  Investors
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="pl-9 w-[220px] rounded-full border-2"
                  onChange={(e) => onSearch?.(e.target.value)}
                />
              </div>
            </div>
            <a href="https://africa-capital-hub-frontend.vercel.app" target="_blank" rel="noopener noreferrer">
            <Button
                // onsClick={() => setIsLoginOpen(true)}
                className={`btn-click flex-items`}
              >
                Get Started
                <div className="bg-black rounded-full p-1 group-hover:scale-110 transition-transform">
                  <ArrowUpRight className="w-6 h-6 text-white" />
                </div>
              </Button>
              </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
