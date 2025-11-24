import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Schedule = () => {
  const batches = [
    {
      course: "Azure Fundamentals (AZ-900)",
      startDate: "March 15, 2024",
      schedule: "Weekend Batch",
      time: "9:00 AM - 1:00 PM",
      status: "Open",
    },
    {
      course: "AWS Cloud Practitioner",
      startDate: "March 22, 2024",
      schedule: "Evening Batch",
      time: "6:00 PM - 9:00 PM",
      status: "Open",
    },
    {
      course: "Cisco CCNA (200-301)",
      startDate: "April 5, 2024",
      schedule: "Weekend Batch",
      time: "9:00 AM - 2:00 PM",
      status: "Filling Fast",
    },
    {
      course: "CompTIA Network+",
      startDate: "April 12, 2024",
      schedule: "Evening Batch",
      time: "7:00 PM - 10:00 PM",
      status: "Open",
    },
    {
      course: "CompTIA Security+",
      startDate: "April 20, 2024",
      schedule: "Weekend Batch",
      time: "10:00 AM - 2:00 PM",
      status: "Open",
    },
    {
      course: "Certified Ethical Hacker (CEH)",
      startDate: "May 3, 2024",
      schedule: "Weekend Intensive",
      time: "9:00 AM - 4:00 PM",
      status: "Few Seats Left",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <section className="bg-gradient-hero py-16 px-4">
          <div className="container mx-auto max-w-6xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Upcoming Batches</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find the perfect schedule that fits your availability. All times are in IST.
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid gap-6">
              {batches.map((batch, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl font-bold">{batch.course}</h3>
                        <Badge
                          variant={
                            batch.status === "Open"
                              ? "default"
                              : batch.status === "Filling Fast"
                              ? "secondary"
                              : "destructive"
                          }
                        >
                          {batch.status}
                        </Badge>
                      </div>

                      <div className="flex flex-wrap gap-4 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm">Starts: {batch.startDate}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span className="text-sm">{batch.schedule}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span className="text-sm">{batch.time}</span>
                        </div>
                      </div>
                    </div>

                    <Link to="/contact">
                      <Button className="bg-gradient-primary hover:opacity-90 whitespace-nowrap">
                        Enroll Now
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="mt-12 p-8 bg-accent">
              <h2 className="text-2xl font-bold mb-4">Custom Batch Requests</h2>
              <p className="text-muted-foreground mb-6">
                Need a different schedule or looking for corporate training? We can arrange custom batches to meet your specific requirements.
              </p>
              <Link to="/contact">
                <Button className="bg-gradient-primary hover:opacity-90">
                  Request Custom Batch
                </Button>
              </Link>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Schedule;
