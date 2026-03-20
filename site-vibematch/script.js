const features = [
  {
    category: "Perfil",
    command: "/perfil criar",
    title: "Criar perfil",
    description: "Abre modal para cadastrar idade, cidade, bio, foto, interesses e vibe."
  },
  {
    category: "Perfil",
    command: "/perfil editar",
    title: "Editar perfil",
    description: "Permite atualizar os dados do perfil com as mesmas validações."
  },
  {
    category: "Perfil",
    command: "/perfil ver",
    title: "Visualizar perfil",
    description: "Mostra seu perfil ou o de outro usuário, quando ativo."
  },

  {
    category: "Feed",
    command: "/feed iniciar",
    title: "Iniciar feed",
    description: "Inicia sessão de cards com fila personalizada por preferências."
  },
  {
    category: "Feed",
    command: "Botões de swipe",
    title: "LIKE, PASS, SUPERLIKE, BLOCK, REPORT",
    description: "Interações rápidas no card atual, com proteção contra spam/rate limit."
  },

  {
    category: "Match",
    command: "/match listar",
    title: "Listar matches",
    description: "Mostra matches ativos e respectivos canais privados."
  },
  {
    category: "Match",
    command: "/desmatch",
    title: "Encerrar match",
    description: "Fecha contato/match com opção de bloquear futuro contato."
  },
  {
    category: "Match",
    command: "Proposta de match",
    title: "PENDING → ACTIVE",
    description: "No fluxo de quiz, o match só ativa depois que ambos aceitam."
  },

  {
    category: "Visitas",
    command: "/visita iniciar",
    title: "Abrir visita",
    description: "Cria sala temporária de texto (e voz opcional) para o match."
  },
  {
    category: "Visitas",
    command: "/visita estender",
    title: "Estender visita",
    description: "Aumenta duração da visita dentro do limite configurado."
  },
  {
    category: "Visitas",
    command: "/visita encerrar",
    title: "Encerrar visita",
    description: "Encerra manualmente a visita antes da expiração automática."
  },
  {
    category: "Visitas",
    command: "Scheduler automático",
    title: "Fechamento por expiração",
    description: "Job periódico fecha visitas vencidas e atualiza status."
  },

  {
    category: "Quiz",
    command: "/quiz iniciar",
    title: "Iniciar VibeQuiz",
    description: "Começa perguntas para cálculo de compatibilidade por afinidade."
  },
  {
    category: "Quiz",
    command: "/quiz proxima",
    title: "Próxima pergunta",
    description: "Busca e renderiza a próxima pergunta pendente."
  },
  {
    category: "Quiz",
    command: "/quiz status",
    title: "Progresso",
    description: "Mostra total respondido, progresso e estado pausado/ativo."
  },
  {
    category: "Quiz",
    command: "/quiz reset",
    title: "Reset de respostas",
    description: "Apaga respostas de quiz para recomeçar."
  },
  {
    category: "Quiz",
    command: "/quiz apagar",
    title: "Apagar dados",
    description: "Limpa dados de quiz/perfil ligados ao fluxo do quiz."
  },
  {
    category: "Quiz",
    command: "/quiz pausar",
    title: "Pausar quiz",
    description: "Congela o fluxo de perguntas até o usuário retomar."
  },
  {
    category: "Quiz",
    command: "/quiz continuar",
    title: "Retomar quiz",
    description: "Retoma o fluxo do ponto pendente com nova pergunta."
  },
  {
    category: "Quiz",
    command: "/quiz sugerir",
    title: "Sugerir pessoas",
    description: "Lista top compatibilidades com score e traits em comum."
  },
  {
    category: "Quiz",
    command: "/quiz propor",
    title: "Propor match",
    description: "Envia proposta em DM com aceite/recusa para ativação de match."
  },
  {
    category: "Quiz",
    command: "/compatibilidade",
    title: "Ver compatibilidade",
    description: "Mostra percentual de compatibilidade entre dois usuários."
  },

  {
    category: "Segurança",
    command: "/bloquear",
    title: "Bloquear usuário",
    description: "Remove usuário do feed e encerra match ativo quando houver."
  },
  {
    category: "Segurança",
    command: "/reportar",
    title: "Reportar usuário",
    description: "Abre modal para denúncia e registra ticket de moderação."
  },
  {
    category: "Segurança",
    command: "Log de report",
    title: "Canal de moderação",
    description: "Report pode ser encaminhado para canal de logs configurado."
  },

  {
    category: "Admin",
    command: "/config set-log-channel",
    title: "Canal de logs",
    description: "Define canal de logs operacionais e de moderação."
  },
  {
    category: "Admin",
    command: "/config set-min-age",
    title: "Idade mínima",
    description: "Define idade mínima de uso no servidor."
  },
  {
    category: "Admin",
    command: "/config set-match-category",
    title: "Categoria de canais",
    description: "Define categoria padrão para canais de match e visita."
  },
  {
    category: "Admin",
    command: "/config set-visit-duration",
    title: "Duração de visita",
    description: "Ajusta tempo padrão das salas temporárias."
  },
  {
    category: "Admin",
    command: "/config set-mod-role",
    title: "Cargo de moderação",
    description: "Define role com leitura em canais sensíveis."
  },

  {
    category: "Observabilidade",
    command: "/status",
    title: "Healthcheck",
    description: "Exibe uptime, versão, status de DB e monitoramento de jobs."
  },
  {
    category: "Observabilidade",
    command: "requestId por interação",
    title: "Correlação de logs",
    description: "Cada interaction ganha uma referência para rastrear erro ponta a ponta."
  },

  {
    category: "DEV",
    command: "/seed",
    title: "Popular ambiente",
    description: "Cria perfis fake e base inicial para QA em servidor de teste."
  },
  {
    category: "DEV",
    command: "/reset",
    title: "Limpar ambiente",
    description: "Reseta dados para repetir cenários de teste de ponta a ponta."
  },

  {
    category: "Branding",
    command: "/branding kit",
    title: "Kit de identidade visual",
    description: "Envia no canal os arquivos/copy recomendados de branding."
  },
  {
    category: "Branding",
    command: "/branding regras",
    title: "Template #regras",
    description: "Publica texto pronto de regras no estilo do servidor."
  },
  {
    category: "Branding",
    command: "/branding como-funciona",
    title: "Template #como-funciona",
    description: "Publica texto pronto explicando o fluxo para novos membros."
  }
];

