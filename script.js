// Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Highlight clicked nav item
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(el => el.classList.remove('active'));
        link.classList.add('active');
    });
});

// Console greeting
console.log("Welcome to Franco Agustín Valli's portfolio! 🚀");

document.getElementById("scroll-to-top").addEventListener("click", function (e) {
    e.preventDefault(); // evita el salto por defecto
    window.scrollTo({ top: 0, behavior: 'smooth' }); // scroll suave al tope
});

document.querySelectorAll('section h3').forEach(h3 => {
  h3.style.cursor = 'pointer';
  h3.addEventListener('click', () => {
    const content = h3.nextElementSibling;
    if (content) {
      const yOffset = -120; // Ajusta este valor según la altura de tu navbar y espacio deseado
      // Posición del contenido
      const contentY = content.getBoundingClientRect().top + window.pageYOffset;
      // Posición del subtítulo
      const titleY = h3.getBoundingClientRect().top + window.pageYOffset;
      // Queremos hacer scroll hasta un poco arriba del subtítulo para que se vea bien
      const scrollToY = titleY + yOffset;
      window.scrollTo({ top: scrollToY, behavior: 'smooth' });
    }
  });
});

const translations = {
  en: {
    home: "Home",
    projects: "Projects",
    contact: "Contact",
    title: "I'm Franco Agustín <span>Valli</span>",
    projectsTitle: "My projects",
    twosTitle: "Two's complement algorithm",
    twosDesc: "This algorithm represents signed binary numbers using two's complement. The input is a negative number in the decimal system, and the output is its representation in the binary system.",
    twosLink: "You can check it out on <a href='https://github.com/francovalli123/Two-s-Complement'><span>GitHub</span></a>.",
    djangoTitle: "Blog-style website built with Django.",
    djangoWhat: "What is it about?",
    djangoWhatDesc: "TechZone is a website that simulates a platform for uploading tech-related products.",
    djangoDo: "What can you do?",
    djangoDoDesc: `It allows users to contact each other for convenience in case they're interested in acquiring products. It's important to note that each product can only be deleted or updated by its owner. If a user is not the owner of a product, they can only view its details. Additionally, a user cannot edit or delete another user's profile.`,
    djangoDoMore: `On TechZone, you can register, log in, log out, create a profile, update it, view it, add products (with or without photos), and modify or delete them if you're the owner of the post. As mentioned earlier, users can also send messages to each other through the "Send Message" section and check their inbox in the "View Messages" section.`,
    djangoAbout: `The navigation bar also includes an "About" section, which provides a brief description of what TechZone is.`,
    djangoWhere: "Where can I see it?",
    djangoLink:"You can check it out on <a href='https://www.youtube.com/watch?v=3ATH6il9M9k&ab_channel=FrancoValli'><span>Youtube</span></a> or <a href='https://github.com/francovalli123/Proyecto-Final-40425'><span>GitHub</span></a>.",
    springTitle: "Application built with Spring Boot",
    springWhat: "What is it about?",
    springWhatDesc: `The project consists of developing an application that allows us to manage the sales of a store. It includes a Postman collection to test the project and the SQL script to create the database tables.`,
    springGoals: "Specific objectives",
    springList: [
      "Understanding business changes.",
      "Adding validations.",
      "Consuming external services.",
      "System validation against new requirements."
    ],
    springWhere: "Where can I see it?",
    springLink: `You can check it out on <a href='https://github.com/francovalli123/Proyecto-Springboot'><span>GitHub</span></a>.`,
    footer: "&copy; 2025 Personal Portfolio Web. All rights reserved.",
    contactTitle: "Contact me",
    contactText: "You can reach me at <a href='mailto:frankovalli123@gmail.com'>frankovalli123@gmail.com</a>.",
    aboutTitle: "About me",
    aboutP1: "Greetings! My name is <strong>Franco Agustín Valli</strong>. I'm 20 years old and I'm from Argentina. I'm a Systems Engineering student at UTN, Facultad Regional Delta, located in Campana, Buenos Aires.",
    aboutP2: "Currently, I'm learning frontend development on my own. I'm also learning the basic concepts of CyberSecurity and AI Engineering ",
    langToggle: "ES"
  },
  es: {
    home: "Inicio",
    projects: "Proyectos",
    contact: "Contacto",
    title: "Soy Franco Agustín <span>Valli</span>",
    projectsTitle: "Mis proyectos",
    twosTitle: "Algoritmo de complemento a dos",
    twosDesc: "Este algoritmo representa números binarios con signo usando el complemento a dos. La entrada es un número decimal negativo y la salida es su representación en binario.",
    twosLink: "Podés verlo en <a href='https://github.com/francovalli123/Two-s-Complement'><span>GitHub</span></a>.",
    djangoTitle: "Sitio estilo blog hecho con Django.",
    djangoWhat: "¿De qué se trata?",
    djangoWhatDesc: "TechZone es una web que simula una plataforma para publicar productos tecnológicos.",
    djangoDo: "¿Qué podés hacer?",
    djangoDoDesc: `Permite a los usuarios contactarse en caso de estar interesados en adquirir productos. Cada producto solo puede ser editado o eliminado por su dueño. Si no sos el dueño, solo podés ver los detalles. Tampoco podés editar ni eliminar perfiles ajenos.`,
    djangoDoMore: `En TechZone podés registrarte, iniciar/cerrar sesión, crear y editar tu perfil, añadir productos (con o sin fotos) y modificarlos o eliminarlos si son tuyos. También podés mandar mensajes y revisar tu bandeja de entrada.`,
    djangoAbout: `En la barra de navegación también hay una sección "Sobre nosotros" que describe brevemente TechZone.`,
    djangoWhere: "¿Dónde verlo?",
    djangoLink:"Podés verlo en <a href='https://www.youtube.com/watch?v=3ATH6il9M9k&ab_channel=FrancoValli'><span>Youtube</span></a> o <a href='https://github.com/francovalli123/Proyecto-Final-40425'><span>GitHub</span></a>.",
    springTitle: "Aplicación desarrollada con Spring Boot",
    springWhat: "¿De qué se trata?",
    springWhatDesc: `Consiste en una app para gestionar ventas de un local. Incluye colección de Postman y script SQL para la base de datos.`,
    springGoals: "Objetivos específicos",
    springList: [
      "Comprensión de cambios de negocio.",
      "Agregado de validaciones.",
      "Consumo de servicios externos.",
      "Validación del sistema frente a nuevos requisitos."
    ],
    springWhere: "¿Dónde verlo?",
    springLink: `Podés verlo en <a href='https://github.com/francovalli123/Proyecto-Springboot'><span>GitHub</span></a>.`,
    contactTitle: "Contáctame",
    contactText: "Podés contactarme en <a href='mailto:frankovalli123@gmail.com'>frankovalli123@gmail.com</a>.",
    footer: "&copy; 2025 Portfolio personal. Todos los derechos reservados.",
    // Traducir al español
    aboutTitle: "Sobre mí",
    aboutP1: "¡Hola! Me llamo <strong>Franco Agustín Valli</strong>. Tengo 20 años y soy de Argentina. Estudio Ingeniería en Sistemas en la UTN, Facultad Regional Delta, ubicada en Campana, Buenos Aires.",
    aboutP2: "Actualmente estoy aprendiendo desarrollo frontend por mi cuenta. También estoy aprendiendo los conceptos básicos de ciberseguridad e ingeniería en IA. ",
    langToggle: "EN"
  }
};

