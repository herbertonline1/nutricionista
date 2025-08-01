// Animate elements when scrolled into view
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.service-card, .package-card, .result-card');

  elements.forEach((el, i) => {
    const elementTop = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      el.style.animation = `fadeInUp 0.6s ease ${i * 0.1}s forwards`;
      el.style.opacity = 0;
    }
  });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Mobile Menu Toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
    }

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// WhatsApp Form Submission
const form = document.getElementById('appointmentForm');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const service = document.getElementById('service').options[document.getElementById('service').selectedIndex].text;
  const message = document.getElementById('message').value;

  const whatsappMessage = `*Novo Agendamento - NutriVida*
            
*Nome:* ${name}
*E-mail:* ${email}
*Telefone:* ${phone}
*Serviço de Interesse:* ${service}
*Mensagem:* ${message || 'Nenhuma mensagem adicional'}`;

  const encodedMessage = encodeURIComponent(whatsappMessage);
  window.open(`https://api.whatsapp.com/send?phone=5581992757332&text=${encodedMessage}`, '_blank');

  form.reset();
});

// Sticky Header on Scroll
window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});




function sendWhatsApp(element) {
  const packageName = element.getAttribute('data-package');
  const message = `Tenho interesse nesse pacote promocional: ${packageName}`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappNumber = '5581992757332'; // Substitua pelo número da nutricionista
  const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;

  window.open(whatsappLink, '_blank');
}





// Função para abrir o modal
function openModal(card) {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const img = card.querySelector("img");

  modal.style.display = "flex"; // Exibe o modal
  modalImage.src = img.src; // Define a imagem do modal
}

// Função para fechar o modal
function closeModal() {
  const modal = document.getElementById("imageModal");
  modal.style.display = "none"; // Oculta o modal
}





let currentIndex = 0;

function moveCarousel(direction) {
  const carousel = document.getElementById('carousel');
  const cards = document.querySelectorAll('.result-card');
  const total = cards.length;
  const visible = window.innerWidth >= 768 ? 3 : 1;
  const maxIndex = Math.ceil(total / visible) - 1;

  currentIndex += direction;

  // loop infinito
  if (currentIndex > maxIndex) currentIndex = 0;
  if (currentIndex < 0) currentIndex = maxIndex;

  const percentage = -(100 * currentIndex);
  carousel.style.transform = `translateX(${percentage}%)`;
}

// function openModal(card) {
//   const imgSrc = card.querySelector('img').src;
//   const modal = document.getElementById("image-modal");
//   const modalImg = document.getElementById("modal-img");
//   modal.style.display = "flex";
//   modalImg.src = imgSrc;
// }

// function closeModal() {
//   document.getElementById("image-modal").style.display = "none";
// }





// DARKMODE 


const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Função para atualizar o ícone do botão
function updateIcon() {
  if (body.classList.contains('dark-mode')) {
    darkModeToggle.textContent = '☀️'; // Sol para dark mode ativo
  } else {
    darkModeToggle.textContent = '🌙'; // Lua para modo claro
  }
}

// Verifica se o usuário já tem preferência salva
if (localStorage.getItem('darkMode') === 'enabled') {
  body.classList.add('dark-mode');
}
updateIcon();

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.setItem('darkMode', 'disabled');
  }
  updateIcon();
});

// FIM DARKMODE