const state = {
  category: "Todos",
  query: ""
};

const chipsRoot = document.getElementById("chips");
const listRoot = document.getElementById("command-list");
const searchInput = document.getElementById("search");
const resultsInfo = document.getElementById("results-info");
const clearSearchButton = document.getElementById("clear-search");
const logoImg = document.getElementById("logo-img");
const loaderLogo = document.querySelector("[data-loader-logo]");
const pageLoader = document.querySelector("[data-page-loader]");
const loaderProgressBar = document.querySelector("[data-loader-progress]");
const loaderProgressValue = document.querySelector("[data-loader-progress-value]");
const topbar = document.querySelector(".topbar");
const themeFab = document.querySelector(".theme-fab");
const themeToggleButtons = Array.from(document.querySelectorAll("[data-theme-toggle]"));
const mobileMenuButton = document.querySelector("[data-mobile-menu-toggle]");
const mobileNav = document.getElementById("mobile-nav");
const mobileNavLinks = Array.from(document.querySelectorAll("[data-mobile-nav-link]"));

const THEME_STORAGE_KEY = "vibematch-theme";

const categoryIcons = {
  Todos: `<svg viewBox="0 0 24 24" role="img" focusable="false" aria-hidden="true"><path d="M12 4v16"></path><path d="M4 12h16"></path><circle cx="12" cy="12" r="9"></circle></svg>`,
  Perfil: `<svg viewBox="0 0 24 24" role="img" focusable="false" aria-hidden="true"><circle cx="12" cy="8" r="3.5"></circle><path d="M5 20c1.2-3.2 3.7-5 7-5s5.8 1.8 7 5"></path></svg>`,
  Feed: `<svg viewBox="0 0 24 24" role="img" focusable="false" aria-hidden="true"><rect x="5" y="5" width="14" height="14" rx="2"></rect><path d="M9 10h6"></path><path d="M9 14h4"></path></svg>`,
  Match: `<svg viewBox="0 0 24 24" role="img" focusable="false" aria-hidden="true"><path d="M12 21s-6.8-4.35-9.07-8.4C1.28 9.69 2.3 6.2 5.5 5.2c2.16-.68 4.07.22 5.12 1.66C11.67 5.42 13.58 4.52 15.74 5.2c3.2 1 4.22 4.49 2.57 7.4C15.8 16.65 12 21 12 21Z"></path></svg>`,
  Visitas: `<svg viewBox="0 0 24 24" role="img" focusable="false" aria-hidden="true"><rect x="4" y="5" width="16" height="12" rx="2"></rect><path d="M9 19h6"></path></svg>`,
  Quiz: `<svg viewBox="0 0 24 24" role="img" focusable="false" aria-hidden="true"><circle cx="12" cy="12" r="8"></circle><path d="M10.6 9.2a1.9 1.9 0 1 1 2.9 1.6c-.9.5-1.5 1-1.5 2"></path><path d="M12 16.8h.01"></path></svg>`,
  Segurança: `<svg viewBox="0 0 24 24" role="img" focusable="false" aria-hidden="true"><path d="M12 3 4 6v6c0 5 3.4 8.4 8 9 4.6-.6 8-4 8-9V6l-8-3Z"></path><path d="m9 12 2 2 4-4"></path></svg>`,
  Admin: `<svg viewBox="0 0 24 24" role="img" focusable="false" aria-hidden="true"><path d="M12 3v4"></path><path d="M12 17v4"></path><path d="M5.6 5.6 8.4 8.4"></path><path d="M15.6 15.6 18.4 18.4"></path><path d="M3 12h4"></path><path d="M17 12h4"></path><path d="M5.6 18.4 8.4 15.6"></path><path d="M15.6 8.4 18.4 5.6"></path><circle cx="12" cy="12" r="3"></circle></svg>`,
  Observabilidade: `<svg viewBox="0 0 24 24" role="img" focusable="false" aria-hidden="true"><path d="M4 16h3l2-5 3 8 2-5h6"></path><path d="M4 4v16"></path><path d="M4 20h16"></path></svg>`,
  DEV: `<svg viewBox="0 0 24 24" role="img" focusable="false" aria-hidden="true"><path d="m8 8-4 4 4 4"></path><path d="m16 8 4 4-4 4"></path><path d="m13 5-2 14"></path></svg>`,
  Branding: `<svg viewBox="0 0 24 24" role="img" focusable="false" aria-hidden="true"><path d="M6 4h7l5 5v11H6z"></path><path d="M13 4v5h5"></path><path d="M9 14h6"></path><path d="M9 17h4"></path></svg>`
};

function getSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getCurrentTheme() {
  return document.documentElement.getAttribute("data-theme") || "light";
}

function updateThemeAssets(theme) {
  const logoCandidatesByTheme = {
    light: ["logop.webp", "logo.webp"],
    dark: ["logo.webp", "logop.webp"]
  };

  const candidates = logoCandidatesByTheme[theme] || logoCandidatesByTheme.light;

  const applyLogoToElement = (element, index = 0) => {
    if (!element) return;

    if (index >= candidates.length) {
      element.style.display = "none";
      return;
    }

    element.style.display = "block";
    element.onerror = () => {
      applyLogoToElement(element, index + 1);
    };
    element.src = candidates[index];
  };

  applyLogoToElement(logoImg);
  applyLogoToElement(loaderLogo);
}

function hidePageLoader() {
  if (!pageLoader || pageLoader.dataset.hidden === "true") return;

  pageLoader.dataset.hidden = "true";
  pageLoader.classList.add("is-hidden");
  document.body.classList.remove("is-loading");

  window.setTimeout(() => {
    pageLoader.remove();
  }, 480);
}

function setLoaderProgress(value) {
  if (!pageLoader) return;

  const safeValue = Math.max(0, Math.min(100, Math.round(value)));
  pageLoader.style.setProperty("--loader-progress", `${safeValue}%`);

  if (loaderProgressValue) {
    loaderProgressValue.textContent = `${safeValue}%`;
  }
}

function setupPageLoader() {
  if (!pageLoader) return;

  document.body.classList.add("is-loading");
  setLoaderProgress(0);

  const minVisibleMs = 1500;
  const startTime = Date.now();
  const progressCeiling = 94;

  const progressInterval = window.setInterval(() => {
    const elapsed = Date.now() - startTime;
    const ratio = Math.min(1, elapsed / minVisibleMs);
    setLoaderProgress(progressCeiling * ratio);
  }, 40);

  const finishLoading = () => {
    window.clearInterval(progressInterval);
    setLoaderProgress(100);
    window.setTimeout(() => {
      hidePageLoader();
    }, 150);
  };

  const fallbackTimeout = window.setTimeout(() => {
    finishLoading();
  }, 4500);

  window.addEventListener(
    "load",
    () => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, minVisibleMs - elapsed);

      window.setTimeout(() => {
        window.clearTimeout(fallbackTimeout);
        finishLoading();
      }, remaining);
    },
    { once: true }
  );
}

