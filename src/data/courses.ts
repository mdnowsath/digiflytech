export interface Course {
  id: string;
  title: string;
  category: "cloud" | "networking" | "cybersecurity";
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  description: string;
  prerequisites: string[];
  syllabus: string[];
  benefits: string[];
}

export const courses: Course[] = [
  {
    id: "azure-fundamentals",
    title: "Azure Fundamentals (AZ-900)",
    category: "cloud",
    level: "Beginner",
    duration: "4 weeks",
    description: "Learn the fundamentals of Microsoft Azure cloud services. This course covers core Azure services, security, privacy, compliance, and Azure pricing models.",
    prerequisites: ["Basic understanding of IT concepts", "Familiarity with web technologies"],
    syllabus: [
      "Cloud Concepts and Azure Architecture",
      "Core Azure Services (Compute, Storage, Networking)",
      "Azure Security, Privacy, and Compliance",
      "Azure Pricing and Support",
      "Identity, Governance, and Monitoring",
      "Hands-on Labs with Azure Portal",
    ],
    benefits: [
      "Industry-recognized Microsoft certification",
      "Foundation for advanced Azure certifications",
      "Hands-on experience with Azure services",
      "Career opportunities in cloud computing",
    ],
  },
  {
    id: "aws-cloud-practitioner",
    title: "AWS Cloud Practitioner",
    category: "cloud",
    level: "Beginner",
    duration: "4 weeks",
    description: "Master the fundamentals of Amazon Web Services (AWS). Learn about AWS Cloud concepts, security, technology, and billing & pricing.",
    prerequisites: ["Basic IT knowledge", "Understanding of internet concepts"],
    syllabus: [
      "AWS Cloud Concepts and Global Infrastructure",
      "AWS Core Services (EC2, S3, RDS, Lambda)",
      "AWS Security and Compliance",
      "AWS Pricing and Billing",
      "Cloud Deployment and Operating Models",
      "AWS Support Plans and Resources",
    ],
    benefits: [
      "AWS Certified Cloud Practitioner certification",
      "Understanding of AWS cloud fundamentals",
      "Pathway to associate-level AWS certifications",
      "Enhanced career prospects in cloud computing",
    ],
  },
  {
    id: "ccna",
    title: "Cisco CCNA (200-301)",
    category: "networking",
    level: "Intermediate",
    duration: "8 weeks",
    description: "Comprehensive Cisco networking certification covering network fundamentals, IP connectivity, security, automation, and programmability.",
    prerequisites: ["Basic computer networking knowledge", "Understanding of TCP/IP"],
    syllabus: [
      "Network Fundamentals",
      "IP Connectivity and Services",
      "Security Fundamentals",
      "Network Access and VLAN Configuration",
      "Wireless Networking",
      "Automation and Programmability",
      "Hands-on Router and Switch Configuration",
    ],
    benefits: [
      "Industry-standard Cisco CCNA certification",
      "Foundation for CCNP and expert-level certifications",
      "Practical networking skills",
      "High-demand job opportunities",
    ],
  },
  {
    id: "comptia-network-plus",
    title: "CompTIA Network+",
    category: "networking",
    level: "Beginner",
    duration: "6 weeks",
    description: "Vendor-neutral networking certification covering essential network technologies, implementation, operations, and troubleshooting.",
    prerequisites: ["CompTIA A+ or equivalent knowledge recommended", "Basic IT experience"],
    syllabus: [
      "Networking Concepts and Protocols",
      "Network Infrastructure and Topologies",
      "Network Operations and Management",
      "Network Security Fundamentals",
      "Troubleshooting and Tools",
      "Cloud and Virtualization Concepts",
    ],
    benefits: [
      "Vendor-neutral certification recognized worldwide",
      "Foundation for advanced networking certifications",
      "Practical troubleshooting skills",
      "Preparation for network administrator roles",
    ],
  },
  {
    id: "comptia-security-plus",
    title: "CompTIA Security+",
    category: "cybersecurity",
    level: "Intermediate",
    duration: "6 weeks",
    description: "Establish core security skills necessary for implementing security best practices. Learn about threats, vulnerabilities, cryptography, and identity management.",
    prerequisites: ["CompTIA Network+ or equivalent knowledge", "2 years IT experience recommended"],
    syllabus: [
      "Threats, Attacks, and Vulnerabilities",
      "Technologies and Tools for Security",
      "Architecture and Design",
      "Identity and Access Management",
      "Risk Management and Incident Response",
      "Cryptography and PKI",
    ],
    benefits: [
      "Globally recognized security certification",
      "Entry point for cybersecurity career",
      "Meet DoD 8570.01-M requirements",
      "Foundation for advanced security certifications",
    ],
  },
  {
    id: "ceh",
    title: "Certified Ethical Hacker (CEH)",
    category: "cybersecurity",
    level: "Advanced",
    duration: "10 weeks",
    description: "Learn ethical hacking methodologies and tools to identify and address security vulnerabilities. Comprehensive penetration testing training.",
    prerequisites: ["2+ years of information security experience", "Strong networking and OS knowledge"],
    syllabus: [
      "Introduction to Ethical Hacking",
      "Footprinting and Reconnaissance",
      "Scanning Networks and Enumeration",
      "System Hacking and Malware Threats",
      "Web Application and SQL Injection Attacks",
      "Wireless Network Hacking",
      "Cryptography and Cloud Security",
      "Penetration Testing and Report Writing",
    ],
    benefits: [
      "EC-Council CEH certification",
      "Hands-on penetration testing experience",
      "Advanced security career opportunities",
      "Recognition as an ethical hacker",
    ],
  },
];
