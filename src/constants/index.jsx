import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Reviews", href: "#" },
];

export const reviews = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Immersive VR Experience",
    description:
    "Experience the next level of immersion with our VR technology, offering lifelike simulations, 360-degree environments, and seamless interactivity that transport you to entirely new worlds.",
  },
  {
    icon: <Fingerprint />,
    text: "cross-Platform Compatibility",
    description:
    "Enjoy seamless VR experiences across multiple devices, from headsets to PCs and mobile, ensuring you can connect and play wherever you are.",
  },
  {
    icon: <ShieldHalf />,
    text: "Secure Virtual Environment",
    description:
    "Seamlessly enjoy our VR experiences across multiple platforms, including VR headsets, PCs, and mobile devices, for ultimate flexibility and accessibility.",
  },
  {
    icon: <BatteryCharging />,
    text: "Performance-Optimized Power",
    description:
    "Experience unparalleled performance with our high-powered VR system, designed for smooth, lag-free interactions and extended usage without compromising on quality.",
  },
  {
    icon: <PlugZap />,
    text: "Cutting-edge Technology",
    description:
    "Experience unparalleled immersion with our cutting-edge VR technology, featuring advanced motion tracking, high-definition graphics, and haptic feedback for a truly lifelike adventure.",
  },
  {
    icon: <GlobeLock />,
    text: "Global Connectivity and Collaboration",
    description:
    "Connect and collaborate with users worldwide through our global multiplayer and social VR features, bridging distances and creating a truly interconnected virtual community.",
  },
];

export const checklistItems = [
  {
    title: "Total Immersion",
    description:
      "With our VR games, experience gameflow like never before as you dive into fully immersive worlds where every action captures your focus, leaving real-world distractions behind.",
  },
  {
    title: "Perfect Challenge for Every Skill Level",
    description:
      "Our VR titles are designed to hit the sweet spot between challenge and skill, ensuring you stay engaged and excited as you master every level.",
  },
  {
    title: "Instant Feedback, Seamless Progress",
    description:
      "Enjoy the thrill of clear goals and real-time feedback in each VR adventure, empowering you to take control and push your gaming abilities to the next level.",
  },
  {
    title: " Lose Yourself in the Game",
    description:
      "Get lost in the moment as time fades away; with our VR games, gameflow becomes an unforgettable part of every session, making your gameplay immersive and addictive.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];