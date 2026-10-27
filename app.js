// ==========================================================================
// APP.JS - COMPORTAMENTOS INTERATIVOS DO SITE JACKSON PATACHO
// Feed Oficial do Instagram, Lightbox, Simulador de Maré e WhatsApp
// ==========================================================================

// Dados reais dos posts extraídos de @jackson_patacho
const INSTA_POSTS = [
  {
    id: 1,
    image: "assets/insta/post_1.jpg",
    caption: "Viva a experiência perfeita nas Piscinas Naturais do Patacho! Um mar calmo, morninho e transparente te espera em Porto de Pedras - AL.",
    tag: "Piscinas Naturais"
  },
  {
    id: 2,
    image: "assets/insta/post_2.jpg",
    caption: "A vida é travessia em mar aberto 🌊 Sinta Patacho. Faça sua reserva clicando no nosso link da bio. #passeiodejangada #praiadopatacho #rotaecológicadosmilagres",
    tag: "Jangada Tradicional"
  },
  {
    id: 3,
    image: "assets/insta/post_3.jpg",
    caption: "Este paraíso te espera! Um mar calmo, e de águas cristalinas e mornas. Vem conhecer Patacho-AL com a gente! #praiadopatacho #rotaecologicadosmilagres #piscinasnaturais",
    tag: "Águas Cristalinas"
  },
  {
    id: 4,
    image: "assets/insta/post_4.jpg",
    caption: "\"Onde a maré baixa revela um paraíso particular.\" 🌊 Vamos te proporcionar e registrar os melhores momentos, em um passeio com vista e beleza natural de tirar o fôlego.",
    tag: "Maré Baixa"
  },
  {
    id: 5,
    image: "assets/insta/post_5.jpg",
    caption: "No fim a gente vai lembrar do que viveu, Não do que gastou! 🌊 Conheça as belezas naturais do Patacho. Agende seu passeio com o Jackson.",
    tag: "Experiência Única"
  },
  {
    id: 6,
    image: "assets/insta/post_6.jpg",
    caption: "Momentos que parecem uma pintura você encontra aqui, nas piscinas naturais do Patacho curtindo aquele passeio top com @jackson_patacho! ⛵",
    tag: "Banco de Areia"
  },
  {
    id: 7,
    image: "assets/insta/post_7.jpg",
    caption: "Patacho não se explica, se vive! Esse paraíso te espera, o que está esperando? Faça sua reserva e vem viver essa experiência incrível em Alagoas.",
    tag: "Costa dos Corais"
  },
  {
    id: 8,
    image: "assets/insta/post_8.jpg",
    caption: "O mundo fica mais bonito quando olhamos debaixo d'água. 🐠 Vem viver essa experiência com a gente! Snorkel com peixinhos nos recifes preservados.",
    tag: "Snorkel & Mergulho"
  },
  {
    id: 9,
    image: "assets/insta/post_9.jpg",
    caption: "Te amando cada dia mais ❤️🌊✨ Passeio no barco do @jackson_patacho, top ⛵ #luademel #praiadopatacho #maceió #alagoas",
    tag: "Casais & Lua de Mel"
  }
];

document.addEventListener('DOMContentLoaded', () => {
  initWhatsAppLinks();
  initBookingForm();
  initInstagramGrid();
  initLightbox();
  initTideSimulator();
  initFaqAccordion();
  initTestimonials();
  initMobileMenu();
  initDateInputs();
  updateFooterYear();
  initHeaderScroll();
  initReveal();
});

// 11. Borda do cabeçalho ao rolar
function initHeaderScroll() {
  const header = document.getElementById('header');
  if (!header) return;
  const update = () => header.classList.toggle('scrolled', window.scrollY > 8);
  update();
  window.addEventListener('scroll', update, { passive: true });
}

// 12. Animação suave de entrada das seções
function initReveal() {
  const targets = document.querySelectorAll('.section-header, .ribbon-card, .insta-card, .service-card, .tides-info-card, .tides-simulator-card, .step-card, .testimonial-card, .faq-item');
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
}

// 1. WhatsApp Helper & Links
function buildWhatsAppUrl(message) {
  const number = (window.SITE_CONFIG && window.SITE_CONFIG.whatsappNumber) || "5582999999999";
  const encodedMsg = encodeURIComponent(message || "Olá Jackson! Gostaria de informações sobre os passeios de jangada no Patacho.");
  return `https://wa.me/${number}?text=${encodedMsg}`;
}