const translations = {
  pt: {
    home: "Início",
    about: "Sobre",
    services: "Serviços",
    packages: "Pacotes",
    results: "Resultados",
    nutritionist: "Nutricionista",
    contact: "Contato",
    heroTitle: "Sua jornada para uma vida mais saudável começa aqui",
    heroSubtitle: "Nutrição personalizada, orientação científica e acompanhamento contínuo para mudanças duradouras nos seus hábitos alimentares.",
    btnSchedule: "Agende sua consulta",
    btnServices: "Nossos serviços",
    aboutTitle: "Cuidado nutricional completo e personalizado",
    aboutText1: "O NutriVida foi fundado com a missão de ajudar pessoas a transformarem sua relação com a comida e alcançarem seus objetivos de saúde através de uma abordagem científica, humana e personalizada.",
    aboutText2: "Nossos valores são baseados em evidências científicas atualizadas, respeito às individualidades de cada paciente e um compromisso genuíno com resultados duradouros.",
    aboutText3: "Cada plano nutricional é cuidadosamente elaborado após avaliação completa do histórico médico, hábitos alimentares, rotina e objetivos específicos.",
    serviceNutrition: "Nutrição Clínica",
    serviceNutritionDesc: "Atendimento especializado para tratamento de doenças como diabetes, hipertensão, dislipidemia e distúrbios gastrointestinais.",
    serviceNutritionPrice: "R$ 250 a consulta",
    serviceSports: "Nutrição Esportiva",
    serviceSportsDesc: "Planejamento alimentar para atletas e praticantes de atividade física, visando performance, recuperação e composição corporal.",
    serviceSportsPrice: "R$ 280 a consulta",
    serviceWeightLoss: "Nutrição para Emagrecimento",
    serviceWeightLossDesc: "Plano personalizado para perda de peso saudável e sustentável, sem dietas restritivas ou modismos.",
    serviceWeightLossPrice: "R$ 230 a consulta",
    servicePreventive: "Nutrição Preventiva",
    servicePreventiveDesc: "Orientação nutricional para manutenção da saúde e prevenção de doenças através da alimentação.",
    servicePreventivePrice: "R$ 220 a consulta",
    serviceFollowUp: "Acompanhamento Nutricional",
    serviceFollowUpDesc: "Sessões de acompanhamento para ajustes no plano alimentar e manutenção dos resultados.",
    serviceFollowUpPrice: "R$ 180 a sessão",
    serviceBodyAssessment: "Avaliação Corporal",
    serviceBodyAssessmentDesc: "Avaliação detalhada da composição corporal com bioimpedância e medidas antropométricas.",
    serviceBodyAssessmentPrice: "R$ 120 a avaliação",
    packagesTitle: "Pacotes Promocionais",
    btnHire: "Contratar",
    contactLocationTitle: "Nossa Localização",
    contactFormTitle: "Agende sua consulta",
    packageBronze: "Pacote Bronze",
    packageBronzePrice: "R$ 600",
    packageBronzeFeatures: [
      "3 consultas presenciais",
      "Avaliação corporal completa",
      "Orientação nutricional básica",
      "Plano alimentar personalizado",
      "Suporte por e-mail"
    ],
    nutritionistSpecialties: [
      "Nutrição Clínica",
      "Nutrição Esportiva",
      "Nutrição Funcional",
      "Nutrição Comportamental"
    ],
    packageSilver: "Pacote Prata",
    packageSilverPrice: "R$ 900",
    packageSilverFeatures: [
      "5 consultas presenciais",
      "2 avaliações corporais",
      "Orientação nutricional detalhada",
      "Plano alimentar personalizado",
      "Receitas e cardápios variados",
      "Suporte por e-mail e WhatsApp"
    ],
    packageGold: "Pacote Ouro",
    packageGoldPrice: "R$ 1,400",
    packageGoldFeatures: [
      "8 consultas presenciais",
      "4 avaliações corporais",
      "Orientação nutricional avançada",
      "Plano alimentar personalizado",
      "Cardápios semanais e receitas exclusivas",
      "Suporte ilimitado por WhatsApp",
      "Lista de compras inteligente",
      "E-book exclusivo de nutrição"
    ],
    resultsTitle: "Resultados dos Nossos Pacientes",
    resultsSubtitle: "Algumas histórias de transformação através da reeducação alimentar",
    nutritionistName: "Dra. Juliana Martins",
    nutritionistBio: "Nutricionista formada pela Universidade Federal de São Paulo (UNIFESP) com especialização em Nutrição Clínica e Esportiva.",
    nutritionistExperience: "Com mais de 10 anos de experiência clínica, já atendeu mais de 1.000 pacientes, ajudando-os a alcançarem seus objetivos de saúde através da alimentação.",
    contactTitle: "Entre em Contato",
    contactLocationTitle: "Nossa Localização",
    contactLocation: "Av. Paulista, 1000 - Conj. 1210, São Paulo - SP, 01310-100",
    contactPhoneTitle: "Telefone",
    contactPhone: "(11) 1234-5678",
    contactEmailTitle: "E-mail",
    contactEmail: "contato@nutrivida.com.br",
    contactHoursTitle: "Horário de Atendimento",
    contactHours: "Segunda a Sexta: 8h às 19h, Sábado: 8h às 13h",
    formNameLabel: "Nome Completo",
    formEmailLabel: "E-mail",
    formPhoneLabel: "Telefone",
    formServiceLabel: "Serviço de Interesse",
    formServiceOptions: {
      default: "Selecione um serviço",
      nutritionClinical: "Nutrição Clínica",
      nutritionSports: "Nutrição Esportiva",
      weightLoss: "Nutrição para Emagrecimento",
      nutritionPreventive: "Nutrição Preventiva",
      nutritionalMonitoring: "Acompanhamento Nutricional",
      bodyAssessment: "Avaliação Corporal",
      packageBronze: "Pacote Bronze",
      packageSilver: "Pacote Prata",
      packageGold: "Pacote Ouro"
    },
    formMessageLabel: "Mensagem/Observações",
    formSubmitBtn: "Enviar via WhatsApp",
    footerAbout: "Consultório de Nutrição especializado em saúde, qualidade de vida e desempenho esportivo através de uma abordagem científica e humanizada.",
    footerLinksTitle: "Links Rápidos",
    footerContactTitle: "Contato",
    footerRights: "© 2023 NutriVida - Todos os direitos reservados"
  },
  en: {
    home: "Home",
    about: "About",
    services: "Services",
    packages: "Packages",
    results: "Results",
    nutritionist: "Nutritionist",
    contact: "Contact",
    heroTitle: "Your journey to a healthier life starts here",
    heroSubtitle: "Personalized nutrition, scientific guidance, and continuous support for lasting changes in your eating habits.",
    btnSchedule: "Schedule your appointment",
    btnServices: "Our services",
    aboutTitle: "Complete and Personalized Nutritional Care",
    aboutText1: "NutriVida was founded with the mission of helping people transform their relationship with food and achieve their health goals through a scientific, human, and personalized approach.",
    aboutText2: "Our values are based on updated scientific evidence, respect for the individualities of each patient, and a genuine commitment to lasting results.",
    aboutText3: "Each nutritional plan is carefully crafted after a complete evaluation of medical history, eating habits, routine, and specific goals.",
    serviceNutrition: "Clinical Nutrition",
    serviceNutritionDesc: "Specialized care for the treatment of diseases such as diabetes, hypertension, dyslipidemia, and gastrointestinal disorders.",
    serviceNutritionPrice: "$250 per consultation",
    serviceSports: "Sports Nutrition",
    serviceSportsDesc: "Nutritional planning for athletes and physical activity practitioners, aiming for performance, recovery, and body composition.",
    serviceSportsPrice: "$280 per consultation",
    serviceWeightLoss: "Weight Loss Nutrition",
    serviceWeightLossDesc: "Personalized plan for healthy and sustainable weight loss, without restrictive diets or fads.",
    serviceWeightLossPrice: "$230 per consultation",
    servicePreventive: "Preventive Nutrition",
    servicePreventiveDesc: "Nutritional guidance for health maintenance and disease prevention through diet.",
    servicePreventivePrice: "$220 per consultation",
    serviceFollowUp: "Nutritional Follow-Up",
    serviceFollowUpDesc: "Follow-up sessions for adjustments to the dietary plan and maintenance of results.",
    serviceFollowUpPrice: "$180 per session",
    serviceBodyAssessment: "Body Assessment",
    serviceBodyAssessmentDesc: "Detailed assessment of body composition with bioimpedance and anthropometric measurements.",
    serviceBodyAssessmentPrice: "$120 per assessment",
    packageBronze: "Bronze Package",
    packagesTitle: "Promotional Packages",
    btnHire: "Hire",
    contactLocationTitle: "Our Location",
    contactFormTitle: "Schedule your appointment",
    packageBronzePrice: "$600",
    packageBronzeFeatures: [
      "3 in-person consultations",
      "Complete body assessment",
      "Basic nutritional guidance",
      "Personalized meal plan",
      "Email support"
    ],
    packageSilver: "Silver Package",
    packageSilverPrice: "$900",
    packageSilverFeatures: [
      "5 in-person consultations",
      "2 body assessments",
      "Detailed nutritional guidance",
      "Personalized meal plan",
      "Varied recipes and menus",
      "Email and WhatsApp support"
    ],
    packageGold: "Gold Package",
    packageGoldPrice: "$1.400",
    packageGoldFeatures: [
      "8 in-person consultations",
      "4 body assessments",
      "Advanced nutritional guidance",
      "Personalized meal plan",
      "Weekly menus and exclusive recipes",
      "Unlimited WhatsApp support",
      "Smart shopping list",
      "Exclusive nutrition e-book"
    ],
    nutritionistSpecialties: [
      "Clinical Nutrition",
      "Sports Nutrition",
      "Functional Nutrition",
      "Behavioral Nutrition"
    ],
    resultsTitle: "Results of Our Patients",
    resultsSubtitle: "Some transformation stories through dietary re-education",
    nutritionistName: "Dr. Juliana Martins",
    nutritionistBio: "Nutritionist graduated from the Federal University of São Paulo (UNIFESP) with a specialization in Clinical and Sports Nutrition.",
    nutritionistExperience: "With over 10 years of clinical experience, she has helped more than 1,000 patients achieve their health goals through nutrition.",
    contactTitle: "Get in Touch",
    contactLocationTitle: "Our Location",
    contactLocation: "Av. Paulista, 1000 - Suite 1210, São Paulo - SP, 01310-100",
    contactPhoneTitle: "Phone",
    contactPhone: "(11) 1234-5678",
    contactEmailTitle: "Email",
    contactEmail: "contact@nutrivida.com.br",
    contactHoursTitle: "Business Hours",
    contactHours: "Monday to Friday: 8 AM to 7 PM, Saturday: 8 AM to 1 PM",
    formNameLabel: "Full Name",
    formEmailLabel: "Email",
    formPhoneLabel: "Phone",
    formServiceLabel: "Service of Interest",
    formServiceOptions: {
      default: "Select a service",
      nutritionClinical: "Clinical Nutrition",
      nutritionSports: "Sports Nutrition",
      weightLoss: "Weight Loss Nutrition",
      nutritionPreventive: "Preventive Nutrition",
      nutritionalMonitoring: "Nutritional Monitoring",
      bodyAssessment: "Body Assessment",
      packageBronze: "Bronze Package",
      packageSilver: "Silver Package",
      packageGold: "Gold Package"
    },
    formMessageLabel: "Message/Notes",
    formSubmitBtn: "Send via WhatsApp",
    footerAbout: "Nutrition consulting specializing in health, quality of life, and sports performance through a scientific and humanized approach.",
    footerLinksTitle: "Quick Links",
    footerContactTitle: "Contact",
    footerRights: "© 2023 NutriVida - All rights reserved"
  },
  es: {
    home: "Inicio",
    about: "Acerca de",
    services: "Servicios",
    packages: "Paquetes",
    results: "Resultados",
    nutritionist: "Nutricionista",
    contact: "Contacto",
    heroTitle: "Tu camino hacia una vida más saludable comienza aquí",
    heroSubtitle: "Nutrición personalizada, orientación científica y acompañamiento continuo para cambios duraderos en tus hábitos alimenticios.",
    btnSchedule: "Agenda tu consulta",
    btnServices: "Nuestros servicios",
    aboutTitle: "Cuidado nutricional completo y personalizado",
    aboutText1: "NutriVida fue fundado con la misión de ayudar a las personas a transformar su relación con la comida y alcanzar sus objetivos de salud a través de un enfoque científico, humano y personalizado.",
    aboutText2: "Nuestros valores se basan en evidencia científica actualizada, respeto por las individualidades de cada paciente y un compromiso genuino con resultados duraderos.",
    aboutText3: "Cada plan nutricional se elabora cuidadosamente tras una evaluación completa de la historia médica, hábitos alimentarios, rutina y objetivos específicos.",
    serviceNutrition: "Nutrición Clínica",
    serviceNutritionDesc: "Atención especializada para el tratamiento de enfermedades como diabetes, hipertensión, dislipidemia y trastornos gastrointestinales.",
    serviceNutritionPrice: "R$ 250 por consulta",
    serviceSports: "Nutrición Deportiva",
    serviceSportsDesc: "Planificación nutricional para atletas y practicantes de actividad física, con el objetivo de mejorar el rendimiento, la recuperación y la composición corporal.",
    serviceSportsPrice: "R$ 280 por consulta",
    serviceWeightLoss: "Nutrición para Pérdida de Peso",
    serviceWeightLossDesc: "Plan personalizado para una pérdida de peso saludable y sostenible, sin dietas restrictivas ni modas.",
    serviceWeightLossPrice: "R$ 230 por consulta",
    servicePreventive: "Nutrición Preventiva",
    servicePreventiveDesc: "Orientación nutricional para el mantenimiento de la salud y la prevención de enfermedades a través de la alimentación.",
    servicePreventivePrice: "R$ 220 por consulta",
    serviceFollowUp: "Seguimiento Nutricional",
    serviceFollowUpDesc: "Sesiones de seguimiento para ajustes en el plan alimentario y mantenimiento de resultados.",
    serviceFollowUpPrice: "R$ 180 por sesión",
    serviceBodyAssessment: "Evaluación Corporal",
    serviceBodyAssessmentDesc: "Evaluación detallada de la composición corporal con bioimpedancia y medidas antropométricas.",
    serviceBodyAssessmentPrice: "R$ 120 por evaluación",
    packageBronze: "Paquete Bronce",
    packageBronzePrice: "R$ 600",
    packagesTitle: "Paquetes Promocionales",
    btnHire: "Contratar",
    contactLocationTitle: "Nuestra Ubicación",
    contactFormTitle: "Agenda tu consulta",
    packageBronzeFeatures: [
      "3 consultas presenciales",
      "Evaluación corporal completa",
      "Orientación nutricional básica",
      "Plan alimentario personalizado",
      "Soporte por correo electrónico"
    ],
    nutritionistSpecialties: [
      "Nutrición Clínica",
      "Nutrición Deportiva",
      "Nutrición Funcional",
      "Nutrición Comportamental"
    ],
    packageSilver: "Paquete Plata",
    packageSilverPrice: "R$ 900",
    packageSilverFeatures: [
      "5 consultas presenciales",
      "2 evaluaciones corporales",
      "Orientación nutricional detallada",
      "Plan alimentario personalizado",
      "Recetas y menús variados",
      "Soporte por correo electrónico y WhatsApp"
    ],
    packageGold: "Paquete Oro",
    packageGoldPrice: "R$ 1,400",
    packageGoldFeatures: [
      "8 consultas presenciales",
      "4 evaluaciones corporales",
      "Orientación nutricional avanzada",
      "Plan alimentario personalizado",
      "Menús semanales y recetas exclusivas",
      "Soporte ilimitado por WhatsApp",
      "Lista de compras inteligente",
      "E-book exclusivo de nutrición"
    ],
    resultsTitle: "Resultados de Nuestros Pacientes",
    resultsSubtitle: "Algunas historias de transformación a través de la reeducación alimentaria",
    nutritionistName: "Dra. Juliana Martins",
    nutritionistBio: "Nutricionista graduada de la Universidad Federal de São Paulo (UNIFESP) con especialización en Nutrición Clínica y Deportiva.",
    nutritionistExperience: "Con más de 10 años de experiencia clínica, ha ayudado a más de 1,000 pacientes a alcanzar sus objetivos de salud a través de la alimentación.",
    contactTitle: "Contáctanos",
    contactLocationTitle: "Nuestra Ubicación",
    contactLocation: "Av. Paulista, 1000 - Conj. 1210, São Paulo - SP, 01310-100",
    contactPhoneTitle: "Teléfono",
    contactPhone: "(11) 1234-5678",
    contactEmailTitle: "Correo electrónico",
    contactEmail: "contacto@nutrivida.com.br",
    contactHoursTitle: "Horario de Atención",
    contactHours: "Lunes a Viernes: 8h a 19h, Sábado: 8h a 13h",
    formNameLabel: "Nombre Completo",
    formEmailLabel: "Correo electrónico",
    formPhoneLabel: "Teléfono",
    formServiceLabel: "Servicio de Interés",
    formServiceOptions: {
      default: "Seleccione un servicio",
      nutritionClinical: "Nutrición Clínica",
      nutritionSports: "Nutrición Deportiva",
      weightLoss: "Nutrición para Pérdida de Peso",
      nutritionPreventive: "Nutrición Preventiva",
      nutritionalMonitoring: "Monitoreo Nutricional",
      bodyAssessment: "Evaluación corporal",
      packageBronze: "Paquete Bronce",
      packageSilver: "Paquete Plata",
      packageGold: "Paquete Oro"
    },
    formMessageLabel: "Mensaje/Observaciones",
    formSubmitBtn: "Enviar vía WhatsApp",
    footerAbout: "Consultoría de Nutrición especializada en salud, calidad de vida y rendimiento deportivo a través de un enfoque científico y humanizado.",
    footerLinksTitle: "Enlaces Rápidos",
    footerContactTitle: "Contacto",
    footerRights: "© 2023 NutriVida - Todos los derechos reservados"
  }
};

