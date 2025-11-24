import { Link } from "react-router-dom";
import { Mail, Linkedin, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">DigiFly Tech</h3>
            <p className="text-muted-foreground text-sm">
              Expert-led certification training in Cloud Computing, Networking, and Cybersecurity.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/courses" className="text-muted-foreground hover:text-primary transition-colors">
                  All Courses
                </Link>
              </li>
              <li>
                <Link to="/why-us" className="text-muted-foreground hover:text-primary transition-colors">
                  Why Us
                </Link>
              </li>
              <li>
                <Link to="/schedule" className="text-muted-foreground hover:text-primary transition-colors">
                  Schedule
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Courses</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/courses/cloud" className="text-muted-foreground hover:text-primary transition-colors">
                  Cloud Computing
                </Link>
              </li>
              <li>
                <Link to="/courses/networking" className="text-muted-foreground hover:text-primary transition-colors">
                  Networking
                </Link>
              </li>
              <li>
                <Link to="/courses/cybersecurity" className="text-muted-foreground hover:text-primary transition-colors">
                  CyberSecurity
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Connect</h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:info@digifly.tech"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Mail className="h-4 w-4" />
                info@digifly.tech
              </a>
              <a
                href="https://www.linkedin.com/in/mohamed-nowsath-b63306118/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} DigiFly Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
