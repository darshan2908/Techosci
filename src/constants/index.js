import { data } from "autoprefixer";
import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "Contact US",
    url: "/contact-us",
    onlyMobile: false,
  },
  {
    id: "5",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "6",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const subText =
  "Smart automation and secure development-our offshore IT services are your partner in creating smarter, faster, and more innovative business solutions.";
export const collabText = "With 5 years of expertise, we bring smart automation and secure development to drive innovation and add value to your business."

export const collabContent = [
  {
    id: "0",
    title: "40+ Applications Developed",
    text: subText,
  },
  {
    id: "1",
    title: "200+ Websites Developed",
  },
  {
    id: "2",
    title: "25+ Team Members",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Web Based Solutions",
    text: "Crafting stunning websites, powering your digital presence. From design to development, we've got you covered.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Mobile App Development",
    text: "Turning business ideas into intuitive mobile apps. Expert mobile app development for seamless customer experience.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "UI/UX Design",
    text: "Designing interfaces that wow your visitors and work flawlessly. Your business vision, perfected for optimal user experience.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Digital Marketing",
    text: "Digital marketing excellence for businesses of all industries, nations and sizes. Let's tell your story, engage your audience and drive results.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Quality Assurance",
    text: "Precision in practice. Quality assurance processes meticulously designed to ensure flawless execution and unmatched quality.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Managed IT Services",
    text: "Streamlining your IT operations with managed IT services for seamless technology management and uninterrupted business operations.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];

export const footerLinks = [
  {
    title: "Quick Links",
    links: [
      {
        name: "Blog",
        link: "/Blog",
      },
      {
        name: "News",
        link: "/News",
      },
      {
        name: "FAQ",
        link: "/FAQs",
      },
      {
        name: "About US",
        link: "/about-us",
      },
      {
        name: "Privacy Policy",
        link: "/PrivacyPolicy",
      },
      {
        name: "Terms & Condition",
        link: "/Terms-and-conditions",
      },
    ],
  },
  {
    title: "Technologies",
    links: [
      {
        name: "ASP.NET",
        link: "",
      },
      {
        name: "Laravel",
        link: "",
      },
      {
        name: "PHP",
        link: "",
      },
      {
        name: "Wordpress",
        link: "",
      },
      {
        name: "Mobile Apps",
        link: "",
      },
      {
        name: "Shopify",
        link: "",
      },
      {
        name: "Python",
        link: "",
      },
      {
        name: "Next JS",
        link: "",
      },
      {
        name: "React JS",
        link: "",
      },
      {
        name: "SharePoint",
        link: "",
      },
      {
        name: "Power BI",
        link: "",
      },
      {
        name: "Angular",
        link: "",
      },
    ],
  },
  {
    title: "Hire Developer",
    links: [
      {
        name: "ASP.NET Developers",
        link: "",
      },
      {
        name: "PHP Developers",
        link: "",
      },
      {
        name: "Mobile App Developers",
        link: "",
      },
      {
        name: "WordPress Developers",
        link: "",
      },
      {
        name: "WooCommerce Developers",
        link: "",
      },
      {
        name: "SharePoint Developers",
        link: "",
      },
    ],
  },
];

export const aboutData = {
  title: "At Techosci, we're more than a software company - we're your partners in innovation. With a passion for building custom, scalable, and secure digital solutions, we empower businesses to thrive in an ever-evolving digital world.",
  data:[
    {
      title:"Our Mission",
      desc: "To craft cutting-edge, custom solutions that empower businesses to innovate, grow, and stay ahead of the competition. We strive to make technology an enabler, not just a tool, helping our clients achieve their goals efficiently and effectively."
    },
    {
      title:"Our Vision",
      desc: "To be a global leader in digital innovation, creating secure, scalable, and transformative solutions. We aim to shape a world where technology bridges gaps and builds opportunities for businesses of all sizes."
    },
  ]
}

export const privacyData = {
    title: "At Techosci, we are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, and safeguard your information.",
    data: [
      {
        title: "Information We Collect",
        desc: "We may collect personal information such as your name, email address, phone number, and other relevant details when you interact with our website, services, or communications. We also collect non-personal information like browser type, IP address, and browsing behavior.",
      },
      {
        title: "How We Use Your Information",
        desc: "Your information is used to provide and improve our services, communicate with you, and personalize your experience. We may also use it for analytics, marketing, and legal compliance.",
      },
      {
        title: "Data Security",
        desc: "We implement robust security measures to protect your data from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",
      },
      {
        title: "Third-Party Services",
        desc: "We may use third-party services to process data or deliver services. These third parties are obligated to protect your information and use it only for the purposes we specify.",
      },
      {
        title: "Your Rights",
        desc: "You have the right to access, update, or delete your personal information. You can also opt-out of marketing communications at any time. Contact us if you wish to exercise these rights.",
      },
      {
        title: "Changes to This Policy",
        desc: "We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we encourage you to review it periodically.",
      },
    ],
}