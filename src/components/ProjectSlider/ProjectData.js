import snake1 from '../../assets/snake1.jpg'
import tetris1 from '../../assets/tetris1.jpg'
import snake2 from '../../assets/snake_recording.mov'
import tetris2 from '../../assets/tetris_recording.mov'
import portfolio1 from '../../assets/portfolio1.jpg'
import portfolio2 from '../../assets/portfolio2.mov'
import tour_optimizer1 from '../../assets/tour_optimizer1.jpg'
import tour_optimizer2 from '../../assets/tour_optimizer2.mp4'
import ocamlEncryption from '../../assets/ocaml-encryption.jpg'
import athleticTrainingFinder from '../../assets/athletic-training-finder.png'
import gptree from '../../assets/gptree.png'

export const PROJECTS = [
    {
        image: ocamlEncryption,
        title: 'OCaml Encryption',
        time: 'September 2024 – December 2024',
        description: 'This is an OCaml program that encrypts and decrypts text in a bunch of different languages.',
        github: 'https://github.coecis.cornell.edu/drv36/3110-final-project',
        skills: ['OCaml']
    },
    {
        image: athleticTrainingFinder,
        imageFit: 'contain',
        title: 'Athletic Training Finder',
        time: 'February 2026 – May 2026',
        description: 'This is my CS/INFO 4300 project. It takes a natural-language query and ranks exercises, training programs, and sports coaching posts. Keyword retrieval uses TF-IDF and cosine similarity, with a Porter stemmer, query expansion, and edit-distance spell correction. Semantic retrieval uses truncated SVD on that same index. An IR+RAG mode rewrites the query and reranks the candidates, and the search can filter by equipment, difficulty, and muscles to avoid.',
        github: 'https://github.com/DylanVig/4300-Project',
        skills: ['Python', 'Flask', 'React', 'TypeScript']
    },
    {
        image: gptree,
        title: 'GPTree',
        time: 'April 2026',
        description: 'GPTree is a tool I used to branch conversations in ChatGPT effectively.',
        github: 'https://github.com/DylanVig/GPTree',
        skills: []
    },
    {
        image: tour_optimizer1,
        video: tour_optimizer2,
        title: 'Tour Optimizer',
        time: 'Jul. 2024',
        description: 'This is my tour guide optimizer, and my first larger scale project with a more complicated tech stack. When people travel to foreign countries, they often struggle planning their trip, deciding what tourist sites to travel to and when. This web application helps suggest tourist sites based on the city you travel to and optimizes the route to those sites. I also used algorithms such as backtracking and the Held-Karp algorithm to develop these optimized routes!',
        github: 'https://github.com/DylanVig/route-optimizer',
        skills: ['React.js', 'Spring Boot', 'PostgreSQL']
    },
    {
        image: snake1,
        video: snake2,
        title: 'Snake Recreation',
        time: 'Dec. 2023',
        description: 'This is my recreation of snake, and my first personal project. Ever since I started coding, it was always my goal to recreate this game, and I was finally able to accomplish this goal. I used Java for both the front end and the back end, utilizing the Swing library and the Abstract Window Toolkit. When creating my project, the main logic I used to create the snake was a reversed Linked List to create the chaining effect. Overall, this was a fun project to work on and a very fulfilling experience. Here is my project link: ',
        github: 'https://github.com/DylanVig/Snake.git',
        skills: ['Java']
    },
    {
        image: tetris1,
        video: tetris2,
        title: 'Tetris Recreation',
        time: 'Dec. 2023',
        description: 'This is my recreation of Tetris. After creating Snake, I wanted to create another personal project to help solidify some of the concepts that I learned in Object-Oriented Programming, such as concurrency, polymorphism, GUIs, etc. Similarly to Snake, I used Java with the Swing library and the Abstract Window Toolkit. This game is slightly incomplete, as I haven’t added music or cooler graphics, but I got a very baseline project finished. Overall, I learned a lot from creating this project and enjoyed this! Here is my project link: ',
        github: 'https://github.com/DylanVig/Tetris.git',
        skills: ['Java']
    },
    {
        image: portfolio1,
        video: portfolio2,
        title: 'Portfolio Website',
        time: 'Apr. 2024',
        description: 'This is my personal portfolio website. I created this project to work on my front end development skills (and to dive a little bit into UI design). Additionally, I want to display all of my current and future personal projects on this website. This project helped me develop front end skills that I can use for more complex projects in the future. Overall, this was a really fun project to work on, and I plan on using the front end skills I learned to make more projects in the future.',
        github: 'https://github.com/DylanVig/dylanvig.github.io',
        skills: ['HTML/CSS', 'JavaScript', 'React']
    }
]