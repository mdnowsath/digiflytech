import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Cloud, Network, Shield, Clock, BarChart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { courses } from "@/data/courses";

const Courses = () => {
  const categoryIcons = {
    cloud: Cloud,
    networking: Network,
    cybersecurity: Shield,
  };

  const categoryColors = {
    cloud: "text-primary bg-accent",
    networking: "text-secondary bg-secondary/10",
    cybersecurity: "text-destructive bg-destructive/10",
  };

  const groupedCourses = {
    cloud: courses.filter((c) => c.category === "cloud"),
    networking: courses.filter((c) => c.category === "networking"),
    cybersecurity: courses.filter((c) => c.category === "cybersecurity"),
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <section className="bg-gradient-hero py-16 px-4">
          <div className="container mx-auto max-w-6xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Courses</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive certification training programs designed to advance your IT career
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            {/* Cloud Computing */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-accent p-3 rounded-lg">
                  <Cloud className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold">Cloud Computing</h2>
                  <p className="text-muted-foreground">Master cloud platforms and services</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {groupedCourses.cloud.map((course) => {
                  const Icon = categoryIcons[course.category];
                  return (
                    <Card key={course.id} className="p-6 hover:shadow-lg transition-all">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`p-2 rounded-lg ${categoryColors[course.category]}`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <Badge variant="outline">{course.level}</Badge>
                      </div>

                      <h3 className="text-xl font-bold mb-3">{course.title}</h3>
                      <p className="text-muted-foreground mb-4">{course.description}</p>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {course.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <BarChart className="h-4 w-4" />
                          {course.level}
                        </span>
                      </div>

                      <Link to={`/course/${course.id}`}>
                        <Button className="w-full bg-gradient-primary hover:opacity-90">
                          View Details
                        </Button>
                      </Link>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Networking */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-secondary/10 p-3 rounded-lg">
                  <Network className="h-8 w-8 text-secondary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold">Networking</h2>
                  <p className="text-muted-foreground">Build expertise in network infrastructure</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {groupedCourses.networking.map((course) => {
                  const Icon = categoryIcons[course.category];
                  return (
                    <Card key={course.id} className="p-6 hover:shadow-lg transition-all">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`p-2 rounded-lg ${categoryColors[course.category]}`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <Badge variant="outline">{course.level}</Badge>
                      </div>

                      <h3 className="text-xl font-bold mb-3">{course.title}</h3>
                      <p className="text-muted-foreground mb-4">{course.description}</p>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {course.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <BarChart className="h-4 w-4" />
                          {course.level}
                        </span>
                      </div>

                      <Link to={`/course/${course.id}`}>
                        <Button className="w-full bg-gradient-primary hover:opacity-90">
                          View Details
                        </Button>
                      </Link>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* CyberSecurity */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-destructive/10 p-3 rounded-lg">
                  <Shield className="h-8 w-8 text-destructive" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold">CyberSecurity</h2>
                  <p className="text-muted-foreground">Protect systems and networks from threats</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {groupedCourses.cybersecurity.map((course) => {
                  const Icon = categoryIcons[course.category];
                  return (
                    <Card key={course.id} className="p-6 hover:shadow-lg transition-all">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`p-2 rounded-lg ${categoryColors[course.category]}`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <Badge variant="outline">{course.level}</Badge>
                      </div>

                      <h3 className="text-xl font-bold mb-3">{course.title}</h3>
                      <p className="text-muted-foreground mb-4">{course.description}</p>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {course.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <BarChart className="h-4 w-4" />
                          {course.level}
                        </span>
                      </div>

                      <Link to={`/course/${course.id}`}>
                        <Button className="w-full bg-gradient-primary hover:opacity-90">
                          View Details
                        </Button>
                      </Link>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-accent py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">Not Sure Which Course is Right for You?</h2>
            <p className="text-muted-foreground mb-8">
              Schedule a free consultation with our experts to find the perfect training path
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Courses;
