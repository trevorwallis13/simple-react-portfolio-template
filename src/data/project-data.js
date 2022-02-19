import { FaReact, FaBootstrap, FaNodeJs, FaJs, FaCss3, FaHtml5, FaSass } from 'react-icons/fa'
import { SiPostgresql, SiExpress } from 'react-icons/si'

export const projectData = [
    {
        name: "Pick My Meals",
        img: "/images/projects/pick-my-meals.png",
        altText: "Pick My Meals project screenshot",
        description: (
            <>
                <p>A CRUD web app with user authentication built with React, Sass, Express, and PostgreSQL. </p>
                <p>Pick My Meals takes the 'I don't know' out of 'what do you want for dinner?' Add your favorite meals and plan your dinners for the week using drag-n-drop. Can't decide? hit 'Pick My Meals' to fill all your remaining evenings with a random selection from your list.</p>
            </>
            ),
        liveLink: "https://pickmymeals.herokuapp.com/",
        githubLink: "https://github.com/trevorwallis13/pick-my-meals",
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
    {
        name: "Stopwatch",
        img: "/images/projects/stopwatch.png",
        altText: "Stopwatch project screenshot",
        description: (
            <>
                <p className="project-description">A mobile-friendly stopwatch app that tracks total time, laps, and current lap time. This vanilla javascript project was one of the first tools I built from scratch by myself. </p>
            </>
            ),
        liveLink: "https://trevorwallis13.github.io/stopwatch/",
        githubLink: "https://github.com/trevorwallis13/stopwatch",
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
        name: "Simple React Portfolio",
        img: "/images/projects/simple-react-portfolio.png",
        altText: "Trevor Wallis portfolio screenshot",
        description: (
            <>
                <p className="project-description">The Simple React Portfolio template allows developers to showcase their projects and a short biography in a clean, minimal design.</p>
                <p>I designed this single-page portfolio using React, Sass, and React Bootstrap. Components and styles are conventiently segmented for other developers to easily adapt to their own style preferences.</p>
            </>
            ),
        liveLink: "https://trevorwallis13.github.io/stopwatch/",
        githubLink: "https://github.com/trevorwallis13/stopwatch",
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
        name: "Church Homepage Clone",
        img: "/images/projects/church-homepage-clone.png",
        altText: "Clone of Jubilee Church website from December 2021",
        description: (
            <>
                <p>A pure HTML/CSS clone of Jubilee Church's website from December 2021. I used the church's existing website as a visual guide while I recreated the homepage layout with a responsive design using flexbox.</p>
            </>
            ),
        liveLink: "https://trevorwallis13.github.io/Jubilee-Church-HTML-Clone/",
        githubLink: "https://github.com/trevorwallis13/Jubilee-Church-HTML-Clone/",
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