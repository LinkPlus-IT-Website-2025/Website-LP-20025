// src/pages/portofolio/portfolioItems.ts  (or portfolioData.ts if that's your path)

// —— Projects that have separate Portrait/Landscape pairs —— //
import smartbluetooth from "../../assets/images/smart-bluetooth-control-device-app-portrait.png";
import smartbluetoothL from "../../assets/images/smart-bluetooth-control-device-app-landscape.png";
import SDKP from "../../assets/images/sdk-for-automotive-portrait.png";
import SDKL from "../../assets/images/sdk-for-automotive-landscape.png";
import LMSSP from "../../assets/images/learning-management-system-solution-portrait.png";
import LMSSL from "../../assets/images/learning-management-system-solution-landscape.png";
import ISP from "../../assets/images/insurance-solution-portrait.png";
import ISL from "../../assets/images/insurance-solution-landscape.png";
import EMPP from "../../assets/images/event-management-solution-portrait.png";
import EMPL from "../../assets/images/event-management-solution-landscape.png";
import CPSP from "../../assets/images/copyright-solution-portrait.png";
import CPSL from "../../assets/images/copyright-solution-landscape.png";


// —— Projects that use a single image for both card & detail —— //
import imgFlotilla from "../../assets/images/flotilla.png";
import imgLinkOne from "../../assets/images/link-one.png";
import imgSwissProtect from "../../assets/images/swiss-protect.png";
import imgLHIndustry from "../../assets/images/lufthansa-industry-solutions.png";

export type PortfolioItem = {
  id: string;
  title: string;
  excerpt: string;
  cardImg: string;        // grid thumbnail
  heroImg: string;        // details header (top band)
  detailMainImg?: string; // big image under header (fallback to heroImg)
  gallery: string[];
  info: {
    completionDate: string;
    completionDatee: string;
    completionDateee: string;
    completionDateeee: string;
    completionDateeeee: string;
    location: string;
    techstack: string;
  };
  body: string;
};