const languageSelector = document.getElementById('languageSelector');

function translatePage(lang) {
  // Navegação
  document.querySelector('a[href="#home"]').textContent = translations[lang].home;
  document.querySelector('a[href="#about"]').textContent = translations[lang].about;
  document.querySelector('a[href="#services"]').textContent = translations[lang].services;
  document.querySelector('a[href="#packages"]').textContent = translations[lang].packages;
  document.querySelector('a[href="#results"]').textContent = translations[lang].results;
  document.querySelector('a[href="#nutritionist"]').textContent = translations[lang].nutritionist;
  document.querySelector('a[href="#contact"]').textContent = translations[lang].contact;

  // Título da seção Pacotes
  const packagesTitle = document.querySelector('#packages > .container > h2.section-title');
  if (packagesTitle) {
    packagesTitle.textContent = translations[lang].packagesTitle;
  }

  // Atualiza todos os botões "Agendar" que direcionam para o contato
  const scheduleButtons = document.querySelectorAll('a.btn[href="#contact"]');
  scheduleButtons.forEach(btn => {
    btn.textContent = translations[lang].btnSchedule;
  });

  // Botões "Contratar" nos pacotes
  const hireButtons = document.querySelectorAll('#packages .package-card .btn');
  hireButtons.forEach(btn => {
    btn.textContent = translations[lang].btnHire;
  });

  // Título "Nossa Localização" na seção contato
  const contactLocationTitle = document.querySelector('#contact .contact-info > h2');
  if (contactLocationTitle) {
    contactLocationTitle.textContent = translations[lang].contactLocationTitle;
  }

  // Título "Agende sua consulta" no formulário de contato
  const contactFormTitle = document.querySelector('#contact .contact-form > h2');
  if (contactFormTitle) {
    contactFormTitle.textContent = translations[lang].contactFormTitle;
  }

  // Hero
  document.querySelector('.hero h1').textContent = translations[lang].heroTitle;
  document.querySelector('.hero p').textContent = translations[lang].heroSubtitle;
  document.querySelector('.hero .btn').textContent = translations[lang].btnSchedule;
  document.querySelector('.hero .btn.btn-secondary').textContent = translations[lang].btnServices;

  // Sobre
  document.querySelector('#about h2').textContent = translations[lang].aboutTitle;
  const aboutParagraphs = document.querySelectorAll('#about .about-text p');
  if (aboutParagraphs.length >= 3) {
    aboutParagraphs[0].textContent = translations[lang].aboutText1;
    aboutParagraphs[1].textContent = translations[lang].aboutText2;
    aboutParagraphs[2].textContent = translations[lang].aboutText3;
  }

  // Serviços
  const serviceCards = document.querySelectorAll('.service-card');
  if (serviceCards.length >= 6) {
    serviceCards[0].querySelector('h3').textContent = translations[lang].serviceNutrition;
    serviceCards[0].querySelector('p').textContent = translations[lang].serviceNutritionDesc;
    serviceCards[0].querySelector('.service-price').textContent = translations[lang].serviceNutritionPrice;

    serviceCards[1].querySelector('h3').textContent = translations[lang].serviceSports;
    serviceCards[1].querySelector('p').textContent = translations[lang].serviceSportsDesc;
    serviceCards[1].querySelector('.service-price').textContent = translations[lang].serviceSportsPrice;

    serviceCards[2].querySelector('h3').textContent = translations[lang].serviceWeightLoss;
    serviceCards[2].querySelector('p').textContent = translations[lang].serviceWeightLossDesc;
    serviceCards[2].querySelector('.service-price').textContent = translations[lang].serviceWeightLossPrice;

    serviceCards[3].querySelector('h3').textContent = translations[lang].servicePreventive;
    serviceCards[3].querySelector('p').textContent = translations[lang].servicePreventiveDesc;
    serviceCards[3].querySelector('.service-price').textContent = translations[lang].servicePreventivePrice;

    serviceCards[4].querySelector('h3').textContent = translations[lang].serviceFollowUp;
    serviceCards[4].querySelector('p').textContent = translations[lang].serviceFollowUpDesc;
    serviceCards[4].querySelector('.service-price').textContent = translations[lang].serviceFollowUpPrice;

    serviceCards[5].querySelector('h3').textContent = translations[lang].serviceBodyAssessment;
    serviceCards[5].querySelector('p').textContent = translations[lang].serviceBodyAssessmentDesc;
    serviceCards[5].querySelector('.service-price').textContent = translations[lang].serviceBodyAssessmentPrice;
  }

  // Pacotes
  const packageCards = document.querySelectorAll('.package-card');
  if (packageCards.length >= 3) {
    // Pacote Bronze
    packageCards[0].querySelector('h3').textContent = translations[lang].packageBronze;
    packageCards[0].querySelector('.package-price').textContent = translations[lang].packageBronzePrice;
    const bronzeFeatures = packageCards[0].querySelector('.package-features');
    if (bronzeFeatures) {
      bronzeFeatures.innerHTML = translations[lang].packageBronzeFeatures.map(item => `<li>${item}</li>`).join('');
    }

    // Pacote Prata
    packageCards[1].querySelector('h3').textContent = translations[lang].packageSilver;
    packageCards[1].querySelector('.package-price').textContent = translations[lang].packageSilverPrice;
    const silverFeatures = packageCards[1].querySelector('.package-features');
    if (silverFeatures) {
      silverFeatures.innerHTML = translations[lang].packageSilverFeatures.map(item => `<li>${item}</li>`).join('');
    }

    // Pacote Ouro
    packageCards[2].querySelector('h3').textContent = translations[lang].packageGold;
    packageCards[2].querySelector('.package-price').textContent = translations[lang].packageGoldPrice;
    const goldFeatures = packageCards[2].querySelector('.package-features');
    if (goldFeatures) {
      goldFeatures.innerHTML = translations[lang].packageGoldFeatures.map(item => `<li>${item}</li>`).join('');
    }
  }

  // Resultados
  document.querySelector('#results h2').textContent = translations[lang].resultsTitle;
  document.querySelector('#results p.results-subtitle').textContent = translations[lang].resultsSubtitle;

  // Nutricionista
  const nutritionistSection = document.querySelector('#nutritionist');
  if (nutritionistSection) {
    nutritionistSection.querySelector('h2').textContent = translations[lang].nutritionistName;
    const nutritionistParagraphs = nutritionistSection.querySelectorAll('.nutritionist-info p');
    if (nutritionistParagraphs.length >= 3) {
      nutritionistParagraphs[0].textContent = translations[lang].nutritionistBio;
      nutritionistParagraphs[1].textContent = translations[lang].nutritionistExperience;
    }
    // Atualiza as especialidades
    const specialtiesContainer = nutritionistSection.querySelector('.nutritionist-specialties');
    if (specialtiesContainer) {
      specialtiesContainer.innerHTML = translations[lang].nutritionistSpecialties.map(specialty => `<span class="specialty-badge">${specialty}</span>`).join('');
    }
  }

  // Contato
  document.querySelector('#contact h2').textContent = translations[lang].contactTitle || translations[lang].contact;
  const contactInfo = document.querySelectorAll('#contact .contact-text p');
  if (contactInfo.length >= 4) {
    contactInfo[0].textContent = translations[lang].contactLocation;
    contactInfo[1].textContent = translations[lang].contactPhone;
    contactInfo[2].textContent = translations[lang].contactEmail;
    contactInfo[3].textContent = translations[lang].contactHours;
  }
  const contactInfoTitles = document.querySelectorAll('#contact .contact-text h4');
  if (contactInfoTitles.length >= 4) {
    contactInfoTitles[0].textContent = translations[lang].contactLocationTitle || "Endereço";
    contactInfoTitles[1].textContent = translations[lang].contactPhoneTitle || "Telefone";
    contactInfoTitles[2].textContent = translations[lang].contactEmailTitle || "E-mail";
    contactInfoTitles[3].textContent = translations[lang].contactHoursTitle || "Horário de Atendimento";
  }

  // Formulário
  const formLabels = {
    name: translations[lang].formNameLabel,
    email: translations[lang].formEmailLabel,
    phone: translations[lang].formPhoneLabel,
    service: translations[lang].formServiceLabel,
    message: translations[lang].formMessageLabel,
    submit: translations[lang].formSubmitBtn
  };

  const form = document.getElementById('appointmentForm');
  if (form) {
    form.querySelector('label[for="name"]').textContent = formLabels.name;
    form.querySelector('label[for="email"]').textContent = formLabels.email;
    form.querySelector('label[for="phone"]').textContent = formLabels.phone;
    form.querySelector('label[for="service"]').textContent = formLabels.service;
    form.querySelector('label[for="message"]').textContent = formLabels.message;
    form.querySelector('button[type="submit"]').textContent = formLabels.submit;

    // Atualiza as opções do select de serviço
    const serviceSelect = form.querySelector('select#service');
    // if (serviceSelect) {
    //   serviceSelect.options[0].text = translations[lang].formServiceOptions.default;
    //   serviceSelect.options[1].text = translations[lang].formServiceOptions.nutritionClinical;
    //   serviceSelect.options[2].text = translations[lang].formServiceOptions.nutritionSports;
    //   serviceSelect.options[3].text = translations[lang].formServiceOptions.weightLoss;
    //   serviceSelect.options[4].text = translations[lang].formServiceOptions.nutritionPreventive;
    //   serviceSelect.options[5].text = translations[lang].formServiceOptions.packageBronze;
    //   serviceSelect.options[6].text = translations[lang].formServiceOptions.packageSilver;
    //   serviceSelect.options[7].text = translations[lang].formServiceOptions.packageGold;
    // }
    if (serviceSelect) {
      // Limpa todas as opções anteriores
      serviceSelect.innerHTML = '';

      // Adiciona a opção padrão
      const defaultOption = document.createElement('option');
      defaultOption.value = '';
      defaultOption.textContent = translations[lang].formServiceOptions.default;
      serviceSelect.appendChild(defaultOption);

      // Cria optgroup de Serviços
      const servicesGroup = document.createElement('optgroup');
      servicesGroup.label = lang === 'en' ? 'Services' : lang === 'es' ? 'Servicios' : 'Serviços';

      const serviceOptions = [
        { value: 'nutrition_clinica', text: translations[lang].formServiceOptions.nutritionClinical },
        { value: 'nutrition_sports', text: translations[lang].formServiceOptions.nutritionSports },
        { value: 'weight_loss', text: translations[lang].formServiceOptions.weightLoss },
        { value: 'nutrition_preventive', text: translations[lang].formServiceOptions.nutritionPreventive },
        { value: 'nutritional_monitoring', text: translations[lang].formServiceOptions.nutritionalMonitoring },
        { value: 'body_assessment', text: translations[lang].formServiceOptions.bodyAssessment }
      ];

      serviceOptions.forEach(opt => {
        const option = document.createElement('option');
        option.value = opt.value;
        option.textContent = opt.text;
        servicesGroup.appendChild(option);
      });

      serviceSelect.appendChild(servicesGroup);

      // Cria optgroup de Pacotes
      const packagesGroup = document.createElement('optgroup');
      packagesGroup.label = lang === 'en' ? 'Packages' : lang === 'es' ? 'Paquetes' : 'Pacotes';

      const packageOptions = [
        { value: 'pacote_bronze', text: translations[lang].formServiceOptions.packageBronze },
        { value: 'pacote_prata', text: translations[lang].formServiceOptions.packageSilver },
        { value: 'pacote_ouro', text: translations[lang].formServiceOptions.packageGold }
      ];

      packageOptions.forEach(opt => {
        const option = document.createElement('option');
        option.value = opt.value;
        option.textContent = opt.text;
        packagesGroup.appendChild(option);
      });

      serviceSelect.appendChild(packagesGroup);
    }

  }

  // Rodapé
  const footerAbout = document.querySelector('footer .footer-about p');
  if (footerAbout) footerAbout.textContent = translations[lang].footerAbout;

  const footerLinksTitle = document.querySelector('footer .footer-links h3');
  if (footerLinksTitle) footerLinksTitle.textContent = translations[lang].footerLinksTitle;

  const footerContactTitle = document.querySelector('footer .footer-contact h3');
  if (footerContactTitle) footerContactTitle.textContent = translations[lang].footerContactTitle;

  const footerLinksList = document.querySelector('footer .footer-links ul');
  if (footerLinksList) {
    footerLinksList.innerHTML = `
      <li><a href="#home">${translations[lang].home}</a></li>
      <li><a href="#about">${translations[lang].about}</a></li>
      <li><a href="#services">${translations[lang].services}</a></li>
      <li><a href="#packages">${translations[lang].packages}</a></li>
      <li><a href="#results">${translations[lang].results}</a></li>
      <li><a href="#nutritionist">${translations[lang].nutritionist}</a></li>
      <li><a href="#contact">${translations[lang].contact}</a></li>
    `;
  }

  const footerRights = document.querySelector('footer .footer-bottom p');
  if (footerRights) footerRights.textContent = translations[lang].footerRights;

  // Atualiza o título da página
  document.title = `NutriVida | ${translations[lang].home}`;

  // Atualiza o atributo lang do HTML
  document.documentElement.lang = lang;
}

