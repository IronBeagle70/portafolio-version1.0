const allProjects={
    "portafolio":{
        "image":`<img class="modal_img" src="/images/port.PNG" alt="project_doc">`,
        "title":`<h2 class="modal_title">Mi Primer Portafolio</h2>`,
        "description": `<p class="description-modal">Versión 1.0 de mi portafolio donde están los proyectos que realize hasta el momento y está hecha con la santa trinidad de la web (HTML, CSS y JS)</p>`,
        "link":`<a class="link_view" rel="noopener noreferrer" href="#">Ver Proyecto</a>`
    },
    "gitPoo":{
        "image":`<img class="modal_img" src="/images/POO.PNG" alt="project_doc">`,
        "title":`<h2 class="modal_title">Pequeña app con POO</h2>`,
        "description": `<p class="description-modal">Una pequeña aplicación de guardar, registrar y eliminar hecha con POO, además usando git para subirlo a un repositorio en GitHub</p>`,
        "link":`<a class="link_view" target="_blank" rel="noopener noreferrer" href="https://github.com/IronBeagle70/learning-git">Ver Proyecto</a>`
    },
    "gitPooServer":{
        "image":`<img class="modal_img" src="/images/POOserver.PNG" alt="project_doc">`,
        "title":`<h2 class="modal_title">App con POO en un servidor</h2>`,
        "description": `<p class="description-modal">La misma app de POO anterior pero esta vez subido en un servidor hecho en Node.js y Express</p>`,
        "link":`<a class="link_view" target="_blank" rel="noopener noreferrer" href="https://github.com/IronBeagle70/POO-in-Server-node">Ver Proyecto</a>`
    },
    "normalApi":{
        "image":`<img class="modal_img" src="/images/normalrestApi.PNG" alt="project_doc">`,
        "title":`<h2 class="modal_title">Desarrollo de una REST API</h2>`,
        "description": `<p class="description-modal">Desarrollo de una REST API usando GET, PUT, DELETE  y POST en un archivo JSON que simula una Base de Datos</p>`,
        "link":`<a class="link_view" target="_blank" rel="noopener noreferrer" href="https://github.com/IronBeagle70/my-first-restapi">Ver Proyecto</a>`
    },
    "apiWithMongo":{
        "image":`<img class="modal_img" src="/images/restApiMongo.PNG" alt="project_doc">`,
        "title":`<h2 class="modal_title">REST API con MongoDB</h2>`,
        "description": `<p class="description-modal">Mejora de la anterior REST API añadiendo el uso de MongoDB haciendo las mismas peticiones, validándolas y mostrándolas en una paginación</p>`,
        "link":`<a class="link_view" target="_blank" rel="noopener noreferrer" href="https://github.com/IronBeagle70/restApi-with-Mongodb">Ver Proyecto</a>`
    }
};


/**
 * --------------------------
 */

const modal=document.querySelector('.modal');
const closeModal=document.querySelector('.modal_close');

//mostral modal en cada proyecto
document.querySelector('.projects-container').addEventListener('click',function(e){
    e.preventDefault();
    // console.log(e.target);
    if(e.target.matches('.first') || e.target.matches('.text-project')){
        modal.style.display='flex';
        const titleModal=document.querySelector('.modal_title_container');
        const imgModal=document.querySelector('.modal_img_container');
        const descriptionModal=document.querySelector('.description_modal_container');
        const linkModal=document.querySelector('.view_btn');
        titleModal.innerHTML=allProjects.portafolio.title;
        imgModal.innerHTML=allProjects.portafolio.image;
        descriptionModal.innerHTML=allProjects.portafolio.description;
        linkModal.innerHTML=allProjects.portafolio.link;
    }

    if(e.target.matches('.second')){
        modal.style.display='flex';
        const titleModal=document.querySelector('.modal_title_container');
        const imgModal=document.querySelector('.modal_img_container');
        const descriptionModal=document.querySelector('.description_modal_container');
        const linkModal=document.querySelector('.view_btn');
        titleModal.innerHTML=allProjects.gitPoo.title;
        imgModal.innerHTML=allProjects.gitPoo.image;
        descriptionModal.innerHTML=allProjects.gitPoo.description;
        linkModal.innerHTML=allProjects.gitPoo.link;
    }

    if(e.target.matches('.third')){
        modal.style.display='flex';
        const titleModal=document.querySelector('.modal_title_container');
        const imgModal=document.querySelector('.modal_img_container');
        const descriptionModal=document.querySelector('.description_modal_container');
        const linkModal=document.querySelector('.view_btn');
        titleModal.innerHTML=allProjects.gitPooServer.title;
        imgModal.innerHTML=allProjects.gitPooServer.image;
        descriptionModal.innerHTML=allProjects.gitPooServer.description;
        linkModal.innerHTML=allProjects.gitPooServer.link;
    }

    if(e.target.matches('.fourth')){
        modal.style.display='flex';
        const titleModal=document.querySelector('.modal_title_container');
        const imgModal=document.querySelector('.modal_img_container');
        const descriptionModal=document.querySelector('.description_modal_container');
        const linkModal=document.querySelector('.view_btn');
        titleModal.innerHTML=allProjects.normalApi.title;
        imgModal.innerHTML=allProjects.normalApi.image;
        descriptionModal.innerHTML=allProjects.normalApi.description;
        linkModal.innerHTML=allProjects.normalApi.link;
    }

    if(e.target.matches('.fifth')){
        modal.style.display='flex';
        const titleModal=document.querySelector('.modal_title_container');
        const imgModal=document.querySelector('.modal_img_container');
        const descriptionModal=document.querySelector('.description_modal_container');
        const linkModal=document.querySelector('.view_btn');
        titleModal.innerHTML=allProjects.apiWithMongo.title;
        imgModal.innerHTML=allProjects.apiWithMongo.image;
        descriptionModal.innerHTML=allProjects.apiWithMongo.description;
        linkModal.innerHTML=allProjects.apiWithMongo.link;
    }
});

// cerrar o ocultar modal
closeModal.addEventListener('click',function(e){
    e.preventDefault();
    modal.style.display='none';
});

// cerrar o ocultar modal cuando se clickea fuera del modal
window.addEventListener('click',function(e){
    if (e.target===document.querySelector('.modal')) {
        modal.style.display='none';
    }
});


