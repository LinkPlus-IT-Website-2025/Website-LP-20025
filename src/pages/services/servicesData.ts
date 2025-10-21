// src/pages/services/servicesData.ts

export type ServiceDetail = {
  slug: string;
  heroTitle: string;        // use \n for line breaks
  heroImage?: string;       // fallback hero image for direct URL visits
  introCards?: Array<{ title: string; body: string }>;
  process?: Array<{ title: string; sub?: string }>;
};

// fallback images (match your filenames)
import highendservice from "../../assets/images/highendservice.jpg";
import dedicatedTeam from "../../assets/images/deticaatedteam.jpg"; // rename if needed
import itservice from "../../assets/images/itservice.jpg";

export const SERVICES_DETAIL: Record<string, ServiceDetail> = {
  "custom-software": {
    slug: "custom-software",
    heroTitle: "HIGH-END\nCUSTOM SOFTWARE\nSOLUTIONS",
    heroImage: highendservice,
    introCards: [
      { title: "ONBOARDING",            body: "Set the project plan and stay connected with our PM." },
      { title: "SCOPING & WIREFRAMING", body: "Define structure and user experience." },
      { title: "UI/UX DESIGN",          body: "Creating intuitive and engaging interfaces." },
      { title: "DEVELOPMENT",           body: "Building with advanced technology." },
      { title: "TESTING & LAUNCH",      body: "Ensuring quality and deployment readiness." },
      { title: "LINKPLUS IT CARE",      body: "Technical support, updates, and maintenance." },
    ],
  },

  "dedicated-team": {
    slug: "dedicated-team",
    heroTitle: "DEDICATED\nTEAM MODEL",
    heroImage: dedicatedTeam,
    introCards: [
      { title: "Candidate Sourcing",     body: "Finding top talent through diverse channels." },
      { title: "Screening & Interviews", body: "Evaluating skills, expertise, and project fit." },
      { title: "Onboarding",             body: "Seamless integration into project and culture." },
      { title: "Manage Directly",        body: "Effectively manage your team from your office." },
    ],
  },

  "it-support": {
    slug: "it-support",
    heroTitle: "IT SUPPORT",
    heroImage: itservice,
    introCards: [
      {
        title: "IT support",
        body:
          "1st and 2nd level support to keep your systems running smoothly. We handle troubleshooting, " +
          "maintenance, and fast issue resolution, ensuring your technology is always stable and secure, " +
          "performing at its best.",
      },
    ],
    process: [
      { title: "Assessment & Setup",       sub: "Understand your systems and set up support workflows." },
      { title: "Monitoring & Maintenance", sub: "Prevent issues with continuous monitoring." },
      { title: "Incident Response",        sub: "Quick resolution of technical problems." },
      { title: "Ongoing Support",          sub: "Updates, patches, and performance tuning." },
    ],
  },
};