// // Evento para mudança de idioma
// languageSelector.addEventListener('change', (e) => {
//   const selectedLang = e.target.value;
//   translatePage(selectedLang);
//   localStorage.setItem('siteLanguage', selectedLang);
// });

// // Aplica o idioma salvo ou padrão ao carregar a página
// window.addEventListener('load', () => {
//   const savedLang = localStorage.getItem('siteLanguage') || 'pt';
//   languageSelector.value = savedLang;
//   translatePage(savedLang);
// });


// JAVA PARA MUDAR O IDIOMA

const languageBtn = document.getElementById("currentFlag");

const languageMenu = document.getElementById("languageMenu");
const currentFlag = document.getElementById("currentFlag");

// Abre/fecha menu de idioma
languageBtn.addEventListener("click", () => {
  languageMenu.style.display = languageMenu.style.display === "block" ? "none" : "block";
});

// Evento de clique em uma bandeira
document.querySelectorAll("#languageMenu li").forEach((item) => {
  item.addEventListener("click", () => {
    const selectedLang = item.getAttribute("data-lang");
    const selectedFlag = item.querySelector("img").src;

    currentFlag.src = selectedFlag;
    translatePage(selectedLang);
    localStorage.setItem('siteLanguage', selectedLang);
    languageMenu.style.display = "none";
  });
});

