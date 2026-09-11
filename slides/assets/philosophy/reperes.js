(() => {
  "use strict";

  // Évite double initialisation
  if (window.__marpupReperesInitialized) return;
  window.__marpupReperesInitialized = true;

  const reperes = window.MARPUP_REPERES;

  if (!reperes) {
    console.error("[MarpUp] La banque de repères n'est pas chargée.");
    return;
  }

  let dialog = null;
  let lastTrigger = null;

  function createDialog() {
    if (dialog) return dialog;

    dialog = document.createElement("dialog");
    dialog.className = "marpup-repere-dialog";

    dialog.innerHTML = `
      <div class="marpup-repere-dialog__header">
        <div>
          <p class="marpup-repere-dialog__group"></p>
          <h2 class="marpup-repere-dialog__title"></h2>
        </div>

        <button
          type="button"
          class="marpup-repere-dialog__close"
          aria-label="Fermer la définition"
        >
          x
        </button>
      </div>

      <p class="marpup-repere-dialog__definition"></p>
    `;

    dialog
      .querySelector(".marpup-repere-dialog__close")
      .addEventListener("click", () => {
        dialog.close();
      });

    dialog.addEventListener("cancel", (event) => {
      event.preventDefault();
      dialog.close();
    });

    // Clic sur fond assombri = fermeture
    dialog.addEventListener("click", (event) => {
      if (event.target !== dialog) return;

      const rect = dialog.getBoundingClientRect();

      const inside =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;

      if (!inside) {
        dialog.close();
      }
    });

    // Rend immédiatement le contrôle clavier à la présentation
    dialog.addEventListener("close", () => {
      lastTrigger?.blur();
      lastTrigger = null;

      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
    });

    return dialog;
  }

  function openRepere(trigger) {
    const key = trigger.dataset.repere;

    if (!key) return;

    const repere = reperes[key];

    if (!repere) {
      console.error(`[MarpUp] Repère inconnu : "${key}".`);
      return;
    }

    lastTrigger = trigger;

    const currentDialog = createDialog();

    currentDialog.querySelector(".marpup-repere-dialog__group").textContent =
      repere.groupe ?? "";

    currentDialog.querySelector(".marpup-repere-dialog__title").textContent =
      repere.terme;

    currentDialog.querySelector(
      ".marpup-repere-dialog__definition",
    ).textContent = repere.definition;

    // Le dialog est placé dans la slide active afin de rester dans le scope CSS du thème
    const slide = trigger.closest("section");

    if (slide && currentDialog.parentElement !== slide) {
      slide.appendChild(currentDialog);
    }

    if (!currentDialog.open) {
      currentDialog.showModal();
    }
  }

  // Un seul listener pour tous les repères du deck
  document.addEventListener("click", (event) => {
    const trigger = event.target.closest(".marpup-repere[data-repere]");

    if (!trigger) return;

    openRepere(trigger);
  });

  // Empêche Marp de changer de slide avec la molette
  window.addEventListener(
    "wheel",
    (event) => {
      if (!dialog?.open) return;

      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
    },
    {
      capture: true,
      passive: false,
    },
  );

  // Même protection pour les gestes tactiles
  window.addEventListener(
    "touchmove",
    (event) => {
      if (!dialog?.open) return;

      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
    },
    {
      capture: true,
      passive: false,
    },
  );

  // Empêche les touches de navigation de faire changer de slide pendant l'ouverture
  window.addEventListener(
    "keydown",
    (event) => {
      if (!dialog?.open) return;

      const navigationKeys = new Set([
        "ArrowLeft",
        "ArrowRight",
        "ArrowUp",
        "ArrowDown",
        "PageUp",
        "PageDown",
        "Home",
        "End",
        " ",
      ]);

      if (!navigationKeys.has(event.key)) return;

      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
    },
    {
      capture: true,
    },
  );
})();
