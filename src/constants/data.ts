import {imgEnvironment, imgInnovation1, imgInnovation2,imgInnovation3,imgHero,imgServices1,imgServices2,imgServices3,imgServices4,imgServices5,imgServices6, imgTestimonial1,imgTestimonial2,imgTestimonial3,imgProjects1,imgProjects2,imgProjects3} from "./images";
import { svg1,svg2,svg3,svg4 } from "./images";


export const NAVITEMS = [
  { href: "#", text: "INICIO",},
  { href: "#services", text: "SERVICIOS",},
  { href: "#innovations",text: "INNOVACIONES",},
  { href: "#testimonials",  text: "TESTIMONIOS",},
  { href: "#environment", text: "MEDIO AMBIENTE",},
  { href: "#projects", text: "PROYECTOS",},
];

 export const HERO = {
  headline1: "EMPODERAR",
  headline2: "UN MANANA",
  headline3: "SUSTENTABLE",
  headline4: "HOY!",
  subheading1: "Join us in the sgreen energy revolution",
  subheading2: "and be part of a sustainable future",
  subheading3: "for generations to come.",
  buttonText: "Get Powered Today!",
  backgroundImage: imgHero,
};

export const SERVICES = {
  title: "Our Sustainable Energy Solutions",
  subheading: {
    text1_1: "Experience a Revolution in Energy Solutions - ",
    text1_2: "Embrace Innovation, Embrace Sustainability.",
    text2:
      "We're here to Empower Your Life and Spaces with Clean, Renewable Energy, Paving the Way for a Brighter and Greener Tomorrow.",
  },
  services: [
    {
      title: "Solar Power Solutions",
      briefDescription:
        "Harness the power of the sun with our state-of-the-art solar panels. Generate clean energy for your home or business and reduce your carbon footprint.",
      visual: imgServices1,
    },
    {
      title: "Wind Energy Harvesting",
      briefDescription:
        "Embrace the power of the wind. Our wind energy solutions provide a sustainable and efficient way to generate electricity, ensuring a greener future.",
      visual: imgServices2,
    },
    {
      title: "Hydropower Systems",
      briefDescription:
        "Flow with nature. Our hydropower systems harness the energy of flowing water, delivering reliable and eco-friendly electricity to your doorstep.",
      visual: imgServices3,
    },
    {
      title: "Energy Storage Solutions",
      briefDescription:
        "Store excess energy efficiently. Our cutting-edge energy storage solutions ensure uninterrupted power supply, even during cloudy days or low-wind periods.",
      visual: imgServices4,
    },
    {
      title: "Smart Grid Technology",
      briefDescription:
        "Navigate the future with our smart grid technology. Optimize energy distribution, monitor consumption, and contribute to a more sustainable and efficient energy ecosystem.",
      visual: imgServices5,
    },
    {
      title: "Energy-efficient Lighting",
      briefDescription:
        "Illuminate your space responsibly. Our energy-efficient lighting solutions provide bright, sustainable, and cost-effective illumination for homes and businesses.",
      visual: imgServices6,
    },
  ],
  callToAction:
    "Discover the Future of Green Energy. Choose Your Sustainable Solution Today!",
  buttonText: "Explore More",
};

export const INNOVATIONS = {
  title: "Latest Innovations",
  subheading1_1: "Discover Our Cutting-edge",
  subheading1_2: "Green Energy Technologies",
  innovations: [
    {
      title: "1.Smart Grid Integration",
      description:
        "Revolutionize energy distribution with our smart grid technology, optimizing efficiency, minimizing wastage, and adapting to demand fluctuations. Stay connected with innovative solutions for a sustainable, cost-effective energy ecosystem. Embrace the future with our cutting-edge smart grid integration, enhancing reliability and paving the way for efficiency and sustainability.",
       visual: imgInnovation1,
    },
    {
      title: "1.Advanced Solar Panel Design",
      description:
        "Boost solar efficiency with our state-of-the-art solar panel designs. Our innovative technologies capture more sunlight, ensuring maximum energy production for your home or business. Experience enhanced sustainability and increased energy output with our advanced solar solutions.",
       visual: imgInnovation2,
    },
    {
      title: "1.Next-gen Wind Turbines",
      description:
        "Transform your wind energy experience with our next-generation wind turbines. Our sleek design, enhanced efficiency, and minimal environmental impact underscore our commitment to innovation. Elevate your sustainable energy journey with cutting-edge wind solutions that prioritize both performance and environmental responsibility.",
     visual: imgInnovation3,
    },
  ],
  visual: "innovations-section-image.jpg",
  callToAction: "Explore the Future of Green Energy with [Company Name]",
  button: "Learn More",
};