// Fecha menu se clicar fora
window.addEventListener("click", (e) => {
  if (!languageBtn.contains(e.target) && !languageMenu.contains(e.target)) {
    languageMenu.style.display = "none";
  }
});

// Aplica idioma salvo ao carregar
window.addEventListener("load", () => {
  const savedLang = localStorage.getItem('siteLanguage') || 'pt';
  const flagMap = {
    pt: "https://flagcdn.com/w40/br.png",
    en: "https://flagcdn.com/w40/gb.png",
    es: "https://flagcdn.com/w40/es.png"
  };
  currentFlag.src = flagMap[savedLang] || flagMap.pt;
  translatePage(savedLang);
});
// // JAVA PARA MUDAR O IDIOMA


























// Variáveis globais para Firestore e Auth
let db;
let auth;

document.addEventListener('DOMContentLoaded', async () => {
  const firebaseConfig = {
    apiKey: "AIzaSyDr_RqWTRxLlSrOI-w5agxiEYQptUsYJJY",
    authDomain: "gysellenutri-81f13.firebaseapp.com",
    projectId: "gysellenutri-81f13",
    storageBucket: "gysellenutri-81f13.firebasestorage.app",
    messagingSenderId: "330865100406",
    appId: "1:330865100406:web:0400cb9ce80a872a1f4157"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  auth = firebase.auth();
  db = firebase.firestore();

  // Inicializações
  carregarPacientes();

  // Event listeners para menu usuário
  const userMenuToggle = document.getElementById('userMenuToggle');
  const userOptions = document.getElementById('userOptions');
  if (userMenuToggle && userOptions) {
    userMenuToggle.addEventListener('click', () => {
      if (userOptions.style.display === 'none' || userOptions.style.display === '') {
        userOptions.style.display = 'block';
      } else {
        userOptions.style.display = 'none';
      }
    });
  }

  // Login/Logout handlers
  const loginBtn = document.getElementById('loginBtn');
  const loginModal = document.getElementById('loginModal');
  const closeLoginModalBtn = document.querySelector('#loginModal .close-button');
  const loginForm = document.getElementById('loginForm');
  const loginError = document.getElementById('loginError');

  loginBtn.addEventListener('click', () => loginModal.style.display = 'flex');
  closeLoginModalBtn.addEventListener('click', closeLoginModal);

  function closeLoginModal() {
    loginModal.style.display = 'none';
    loginForm.reset();
    loginError.textContent = '';
  }

  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      loginError.textContent = '';
      closeLoginModal();
    } catch (error) {
      loginError.textContent = `Erro ao fazer login: ${error.message}`;
      console.error("Login error:", error);
    }
  });

  const logoutAdminBtn = document.getElementById('logoutAdminBtn');
  const logoutPatientBtn = document.getElementById('logoutPatientBtn');

  logoutAdminBtn.addEventListener('click', async () => {
    await auth.signOut();
  });
  logoutPatientBtn.addEventListener('click', async () => {
    await auth.signOut();
  });

  // Auth state listener
  auth.onAuthStateChanged(async (user) => {
    if (user) {
      console.log("Usuário logado:", user);
      document.getElementById('loggedInUserName').innerText = user.displayName || user.email;
      document.getElementById('userMenu').style.display = 'block';
      document.getElementById('loginButtonContainer').style.display = 'none';

      try {
        const userDoc = await db.collection('users').doc(user.uid).get();
        if (userDoc.exists) {
          const userData = userDoc.data();
          if (userData.tipo === 'paciente') {
            const patientDoc = await db.collection('patients').doc(user.uid).get();
            if (patientDoc.exists) {
              const patientData = patientDoc.data();
              document.getElementById('patientDashboard').style.display = 'block';
              displayPatientInfo(patientData);
              loadPatientProtocols(user.uid);
            } else {
              console.warn("Paciente não encontrado na coleção 'patients'.");
            }
          } else {
            // Admin
            document.getElementById('adminDashboard').style.display = 'block';
            loadPatientsList();
          }
        } else {
          console.warn("Usuário não encontrado na coleção 'users'.");
        }
      } catch (error) {
        console.error("Erro ao buscar dados do Firestore:", error);
      }

    } else {
      console.log("Usuário não está logado.");
      document.getElementById('userMenu').style.display = 'none';
      document.getElementById('loginButtonContainer').style.display = 'block';
      document.getElementById('adminDashboard').style.display = 'none';
      document.getElementById('patientDashboard').style.display = 'none';
    }
  });

  // Register patient form
  const registerPatientForm = document.getElementById('registerPatientForm');
  const registerPatientError = document.getElementById('registerPatientError');

  registerPatientForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('patientEmail').value;
    const password = document.getElementById('patientPassword').value;
    const confirmPassword = document.getElementById('patientConfirmPassword').value;

    if (password !== confirmPassword) {
      registerPatientError.textContent = "As senhas não coincidem.";
      registerPatientError.style.color = "red";
      return;
    }

    // Cria app secundário para não interferir no auth principal
    const secondaryApp = firebase.initializeApp(firebase.app().options, "Secondary");

    try {
      const secondaryAuth = secondaryApp.auth();
      const userCredential = await secondaryAuth.createUserWithEmailAndPassword(email, password);
      const uid = userCredential.user.uid;

      await db.collection('users').doc(uid).set({
        email: email,
        nome: document.getElementById('patientName').value,
        tipo: "paciente"
      });

      await db.collection('patients').doc(uid).set({
        uid: uid,
        name: document.getElementById('patientName').value,
        dob: document.getElementById('patientDOB').value,
        gender: document.getElementById('patientGender').value,
        cpf: document.getElementById('patientCPF').value,
        email: email,
        phone: document.getElementById('patientPhone').value,
        landline: document.getElementById('patientLandline').value,
        address: document.getElementById('patientAddress').value,
        weight: parseFloat(document.getElementById('patientWeight').value) || null,
        height: parseFloat(document.getElementById('patientHeight').value) || null,
        conditions: document.getElementById('patientConditions').value.split(',').map(s => s.trim()).filter(s => s),
        goals: document.getElementById('patientGoals').value,
        restrictions: document.getElementById('patientRestrictions').value.split(',').map(s => s.trim()).filter(s => s),
        medications: document.getElementById('patientMedications').value,
        termsAccepted: document.getElementById('patientTerms').checked,
        lgpdAccepted: document.getElementById('patientLGPD').checked,
        photoURL: document.getElementById('patientPhoto').value,
        observations: document.getElementById('patientObservations').value,
        emergencyContact: document.getElementById('patientEmergencyContact').value,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });

      registerPatientError.textContent = "Paciente cadastrado com sucesso!";
      registerPatientError.style.color = "green";
      registerPatientForm.reset();
      loadPatientsList();
      loadPatientsForProtocolSelect();

      await secondaryAuth.signOut();
      await secondaryApp.delete();
    } catch (error) {
      registerPatientError.textContent = `Erro ao cadastrar paciente: ${error.message}`;
      registerPatientError.style.color = "red";
      console.error("Erro ao cadastrar paciente:", error);
    }
  });

  // Search input listener para filtrar lista de pacientes
  const searchPatientInput = document.getElementById('searchPatientInput');
  if(searchPatientInput) {
    searchPatientInput.addEventListener('input', loadPatientsList);
  }

  // Protocolo form submit (novo protocolo)
  const protocolForm = document.getElementById('protocolForm');
  if (protocolForm) {
    protocolForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const protocolPatientSelect = document.getElementById('protocolPatientSelect');
      const protocolError = document.getElementById('protocolError');

      const patientUid = protocolPatientSelect.value;
      const protocolTitle = document.getElementById('protocolTitle').value;
      const protocolContent = document.getElementById('protocolContent').value;

      if (!patientUid) {
        protocolError.textContent = "Por favor, selecione um paciente.";
        protocolError.style.color = "red";
        return;
      }

      try {
        await db.collection('protocols').add({
          patientUid: patientUid,
          title: protocolTitle,
          content: protocolContent,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          nutritionistUid: auth.currentUser.uid
        });
        protocolError.textContent = "Protocolo salvo com sucesso!";
        protocolError.style.color = "green";
        protocolForm.reset();
      } catch (error) {
        protocolError.textContent = `Erro ao salvar protocolo: ${error.message}`;
        protocolError.style.color = "red";
        console.error("Error saving protocol:", error);
      }
    });
  }

}); // fim do DOMContentLoaded


