import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FAQs = () => {
  const faqs = [
    {
      question: "What is the training format?",
      answer: "We offer both instructor-led classroom training and online live sessions. All courses include hands-on labs, practical exercises, and real-world scenarios to ensure comprehensive learning.",
    },
    {
      question: "Do I get a certificate after completing the course?",
      answer: "Yes, upon successful completion of the course, you will receive a course completion certificate from DigiFly Tech. Additionally, we prepare you for the official certification exams from vendors like Microsoft, AWS, Cisco, CompTIA, and EC-Council.",
    },
    {
      question: "What if I miss a class?",
      answer: "We record all sessions and provide access to recordings. You can also join another batch for the missed session or schedule a one-on-one session with the instructor to catch up.",
    },
    {
      question: "Are there any prerequisites for the courses?",
      answer: "Prerequisites vary by course. Beginner-level certifications like Azure Fundamentals and AWS Cloud Practitioner have minimal prerequisites, while advanced courses like CEH require prior IT experience. Check individual course pages for specific requirements.",
    },
    {
      question: "What is the batch size?",
      answer: "We maintain small batch sizes (typically 10-15 students) to ensure personalized attention and maximum interaction with instructors.",
    },
    {
      question: "Do you provide study materials?",
      answer: "Yes, we provide comprehensive study materials including official guides, practice exams, lab environments, and additional resources to support your learning journey.",
    },
    {
      question: "What is your certification pass rate?",
      answer: "Our students maintain a 95% pass rate on their first attempt. We provide thorough preparation including mock exams and exam strategies to maximize your success.",
    },
    {
      question: "Can I get a refund if I need to withdraw?",
      answer: "Yes, we have a transparent refund policy. Contact us at info@digifly.tech for details on our refund terms and conditions.",
    },
    {
      question: "Do you offer corporate training?",
      answer: "Yes, we provide customized corporate training programs for teams. Contact us to discuss your organization's specific requirements and we'll create a tailored training plan.",
    },
    {
      question: "How do I enroll in a course?",
      answer: "You can enroll by contacting us through our contact form, emailing info@digifly.tech, or reaching out via WhatsApp. We'll guide you through the enrollment process and answer any questions you have.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <section className="bg-gradient-hero py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about our courses and training programs
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-12 text-center bg-accent p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
              <p className="text-muted-foreground mb-6">
                We're here to help! Get in touch with us and we'll answer any questions you have.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQs;
