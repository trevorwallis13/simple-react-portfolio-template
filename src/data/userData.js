const userData = {
    /* BASIC INFO */

    name: 'Elmer Fudd',
    email: 'elmer.fudd@gmail.com',
    github: 'https://www.github.com/YOUR-GITHUB-PAGE',
    linkedin: 'https://www.linkedin.com/in/YOUR-LINKEDIN-PAGE',
    twitter: 'https://www.twitter.com/YOUR-TWITTER-PAGE',
    
    
    /* ----> HERO <----- */

    subTitle: 'Front-End Developer',
    summaryStatement: <p>I hunt rabbits <span className="highlight">and ducks</span> when I'm not coding</p>,
    
    // resume link can be either an external link or a file placed in public/docs. 
    // for local file in public/docs use '/docs/YOUR-RESUME-DOC-NAME.pdf'
    // Current link leads to Zety, an online resume builder tool

    resumeLink: "https://zety.com/",

    /* ----> ABOUT <---- */

    // Image can either be an image in public/images or an external URL

    img: '/images/profile.jpg',
    altText: 'YOUR-NAME headshot',

    // inlcude whatever JSX you want for your bio. I reccommend that you don't use more than 3 SHORT paragraphs. 
    
    aboutStatement: (
        <>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim deserunt debitis aut, consequatur quos molestias doloremque aperiam sunt blanditiis sequi.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ducimus eaque tempora, incidunt tenetur consequatur?</p>
        </>
    )
}

export default userData