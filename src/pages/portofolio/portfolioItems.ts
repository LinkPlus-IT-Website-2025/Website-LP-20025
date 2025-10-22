// src/pages/portofolio/portfolioItems.ts
import smartbluetooth from "../../assets/images/smart-bluetooth-control-device-app-portrait.png";
import smartbluetoothL from "../../assets/images/smart-bluetooth-control-device-app-landscape.png";
import smartbluetooth1 from "../../assets/images/smart-bluetooth-control-device-app-pic1.png";
import smartbluetooth2 from "../../assets/images/smart-bluetooth-control-device-app-pic2.png";

import SDKP from "../../assets/images/sdk-for-automotive-portrait.png";
import SDKL from "../../assets/images/sdk-for-automotive-landscape.png";
import SDK1 from "../../assets/images/sdk-for-automotive-pic2.png";
import SDK2 from "../../assets/images/sdk-for-automotive-pic1.png";

import LMSSP from "../../assets/images/learning-management-system-solution-portrait.png";
import LMSSL from "../../assets/images/learning-management-system-solution-landscape.png";
import ISP from "../../assets/images/insurance-solution-portrait.png";
import ISL from "../../assets/images/insurance-solution-landscape.png";
import EMPP from "../../assets/images/event-management-solution-portrait.png";
import EMPL from "../../assets/images/event-management-solution-landscape.png";
import CPSP from "../../assets/images/copyright-solution-portrait.png";
import CPSL from "../../assets/images/copyright-solution-landscape.png";
import CPS1 from "../../assets/images/copyright-solution-pic1.png";
import CPS2 from "../../assets/images/copyright-solution-pic2.png";



import imgFlotilla from "../../assets/images/flotilla.png";
import imgFlotillaP from "../../assets/images/flotillaP.png";
import imgLinkOne from "../../assets/images/link-one.png";
import imgLinkOneP from "../../assets/images/LinkOne-Portrait.png";
import imgLinkOne1 from "../../assets/images/LinkOne-pic1.png";
import imgLinkOne2 from "../../assets/images/LinkOne-pic2.png";
import imgSwissProtect from "../../assets/images/swiss-protect.png";
import imgSwissProtectP from "../../assets/images/swiss-protectP.png";
import imgSwissProtect1 from "../../assets/images/swiss-protect-pic1.png";
import imgSwissProtect2 from "../../assets/images/swiss-protect-pic2.png";
import imgLHIndustry from "../../assets/images/lufthansa-industry-solutions.png";
import imgLHIndustryP from "../../assets/images/lufthansa-industry-solutionsP.png";
import imgLHIndustry1 from "../../assets/images/lufthansa-industry-solutions-pic1.png";
import imgLHIndustry2 from "../../assets/images/lufthansa-industry-solutions-pic2.png";




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

const GALLERY_AUTOMOTIVE = [SDK1, SDK2];

// ✅ smart bluetooth app
const GALLERY_SMART_BT = [smartbluetooth1, smartbluetooth2];

// ✅ copyright management
const GALLERY_COPYRIGHT = [CPS1, CPS2];
const GALLERY_LH = [imgLHIndustry1, imgLHIndustry2];

