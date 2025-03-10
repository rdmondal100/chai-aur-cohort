const projects = [
    {
        title: "Todo APP",
        description: "A sleek todo app built with HTML, CSS, and JS.",
        img: "https://source.unsplash.com/300x200/?website",
        demo: "https://rdmondal100.github.io/Projects/01-Todo-App-js/index.html", // GitHub Pages link
        github: "https://github.com/rdmondal100/Projects/01-Todo-App-js"
    },
    {
        title: "Kanban Board",
        description: "A kanban board to manage your task more efficiently.",
        img: "https://source.unsplash.com/300x200/?task",
        demo: "https://rdmondal100.github.io/Projects/02-Kanban-Board-js/kanban.html", // GitHub Pages link
        github: "https://github.com/rdmondal100/Projects/02-Kanban-Board-js/"
    },
    // {
    //     title: "Weather App",
    //     description: "A weather app using OpenWeather API.",
    //     img: "https://source.unsplash.com/300x200/?weather",
    //     demo: "https://rdmondal100.github.io/weather-app/", // GitHub Pages link
    //     github: "https://github.com/rdmondal100/weather-app"
    // }
];


const container = document.getElementById("projects");

projects.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("project-card");

    card.innerHTML = `
        <img src="${project.img}" class="project-img" alt="${project.title}">
        <h2 class="project-title">${project.title}</h2>
        <p class="project-description">${project.description}</p>
        <div class="project-links">
            <a href="${project.demo}" target="_blank" class="btn demo">Live Demo</a>
            <a href="${project.github}" target="_blank" class="btn github">GitHub</a>
        </div>
    `;

    container.appendChild(card);
});