function updateThemeToggle(theme) {
  if (!themeToggleButtons.length) return;
  const isDark = theme === "dark";
  themeToggleButtons.forEach((button) => {
    button.innerHTML = isDark
      ? `<span class="theme-toggle-icon" aria-hidden="true"><svg viewBox="0 0 24 24" role="img" focusable="false"><circle cx="12" cy="12" r="4"></circle><line x1="12" y1="2" x2="12" y2="4.5"></line><line x1="12" y1="19.5" x2="12" y2="22"></line><line x1="4.22" y1="4.22" x2="5.98" y2="5.98"></line><line x1="18.02" y1="18.02" x2="19.78" y2="19.78"></line><line x1="2" y1="12" x2="4.5" y2="12"></line><line x1="19.5" y1="12" x2="22" y2="12"></line><line x1="4.22" y1="19.78" x2="5.98" y2="18.02"></line><line x1="18.02" y1="5.98" x2="19.78" y2="4.22"></line></svg></span>`
      : `<span class="theme-toggle-icon" aria-hidden="true"><svg viewBox="0 0 24 24" role="img" focusable="false"><path d="M21 12.79A9 9 0 1 1 11.21 3c-.14.44-.21.9-.21 1.38A8.42 8.42 0 0 0 19.62 13c.48 0 .94-.07 1.38-.21Z"></path></svg></span>`;
    button.setAttribute("aria-label", isDark ? "Ativar tema claro" : "Ativar tema escuro");
    button.setAttribute("title", isDark ? "Ativar tema claro" : "Ativar tema escuro");
  });
}

function applyTheme(theme, persist = true) {
  document.documentElement.setAttribute("data-theme", theme);
  updateThemeAssets(theme);
  updateThemeToggle(theme);

  if (persist) {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }
}

function setupTheme() {
  const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  const initialTheme = storedTheme || getSystemTheme();
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

  applyTheme(initialTheme, Boolean(storedTheme));

  prefersDarkScheme.addEventListener("change", () => {
    const currentStoredTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (!currentStoredTheme) {
      applyTheme(getSystemTheme(), false);
    }
  });

  themeToggleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const nextTheme = getCurrentTheme() === "dark" ? "light" : "dark";
      applyTheme(nextTheme, true);
    });
  });
}

function setMobileMenu(open) {
  if (!mobileMenuButton || !mobileNav) return;

  mobileMenuButton.setAttribute("aria-expanded", String(open));
  mobileMenuButton.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  mobileMenuButton.classList.toggle("is-open", open);

  if (open) {
    mobileNav.hidden = false;
    mobileNav.classList.add("is-open");
  } else {
    mobileNav.classList.remove("is-open");
    mobileNav.hidden = true;
  }
}

function setupMobileMenu() {
  if (!mobileMenuButton || !mobileNav) return;

  setMobileMenu(false);

  mobileMenuButton.addEventListener("click", () => {
    const isOpen = mobileMenuButton.getAttribute("aria-expanded") === "true";
    setMobileMenu(!isOpen);
  });

  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      setMobileMenu(false);
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMobileMenu(false);
    }
  });

  document.addEventListener("click", (event) => {
    const clickedOutsideMenu = !mobileNav.contains(event.target);
    const clickedToggle = mobileMenuButton.contains(event.target);

    if (clickedOutsideMenu && !clickedToggle) {
      setMobileMenu(false);
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      setMobileMenu(false);
    }
  });
}

function isDesktopViewport() {
  return window.innerWidth > 768;
}

function setDesktopFabVisible(visible) {
  if (!themeFab) return;
  if (!isDesktopViewport()) {
    themeFab.classList.add("is-visible");
    return;
  }
  themeFab.classList.toggle("is-visible", visible);
}

function setupDesktopThemeFabOnScroll() {
  if (!themeFab || !topbar) return;

  const updateFabVisibility = () => {
    if (!isDesktopViewport()) {
      setDesktopFabVisible(true);
      return;
    }

    const topbarBottom = topbar.getBoundingClientRect().bottom;
    setDesktopFabVisible(topbarBottom <= 0);
  };

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (!isDesktopViewport()) {
          setDesktopFabVisible(true);
          return;
        }

        setDesktopFabVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(topbar);
  }

  window.addEventListener("scroll", updateFabVisibility, { passive: true });
  window.addEventListener("resize", updateFabVisibility);
  updateFabVisibility();
}

function setupInteractionsCarousel() {
  const track = document.querySelector(".interactions-stack");
  if (!track || track.dataset.carouselReady === "true") return;

  const cards = Array.from(track.querySelectorAll(":scope > .interactions-card"));
  if (!cards.length) return;

  const duplicateCycles = 3;
  const clonesFragment = document.createDocumentFragment();

  for (let cycle = 0; cycle < duplicateCycles; cycle += 1) {
    cards.forEach((card) => {
      const clone = card.cloneNode(true);
      clone.classList.add("is-clone");
      clone.setAttribute("aria-hidden", "true");
      clonesFragment.appendChild(clone);
    });
  }

  track.appendChild(clonesFragment);
  track.dataset.carouselReady = "true";
}

