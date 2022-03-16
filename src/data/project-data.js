import { FaReact, FaBootstrap, FaNodeJs, FaJs, FaCss3, FaHtml5, FaSass } from 'react-icons/fa'
import { SiPostgresql, SiExpress } from 'react-icons/si'


/* 
    Add details for each project here. 
    You can add as many projects as you'd like. They'll automatically be imported into the projects section. 
*/

export const projectData = [
    {
        name: "Project 1",
        img: "/images/projects/sample-project-img.jpg",
        altText: "Project 1 screenshot",
        description: (
            <>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta mollitia reprehenderit saepe, fugiat perspiciatis natus?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, perferendis eveniet. Cum vel amet corrupti sint, unde similique, doloremque facilis in vero tempora consequatur iste.</p>
            </>
            ),
        liveLink: "https://trevorwallis13.github.io/simple-react-portfolio-template",
        githubLink: "https://github.com/trevorwallis13/simple-react-portfolio-template",
        techStack: [
            {
                name: 'React',
                icon: <FaReact />
            },
            {
                name: 'Bootstrap',
                icon: <FaBootstrap />
            },
            {
                name: 'Sass',
                icon: <FaSass />
            },
            {
                name: 'PostgreSQL',
                icon: <SiPostgresql />
            },
            {
                name: 'Express',
                icon: <SiExpress />
            },
            {
                name: 'Node',
                icon: <FaNodeJs />
            }
        ]
    },
    {name: "Project 2",
        img: "/images/projects/sample-project-img.jpg",
        altText: "Project 2 screenshot",
        description: (
            <>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta mollitia reprehenderit saepe, fugiat perspiciatis natus?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, perferendis eveniet. Cum vel amet corrupti sint, unde similique, doloremque facilis in vero tempora consequatur iste.</p>
            </>
            ),
        liveLink: "https://trevorwallis13.github.io/simple-react-portfolio-template",
        githubLink: "https://github.com/trevorwallis13/simple-react-portfolio-template",
        techStack: [
            {
                name: 'Javascript',
                icon: <FaJs />
            },
            {
                name: 'CSS3',
                icon: <FaCss3 />
            },
            {
                name: 'HTML5',
                icon: <FaHtml5 />
            }
        ]
    },
    {
        name: "Project 3",
        img: "/images/projects/sample-project-img.jpg",
        altText: "Project 3 screenshot",
        description: (
            <>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta mollitia reprehenderit saepe, fugiat perspiciatis natus?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, perferendis eveniet. Cum vel amet corrupti sint, unde similique, doloremque facilis in vero tempora consequatur iste.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente dignissimos nobis sunt tempora nostrum nihil?</p>
            </>
            ),
        liveLink: "https://trevorwallis13.github.io/simple-react-portfolio-template",
        githubLink: "https://github.com/trevorwallis13/simple-react-portfolio-template",
        techStack: [
            {
                name: 'React',
                icon: <FaReact />
            },
            {
                name: 'Sass',
                icon: <FaSass />
            },
            {
                name: 'Bootstrap',
                icon: <FaBootstrap />
            }
        ]
    },
    {
        name: "Project 4",
        img: "/images/projects/sample-project-img.jpg",
        altText: "Project 4 screenshot",
        description: (
            <>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta mollitia reprehenderit saepe, fugiat perspiciatis natus?</p>
            </>
            ),
        liveLink: "https://trevorwallis13.github.io/simple-react-portfolio-template",
        githubLink: "https://github.com/trevorwallis13/simple-react-portfolio-template",
        techStack: [
            {
                name: 'HTML5',
                icon: <FaHtml5 />
            },
            {
                name: 'CSS3',
                icon: <FaCss3 />
            }
        ]
    }
]