const SWISS_PROTECT = [imgSwissProtect1, imgSwissProtect2];
const LINK_ONE = [imgLinkOne1, imgLinkOne2];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: "tailoring-software-solutions",
    title: "Lufthansa Industry Solutions, Germany",
    excerpt: "Integration and implementation of Camunda...",
    cardImg: imgLHIndustryP,
    heroImg: imgLHIndustry,
    detailMainImg: imgLHIndustry,
    gallery: GALLERY_LH, // 👈 now uses your pic1/pic2
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
"Integration and implementation of Camunda as an open platform for regulating various work processes and automating decision-making through data. The whole project has been divided into 7 modules / processes, thus creating more accurate business processes for Lufthansa."  },

  {
    id: "copyright-management",
    title: "Copy Right Management Solutions, Germany",
    excerpt: "Developing and maintaining software solutions including...",
    cardImg: CPSP,
    heroImg: CPSL,
    detailMainImg: CPSL,
    gallery: GALLERY_COPYRIGHT, // 👈 pic1/pic2
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
"Developing and maintaining software solutions including licensing platforms, royalty distribution systems, data processing tools, and digital tracking solutions to ensure that artists and rights holders receive fair compensation for their work. Additionally there is focus on automation, AI-driven analytics, and secure databases to handle vast amounts of copyright and royalty-related data efficiently."  },

  {
    id: "automotive-sdk",
    title: "Automotive SDK Development, Germany",
    excerpt: "The project focused on building a cross-platform SDK...",
    cardImg: SDKP,
    heroImg: SDKL,
    detailMainImg: SDKL,
    gallery: GALLERY_AUTOMOTIVE, // 👈 pic1/pic2
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
"The project focused on building a cross-platform SDK for the automotive industry, designed to integrate seamlessly with BLE-enabled devices, navigation systems, and cloud services. The team developed both iOS (Swift, Objective-C, SwiftUI) and Android (Kotlin, Java, Jetpack Compose) solutions, applying clean architecture, modularization, and reactive programming principles.Key features included Bluetooth communication for custom automotive devices, real-time data synchronization, map/navigation integration (Google Maps, TomTom), and cloud sync for multi-device consistency. The project emphasized scalability and reliability, incorporating feature flags for prototype hardware, test-driven development, and continuous integration/delivery.By using modern frameworks and tools (Alamofire, Retrofit, Room, CoreData, Firebase, WorkManager, Koin), the team delivered a robust, flexible SDK that enables automotive applications to manage device connectivity, navigation, and data exchange efficiently."  },

  {
    id: "bluetooth-control-app",
    title: "Smart Bluetooth Device Control App, Holland",
    excerpt: "Maintaining & Development of an online application...",
    cardImg: smartbluetooth,
    heroImg: smartbluetoothL,
    detailMainImg: smartbluetoothL,
    gallery: GALLERY_SMART_BT, // 👈 pic1/pic2
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
      "Maintaining & Development of an online application designed to connect with a single amplifier device via Bluetooth. The app initially scans for available amplifiers, allowing users to establish a connection. Once paired, it enables real-time data reading from the amplifier and allows users to send commands for control. The application ensures smooth communication and efficient device management, enhancing user experience and functionality.",
  },

  {
    id: "swiss-protect",
    title: "Swiss Protect, Switzerland",
    excerpt: "Access Control Solution - Implementation of a web platform...",
    cardImg: imgSwissProtectP,
    heroImg: imgSwissProtect,
    detailMainImg: imgSwissProtect,
    gallery: SWISS_PROTECT,
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
"Access Control Solution - Implementation of a web platform, which allows different employees to register and file all their entrances and exits to the workplace. The developed software generates many reports and graphs depending on the client's need, thus making the calculation of hours for each employee."  },

  {
    id: "linkone",
    title: "LinkOne",
    excerpt: "Location Tracking/Geofencing App - The application relies...",
    cardImg: imgLinkOneP,
    heroImg: imgLinkOne,
    detailMainImg: imgLinkOne,
    gallery: LINK_ONE,
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
"Location Tracking/Geofencing App - The application relies heavily on the device location services and geofencing. We improved the application by optimizing the performance and the device battery life.Added option for the user to change preferences and do a preview of the recent activity. To full the client's needs for better user related data we added Integration with Intercom and Firebase integration. "  },

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
"Flotilla Taxi & Limousinen offers you a wide range of services related to business and private passenger transport. With the new Flotilla app integrated into a Content Management System, trips can be reserved with one click and pay conveniently via the app. A list of the booked trips and individual invoicing are part of the functions and available through the Web Portal, where all additional functionalities for Report generation, publishing new content,pricing, etc are managed. The implemented solution will be serving thousands of user requests per day."  },

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
"Jolioo - Platforms have been created for some cities of Austria, and this is related to the management of various events that take place in those cities. Also, through the application, citizens can be informed about various announcements that may be available in a certain city."  },

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
"EnBag - Applications are developed on the web and mobile to facilitate the work of insurance management between agents, clients and the admin part."  },

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
"Developing a fully integrated Learning Management System (LMS) that supports online learning, communication, automation, and business growth. The platform enables course delivery, user engagement, and streamlined management for both educators and administrators. It includes tools for interaction, content distribution, and operational efficiency, ensuring a seamless experience across all devices. Designed for scalability, the system adapts to various learning and business needs, providing a flexible and efficient solution."  },
];
