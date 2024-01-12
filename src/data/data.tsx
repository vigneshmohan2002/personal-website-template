import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Vignesh Mohanarajan Resume',
  description: "Vignesh Mohanarajan Resume",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Vignesh Mohanarajan.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm an University of Exeter Computer Science student and <strong className="text-stone-100">Backend Developer</strong>.</p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, you can catch me in the gym, playing basketball, or reading in a coffee shop.
      </p>
    </>
  ),
  actions: [
    {
      href: './assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `A final year Computer Science student with experience in backend development and project management with a proven track record in both having successfully overseen projects from start to finish as well as designing and developing quality software over a wide array of projects.`,
  aboutItems: [
    {label: 'Location', text: 'Exeter, Devon', Icon: MapIcon},
    {label: 'Age', text: '21', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Study', text: 'University of Exeter', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Hatless Studios', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'French',
        level: 7,
      },
      {
        name: 'Tamil',
        level: 4,
      },
      {
        name: 'Malayalam',
        level: 4,
      }
    ],
  },
  {
    name: 'Programming Languages and Tools',
    skills: [
      {
        name: 'Python',
        level: 8,
      },
      {
        name: 'Django',
        level: 9,
      },
      {
        name: 'Java',
        level: 5,
      },
      {
        name: 'C/C++',
        level: 4,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'June 2024',
    location: 'University of Exeter',
    title: 'BSc Computer Science',
    content: <p>Awarded the Dean's commendation for exceptional performance in the second year.</p>,
  },
  {
    date: 'June 2020',
    location: 'Gems Modern Academy - Dubai',
    title: 'International Baccalaureate',
    content: <p></p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'January 2023 - Present',
    location: 'Hatless Studios - Exeter',
    title: 'Backend Developer',
    content: (
      <p>
        •	Engineered REST APIs using Django for various projects with a minimum test coverage of 75%.<br/>
        •	Identified and debugged urgent and critical issues company wide.<br/>
        •	Implemented payments processing for projects utilizing services such as Stripe.<br/>
        •	Developed a tool which utilizes natural language processing for classification and semantic matching.<br/>
        •	Boosted the efficiency of a project by migrating from a relational database to a graph database.<br/>
•	Conducted interviews and established training programs for talent acquisition and onboarding.
      </p>
    ),
  },
  {
    date: 'June 2023 - Present',
    location: 'Hatless Studios',
    title: 'Product Owner',
    content: (
      <p>•	Co-ordinated a team of developers and designers to deliver a project aimed to assist companies in calculating carbon emissions of their projects. <br/>
        •	Communicated with a client possessing domain knowledge to effectively translate their product vision into reality. <br/>
</p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Ellie Kelemen',
      text: 'I had the privilege of working with Vignesh at Hatless Studios for a year. We worked closely on many projects where Vignesh performed with consistent excellence, always going above and beyond to implement elegant solutions, make life easy for front-end developers, and solve the hard issues. He\'s an amazing asset to any software development team.',
      image: 'https://avatars.githubusercontent.com/u/37041249?v=4',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to reach out if you\'d like to chat!',
  items: [
    {
      type: ContactType.Email,
      text: 'vigneshmohanca@gmail.com',
      href: 'mailto:vigneshmohanca@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Exeter, United Kingdom',
      href: 'https://www.google.co.uk/maps/place/Exeter/@50.7244753,-3.5547468,13z/data=!3m1!4b1!4m6!3m5!1s0x486c52c4d4498da7:0xa976e3256bdfad1e!8m2!3d50.7260367!4d-3.5274889!16zL20vMDJtX18?entry=ttu',
    },
    {
      type: ContactType.Github,
      text: 'vigneshmohan2002',
      href: 'https://github.com/vigneshmohan2002',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/vignesh-mohanarajan/'},
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/vigneshmohan2002'},
];
