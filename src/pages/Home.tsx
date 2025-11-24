import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Network, Shield, ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home = () => {
  const courseCategories = [
    {
      icon: Cloud,
      title: "Cloud Computing",
      description: "Master AWS, Azure, and GCP with industry-recognized certifications",
      link: "/courses/cloud",
    },
    {
      icon: Network,
      title: "Networking",
      description: "Build expertise in Cisco CCNA, CompTIA Network+, and more",
      link: "/courses/networking",
    },
    {
      icon: Shield,
      title: "CyberSecurity",
      description: "Learn ethical hacking, security fundamentals, and advanced protection",
      link: "/courses/cybersecurity",
    },
  ];

  const benefits = [
    "Expert instructors with real-world experience",
    "Hands-on labs and practical exercises",
    "Flexible learning schedules",
    "Industry-recognized certifications",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <Badge variant="outline" className="mb-6 border-primary text-primary px-4 py-2">
            ⚡ Professional IT Certifications
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Master <span className="text-primary">IT Skills</span>
            <br />
            <span className="text-foreground">Launch Your Tech Career</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
            Expert-led certification training in Cloud Computing, Networking, and Cybersecurity. 
            Join thousands of professionals who've advanced their careers with DigiFly Tech.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/courses">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8">
                Explore Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-accent text-lg px-8">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Choose Your Path
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Select from our comprehensive training tracks designed to accelerate your IT career
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {courseCategories.map((category) => (
              <Link key={category.title} to={category.link}>
                <Card className="p-6 hover:shadow-lg transition-all hover:-translate-y-1 border-2 hover:border-primary cursor-pointer h-full">
                  <div className="bg-accent p-3 rounded-lg w-fit mb-4">
                    <category.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{category.title}</h3>
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  <span className="text-primary font-semibold inline-flex items-center">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-accent py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose DigiFly Tech?
              </h2>
              <p className="text-muted-foreground mb-8">
                We provide comprehensive training that combines theoretical knowledge with practical, 
                hands-on experience to prepare you for real-world IT challenges.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-secondary shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Link to="/why-us">
                <Button className="mt-8 bg-gradient-primary hover:opacity-90">
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="bg-gradient-primary p-8 rounded-2xl text-primary-foreground">
              <div className="space-y-6">
                <div>
                  <div className="text-5xl font-bold mb-2">1000+</div>
                  <div className="text-primary-foreground/80">Professionals Trained</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">95%</div>
                  <div className="text-primary-foreground/80">Certification Success Rate</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">15+</div>
                  <div className="text-primary-foreground/80">Industry Certifications</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your IT Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Take the first step towards a successful tech career. Get in touch with us today.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-lg px-8">
              Contact Us Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
