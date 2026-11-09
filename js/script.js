/**
 * Debuggers Studio — Main JavaScript (ES6+)
 * Pure Vanilla JavaScript interactions
 */

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  // --------------------------------------------------------------------------
  // 1. Header Sticky & Blur on Scroll
  // --------------------------------------------------------------------------
  const header = document.getElementById("site-header");
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Header styling on scroll
    if (header) {
      if (currentScrollY > 20) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }

    // Scroll to Top visibility
    if (scrollTopBtn) {
      if (currentScrollY > 400) {
        scrollTopBtn.classList.add("visible");
      } else {
        scrollTopBtn.classList.remove("visible");
      }
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll(); // Trigger initial check

  // Scroll to Top click event
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // --------------------------------------------------------------------------
  // 2. Mobile Navigation Toggle
  // --------------------------------------------------------------------------
  const mobileToggle = document.getElementById("mobileToggle");
  const navMenu = document.getElementById("navMenu");

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("open");
      mobileToggle.setAttribute("aria-expanded", isOpen);
    });

    // Close menu when clicking outside
    document.addEventListener("click", (event) => {
      if (
        !navMenu.contains(event.target) &&
        !mobileToggle.contains(event.target)
      ) {
        navMenu.classList.remove("open");
        mobileToggle.setAttribute("aria-expanded", "false");
      }
    });

    // Close mobile menu on clicking any navigation link
    navMenu.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
          navMenu.classList.remove("open");
          mobileToggle.setAttribute("aria-expanded", "false");
        }
      });
    });

    // Mobile dropdown toggle handling
    const dropdownParents = navMenu.querySelectorAll(".has-dropdown");
    dropdownParents.forEach((parent) => {
      const link = parent.querySelector(".nav-link");
      if (link) {
        link.addEventListener("click", (e) => {
          if (window.innerWidth <= 768) {
            e.preventDefault();
            parent.classList.toggle("open");
            const isExpanded = parent.classList.contains("open");
            link.setAttribute("aria-expanded", isExpanded);
          }
        });
      }
    });
  }

  // --------------------------------------------------------------------------
  // 3. FAQ Accordion Behavior & Icon Sync
  // --------------------------------------------------------------------------
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const icon = item.querySelector(".faq-icon i");

    // Update icon when details toggles
    item.addEventListener("toggle", () => {
      if (icon) {
        if (item.open) {
          icon.classList.remove("fa-plus");
          icon.classList.add("fa-minus");
        } else {
          icon.classList.remove("fa-minus");
          icon.classList.add("fa-plus");
        }
      }
    });

    // Close sibling FAQ items when one is opened
    const summary = item.querySelector(".faq-question");
    if (summary) {
      summary.addEventListener("click", () => {
        if (!item.open) {
          faqItems.forEach((sibling) => {
            if (sibling !== item && sibling.open) {
              sibling.open = false;
            }
          });
        }
      });
    }
  });

  // --------------------------------------------------------------------------
  // 4. Video Showcase Play Button Trigger
  // --------------------------------------------------------------------------
  const playVideoBtn = document.getElementById("playVideoBtn");
  if (playVideoBtn) {
    playVideoBtn.addEventListener("click", () => {
      // Smoothly alert or open modal preview
      alert(
        "🎥 Client review video stories showcase. Full video features can be connected to Vimeo or YouTube embed.",
      );
    });
  }

  // --------------------------------------------------------------------------
  // 5. Smooth Anchor Scrolling for Same-Page Links
  // --------------------------------------------------------------------------
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId && targetId !== "#") {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          const headerOffset = 80;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    });
  });
});
