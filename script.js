const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      const id = entry.target.getAttribute("id");
      document.querySelectorAll(".nav-links a").forEach((link) => {
        link.toggleAttribute("aria-current", link.getAttribute("href") === `#${id}`);
      });
    }
  },
  { rootMargin: "-35% 0px -55% 0px" },
);

document.querySelectorAll("main section[id]").forEach((section) => observer.observe(section));
