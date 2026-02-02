const users = [
  {
    name: "Aarav Sharma",
    occupation: "Software Engineer",
    about: "Builds scalable backend systems and enjoys solving performance bottlenecks."
  },
  {
    name: "Riya Verma",
    occupation: "Product Manager",
    about: "Focuses on aligning business goals with user needs and product vision."
  },
  {
    name: "Kunal Mehta",
    occupation: "Data Analyst",
    about: "Turns raw data into meaningful insights using analytics and visualization."
  },
  {
    name: "Neha Singh",
    occupation: "UI/UX Designer",
    about: "Designs intuitive user experiences with a strong eye for detail."
  },
  {
    name: "Rohit Gupta",
    occupation: "DevOps Engineer",
    about: "Automates deployments and maintains reliable CI/CD pipelines."
  },
  {
    name: "Ananya Patel",
    occupation: "Marketing Specialist",
    about: "Creates data-driven campaigns to grow brand presence and engagement."
  },
  {
    name: "Vikram Rao",
    occupation: "Backend Developer",
    about: "Specializes in APIs, databases, and server-side architecture."
  },
  {
    name: "Pooja Nair",
    occupation: "HR Executive",
    about: "Manages hiring, employee relations, and workplace culture."
  },
  {
    name: "Aditya Malhotra",
    occupation: "Frontend Developer",
    about: "Builds responsive and accessible user interfaces for the web."
  },
  {
    name: "Sneha Iyer",
    occupation: "Content Writer",
    about: "Writes clear and engaging content tailored to different audiences."
  },
  {
    name: "Arjun Kapoor",
    occupation: "Mobile App Developer",
    about: "Develops high-performance mobile applications for Android and iOS."
  },
  {
    name: "Kavya Joshi",
    occupation: "Business Analyst",
    about: "Bridges the gap between business requirements and technical solutions."
  },
  {
    name: "Rahul Choudhary",
    occupation: "Cloud Engineer",
    about: "Designs and maintains cloud infrastructure on AWS and GCP."
  },
  {
    name: "Meera Kulkarni",
    occupation: "Quality Assurance Engineer",
    about: "Ensures software quality through manual and automated testing."
  },
  {
    name: "Siddharth Jain",
    occupation: "Cybersecurity Analyst",
    about: "Protects systems and data from security threats and vulnerabilities."
  },
  {
    name: "Nidhi Bansal",
    occupation: "Digital Marketer",
    about: "Optimizes online campaigns using SEO, ads, and analytics."
  },
  {
    name: "Amit Yadav",
    occupation: "System Administrator",
    about: "Maintains servers, networks, and internal IT systems."
  },
  {
    name: "Ishita Goyal",
    occupation: "Technical Recruiter",
    about: "Sources and hires engineers for technical roles."
  },
  {
    name: "Manish Thakur",
    occupation: "Database Administrator",
    about: "Manages database performance, backups, and security."
  },
  {
    name: "Priya Saxena",
    occupation: "Operations Manager",
    about: "Oversees daily operations to ensure smooth business execution."
  },
  {
    name: "Rakesh Mishra",
    occupation: "IT Support Engineer",
    about: "Resolves technical issues and supports end users."
  },
  {
    name: "Simran Kaur",
    occupation: "SEO Specialist",
    about: "Improves website rankings through search optimization strategies."
  },
  {
    name: "Deepak Pandey",
    occupation: "Machine Learning Engineer",
    about: "Builds and deploys machine learning models at scale."
  },
  {
    name: "Ayesha Khan",
    occupation: "Data Scientist",
    about: "Uses statistical models and ML to solve business problems."
  },
  {
    name: "Nitin Agarwal",
    occupation: "Solutions Architect",
    about: "Designs end-to-end technical solutions for complex systems."
  },
  {
    name: "Shreya Mukherjee",
    occupation: "Technical Writer",
    about: "Creates documentation and guides for developers and users."
  },
  {
    name: "Saurabh Verma",
    occupation: "Full Stack Developer",
    about: "Works across frontend and backend to ship complete features."
  },
  {
    name: "Tanvi Deshpande",
    occupation: "Scrum Master",
    about: "Facilitates agile processes and removes team blockers."
  },
  {
    name: "Mohit Arora",
    occupation: "Blockchain Developer",
    about: "Builds decentralized applications and smart contracts."
  },
  {
    name: "Rupal Shah",
    occupation: "Finance Analyst",
    about: "Analyzes financial data to support strategic decisions."
  },
  {
    name: "Gaurav Sinha",
    occupation: "Network Engineer",
    about: "Designs and maintains secure network infrastructure."
  },
  {
    name: "Pallavi Kulkarni",
    occupation: "Project Coordinator",
    about: "Coordinates teams, timelines, and deliverables."
  },
  {
    name: "Harsh Vardhan",
    occupation: "Game Developer",
    about: "Develops engaging games with focus on performance and gameplay."
  },
  {
    name: "Komal Arvind",
    occupation: "Social Media Manager",
    about: "Manages social presence and builds online communities."
  },
  {
    name: "Abhishek Roy",
    occupation: "Embedded Systems Engineer",
    about: "Works on low-level programming for hardware systems."
  },
  {
    name: "Swati Chatterjee",
    occupation: "Research Analyst",
    about: "Conducts market and industry research to guide decisions."
  },
  {
    name: "Vivek Srivastava",
    occupation: "Technical Consultant",
    about: "Advises clients on technology adoption and architecture."
  },
  {
    name: "Apoorva Naik",
    occupation: "Product Designer",
    about: "Designs product workflows with strong user empathy."
  },
  {
    name: "Yash Bajaj",
    occupation: "Sales Engineer",
    about: "Supports sales teams with technical product knowledge."
  },
  {
    name: "Monika Rana",
    occupation: "Customer Success Manager",
    about: "Ensures customers achieve value from the product."
  },
  {
    name: "Pranav Kulshreshtha",
    occupation: "AI Engineer",
    about: "Builds AI-driven systems using modern deep learning techniques."
  },
  {
    name: "Ritu Malviya",
    occupation: "Learning & Development Specialist",
    about: "Designs training programs for employee growth."
  },
  {
    name: "Naveen Pillai",
    occupation: "Site Reliability Engineer",
    about: "Ensures system reliability, uptime, and scalability."
  },
  {
    name: "Bhavya Mittal",
    occupation: "Growth Hacker",
    about: "Experiments with rapid strategies to drive user growth."
  },
  {
    name: "Sanjay Rawat",
    occupation: "IT Auditor",
    about: "Audits IT systems for compliance and risk management."
  },
  {
    name: "Lavanya Shetty",
    occupation: "UX Researcher",
    about: "Conducts user research to inform design decisions."
  },
  {
    name: "Ashwin Reddy",
    occupation: "Robotics Engineer",
    about: "Builds and programs robotic systems and automation."
  },
  {
    name: "Preeti Arora",
    occupation: "Operations Analyst",
    about: "Analyzes operational data to improve efficiency."
  },
  {
    name: "Karthik Subramanian",
    occupation: "Platform Engineer",
    about: "Builds internal platforms to improve developer productivity."
  }
];


function getUsers(offset = 0, limit = 10) {

  return new Promise((res) => {
      if (offset > users.length) {
        res([]);
        return;
      }
    
      setTimeout(() => {
        const list = users.slice(offset, (offset + limit));
        res(list);
      }, 2000)
  })

}

export default getUsers;