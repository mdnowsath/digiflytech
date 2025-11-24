import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center group">
            <span className="text-2xl font-bold">
              <span className="bg-gradient-primary bg-clip-text text-transparent italic tracking-tight">DigiFly</span>
              <span className="text-foreground ml-2 font-medium">Tech</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link to="/courses" className="text-foreground hover:text-primary transition-colors font-medium">
              Courses
            </Link>
            <Link to="/why-us" className="text-foreground hover:text-primary transition-colors font-medium">
              Why Us
            </Link>
            <Link to="/schedule" className="text-foreground hover:text-primary transition-colors font-medium">
              Schedule
            </Link>
            <Link to="/faqs" className="text-foreground hover:text-primary transition-colors font-medium">
              FAQs
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </Link>
            <Link to="/contact">
              <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
                Enroll Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