// FUNÇÕES GLOBAIS

async function carregarPacientes() {
  const protocolPatientSelect = document.getElementById('protocolPatientSelect');
  if (!protocolPatientSelect) {
    console.error("Elemento protocolPatientSelect não encontrado no DOM!");
    return;
  }

  try {
    const querySnapshot = await db.collection('users').get();

    protocolPatientSelect.innerHTML = '<option value="">Selecione um paciente</option>';

    let pacientesEncontrados = false;

    querySnapshot.forEach((doc) => {
      const userData = doc.data();
      if (userData.tipo === "paciente") {
        const option = document.createElement("option");
        option.value = doc.id;  // id do documento
        option.textContent = userData.nome || userData.name;
        protocolPatientSelect.appendChild(option);
        pacientesEncontrados = true;
      }
    });

    if (!pacientesEncontrados) {
      protocolPatientSelect.innerHTML = '<option value="">Nenhum paciente encontrado</option>';
    }
  } catch (error) {
    console.error("Erro ao carregar pacientes:", error);
    protocolPatientSelect.innerHTML = '<option value="">Erro ao carregar pacientes</option>';
  }
}

async function loadPatientsList() {
  if (!db) {
    console.error("Firestore não inicializado");
    return;
  }

  const searchPatientInput = document.getElementById('searchPatientInput');
  const patientsListDiv = document.getElementById('patientsList');

  if (!patientsListDiv) {
    console.error("Elemento patientsList não encontrado no DOM.");
    return;
  }

  try {
    const usersSnapshot = await db.collection('users')
      .where('tipo', '==', 'paciente')
      .get();

    const pacientes = [];

    for (const userDoc of usersSnapshot.docs) {
      const userData = userDoc.data();
      const uid = userDoc.id;

      const patientDoc = await db.collection('patients').doc(uid).get();
      const patientData = patientDoc.exists ? patientDoc.data() : {};

      pacientes.push({
        id: uid,
        nome: userData.nome,
        email: userData.email,
        name: patientData.name || userData.nome,
        phone: patientData.phone || '',
        goals: patientData.goals || ''
      });
    }

    if (pacientes.length === 0) {
      patientsListDiv.innerHTML = '<p>Nenhum paciente encontrado.</p>';
      return;
    }

    displayFilteredPatients(pacientes);
  } catch (error) {
    console.error("Erro ao carregar pacientes:", error);
    patientsListDiv.innerHTML = `<p style="color:red;">Erro ao carregar pacientes: ${error.message}</p>`;
  }
}

