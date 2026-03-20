const logoImg = document.getElementById("logo-img");
const kentFooterLogo = document.getElementById("kent-footer-logo");
const loaderLogo = document.querySelector("[data-loader-logo]");
const pageLoader = document.querySelector("[data-page-loader]");
const loaderProgressValue = document.querySelector("[data-loader-progress-value]");
const mobileMenuButton = document.querySelector("[data-mobile-menu-toggle]");
const mobileNav = document.getElementById("mobile-nav");
const mobileNavLinks = Array.from(document.querySelectorAll("[data-mobile-nav-link]"));

function markPageReady() {
  document.body.classList.add("page-ready");
}

function applyDarkAssets() {
  if (logoImg) {
    logoImg.src = "assets/logos/logokp.png";
  }

  if (loaderLogo) {
    loaderLogo.src = "assets/logos/logokp.png";
  }

  if (kentFooterLogo) {
    kentFooterLogo.src = "assets/logos/logokp.png";
  }
}

function hidePageLoader() {
  if (!pageLoader || pageLoader.dataset.hidden === "true") {
    return;
  }

  pageLoader.dataset.hidden = "true";
  pageLoader.classList.add("is-hidden");
  document.body.classList.remove("is-loading");

  window.setTimeout(() => {
    markPageReady();
    pageLoader.remove();
  }, 900);
}

function setLoaderProgress(value) {
  if (!pageLoader) {
    return;
  }

  const safeValue = Math.max(0, Math.min(100, Math.round(value)));
  pageLoader.style.setProperty("--loader-progress", `${safeValue}%`);

  if (loaderProgressValue) {
    loaderProgressValue.textContent = `${safeValue}%`;
  }
}

function setupPageLoader() {
  if (!pageLoader) {
    markPageReady();
    return;
  }

  document.body.classList.add("is-loading");
  setLoaderProgress(0);

  const minVisibleMs = 2000;
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
    }, 220);
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

function setMobileMenu(open) {
  if (!mobileMenuButton || !mobileNav) {
    return;
  }

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
  if (!mobileMenuButton || !mobileNav) {
    return;
  }

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
}

function setupReveal() {
  const style = document.createElement("style");
  style.innerHTML = `
    .scroll-hidden { opacity: 0; transform: translateY(28px); transition: opacity 0.7s ease-out, transform 0.7s ease-out; }
    .scroll-visible { opacity: 1; transform: translateY(0); }
  `;
  document.head.appendChild(style);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.replace("scroll-hidden", "scroll-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  const elements = document.querySelectorAll(".hero-copy > *, .proposal-preview, .section-heading, .card, .cta-band, .investment-card");
  elements.forEach((element, index) => {
    element.classList.add("scroll-hidden");
    if (index < 8) {
      element.style.transitionDelay = `${index * 70}ms`;
    }
    observer.observe(element);
  });
}

setupPageLoader();
applyDarkAssets();
setupMobileMenu();
setupReveal();