const pics = {
  one: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1400&auto=format&fit=crop",
  two: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1400&auto=format&fit=crop",
  three: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1400&auto=format&fit=crop",
  four: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1400&auto=format&fit=crop",
  five: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1400&auto=format&fit=crop",
  six: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=1400&auto=format&fit=crop",
};

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: "tailoring-software-solutions",
    title: "Lufthansa Industry Solutions, Germany",
    excerpt: "Integration and implementation of Camunda...",
    cardImg: imgLHIndustry,
    heroImg: imgLHIndustry,
    detailMainImg: imgLHIndustry,
    gallery: [pics.two, pics.three, pics.four],
    info: {
      completionDate: "• Streamlined 7 business processes for Lufthansa",
      completionDatee: "• Automated decision-making with data-driven workflows",
      completionDateee: "• Improved process accuracy and transparency",
      completionDateeee: "• Improved process accuracy and transparency",
      completionDateeeee: "• Improved process accuracy and transparency",
      location: "Germany",
      techstack: "Java • 7 Engineers",
    },
    body:
      "Integration and implementation of Camunda as an open platform for regulating various work processes and automating decision-making through data.\n\nThe whole project has been divided into 7 modules / processes, thus creating more accurate business processes for Lufthansa.",
  },

  // Copyright: Portrait on card, Landscape in details
  {
    id: "copyright-management",
    title: "Copy Right Management Solutions, Germany",
    excerpt: "Developing and maintaining software solutions including...",
    cardImg: CPSP,
    heroImg: CPSL,
    detailMainImg: CPSL,
    gallery: [pics.one, pics.five, pics.six],
    info: {
      completionDate: "• Royalty distribution systems",
      completionDatee: "• Data processing tools",
      completionDateee: "• Digital tracking solutions",
      completionDateeee: "• Automation & AI analytics",
      completionDateeeee: "• Secure, scalable databases",
      location: "Germany",
      techstack:
        "Java, Quarkus, AngularJS, ReactJS, Python, Google Cloud Platform, Terraform, DataBricks",
    },
    body:
      "Developing and maintaining software solutions including licensing platforms, royalty distribution systems, data processing tools, and digital tracking solutions to ensure that artists and rights holders receive fair compensation for their work...",
  },

  // Automotive SDK: Portrait on card, Landscape in details
  {
    id: "automotive-sdk",
    title: "Automotive SDK Development, Germany",
    excerpt: "The project focused on building a cross-platform SDK...",
    cardImg: SDKP,
    heroImg: SDKL,
    detailMainImg: SDKL,
    gallery: [pics.four, pics.five, pics.six],
    info: {
      completionDate: "• Standardized SDK for automotive connectivity",
      completionDatee: "• Reliable cross-platform performance (iOS & Android)",
      completionDateee: "• Robust real-time communication and data sync",
      completionDateeee: "• Scalable architecture ensuring future expansion",
      completionDateeeee: "• Faster release cycles with CI/CD and TDD",
      location: "Germany",
      techstack: "",
    },
    body:
      "The project focused on building a cross-platform SDK for the automotive industry...",
  },

  // Smart Bluetooth App: Portrait on card, Landscape in details
  {
    id: "bluetooth-control-app",
    title: "Smart Bluetooth Device Control App, Holland",
    excerpt: "Maintaining & Development of an online application...",
    cardImg: smartbluetooth,
    heroImg: smartbluetoothL,
    detailMainImg: smartbluetoothL,
    gallery: [pics.one, pics.two, pics.three],
    info: {
      completionDate: "• Bluetooth connectivity & pairing",
      completionDatee: "• Real-time data streaming",
      completionDateee: "• Device command handling",
      completionDateeee: "• Optimized React Native performance",
      completionDateeeee: "• Enhanced user experience",
      location: "Holland",
      techstack: "React Native",
    },
    body:
      "Maintaining & Development of an online application designed to connect with a single amplifier device via Bluetooth...",
  },

  // Swiss Protect (single image)
  {
    id: "swiss-protect",
    title: "Swiss Protect, Switzerland",
    excerpt: "Access Control Solution - Implementation of a web platform...",
    cardImg: imgSwissProtect,
    heroImg: imgSwissProtect,
    detailMainImg: imgSwissProtect,
    gallery: [pics.six, pics.two, pics.three],
    info: {
      completionDate: "• Employee attendance tracking",
      completionDatee: "• Automated report & graph generation",
      completionDateee: "• Work hours calculation",
      completionDateeee: "• Web platform development",
      completionDateeeee: "• Optimized data management",
      location: "Switzerland",
      techstack: ".NET in the backend and React in the frontend • 4 Engineers",
    },
    body:
      "Access Control Solution - Implementation of a web platform...",
  },

  // LinkOne (single image)
  {
    id: "linkone",
    title: "LinkOne",
    excerpt: "Location Tracking/Geofencing App - The application relies...",
    cardImg: imgLinkOne,
    heroImg: imgLinkOne,
    detailMainImg: imgLinkOne,
    gallery: [pics.one, pics.five, pics.four],
    info: {
      completionDate: "• Accurate location tracking & geofencing",
      completionDatee: "• Optimized performance & battery usage",
      completionDateee: "• User activity insights & customization",
      completionDateeee: "• Real-time data via Intercom & Firebase",
      completionDateeeee: "• Scalable, reliable mobile infrastructure",
      location: "",
      techstack: "Django, Android/Kotlin, iOS/Swift (Mobile)",
    },
    body:
      "Location Tracking/Geofencing App...",
  },

  // Flotilla (single image)
  {
    id: "flotilla-airport-transfer",
    title: "Flotilla Airport Transfer Application",
    excerpt: "Flotilla Taxi & Limousinen offers you a wide range of...",
    cardImg: imgFlotilla,
    heroImg: imgFlotilla,
    detailMainImg: imgFlotilla,
    gallery: [pics.one, pics.five, pics.four],
    info: {
      completionDate: "• One-click trip booking & in-app payments",
      completionDatee: "• Web portal for trip management and invoicing",
      completionDateee: "• Automated report generation and content management",
      completionDateeee: "• Scalable solution handling thousands of daily requests",
      completionDateeeee: "• Integrated CMS for pricing and operational control",
      location: "",
      techstack: "Java, Angular, iOS (Swift), Android (Java) • 5 Engineers",
    },
    body:
      "Flotilla Taxi & Limousinen offers you a wide range of services...",
  },

  // Event Management: Portrait on card, Landscape in details
  {
    id: "event-management-austria",
    title: "Event management Web and Mobile applications, Austria",
    excerpt: "Jolioo - Platforms have been created for some cities...",
    cardImg: EMPP,
    heroImg: EMPL,
    detailMainImg: EMPL,
    gallery: [pics.one, pics.five, pics.four],
    info: {
      completionDate: "• Centralized event management",
      completionDatee: "• Real-time citizen notifications",
      completionDateee: "• Streamlined content updates",
      completionDateeee: "• Improved platform scalability",
      completionDateeeee: "• Enhanced city communication efficiency",
      location: "Austria",
      techstack:
        ".NET backend, React Native for mobile and ReactJS for FrontEnd • 4 Engineers",
    },
    body:
      "Jolioo - Platforms have been created for some cities of Austria...",
  },

  // Insurance: Portrait on card, Landscape in details
  {
    id: "insurance-management-switzerland",
    title: "Insurance management Web and mobile applications, Switzerland",
    excerpt: "EnBag - Applications are developed on the web and mobile...",
    cardImg: ISP,
    heroImg: ISL,
    detailMainImg: ISL,
    gallery: [pics.one, pics.five, pics.four],
    info: {
      completionDate: "• Streamlined insurance management workflow",
      completionDatee: "• Web and mobile access for agents, clients, and admins",
      completionDateee: "• Real-time data synchronization",
      completionDateeee: "• Improved operational efficiency",
      completionDateeeee: "• Enhanced user experience and accessibility",
      location: "Switzerland",
      techstack:
        "ReactJS on Frontend, PHP on backend, iOS and Android • 6 Engineers",
    },
    body:
      "EnBag - Applications are developed on the web and mobile...",
  },

  // LMS: Portrait on card, Landscape in details
  {
    id: "lms-norway",
    title: "Learning Management System, Norway",
    excerpt: "Developing a fully integrated Learning Management System...",
    cardImg: LMSSP,
    heroImg: LMSSL,
    detailMainImg: LMSSL,
    gallery: [pics.one, pics.five, pics.four],
    info: {
      completionDate: "• Fully integrated LMS for online learning and management",
      completionDatee: "• Streamlined course delivery and user engagement",
      completionDateee: "• Automation and operational efficiency tools",
      completionDateeee: "• Multi-device accessibility and scalability",
      completionDateeeee: "• Enhanced communication and content distribution",
      location: "Norway",
      techstack: "PHP Laravel, Vue.js",
    },
    body:
      "Developing a fully integrated Learning Management System (LMS)...",
  },
];