function initWhatsAppLinks() {
  const config = window.SITE_CONFIG || {};

  // Header CTA
  const headerBtn = document.getElementById('headerWhatsappBtn');
  if (headerBtn) {
    headerBtn.href = buildWhatsAppUrl(config.defaultWhatsappMessage || "Olá Jackson! Vi seu site e gostaria de saber as datas disponíveis para o passeio de jangada no Patacho.");
  }

  // Floating CTA
  const floatingBtn = document.getElementById('floatingWhatsappBtn');
  if (floatingBtn) {
    floatingBtn.href = buildWhatsAppUrl("Olá Jackson! Vi seu site e gostaria de tirar uma dúvida sobre o passeio de jangada e churrasco no mar.");
  }

  // Final CTA
  const finalBtn = document.getElementById('finalWhatsappBtn');
  if (finalBtn) {
    finalBtn.href = buildWhatsAppUrl("Olá Jackson! Gostaria de consultar disponibilidade para os passeios de jangada nas piscinas do Patacho.");
  }

  // Footer WhatsApp
  const footerDisplays = document.querySelectorAll('.whatsapp-number-display');
  footerDisplays.forEach(el => {
    if (config.whatsappDisplay) {
      el.textContent = config.whatsappDisplay;
    }
  });

  const footerLinks = document.querySelectorAll('.footerWhatsappLink');
  footerLinks.forEach(link => {
    link.href = buildWhatsAppUrl("Olá Jackson! Gostaria de agendar meu passeio na Praia do Patacho.");
  });

  // Botões de reserva rápida nos cards de serviços
  const directButtons = document.querySelectorAll('.open-whatsapp-direct');
  directButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceName = btn.getAttribute('data-service') || 'Passeio de Jangada';
      const msg = `Olá Jackson! Vi seu site e quero agendar a experiência: *${serviceName}*. Como estão as vagas e a tábua de marés?`;
      window.open(buildWhatsAppUrl(msg), '_blank');
    });
  });
}

// 2. Renderização do Grid Real do Instagram
function initInstagramGrid() {
  const grid = document.getElementById('instaGrid');
  if (!grid) return;

  grid.innerHTML = INSTA_POSTS.filter(post => post.id !== 9).map(post => `
    <article class="insta-card" data-post-id="${post.id}">
      <img src="${post.image}" alt="Post Instagram @jackson_patacho - ${post.tag}" loading="lazy">
      <div class="insta-overlay">
        <div class="insta-overlay-top">
          <span class="insta-icon-pill">${post.tag}</span>
        </div>
        <div>
          <p class="insta-caption-preview">${post.caption}</p>
          <div class="insta-card-action">
            <span>Ver foto &rarr;</span>
          </div>
        </div>
      </div>
    </article>
  `).join('');

  // Ativa evento de clique para abrir o lightbox
  const cards = grid.querySelectorAll('.insta-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const postId = parseInt(card.getAttribute('data-post-id'), 10);
      const post = INSTA_POSTS.find(p => p.id === postId);
      if (post) {
        openLightbox(post);
      }
    });
  });
}

