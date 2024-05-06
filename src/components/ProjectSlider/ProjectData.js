import snake1 from '../../assets/snake1.jpg'
import tetris1 from '../../assets/tetris1.jpg'
import snake2 from '../../assets/snake_recording.mov'
import tetris2 from '../../assets/tetris_recording.mov'
import portfolio1 from '../../assets/portfolio1.jpg'
import portfolio2 from '../../assets/portfolio2.mov'

export const PROJECTS = [
    {
        image: snake1,
        video: snake2,
        title: 'Snake',
        time: 'December 2023',
        description: 'This is my recreation of snake, and my first personal project. Ever since I started coding, it was always my goal to recreate this game, and I was finally able to accomplish this goal. I used Java for both the front end and the back end, utilizing the Swing library and the Abstract Window Toolkit. When creating my project, the main logic I used to create the snake was a reversed Linked List to create the chaining effect. Overall, this was a fun project to work on and a very fulfilling experience. Here is my project link: ',
        github: 'https://github.com/DylanVig/Snake.git',
        skills: ['Java']
    },
    {
        image: tetris1,
        video: tetris2,
        title: 'Tetris',
        time: 'December 2023',
        description: 'This is my recreation of Tetris. After creating Snake, I wanted to create another personal project to help solidify some of the concepts that I learned in Object-Oriented Programming, such as concurrency, polymorphism, GUIs, etc. Similarly to Snake, I used Java with the Swing library and the Abstract Window Toolkit. This game is slightly incomplete, as I haven’t added music or cooler graphics, but I got a very baseline project finished. Overall, I learned a lot from creating this project and enjoyed this! Here is my project link: ',
        github: 'https://github.com/DylanVig/Tetris.git',
        skills: ['Java']
    },
    {
        image: portfolio1,
        video: portfolio2,
        title: 'Portfolio Website',
        time: 'April 2024',
        description: 'This is my personal portfolio website. I created this project to work on my front end development skills (and to dive a little bit into UI design). Additionally, I want to display all of my current and future personal projects on this website. This project helped me develop front end skills that I can use for more complex projects in the future. Overall, this was a really fun project to work on, and I plan on using the front end skills I learned to make more projects in the future.',
        github: 'https://github.com/DylanVig/dylanvig.github.io',
        skills: ['HTML/CSS', 'JavaScript', 'React']
    }
]