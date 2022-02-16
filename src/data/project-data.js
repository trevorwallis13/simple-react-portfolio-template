import { FaReact, FaBootstrap, FaNodeJs, FaJs, FaCss3, FaHtml5, FaSass } from 'react-icons/fa'
import { SiPostgresql, SiExpress } from 'react-icons/si'

export const projectData = [
    {
        name: "Pick My Meals",
        img: "/images/projects/pick-my-meals.png",
        altText: "Pick My Meals project screenshot",
        description: (
            <>
                <p>A web app that takes the 'I don't know' out of 'what do you want for dinner?' Add your favorite meals and plan your dinners for the week using drag-n-drop. Can't decide? hit 'Pick My Meals' to fill all your remaining evenings with a random selection from your list.</p>
                <p>Oh look! Another paragraph!</p>
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
    }
]