let currentLang = "en";

function updateLanguage(lang) {
  const t = translations[lang];

  document.querySelector('#scroll-to-top').textContent = t.home;
  document.querySelector('a[href="#projects"]').textContent = t.projects;
  document.querySelector('a[href="#contact"]').textContent = t.contact;
  document.querySelector("main h1").innerHTML = t.title;
  document.querySelector("#projects h2").textContent = t.projectsTitle;

  document.querySelector("#two-complement-title").textContent = t.twosTitle;
  document.querySelector("#two-complement-content .project-text p").textContent = t.twosDesc;
  document.querySelector("#two-complement-content .project-text p + p").innerHTML = t.twosLink;

  document.querySelector("#django-title").textContent = t.djangoTitle;
  const djangoText = document.querySelector("#django-content .project-text");
  djangoText.querySelector("h4:nth-of-type(1)").textContent = t.djangoWhat;
  djangoText.querySelector("p:nth-of-type(1)").textContent = t.djangoWhatDesc;
  djangoText.querySelector("h4:nth-of-type(2)").textContent = t.djangoDo;
  djangoText.querySelector("p:nth-of-type(2)").textContent = t.djangoDoDesc;
  djangoText.querySelector("p:nth-of-type(3)").textContent = t.djangoDoMore;
  djangoText.querySelector("p:nth-of-type(4)").textContent = t.djangoAbout;
  djangoText.querySelector("h4:nth-of-type(3)").textContent = t.djangoWhere;
  djangoText.querySelector("p:nth-of-type(5)").innerHTML = t.djangoLink;




  document.querySelector("#springboot-title").textContent = t.springTitle;
  const springText = document.querySelector("#springboot-content .project-text");
  springText.querySelector("h4:nth-of-type(1)").textContent = t.springWhat;
  springText.querySelector("p:nth-of-type(1)").textContent = t.springWhatDesc;
  springText.querySelector("h4:nth-of-type(2)").textContent = t.springGoals;
  const listItems = springText.querySelectorAll("ul li");
  listItems.forEach((li, i) => {
    li.textContent = t.springList[i];
  });
  springText.querySelector("h4:nth-of-type(3)").textContent = t.springWhere;
  springText.querySelector("p:nth-of-type(2)").innerHTML = t.springLink;
  document.getElementById('about-title').textContent = t.aboutTitle;
  document.getElementById('about-p1').innerHTML = t.aboutP1;
  document.getElementById('about-p2').textContent = t.aboutP2;

  const contactSection = document.querySelector('#contact');
  contactSection.querySelector('h2').textContent = t.contactTitle;
  contactSection.querySelector('p').innerHTML = t.contactText;

  document.querySelector("footer p").innerHTML = t.footer;
  document.querySelector("#language-toggle").textContent = t.langToggle;
  currentLang = lang;
  localStorage.setItem("lang", lang);
}

document.getElementById("language-toggle").addEventListener("click", () => {
  const newLang = currentLang === "en" ? "es" : "en";
  updateLanguage(newLang);
});

window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "en";
  updateLanguage(savedLang);
});
