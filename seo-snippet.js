// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.newell-lodge.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.newell-lodge.com/","title_tag":"Folkston GA lodging & camping options | Newell Lodge","meta_description":"Stay at Newell Lodge in Folkston GA with cabins for rent, RV hookups, camping options, outdoor activities, a fishing pond, weddings and events, and true Southern charm."},{"page_url":"https://www.newell-lodge.com/bistro","title_tag":"Bistro restaurant & Southern charm dining | Newell Lodge","meta_description":"Dine at SwampFire Backwoods Bistro at Newell Lodge, a Southern charm bistro restaurant in Folkston GA serving quality steaks and seafood in a peaceful oak grove setting."},{"page_url":"https://www.newell-lodge.com/booking-engine","title_tag":"Cabins for rent & RV hookups in Folkston GA | Newell Lodge","meta_description":"Book cabins for rent, RV hookups, and camping options at Newell Lodge in Folkston GA. Enjoy outdoor activities, a fishing pond, and Southern charm across 52 wooded acres."},{"page_url":"https://www.newell-lodge.com/weddings-events","title_tag":"Weddings and events with Southern charm | Newell Lodge","meta_description":"Host weddings and events at Newell Lodge in Folkston GA. Enjoy Southern charm venues, cabins for rent, group camping options, and outdoor activities in a live oak grove."},{"page_url":"https://www.newell-lodge.com/contact-3","title_tag":"Contact Folkston GA lodging & camping | Newell Lodge","meta_description":"Contact Newell Lodge in Folkston GA for lodging, cabins for rent, RV hookups, camping options, weddings and events, outdoor activities, and our Bistro restaurant details."},{"page_url":"https://www.newell-lodge.com/my-subscriptions","title_tag":"Guest subscriptions & updates | Newell Lodge","meta_description":"Manage your Newell Lodge subscriptions and stay updated on Folkston GA lodging, camping options, cabins for rent, RV hookups, outdoor activities, and special events."}],"keywords":["Newell Lodge","Folkston GA lodging","camping options","RV hookups","cabins for rent","outdoor activities","fishing pond","weddings and events","Southern charm","Bistro restaurant"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "Campground",
  "@id": "https://www.newell-lodge.com/#campground",
  "name": "Newell Lodge",
  "url": "https://www.newell-lodge.com/",
  "description": "Newell Lodge is a campground and lodge set on 52 acres in a 300-year-old oak grove near Folkston, Georgia, offering cabins, RV hookups, tent sites, an event hall, a restaurant, and a variety of on-site activities and amenities.",
  "image": [
    "https://static.wixstatic.com/media/714b73_a8f211ec3e534883988cad3be3c58d3b~mv2.jpg/v1/fill/w_642,h_428,q_90,enc_avif,quality_auto/714b73_a8f211ec3e534883988cad3be3c58d3b~mv2.jpg",
    "https://static.wixstatic.com/media/714b73_62adbd18c5e74df59c32fda06b08afde~mv2.jpeg/v1/fill/w_646,h_431,q_90,enc_avif,quality_auto/714b73_62adbd18c5e74df59c32fda06b08afde~mv2.jpeg",
    "https://static.wixstatic.com/media/714b73_ae389aab898e4ecc8a8d8938628258dc~mv2.jpg/v1/fill/w_480,h_321,q_90,enc_avif,quality_auto/714b73_ae389aab898e4ecc8a8d8938628258dc~mv2.jpg"
  ],
  "logo": "https://static.wixstatic.com/media/714b73_d1808a4bbe6942418c946cb6e73bbe89%7Emv2.png/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/714b73_d1808a4bbe6942418c946cb6e73bbe89%7Emv2.png",
  "telephone": "+1-912-390-9454",
  "email": "newelllodgellc@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Fire House Road",
    "addressLocality": "Folkston",
    "addressRegion": "GA",
    "postalCode": "31537",
    "addressCountry": "US"
  },
  "sameAs": [],
  "amenityFeature": [
    {
      "@type": "LocationFeatureSpecification",
      "name": "Cabins",
      "description": "6 cabins available for lodging on-site."
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "RV hookups",
      "description": "108 full service RV hookup sites."
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Tent sites",
      "description": "Tent and primitive camping sites available."
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Event hall",
      "description": "Indoor event hall available for weddings and events."
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Restaurant",
      "description": "On-site restaurant SwampFire Backwoods Bistro."
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Stocked fishing pond",
      "description": "On-site stocked fishing pond with kayak and small boat access; catch and release only."
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Sports equipment",
      "description": "Sports equipment including basketballs, volleyballs, footballs, soccer balls, kick balls, jump ropes, and hula hoops."
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "On-site bathrooms",
      "description": "Two full outhouses with bathrooms and a single-toilet outhouse near the gazebo."
    }
  ],
  "knowsAbout": [
    "campground",
    "cabins",
    "RV hookups",
    "tent camping",
    "weddings",
    "events",
    "Okefenokee Swamp"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Lodging and Camping Options",
    "url": "https://www.newell-lodge.com/booking-engine",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Cabin Rentals",
        "description": "Full cabin rentals with various rate plans suitable for families and groups."
      },
      {
        "@type": "Offer",
        "name": "RV Hookup Sites",
        "description": "108 spacious full service RV hookup sites."
      },
      {
        "@type": "Offer",
        "name": "Tent and Primitive Campsites",
        "description": "Tent and primitive campsites under the oak trees."
      }
    ]
  },
  "containsPlace": [
    {
      "@type": "FoodEstablishment",
      "name": "SwampFire Backwoods Bistro",
      "url": "https://www.newell-lodge.com/bistro",
      "description": "Family owned and operated restaurant at Newell Lodge, focusing on steak and seafood, including locally sourced Grade A ribeye steaks.",
      "servesCuisine": "Steakhouse",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Fire House Road",
        "addressLocality": "Folkston",
        "addressRegion": "GA",
        "postalCode": "31537",
        "addressCountry": "US"
      },
      "telephone": "+1-912-390-9454"
    },
    {
      "@type": "EventVenue",
      "name": "The Lodge at Hartley Oaks Event Spaces",
      "url": "https://www.newell-lodge.com/weddings-events",
      "description": "Rustic yet elegant Southern venue at Newell Lodge offering spaces for weddings, reunions, birthdays, anniversaries, corporate events, and more, including the Grand Oak Pavilion gazebo."
    }
  ],
  "potentialAction": [
    {
      "@type": "ReserveAction",
      "name": "Book Your Stay",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.newell-lodge.com/booking-engine"
      }
    },
    {
      "@type": "ReserveAction",
      "name": "Reserve a Table at SwampFire Backwoods Bistro",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.newell-lodge.com/bistro"
      }
    },
    {
      "@type": "CommunicateAction",
      "name": "Contact Newell Lodge",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.newell-lodge.com/contact-3"
      }
    }
  ]
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