function displayFilteredPatients(patients) {
  const searchPatientInput = document.getElementById('searchPatientInput');
  const patientsListDiv = document.getElementById('patientsList');

  if (!searchPatientInput || !patientsListDiv) {
    console.error("Elementos não encontrados no DOM.");
    return;
  }

  const searchTerm = searchPatientInput.value.toLowerCase();
  const filteredPatients = patients.filter(patient =>
    (patient.name && patient.name.toLowerCase().includes(searchTerm)) ||
    (patient.email && patient.email.toLowerCase().includes(searchTerm))
  );

  patientsListDiv.innerHTML = '';
  if (filteredPatients.length === 0) {
    patientsListDiv.innerHTML = '<p>Nenhum paciente encontrado com este critério.</p>';
    return;
  }

  filteredPatients.forEach(patient => {
    const patientCard = document.createElement('div');
    patientCard.classList.add('patient-card');
    patientCard.innerHTML = `
      <h4>${patient.name || patient.nome || 'Sem nome'}</h4>
      <p><strong>Email:</strong> ${patient.email || 'N/A'}</p>
      <p><strong>Telefone:</strong> ${patient.phone || 'N/A'}</p>
      <p><strong>Objetivos:</strong> ${patient.goals || 'N/A'}</p>
      <button class="btn" onclick="editPatient('${patient.id}')">Editar</button>
      <button class="btn" onclick="deletePatient('${patient.id}', '${patient.email}')">Excluir</button>
    `;
    patientsListDiv.appendChild(patientCard);
  });
}

async function loadPatientsForProtocolSelect() {
  const protocolPatientSelect = document.getElementById('protocolPatientSelect');
  if (!protocolPatientSelect) return;

  try {
    const snapshot = await db.collection('users').where('tipo', '==', 'paciente').get();

    protocolPatientSelect.innerHTML = '<option value="">Selecione um paciente</option>';

    snapshot.forEach(doc => {
      const data = doc.data();
      const option = document.createElement('option');
      option.value = doc.id;
      option.textContent = data.nome || data.name || 'Paciente sem nome';
      protocolPatientSelect.appendChild(option);
    });
  } catch (error) {
    console.error("Erro ao carregar pacientes para select:", error);
    protocolPatientSelect.innerHTML = '<option value="">Erro ao carregar pacientes</option>';
  }
}

function displayPatientInfo(patientData) {
  document.getElementById('patientDashboardName').textContent = patientData.name || 'N/A';
  document.getElementById('patientDashboardEmail').textContent = patientData.email || 'N/A';
  document.getElementById('patientDashboardDOB').textContent = patientData.dob || 'N/A';
  document.getElementById('patientDashboardGender').textContent = patientData.gender || 'N/A';
  document.getElementById('patientDashboardCPF').textContent = patientData.cpf || 'N/A';
  document.getElementById('patientDashboardPhone').textContent = patientData.phone || 'N/A';
  document.getElementById('patientDashboardAddress').textContent = patientData.address || 'N/A';
  document.getElementById('patientDashboardWeight').textContent = patientData.weight !== null ? patientData.weight : 'N/A';
  document.getElementById('patientDashboardHeight').textContent = patientData.height !== null ? patientData.height : 'N/A';
  document.getElementById('patientDashboardConditions').textContent = patientData.conditions && patientData.conditions.length > 0 ? patientData.conditions.join(', ') : 'Nenhuma';
  document.getElementById('patientDashboardGoals').textContent = patientData.goals || 'N/A';
  document.getElementById('patientDashboardRestrictions').textContent = patientData.restrictions && patientData.restrictions.length > 0 ? patientData.restrictions.join(', ') : 'Nenhuma';
  document.getElementById('patientDashboardMedications').textContent = patientData.medications || 'Nenhum';
  document.getElementById('patientDashboardEmergencyContact').textContent = patientData.emergencyContact || 'N/A';
  document.getElementById('patientDashboardObservations').textContent = patientData.observations || 'Nenhuma';
}

// Carrega protocolos do paciente para visualização no dashboard paciente
async function loadPatientProtocols(patientUid) {
  const patientProtocolsList = document.getElementById('patientProtocolsList');
  if (!patientProtocolsList) return;

  patientProtocolsList.innerHTML = '<p>Carregando protocolos...</p>';
  try {
    const snapshot = await db.collection('protocols').where('patientUid', '==', patientUid).orderBy('createdAt', 'desc').get();
    if (snapshot.empty) {
      patientProtocolsList.innerHTML = '<p>Nenhum protocolo de alimentação cadastrado ainda.</p>';
      return;
    }

    patientProtocolsList.innerHTML = '';
    snapshot.forEach(doc => {
      const protocol = doc.data();
      const protocolItem = document.createElement('div');
      protocolItem.classList.add('protocol-item');
      protocolItem.innerHTML = `
        <h4>${protocol.title}</h4>
        <p>Data: ${protocol.createdAt ? new Date(protocol.createdAt.toDate()).toLocaleDateString() : 'N/A'}</p>
        <pre>${protocol.content}</pre>
      `;
      patientProtocolsList.appendChild(protocolItem);
    });
  } catch (error) {
    patientProtocolsList.innerHTML = `<p style="color: red;">Erro ao carregar protocolos: ${error.message}</p>`;
    console.error("Error loading patient protocols:", error);
  }
}

// Admin Dashboard Tabs
function openAdminTab(tabName) {
  const tabContents = document.querySelectorAll('.tab-content');
  tabContents.forEach(tab => tab.classList.remove('active'));

  const tabButtons = document.querySelectorAll('.tab-button');
  tabButtons.forEach(btn => btn.classList.remove('active'));

  document.getElementById(tabName).classList.add('active');
  document.querySelector(`.tab-button[onclick="openAdminTab('${tabName}')"]`).classList.add('active');

  if (tabName === 'listPatients') {
    loadPatientsList();
  } else if (tabName === 'registerProtocol') {
    loadPatientsForProtocolSelect();
    carregarPacientes();
  }
}