// 3. Lightbox Modal
function initLightbox() {
  const modal = document.getElementById('lightboxModal');
  const closeBtn = document.getElementById('lightboxClose');
  const backdrop = document.getElementById('lightboxBackdrop');

  if (!modal) return;

  const closeModal = () => {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

function openLightbox(post) {
  const modal = document.getElementById('lightboxModal');
  const img = document.getElementById('lightboxImg');
  const caption = document.getElementById('lightboxCaption');
  const whatsappBtn = document.getElementById('lightboxWhatsappBtn');

  if (!modal || !img || !caption) return;

  img.src = post.image;
  img.alt = post.caption;
  caption.textContent = post.caption;

  if (whatsappBtn) {
    const msg = `Olá Jackson! Vi essa foto no seu site (${post.tag}: "${post.caption.substring(0, 50)}...") e quero viver exatamente essa experiência no Patacho!`;
    whatsappBtn.href = buildWhatsAppUrl(msg);
  }

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

// 4. Formulário Rápido de Agendamento
function initBookingForm() {
  const form = document.getElementById('bookingForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const dateInput = document.getElementById('bookingDate').value;
    const people = document.getElementById('bookingPeople').value;

    let formattedDate = "A definir";
    if (dateInput) {
      const parts = dateInput.split('-');
      if (parts.length === 3) {
        formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
      }
    }

    const message = 
`Olá Jackson! 🌴
Vi o seu site oficial e gostaria de agendar um passeio:
• *Data pretendida:* ${formattedDate}
• *Qtd. de pessoas:* ${people}

Poderia me informar a disponibilidade e o melhor horário de acordo com a tábua de marés? Obrigado!`;

    window.open(buildWhatsAppUrl(message), '_blank');
  });
}

// 5. Simulador Inteligente de Tábua de Marés
function initTideSimulator() {
  const dateInput = document.getElementById('tideCheckDate');
  const resultBox = document.getElementById('tideResultBox');
  const whatsappBtn = document.getElementById('btnConsultTideWhatsApp');

  if (!dateInput || !resultBox) return;

  dateInput.addEventListener('change', () => {
    const selectedDateStr = dateInput.value;
    if (!selectedDateStr) return;

    const selectedDate = new Date(selectedDateStr + 'T12:00:00');
    const tideInfo = calculateTideEstimate(selectedDate);

    const day = String(selectedDate.getDate()).padStart(2, '0');
    const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
    const year = selectedDate.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;

    resultBox.innerHTML = `
      <div class="result-active">
        <span class="condition-badge ${tideInfo.badgeClass}">
          ${tideInfo.statusText}
        </span>
        <span class="result-date">Previsão para ${formattedDate}</span>
        <h4 class="result-title">${tideInfo.title}</h4>
        <p class="result-desc">${tideInfo.description}</p>
        <div class="result-window">
          <span>Janela estimada de maré baixa</span>
          <strong>${tideInfo.timeWindow}</strong>
        </div>
      </div>
    `;

    if (whatsappBtn) {
      whatsappBtn.style.display = 'block';
      whatsappBtn.onclick = () => {
        const msg = `Olá Jackson! Consultei a data *${formattedDate}* no simulador do seu site (${tideInfo.title}) e gostaria de confirmar o horário exato da maré baixa para o passeio de jangada no Patacho!`;
        window.open(buildWhatsAppUrl(msg), '_blank');
      };
    }
  });
}

function calculateTideEstimate(date) {
  const refDate = new Date(2024, 0, 11, 12, 0, 0);
  const diffDays = (date.getTime() - refDate.getTime()) / (1000 * 60 * 60 * 24);
  const lunarCycle = 29.53058867;
  const phase = ((diffDays % lunarCycle) + lunarCycle) % lunarCycle;

  const isSpringTide = (phase <= 3.7 || phase >= 25.8 || (phase >= 11.2 && phase <= 18.3));
  const isGoodTide = (phase > 3.7 && phase < 7.5) || (phase > 22 && phase < 25.8) || (phase > 7.5 && phase < 11.2);

  const hours = [ '08:30 às 11:30', '09:00 às 12:00', '09:45 às 12:45', '10:30 às 13:30', '11:15 às 14:15', '12:00 às 15:00', '07:30 às 10:30' ];
  const hourIdx = (date.getDate() + date.getMonth()) % hours.length;
  const timeWindow = hours[hourIdx];

  if (isSpringTide) {
    return {
      statusText: "Maré Perfeita (Sizígia - Maré Seca)",
      badgeClass: "optimal",
      title: "Águas Extremamente Rasas e Transparentes",
      description: "Nesta fase lunar ocorrem as marés mais baixas do mês (abaixo de 0.3m). Os recifes de corais e bancos de areia ficam no ápice da beleza e claridade caribenha!",
      timeWindow: timeWindow
    };
  } else if (isGoodTide) {
    return {
      statusText: "Maré Ótima para Mergulho",
      badgeClass: "good",
      title: "Piscinas Calmas e Transparentes",
      description: "Maré em ótimas condições de visibilidade, com temperatura morna e mar calmo. Ideal para fotos, snorkel com peixinhos e o churrasco de lagosta.",
      timeWindow: timeWindow
    };
  } else {
    return {
      statusText: "Maré Moderada",
      badgeClass: "fair",
      title: "Horário Estratégico Necessário",
      description: "Maré com menor recuo, mas com a condução experiente do Jackson você aproveita os pontos mais calmos e rasos das piscinas com segurança.",
      timeWindow: timeWindow
    };
  }
}

// 6. Accordion do FAQ
function initFaqAccordion() {
  const items = document.querySelectorAll('.faq-item');
  items.forEach(item => {
    const btn = item.querySelector('.faq-question');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      items.forEach(other => other.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

// 7. Renderização de Depoimentos
function initTestimonials() {
  const container = document.getElementById('testimonialsContainer');
  if (!container) return;

  const testimonials = (window.SITE_CONFIG && window.SITE_CONFIG.testimonials) || [];
  if (testimonials.length === 0) return;

  container.innerHTML = testimonials.map(item => `
    <div class="testimonial-card">
      <div>
        <div class="testimonial-stars">
          ${'★'.repeat(item.rating || 5)}
        </div>
        <p class="testimonial-text">"${item.comment}"</p>
      </div>
      <div class="testimonial-author">
        <div>
          <span class="author-name">${item.name}</span>
          <span class="author-origin">${item.origin}</span>
        </div>
        <span class="author-date">${item.date}</span>
      </div>
    </div>
  `).join('');
}

// 8. Menu Mobile
function initMobileMenu() {
  const toggle = document.getElementById('mobileToggle');
  const nav = document.getElementById('mainNav');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
  });

  const links = nav.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('nav-open');
    });
  });
}

// 9. Configuração inicial de datas
function initDateInputs() {
  const today = new Date().toISOString().split('T')[0];
  const bookingDate = document.getElementById('bookingDate');
  const tideCheckDate = document.getElementById('tideCheckDate');

  if (bookingDate) {
    bookingDate.min = today;
    bookingDate.value = today;
  }
  if (tideCheckDate) {
    tideCheckDate.min = today;
    tideCheckDate.value = today;
    setTimeout(() => {
      tideCheckDate.dispatchEvent(new Event('change'));
    }, 100);
  }
}

// 10. Ano atual no rodapé
function updateFooterYear() {
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

