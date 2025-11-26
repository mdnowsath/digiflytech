import { Card } from "@/components/ui/card";
import { Award, Users, Laptop, Clock, TrendingUp, HeadphonesIcon, Linkedin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import mohamedPhoto from "@/assets/mohamed-nowsath.jpeg";

const WhyUs = () => {
  const benefits = [
    {
      icon: Award,
      title: "Expert Instructors",
      description: "Learn from certified professionals with years of real-world industry experience and a passion for teaching.",
    },
    {
      icon: Laptop,
      title: "Hands-On Training",
      description: "Practical labs and exercises that simulate real-world scenarios to reinforce your learning.",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Weekend and evening batches available to fit your busy lifestyle and work commitments.",
    },
    {
      icon: Users,
      title: "Small Class Sizes",
      description: "Personalized attention with limited batch sizes ensuring quality interaction with instructors.",
    },
    {
      icon: TrendingUp,
      title: "Career Support",
      description: "Guidance on career paths, resume building, and interview preparation to help you succeed.",
    },
    {
      icon: HeadphonesIcon,
      title: "Ongoing Support",
      description: "Access to instructor support even after course completion and lifetime learning resources.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <section className="bg-gradient-hero py-16 px-4">
          <div className="container mx-auto max-w-6xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Why Choose DigiFly Tech?</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing the highest quality IT certification training that prepares you for success
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit) => (
                <Card key={benefit.title} className="p-6 hover:shadow-lg transition-all">
                  <div className="bg-accent p-3 rounded-lg w-fit mb-4">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </Card>
              ))}
            </div>
            </div>
        </section>
        <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Founder & Lead Mentor</h2>
            </div>
            
            <Card className="max-w-4xl mx-auto overflow-hidden">
              <div className="md:flex items-center gap-8 p-8">
                <div className="flex-shrink-0 mb-6 md:mb-0 text-center md:text-left">
                  <img 
                    src={mohamedPhoto} 
                    alt="Mohamed Nowsath" 
                    className="w-48 h-48 rounded-full object-cover mx-auto md:mx-0 border-4 border-primary/20 shadow-lg"
                  />
                </div>
                
                <div className="flex-grow text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">Mohamed Nowsath</h3>
                  <p className="text-primary font-semibold mb-4">Founder & Lead Mentor</p>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    With over 12 years of experience in cybersecurity and IT training, Nowsath is passionate about mentoring aspiring professionals and driving practical skill development. He specializes in designing robust identity and access management solutions, and brings hands-on business and technical expertise to DigiFly's career-focused training programs.
                  </p>
                  <a 
                    href="https://www.linkedin.com/in/mohamed-nowsath-b63306118/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-all hover:scale-110"
                  >
                    <Linkedin className="h-6 w-6" />
                    <span className="font-medium">Connect on LinkedIn</span>
                  </a>
                </div>
              </div>
            </Card>     
          </div>
        </section>

        <section className="bg-accent py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Track Record</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Numbers that speak to our commitment to excellence
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">1000+</div>
                <div className="text-muted-foreground">Professionals Trained</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">95%</div>
                <div className="text-muted-foreground">Certification Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">Certifications Offered</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">5+</div>
                <div className="text-muted-foreground">Years of Experience</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Students Say</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <div className="mb-4">
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">
                    "The CCNA training was exceptional! The hands-on labs really helped me understand networking concepts deeply. Passed my exam on the first try!"
                  </p>
                </div>
                <div className="font-semibold">Rajesh K.</div>
                <div className="text-sm text-muted-foreground">Network Engineer</div>
              </Card>

              <Card className="p-6">
                <div className="mb-4">
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">
                    "Mohamed's AWS training was comprehensive and practical. The real-world scenarios prepared me perfectly for my cloud architect role."
                  </p>
                </div>
                <div className="font-semibold">Priya S.</div>
                <div className="text-sm text-muted-foreground">Cloud Architect</div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WhyUs;
