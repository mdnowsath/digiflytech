import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, BarChart, CheckCircle2, AlertCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { courses } from "@/data/courses";

const CourseDetail = () => {
  const { courseId } = useParams();
  const course = courses.find((c) => c.id === courseId);

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Course Not Found</h1>
            <Link to="/courses">
              <Button>View All Courses</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <section className="bg-gradient-hero py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <Badge variant="outline" className="mb-4">
              {course.category.toUpperCase()}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.title}</h1>
            <p className="text-lg text-muted-foreground mb-6">{course.description}</p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-background px-4 py-2 rounded-lg">
                <Clock className="h-5 w-5 text-primary" />
                <span className="font-medium">{course.duration}</span>
              </div>
              <div className="flex items-center gap-2 bg-background px-4 py-2 rounded-lg">
                <BarChart className="h-5 w-5 text-primary" />
                <span className="font-medium">{course.level}</span>
              </div>
            </div>

            <Link to="/contact">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                Request Course Details
              </Button>
            </Link>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Prerequisites */}
              <Card className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <AlertCircle className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold">Prerequisites</h2>
                </div>
                <ul className="space-y-3">
                  {course.prerequisites.map((prereq, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{prereq}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Benefits */}
              <Card className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="h-6 w-6 text-secondary" />
                  <h2 className="text-2xl font-bold">What You'll Gain</h2>
                </div>
                <ul className="space-y-3">
                  {course.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            {/* Course Syllabus */}
            <Card className="p-8">
              <h2 className="text-3xl font-bold mb-6">Course Syllabus</h2>
              <div className="space-y-4">
                {course.syllabus.map((topic, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-accent rounded-lg">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{topic}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        <section className="bg-gradient-primary py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center text-primary-foreground">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Take the first step towards earning your {course.title} certification
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary">
                Contact Us Today
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CourseDetail;
