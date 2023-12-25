import {
    mobile,
    web,
    javascript,
    typescript,
    html,
    css,
    C_lang,
    C_plus,
    python,
    swift,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    java,
    Arduino,
    Photoshop,
    Flask,
    IITM,
    LingoFlow,
    Chat,
    Altium,
    Gemini,
    threejs,
    SETV
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Works",
    },
    {
        id: "project",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Java Developer",
        icon: mobile,
    }
    // {
    //     title: "Backend Developer",
    //     icon: backend,
    // },
    // {
    //     title: "Content Creator",
    //     icon: creator,
    // },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "C",
        icon: C_lang,
    },
    {
        name: "C++",
        icon: C_plus,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Java",
        icon: java,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "Swift",
        icon: swift,
    },
    {
        name: "Arduino",
        icon: Arduino,
    },
    {
        name: "Photoshop",
        icon: Photoshop,
    },
    {
        name: "Flask",
        icon: Flask,
    },
];

const experiences = [
    {
        title: "Embedded Systems Developer",
        company_name: "Indian Institute of Technology Madras",
        icon: IITM,
        iconBg: "#383E56",
        date: "June 2023 - July 2023",
        points: [
            "Gained hands-on experience with Texas Instruments microcontrollers during an internship at IITM.",
            "Successfully implemented MQTT protocols on both client and server sides for efficient data communication.",
            "Designed a user-friendly data visualization website using React, enhancing data accessibility and usability.",
            "Created a RESTful API using Flask to facilitate seamless communication between microcontrollers and the web interface, contributing to project success",
        ],
    },
    // {
    //     title: "React Native Developer",
    //     company_name: "Tesla",
    //     icon: tesla,
    //     iconBg: "#E6DEDD",
    //     date: "Jan 2021 - Feb 2022",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Web Developer,
    //     company_name: "Shopify",
    //     icon: shopify,
    //     iconBg: "#383E56",
    //     date: "Jan 2022 - Jan 2023",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    {
        title: "Full stack Developer",
        company_name: "SETV",
        icon: SETV,
        iconBg: "#E6DEDD",
        date: "June 2023 - July 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "LingoFlow",
        description:
            "LingoFlow: Your trusted English to Hindi translator, utilizing the strength of a state-of-the-art Seq2Seq model and NLP techniques. This cutting-edge solution has been meticulously crafted with privacy in mind, as showcased in our project for the Smart India Hackathon, where we came 2nd in recognition of our innovation and expertise.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "Pytorch",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
            {
                name: "FLASK",
                color: "blue-text-gradient",
            },
        ],
        image: LingoFlow,
        source_code_link: "https://github.com/djdiptayan1/Smart_India_Hackathon",
    },
    {
        name: "Chat Application",
        description:
            "Elevate your communication experience with my cutting-edge chat application, that connects people worldwide seamlessly. Powered by Java, SQL, and Java Swing, it offers lightning-fast socket connectivity, chat history preservation, and an intuitive user interface, redefining the way we interact in both personal and global conversations.",
        tags: [
            {
                name: "Java",
                color: "blue-text-gradient",
            },
            {
                name: "SQL",
                color: "green-text-gradient",
            },
            {
                name: "Swing",
                color: "pink-text-gradient",
            },
        ],
        image: Chat,
        source_code_link: "https://github.com/djdiptayan1/Chat_Application",
    },
    {
        name: "Altium Workshop",
        description:
            "Utilizing React.js and Firebase, I developed a registration platform for the Altium Workshop. The site offered an intuitive UI, real-time data handling, enhancing their experience. With Firebase's secure authentication and scalable database, this project showcases my ability to create efficient, interactive web applications using modern technologies.",
        tags: [
            {
                name: "Reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "Tailwindcss",
                color: "green-text-gradient",
            },
            {
                name: "Firebase",
                color: "pink-text-gradient",
            },
        ],
        image: Altium,
        project_demo: "https://altium.djdiptayan.in/",
        source_code_link: "https://github.com/djdiptayan1/Altium_microsite",
    },
    {
        name: "Gemini",
        description:
            "The Gemini app, developed in Swift, offers an intuitive interface to engage with the Gemini Pro by Google. This app is designed for seamless conversations with Gemini LLM, allowing users to input prompts and receive generated responses. It harnesses the power of Google's language generation capabilities to provide engaging and interactive chat experiences.",
        tags: [
            {
                name: "Swift",
                color: "blue-text-gradient"
            }
        ],
        image: Gemini,
        source_code_link: "https://github.com/djdiptayan1/Gemini",
    },
    {
        name: "Altium Workshop",
        description:
            "Utilizing React.js and Firebase, I developed a registration platform for the Altium Workshop. The site offered an intuitive UI, real-time data handling, enhancing their experience. With Firebase's secure authentication and scalable database, this project showcases my ability to create efficient, interactive web applications using modern technologies.",
        tags: [
            {
                name: "Reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "Tailwindcss",
                color: "green-text-gradient",
            },
            {
                name: "Firebase",
                color: "pink-text-gradient",
            },
        ],
        image: Altium,
        project_demo: "https://altium.djdiptayan.in/",
        source_code_link: "https://github.com/djdiptayan1/Altium_microsite",
    },
    {
        name: "Altium Workshop",
        description:
            "Utilizing React.js and Firebase, I developed a registration platform for the Altium Workshop. The site offered an intuitive UI, real-time data handling, enhancing their experience. With Firebase's secure authentication and scalable database, this project showcases my ability to create efficient, interactive web applications using modern technologies.",
        tags: [
            {
                name: "Reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "Tailwindcss",
                color: "green-text-gradient",
            },
            {
                name: "Firebase",
                color: "pink-text-gradient",
            },
        ],
        image: Altium,
        project_demo: "https://altium.djdiptayan.in/",
        source_code_link: "https://github.com/djdiptayan1/Altium_microsite",
    }
];

export { services, technologies, experiences, testimonials, projects };