export const ENVIRONMENT = {
  title: "Environmental Impact",
  subheading1_1: "Choosing [Company Name] for a",
  subheading1_2: " Greener Tomorrow",
  description:
    "At [Company Name], we are committed to making a positive impact on the environment. By choosing our sustainable energy solutions, you contribute to:",
  impactPoints: [
    "Reducing Carbon Emissions",
    "Conserving Natural Resources",
    "Preserving Biodiversity",
    "Mitigating Climate Change",
    "Promoting a Cleaner and Healthier Planet",
  ],
  visual: imgEnvironment,
  callToAction: "Join Us in Building a Sustainable Future",
  button: "Learn More",
};

export const TESTIMONIALS = {
  title: "What Our Customers Say",
  subheading1_1: "Hear from Those",
  subheading1_2: " Who Have Embraced Sustainable Living",
  testimonials: [
    {
      name: "Emily Johnson",
      visual: imgTestimonial1,
      occupation: "Homeowner",
      quote:
        "Switching to [Company Name] was the best decision I made. Our home is now powered by clean energy, and I feel great knowing I'm contributing to a healthier planet.",
    },
    {
      name: "Carlos Rodriguez",
      visual: imgTestimonial2,
      occupation: "Business Owner",
      quote:
        "As a business owner, sustainability is crucial. [Company Name] provided us with a seamless transition to green energy, and we've seen a positive impact on both the environment and our operating costs.",
    },
    {
      name: "Sophie Chen",
      visual: imgTestimonial3,
      occupation: "Environmental Advocate",
      quote:
        "I'm passionate about the environment, and [Company Name] aligns perfectly with my values. Their commitment to renewable energy and reducing carbon footprint is commendable.",
    },
  ],
  visual: "customer-testimonials-image.jpg",
  callToAction: "Join Our Growing Community of Satisfied Customers",
  button: "Get Started",
};

export const PROJECTS = {
  title: "Featured Projects",
  subheading1_1: "Explore Our Successful ",
  subheading1_2: "Green Energy Endeavors",
  projects: [
    {
      title: "Solar-Powered Community",
      description:
        "Empowering a community with sustainable solar energy solutions. Learn how [Company Name] brought clean and affordable electricity to homes, schools, and businesses.",
      location: "Los Angeles, California, USA",
      visual: imgProjects1,
    },
    {
      title: "Wind Farm Innovation",
      description:
        "Revolutionizing wind energy with our innovative wind farm. Discover how [Company Name] is harnessing the power of the wind to create a greener and more sustainable future.",
      location: "Scottish Highlands, United Kingdom",
      visual: imgProjects2,
    },
    {
      title: "Hydropower Plant Success",
      description:
        "A journey into our hydropower success story. Explore how [Company Name] transforms the energy of flowing water into a reliable and eco-friendly power source.",
      location: "Amazon Rainforest, South America",
      visual: imgProjects3,
    },
  ],
  callToAction: "Embark on a Green Energy Journey with [Company Name]",
  button: "View More Projects",
};

export const GETINVOLVED = {
  title: "Get Involved",
  subheading1_1: "Join Us ",
  subheading1_2: "in Building a Sustainable Future",
  initiatives: [
    {
      title: "Community Outreach",
      description:
        "Discover our community initiatives aimed at promoting awareness and education on sustainable living. Join us in creating a positive impact together.",
      visual: svg2,
    },
    {
      title: "Green Events",
      description:
        "Participate in our upcoming green events. From tree-planting drives to eco-friendly workshops, be a part of the movement towards a healthier planet.",
      visual: svg4,
    },
    {
      title: "Partnerships for Sustainability",
      description:
        "Explore our partnerships with organizations dedicated to environmental conservation. Learn how you can contribute to sustainable practices through collaboration.",
      visual: svg3,
    },
  ],
  visual: "get-involved-section-image.jpg",
  callToAction: "Take Action Today for a Greener Tomorrow",
  button: "Join Our Initiatives",
};

export const footerCompany = [
  {itemText: "About", itemLink: "#",},
  { itemText: "Blog",  itemLink: "#",},
  { itemText: "Jobs", itemLink: "#",},
  { itemText: "Parteners",itemLink: "#",},
  
];

export const footerNav1 = [
  {itemText: "Marketing", itemLink: "#",},
  {itemText: "Analylitics",itemLink: "#",},
  {itemText: "Commerce", itemLink: "#",},
  {itemText: "Insights", itemLink: "#",},
];

export const footerSupport = [
  { itemText: "Pricing", itemLink: "#",},
  { itemText: "Guides", itemLink: "#",},
  { itemText: "FAQ", itemLink: "#", },
  { itemText: "Contact",itemLink: "#", },
];


export const footerLegal = [
  { itemText: "Claim",itemLink: "#",},
  { itemText: "Privacy",itemLink: "#",},
  { itemText: "Terms", itemLink: "#",},
];
