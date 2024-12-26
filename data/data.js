import pfe from "/public/pfe.png"
import accueil from "/public/accueil.png"
import giveback from "/public/giveback.png"
import UberMe from "/public/UberMe.png"

export const projects = [
    {
      img: pfe,
      title: "Notification Platform",
      description: "A scalable notification platform based on the microservices architecture to automate and manage notifications across email, SMS, and web push channels.",
      links: {
        site: "#",
        github: "https://github.com/farahjerbi/PFE_WEVIOO.git",
      },
    },
    {
      img: giveback,
      title: "GiveBack",
      description: "A social media platform that serves as a bridge between non-profit organizations and donors",
      links: {
        site: "#",
        github: "https://github.com/PI-4TWIN5-Enigmatic/PI-Enigmatic.git",
      },
    },
    {
      img: accueil,
      title: "Legal Docs",
      description: "A flexible Angular-based component engine that leverages JSON configurations to dynamically render and manage UI components.",
      links: {
        site: "#",
        github: "https://github.com/farahjerbi/LegalDocs.git",
      },
    },
    {
      img: UberMe,
      title: "UberMe",
      description: "An application that replicates Uber's core functionalities with modern tools and features.",
      links: {
        site: "#",
        github: "https://github.com/farahjerbi/UberMe.git",
      },
    },
   
  ]

 export const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Tech', href: '#tech' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
];