import Portfolio from "./img/portfolio.jpg";
import img2 from "./img/img2.jpg";
import Metronome from "./img/metronome.png";
import img4 from "./img/img4.jpg";
import imga from "./img/imga.jpg";
import imgb from "./img/imgb.jpg";
import imgc from "./img/imgc.jpg";

export const pages = {
    about: {   
        id: 0,
        name: "About me",
        link: "/portfolio",
        enabled: true,
        content: [
            {
                id: 0,
                text: "This is my about page",
            },
            {
                id: 1,
                text: "I talk about myself here",
            }
        ]
    }, 

    projects: {
        id: 1,
        name: "Projects",
        link: "/projects",
        enabled: true,
        content: [
            {
                id: 0,
                title: "Portfolio",
                img: Portfolio,
                alt: "Colourful Striped Pattern",
                enabled: true,
                desc: `My website made using React, as a software developer it's only right that I have one and every aspect of this site custom made. 
                        I do know if I'll ever truly regard this project as complete because it's something I want to add to for the rest of my life.`,
                tech: ["React", "Javascript", "HTML", "CSS"],
                link: "https://jacaddock.github.io/portfolio/"
            },
            {
                id: 1,
                title: "Image 2",
                img: img2,
                alt: "Night Time Europe",
                enabled: false,
                desc: `Dark Soul's inspired turn-based game that come out of a conversation with a friend, we wondered what such a game would look like
                        and if it could work. Well we decided to just go for it and find out during the creation`,
                tech: ["Godot", "GDScript"]
            },
            {
                id: 2,
                title: "Metronome App",
                img: Metronome,
                alt: "Metronome",
                enabled: true,
                desc: `Metronome Web App created for a company as a take home technical task`,
                tech: ["React", "JavaScript", "HTML", "CSS"],
                link: "https://jacaddock.github.io/metronome-app/"
            },
            {
                id: 3,
                title: "Lorem ipsum",
                img: img4,
                alt: "N/A",
                enabled: false,
                desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac tristique arcu. Donec non ante ligula. Proin libero neque, eleifend eu arcu et, 
                    ultrices semper elit. Nunc nibh nisl, egestas a libero eu, tristique suscipit nibh. In iaculis felis id venenatis iaculis. 
                    Sed eget nisi ut quam feugiat facilisis. Nam ac rhoncus risus.`,
                tech: ["C#", "Unity"]
            }
        ]
    },
    fun: {
        id: 2,
        name: "Coming Soon...",
        link: "fun",
        class: "card",
        enabled: false,
        content: {
            class: "card-item",
            data: [
                {
                    id: 0,
                    title: "Image A",
                    img: imga,
                    alt: "Lake with Ferris Wheel",
                },
                {
                    id: 1,
                    title: "Image B",
                    img: imgb,
                    alt: "Sunset",

                },
                {
                    id: 2,
                    title: "Image C",
                    img: imgc,
                    alt: "Snowy Mountain with Reflection",
                }
            ]
        }            
    }
}