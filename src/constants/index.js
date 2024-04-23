import {
    smartcampusdesktop,
    sweetdreams,
    doomeddash,
    galacticrhythm,
    smartcampus,
    fullstack,
    creator,
    iut,
    manette,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    mongodb,
    git,
    docker,
    threejs,
    sf,
    ludwiginfo,
    logocp,
    iutcp,
    csharp,
    c,
    cpp,
    php,
    symfony,
    unity,
    unreal,

  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "À propos",
    },
    {
      id: "work",
      title: "Expériences",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Etudiant en développement informatique à l'IUT de La Rochelle",
      icon: iut,
    },
    {
      title: "Developpeur fullstack curieux et polyvalent",
      icon: fullstack,
    },
    {
      title: "Specialisé en game developpement",
      icon: manette,
    },
    {
      title: "Passionné depuis de nombreuse année",
      icon: creator,
    },
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
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "PHP",
      icon: php,
    },
    {
      name: "Symfony",
      icon: symfony,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "C",
      icon: c,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "C#",
      icon: csharp,
    },
    {
      name: "Unity",
      icon: unity,
    },
    {
      name: "Unreal Engine",
      icon: unreal,
    },
  ];
  
  const experiences = [
    {
      title: "Stagiaire Game Developer",
      company_name: "SeriousFrames",
      icon: sf,
      iconBg: "#383E56",
      date: "Avril 2024 - Juin 2024",
      points: [
        "Intégrer l'équipe en charge du développement",
        "Participer au level/game design sous la direction du Game Designer.",
        "Optimisation des interactions utillisateur et UX.",
        "Game design sous Unity et programmation C#.",
      ],
    },
    {
      title: "Etudiant en développement d'applications",
      company_name: "IUT La Rochelle",
      icon: iutcp,
      iconBg: "#E6DEDD",
      date: "Septembre 2022 - Juin 2025",
      points: [
        "Parcours réalisation d'applications : conception, développement,validation",
        "Développement web et mobile (front/back), SQL, Redis, MongoDB, PHP (Symfony), HTML, CSS, JS (React), API Platform, Swift",
        "Collaboration au sein d'une équipe informatique, analyse des besoins clients, méthodes agiles (Scrum, Kanban), utilisation de Git",
        "Test du code et mise en place de tests ainsi que de pipelines CI/CD",
        "Maitrise de nombreuses connaissances généralistes : réseau, virtualisation. Expérience en développement bas niveau en C, algorithmie en Python, et création d'applications en C++"
      ],
    },
    {
      title: "Developpeur freelance",
      company_name: "",
      icon: logocp,
      iconBg: "#383E56",
      date: "Janvier 2021 - Septembre 2022",
      points: [
        "Réalisation de projets personnels et professionnels.",
        "Développement et référencement web",
      ],
    },
    {
      title: "Stage d'observation",
      company_name: "Ludwig Informatique",
      icon: ludwiginfo,
      iconBg: "#E6DEDD",
      date: "Décembre 2018",
      points: [
        "Exploration du monde de l'entreprise",
        "Découverte de la maintenance informatique et de la création de sites web.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Smart Campus Mobile",
      description:
        "Sous sa déclinaisons mobile, Smart Campus est un projet web et domotique qui utilise des capteurs reliés à des systèmes d'acquisition permettant le traitement des données. Il offre la possibilité à l'utilisateur d'apprendre à réagir face aux enjeux climatiques.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "apiplatform",
          color: "green-text-gradient",
        },
        {
          name: "ardiuino",
          color: "pink-text-gradient",
        },
      ],
      image: smartcampus,
      source_code_link: "https://github.com/",
    },
    {
      name: "Smart Campus",
      description:
        "La première version de ce projet web et domotique utilise des capteurs reliés à des systèmes d'acquisition pour offrir à l'utilisateur un outil d'analyse et de statistiques vis-à-vis de l'efficacité énergétique d'un bâtiment.",
      tags: [
        {
          name: "php",
          color: "blue-text-gradient",
        },
        {
          name: "symfony",
          color: "green-text-gradient",
        },
        {
          name: "ardiuino",
          color: "pink-text-gradient",
        },
      ],
      image: smartcampusdesktop,
      source_code_link: "https://github.com/",
    },
    {
      name: "Galactic Rhythm",
      description:
        "Galactic Rhythm est un FPS platformer dans lequel vous incarnez X. À l'aide de votre jetpack et de vos canons, parcourez les niveaux à la découverte de nouvelles contrées spatiales tout en essayant de battre vos records de temps et de score !",

      tags: [
        {
          name: "unity",
          color: "blue-text-gradient",
        },
        {
          name: "c#",
          color: "green-text-gradient",
        },
        {
          name: "fps",
          color: "pink-text-gradient",
        },
      ],
      image: galacticrhythm,
      source_code_link: "https://gamejolt.com/games/galactic-rhythm/806262",
    },
    {
      name: "DoomedDash",
      description:
        "DoomedDash est un jeu de zombies rétro réalisé dans le cadre de ma formation, développé intégralement en C++ par une équipe de 5 développeurs en collaboration avec des artistes pour les designs et la musique.",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "teamwork",
          color: "green-text-gradient",
        },
        {
          name: "retrogaming",
          color: "pink-text-gradient",
        },
      ],
      image: doomeddash,
      source_code_link: "https://github.com/",
    },
    {
      name: "Sweet Dreams",
      description:
        "Sweet Dreams est un platformer 2D dans lequel vous incarnez Judy, une jeune fille qui part à l'aventure dans ses rêves. Au long de cette aventure, évoluez dans les 4 niveaux disponibles au milieu de paysages fantaisies. Mais apprenez à vous battre car un Mystérieux oiseau ne vous facilitera pas la tâche.",
      tags: [
        {
          name: "unity",
          color: "blue-text-gradient",
        },
        {
          name: "platformer",
          color: "green-text-gradient",
        },
        {
          name: "firstproject",
          color: "pink-text-gradient",
        },
      ],
      image: sweetdreams,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, projects };