// Função para editar paciente, agora incluindo protocolos
async function editPatient(uid) {
  // Mostrar modal edição (supondo que exista modal com id editPatientModal)
  const modal = document.getElementById('editPatientModal');
  if (!modal) {
    alert("Modal de edição do paciente não encontrado!");
    return;
  }
  modal.style.display = 'block';

  // Busca dados do paciente
  try {
    const patientDoc = await db.collection('patients').doc(uid).get();
    if (!patientDoc.exists) {
      alert("Paciente não encontrado.");
      return;
    }
    const patientData = patientDoc.data();

    // Preenche formulário de edição
    document.getElementById('editPatientUid').value = uid;
    document.getElementById('editPatientName').value = patientData.name || '';
    document.getElementById('editPatientDOB').value = patientData.dob || '';
    document.getElementById('editPatientGender').value = patientData.gender || '';
    document.getElementById('editPatientCPF').value = patientData.cpf || '';
    document.getElementById('editPatientEmail').value = patientData.email || '';
    document.getElementById('editPatientPhone').value = patientData.phone || '';
    document.getElementById('editPatientLandline').value = patientData.landline || '';
    document.getElementById('editPatientAddress').value = patientData.address || '';
    document.getElementById('editPatientWeight').value = patientData.weight || '';
    document.getElementById('editPatientHeight').value = patientData.height || '';
    document.getElementById('editPatientConditions').value = (patientData.conditions || []).join(', ');
    document.getElementById('editPatientGoals').value = patientData.goals || '';
    document.getElementById('editPatientRestrictions').value = (patientData.restrictions || []).join(', ');
    document.getElementById('editPatientMedications').value = patientData.medications || '';
    document.getElementById('editPatientObservations').value = patientData.observations || '';
    document.getElementById('editPatientEmergencyContact').value = patientData.emergencyContact || '';

    // Carrega protocolos do paciente para edição
    await loadProtocolsForPatient(uid);

  } catch (error) {
    alert('Erro ao carregar paciente: ' + error.message);
    console.error(error);
  }
}

// Salvar edição do paciente
const editPatientForm = document.getElementById('editPatientForm');
if (editPatientForm) {
  editPatientForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const uid = document.getElementById('editPatientUid').value;

    try {
      await db.collection('patients').doc(uid).update({
        name: document.getElementById('editPatientName').value.trim(),
        dob: document.getElementById('editPatientDOB').value,
        gender: document.getElementById('editPatientGender').value,
        cpf: document.getElementById('editPatientCPF').value.trim(),
        email: document.getElementById('editPatientEmail').value.trim(),
        phone: document.getElementById('editPatientPhone').value.trim(),
        landline: document.getElementById('editPatientLandline').value.trim(),
        address: document.getElementById('editPatientAddress').value.trim(),
        weight: parseFloat(document.getElementById('editPatientWeight').value) || null,
        height: parseFloat(document.getElementById('editPatientHeight').value) || null,
        conditions: document.getElementById('editPatientConditions').value.split(',').map(s => s.trim()).filter(s => s),
        goals: document.getElementById('editPatientGoals').value.trim(),
        restrictions: document.getElementById('editPatientRestrictions').value.split(',').map(s => s.trim()).filter(s => s),
        medications: document.getElementById('editPatientMedications').value.trim(),
        observations: document.getElementById('editPatientObservations').value.trim(),
        emergencyContact: document.getElementById('editPatientEmergencyContact').value.trim(),
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
      });
      alert("Paciente atualizado com sucesso!");
      document.getElementById('editPatientModal').style.display = 'none';
      loadPatientsList();
    } catch (error) {
      alert("Erro ao atualizar paciente: " + error.message);
      console.error(error);
    }
  });
}

// Fechar modal edição paciente ao clicar fora
window.onclick = function(event) {
  const modal = document.getElementById('editPatientModal');
  if (event.target === modal) {
    modal.style.display = 'none';
    document.getElementById('editProtocolSection').style.display = 'none';
  }
};

// Deletar paciente (apaga dados da coleção users e patients)
async function deletePatient(uid, email) {
  if (!confirm(`Tem certeza que deseja excluir o paciente ${email}? Essa ação não pode ser desfeita.`)) return;

  try {
    await db.collection('users').doc(uid).delete();
    await db.collection('patients').doc(uid).delete();
    alert('Paciente excluído com sucesso.');
    loadPatientsList();
  } catch (error) {
    alert('Erro ao excluir paciente: ' + error.message);
    console.error(error);
  }
}

// --- PROTOCOLOS ---

// Carrega protocolos do paciente no modal para edição
async function loadProtocolsForPatient(uid) {
  const container = document.getElementById('patientProtocolsContainer');
  container.innerHTML = '<p>Carregando protocolos...</p>';

  try {
    const snapshot = await db.collection('protocols')
      .where('patientUid', '==', uid)
      .orderBy('createdAt', 'desc')
      .get();

    if (snapshot.empty) {
      container.innerHTML = '<p>Não há protocolos para este paciente.</p>';
      return;
    }

    container.innerHTML = ''; // limpa container

    snapshot.forEach(doc => {
      const protocol = doc.data();
      const protocolDiv = document.createElement('div');
      protocolDiv.style.border = '1px solid #ddd';
      protocolDiv.style.padding = '10px';
      protocolDiv.style.marginBottom = '10px';
      protocolDiv.style.borderRadius = '5px';

      protocolDiv.innerHTML = `
        <strong>${protocol.title}</strong> <br/>
        <small>Data: ${protocol.createdAt ? new Date(protocol.createdAt.toDate()).toLocaleDateString() : 'N/A'}</small><br/>
        <pre style="white-space: pre-wrap; margin-top: 5px;">${protocol.content}</pre>
        <button data-protocol-id="${doc.id}" class="editProtocolBtn" style="margin-top:5px;">Editar</button>
      `;

      container.appendChild(protocolDiv);
    });

    // Adiciona listener para os botões de editar protocolo
    document.querySelectorAll('.editProtocolBtn').forEach(button => {
      button.addEventListener('click', () => {
        const protocolId = button.getAttribute('data-protocol-id');
        openEditProtocolForm(protocolId);
      });
    });

  } catch (error) {
    container.innerHTML = `<p style="color:red;">Erro ao carregar protocolos: ${error.message}</p>`;
    console.error(error);
  }
}

// Abre formulário para editar protocolo
async function openEditProtocolForm(protocolId) {
  const editSection = document.getElementById('editProtocolSection');
  const protocolIdInput = document.getElementById('editProtocolId');
  const protocolTitleInput = document.getElementById('editProtocolTitle');
  const protocolContentInput = document.getElementById('editProtocolContent');

  try {
    const doc = await db.collection('protocols').doc(protocolId).get();

    if (!doc.exists) {
      alert('Protocolo não encontrado!');
      return;
    }

    const protocol = doc.data();

    protocolIdInput.value = protocolId;
    protocolTitleInput.value = protocol.title || '';
    protocolContentInput.value = protocol.content || '';

    editSection.style.display = 'block';

  } catch (error) {
    alert('Erro ao carregar protocolo: ' + error.message);
    console.error(error);
  }
}

// Salvar alterações do protocolo
document.getElementById('editProtocolForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const protocolId = document.getElementById('editProtocolId').value;
  const title = document.getElementById('editProtocolTitle').value.trim();
  const content = document.getElementById('editProtocolContent').value.trim();

  if (!protocolId) {
    alert('ID do protocolo não informado.');
    return;
  }

  try {
    await db.collection('protocols').doc(protocolId).update({
      title,
      content,
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    });

    alert('Protocolo atualizado com sucesso!');

    // Atualiza a lista de protocolos no modal
    const uid = document.getElementById('editPatientUid').value;
    await loadProtocolsForPatient(uid);

    // Esconde o formulário de edição
    document.getElementById('editProtocolSection').style.display = 'none';

  } catch (error) {
    alert('Erro ao salvar protocolo: ' + error.message);
    console.error(error);
  }
});

// Botão cancelar edição protocolo
document.getElementById('cancelEditProtocol').addEventListener('click', () => {
  document.getElementById('editProtocolSection').style.display = 'none';
});

