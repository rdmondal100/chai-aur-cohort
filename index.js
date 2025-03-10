// const projects = [
//     { 
//         title: "Todo APP",
//         description: "A sleek todo app built with HTML, CSS, and JS.",
//         img: "https://source.unsplash.com/300x200/?website",
//         demo: "https://rdmondal100.github.io/chai-aur-cohort/Projects/01-Todo-App-js/index.html", // GitHub Pages link
//         github: "https://github.com/rdmondal100/chai-aur-cohort/Projects/01-Todo-App-js"
//     },
//     {
//         title: "Kanban Board",
//         description: "A kanban board to manage your task more efficiently.",
//         img: "https://source.unsplash.com/300x200/?task",
//         demo: "https://rdmondal100.github.io/chai-aur-cohort/Projects/02-Kanban-Board-js/kanban.html", // GitHub Pages link
//         github: "https://github.com/rdmondal100/chai-aur-cohort/Projects/02-Kanban-Board-js/"
//     },
//     // {
//     //     title: "Weather App",
//     //     description: "A weather app using OpenWeather API.",
//     //     img: "https://source.unsplash.com/300x200/?weather",
//     //     demo: "https://rdmondal100.github.io/weather-app/", // GitHub Pages link
//     //     github: "https://github.com/rdmondal100/weather-app"
//     // }
// ];


// const container = document.getElementById("projects");

// projects.forEach(project => {
//     const card = document.createElement("div");
//     card.classList.add("project-card");

//     card.innerHTML = `
//         <img src="${project.img}" class="project-img" alt="${project.title}">
//         <h2 class="project-title">${project.title}</h2>
//         <p class="project-description">${project.description}</p>
//         <div class="project-links">
//             <a href="${project.demo}" target="_blank" class="btn demo">Live Demo</a>
//             <a href="${project.github}" target="_blank" class="btn github">GitHub</a>
//         </div>
//     `;

//     container.appendChild(card);
// });




    const projects = [
            { 
                title: "Todo APP",
                description: "A sleek todo app built with HTML, CSS, and JS.",
                img: "./assets/projectsThumbNail/01_todo.png",
                demo: "https://rdmondal100.github.io/chai-aur-cohort/Projects/01-Todo-App-js/index.html",
                github: "https://github.com/rdmondal100/chai-aur-cohort/tree/main/Projects/01-Todo-App-js"
            },
            {
                title: "Kanban Board",
                description: "A kanban board to manage your tasks more efficiently.",
                img: "./assets/projectsThumbNail/02_kanbanboard.png",
                demo: "https://rdmondal100.github.io/chai-aur-cohort/Projects/02-Kanban-Board-js/kanban.html",
                github: "https://github.com/rdmondal100/chai-aur-cohort/tree/main/Projects/02-Kanban-Board-js"
            }
        ];


        document.addEventListener("DOMContentLoaded", () => {
            const container = document.getElementById("projects");
            console.log(container); // Check if it's not null
        
            projects.forEach(project => {
                const card = document.createElement("div");
                card.classList.add(
                    "bg-white", "p-4", "rounded-lg", "shadow-lg", "text-center",
                    "flex", "flex-col", "justify-center", "items-center" // Fixed item-center → items-center
                );
                        
                card.innerHTML = `
                    <img src="${project.img}"  class="md:w-full w-80% h-40 object-cover rounded-md" alt="${project.title}">
                    <h3 class="text-xl font-bold mt-4">${project.title}</h3>
                    <p class="text-gray-600 mt-2">${project.description}</p>
                    <div class="mt-4">
                        <a href="${project.demo}" target="_blank" class="bg-blue-500 text-white px-3 py-1 rounded">Live Demo</a>
                        <a href="${project.github}" target="_blank" class="bg-gray-700 text-white px-3 py-1 rounded ml-2">GitHub</a>
                    </div>
                `;
        
                container.appendChild(card);
            });
        });
        