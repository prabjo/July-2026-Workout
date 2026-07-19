(function () {
  const host = document.getElementById("app-nav");
  if (!host) return;

  const current = document.body.dataset.page || "workout";

  const items = [
    { key: "workout", href: "index.html", label: "Workout" },
    { key: "nutrition", href: "nutrition.html", label: "Nutrition" },
    { key: "hiit", href: "hiit-timer.html", label: "HIIT Timer" },
    { key: "meditation", href: "meditation.html", label: "Meditation" }
  ];

  host.className = "app-nav";
  host.innerHTML = items.map(item => {
    const active = item.key === current ? "active" : "";
    return `<a class="app-link ${active}" href="${item.href}">${item.label}</a>`;
  }).join("");
})();
