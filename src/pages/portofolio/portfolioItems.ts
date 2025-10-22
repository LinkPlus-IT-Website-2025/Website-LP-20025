// src/pages/portofolio/portfolioItems.ts
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

import imgFlotilla from "../../assets/images/flotilla.png";
import imgFlotillaP from "../../assets/images/flotillaP.png";
import imgLinkOne from "../../assets/images/link-one.png";
import imgLinkOneP from "../../assets/images/LinkOne-Portrait.png";
import imgSwissProtect from "../../assets/images/swiss-protect.png";
import imgSwissProtectP from "../../assets/images/swiss-protectP.png";
import imgLHIndustry from "../../assets/images/lufthansa-industry-solutions.png";
import imgLHIndustryP from "../../assets/images/lufthansa-industry-solutionsP.png";

export type PortfolioItem = {
  id: string;
  title: string;
  excerpt: string;
  cardImg: string;
  heroImg: string;
  detailMainImg?: string;
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
  detailBody?: string;
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
    cardImg: imgLHIndustryP,
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
      "Integration and implementation of Camunda as an open platform for regulating various work processes and automating decision-making through data.",
    detailBody:
      "Integration and implementation of Camunda as an open platform for regulating various work processes and automating decision-making through data. The project was divided into seven modules/processes to standardize and streamline core workflows, improving accuracy, transparency, and SLA adherence across teams. The solution integrates cleanly with Java systems and reduces manual effort through modeled BPMN/DMN flows and data-driven automation.",
  },

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
      "Developing and maintaining software solutions including licensing platforms, royalty distribution systems, data processing tools, and digital tracking solutions.",
    detailBody:
      "Developing and maintaining software solutions including licensing platforms, royalty distribution systems, data processing tools, and digital tracking solutions to ensure artists and rights holders receive fair compensation. The platform emphasizes automation, AI-driven analytics, and secure, scalable data stores to handle large volumes of copyright and royalty information efficiently while preserving accuracy and auditability.",
  },

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
    detailBody:
      "The project focused on building a cross-platform SDK for the automotive industry, integrating with BLE-enabled devices, navigation systems, and cloud services. The team delivered iOS (Swift, Objective-C, SwiftUI) and Android (Kotlin, Java, Jetpack Compose) implementations using clean architecture, modularization, and reactive patterns. Key capabilities include Bluetooth communication for custom automotive devices, real-time data sync, Google Maps/TomTom integration, and multi-device cloud consistency. With feature flags, TDD, and CI/CD, the SDK is robust, scalable, and ready for rapid iteration.",
  },

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
    detailBody:
      "Maintaining and developing a React Native application that connects to a single amplifier device via Bluetooth. The app discovers nearby devices, pairs securely, streams real-time data, and sends control commands for configuration and operation. Focus areas include stable communication, responsive UI, and efficient device management to deliver a smooth user experience and reliable performance.",
  },

  {
    id: "swiss-protect",
    title: "Swiss Protect, Switzerland",
    excerpt: "Access Control Solution - Implementation of a web platform...",
    cardImg: imgSwissProtectP,
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
    detailBody:
      "Implementation of a web platform that enables employees to register all workplace entries and exits. The system generates reports and graphs tailored to client needs and automates hour calculations per employee. Built with a .NET backend and a React frontend, the solution streamlines attendance tracking, improves data quality, and simplifies administrative oversight.",
  },

  {
    id: "linkone",
    title: "LinkOne",
    excerpt: "Location Tracking/Geofencing App - The application relies...",
    cardImg: imgLinkOneP,
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
    detailBody:
      "A location tracking and geofencing application with heavy use of device location services. We optimized runtime performance and battery usage, added user preference controls with activity previews, and integrated Intercom and Firebase to provide real-time data flows and richer user insights. The system scales reliably across devices and usage patterns.",
  },

  {
    id: "flotilla-airport-transfer",
    title: "Flotilla Airport Transfer Application",
    excerpt: "Flotilla Taxi & Limousinen offers you a wide range of...",
    cardImg: imgFlotillaP,
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
    detailBody:
      "Flotilla Taxi & Limousinen provides business and private passenger transport. With the new app integrated into a CMS, users can reserve trips with one click and pay directly in-app. A web portal exposes trip history, invoicing, reporting, content publishing, pricing management, and other operational tools. The implemented solution is built to serve thousands of user requests per day while remaining maintainable and scalable.",
  },

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
    detailBody:
      "City platforms for managing events and informing citizens across multiple Austrian municipalities. Administrators publish events and announcements; residents receive timely updates through the mobile and web apps. The system centralizes content, improves communication efficiency, and scales to support growing audiences and editorial workflows.",
  },

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
    detailBody:
      "Web and mobile applications to facilitate insurance management between agents, clients, and administrators. The platform streamlines workflows, synchronizes data in real time, and improves day-to-day operations. With accessible UX across devices, stakeholders can manage policies, claims, documents, and communications more efficiently.",
  },

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
    detailBody:
      "A fully integrated Learning Management System that supports online learning, communication, automation, and growth. The platform enables course delivery, user engagement, and streamlined administration with tools for interaction, content distribution, assessment, and reporting. Designed for scalability and device breadth, it adapts to diverse learning and business needs.",
  },
];
