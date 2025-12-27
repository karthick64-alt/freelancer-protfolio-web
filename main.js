// Simple front-end interactions (no real backend logic yet)

// Mobile nav toggle
const navToggle = document.getElementById("nav-toggle");
const navMobile = document.getElementById("nav-mobile");

if (navToggle && navMobile) {
  navToggle.addEventListener("click", () => {
    navMobile.classList.toggle("hidden");
  });
}

// Dashboard tabs (client / freelancer preview)
const dashboardTabs = document.querySelectorAll(".dashboard-tab");
const dashboardClient = document.getElementById("dashboard-client");
const dashboardFreelancer = document.getElementById("dashboard-freelancer");

dashboardTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.getAttribute("data-dashboard-tab");

    dashboardTabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    if (target === "client") {
      if (dashboardClient) dashboardClient.classList.remove("hidden");
      if (dashboardFreelancer)
        dashboardFreelancer.classList.add("hidden");
    } else if (target === "freelancer") {
      if (dashboardClient) dashboardClient.classList.add("hidden");
      if (dashboardFreelancer)
        dashboardFreelancer.classList.remove("hidden");
    }
  });
});

// Hero search – quick tag buttons auto-fill the service input
const tagButtons = document.querySelectorAll(".tag-btn");
const searchServiceInput = document.getElementById("search-service");

tagButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.getAttribute("data-search");
    if (searchServiceInput && value) {
      searchServiceInput.value = value;
      searchServiceInput.focus();
    }
  });
});

// Global search stub – prevents page refresh and logs query
const globalSearchForm = document.getElementById("global-search");
const searchLocationInput = document.getElementById("search-location");

if (globalSearchForm) {
  globalSearchForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const query = searchServiceInput?.value?.trim() || "";
    const location = searchLocationInput?.value?.trim() || "";

    // Placeholder for real search integration
    console.log("Search submitted:", { query, location });

    // Basic UX: briefly highlight the form to show action
    globalSearchForm.classList.add("ring", "ring-primary-400/60");
    setTimeout(() => {
      globalSearchForm.classList.remove("ring", "ring-primary-400/60");
    }, 250);
  });
}

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}








