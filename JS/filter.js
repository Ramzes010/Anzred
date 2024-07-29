document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.project-link');
    const parent = document.getElementById('project-container');
    const projects = Array.from(document.querySelectorAll('.project-container'));

    const createProjectContainer = (project) => {
        const container = document.createElement('div');
        container.classList.add('project-container', 'active');
        container.innerHTML = `
            <div class="project__video"></div>
            <p class="project__title">${project.querySelector('.project__title').innerText}</p>
            <p class="project__subtitle">${project.querySelector('.project__subtitle').innerText}</p>
        `;
        return container;
    };

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const id = this.id;

            links.forEach(link => link.classList.remove('active'));
            this.classList.add('active');

            // Удалить все текущие проекты
            parent.innerHTML = '';

            if (id === 'all-projects') {
                projects.forEach(project => {
                    const container = createProjectContainer(project);
                    parent.appendChild(container);
                });
            } else {
                projects.forEach(project => {
                    if (project.getAttribute('data-category') === id) {
                        const container = createProjectContainer(project);
                        parent.appendChild(container);
                    }
                });
            }
        });
    });

    // Изначально отображать все проекты
    projects.forEach(project => {
        const container = createProjectContainer(project);
        parent.appendChild(container);
    });
});