const categories = ["Todos", ...new Set(features.map((item) => item.category))];
const categoryCounts = features.reduce((acc, item) => {
  acc[item.category] = (acc[item.category] || 0) + 1;
  return acc;
}, {});

function getCategoryIcon(category) {
  return categoryIcons[category] || categoryIcons.Todos;
}

function getCategoryCount(category) {
  if (category === "Todos") return features.length;
  return categoryCounts[category] || 0;
}

function renderChips() {
  chipsRoot.innerHTML = "";

  categories.forEach((category) => {
    const btn = document.createElement("button");
    btn.className = `chip ${state.category === category ? "active" : ""}`;
    btn.type = "button";
    btn.innerHTML = `
      <span class="chip-main">${getCategoryIcon(category)}<span>${category}</span></span>
      <span class="chip-count">${getCategoryCount(category)}</span>
    `;
    btn.onclick = () => {
      state.category = category;
      renderChips();
      renderList(true);
    };
    chipsRoot.appendChild(btn);
  });
}

function applyFilter(items) {
  return items.filter((item) => {
    const byCategory = state.category === "Todos" || item.category === state.category;
    const bySearch = `${item.command} ${item.title} ${item.description}`
      .toLowerCase()
      .includes(state.query.toLowerCase());
    return byCategory && bySearch;
  });
}

function updateResultsInfo(filteredLength) {
  if (!resultsInfo) return;

  const currentLabel = state.category === "Todos" ? "todas as categorias" : `categoria ${state.category}`;
  resultsInfo.textContent = `Mostrando ${filteredLength} de ${features.length} funções em ${currentLabel}.`;
}

function renderList(animate = false) {
  const filtered = applyFilter(features);
  updateResultsInfo(filtered.length);
  
  // Animação de saída se necessário (opcional, pode ser complexo, melhor limpar direto)
  listRoot.innerHTML = "";

  if (!filtered.length) {
    listRoot.innerHTML = `
      <article class="card command-empty">
        <h3>Nenhuma função encontrada</h3>
        <p>Tente outro termo na busca.</p>
      </article>`;
    return;
  }

  filtered.forEach((item, index) => {
    const article = document.createElement("article");
    article.className = "card command-card";
    
    // Adicionar delay escalonado para animação de entrada
    if (animate) {
      article.style.opacity = "0";
      article.style.transform = "translateY(20px)";
      article.style.transition = "opacity 0.4s ease, transform 0.4s ease";
      setTimeout(() => {
        article.style.opacity = "1";
        article.style.transform = "translateY(0)";
      }, index * 50); // 50ms de delay por item
    }

    article.innerHTML = `
      <div class="command-top">
        <span class="command-icon" aria-hidden="true">${getCategoryIcon(item.category)}</span>
        <span class="tag-mini">${item.category}</span>
      </div>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <div class="meta">
        <code>${item.command}</code>
        <span class="command-hint">Comando</span>
      </div>
    `;
    listRoot.appendChild(article);
  });
}

if (searchInput) {
  searchInput.addEventListener("input", (event) => {
    state.query = event.target.value;
    renderList(false); // Sem animação escalonada na busca para ser rápido
  });
}

if (clearSearchButton && searchInput) {
  clearSearchButton.addEventListener("click", () => {
    state.query = "";
    searchInput.value = "";
    renderList(false);
    searchInput.focus();
  });
}

// Inicialização
setupPageLoader();
setupTheme();
setupMobileMenu();
setupDesktopThemeFabOnScroll();
setupInteractionsCarousel();
renderChips();
renderList(true);

// Scroll Reveal Animation
document.addEventListener('DOMContentLoaded', () => {
    // Injetar estilos de animação
    const style = document.createElement('style');
    style.innerHTML = `
      .scroll-hidden { opacity: 0; transform: translateY(40px); transition: opacity 0.8s ease-out, transform 0.8s ease-out; }
      .scroll-visible { opacity: 1; transform: translateY(0); }
    `;
    document.head.appendChild(style);
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Adiciona classe para animar
            entry.target.classList.replace('scroll-hidden', 'scroll-visible');
            observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
  
    // Selecionar elementos para animar
    const elements = document.querySelectorAll('.hero-content > *, .section h2, .card, .timeline-item');
    elements.forEach((el, i) => {
        el.classList.add('scroll-hidden');
        if (i < 8) el.style.transitionDelay = `${i * 100}ms`; // Delay inicial apenas
        observer.observe(el);
    });
});
