(() => {
  "use strict";

  // Évite double initialisation
  if (window.__marpupNotionsInitialized) return;
  window.__marpupNotionsInitialized = true;

  const notions = window.MARPUP_NOTIONS;

  if (!notions) {
    console.error("[MarpUp] La banque de notions n'est pas chargée.");
    return;
  }

  let dialog = null;
  let lastTrigger = null;

  function createDialog() {
    if (dialog) return dialog;

    dialog = document.createElement("dialog");
    dialog.className = "marpup-notion-dialog";

    dialog.innerHTML = `
      <div class="marpup-notion-dialog__header">
        <div>
          <p class="marpup-notion-dialog__group"></p>
          <h2 class="marpup-notion-dialog__title"></h2>
        </div>

        <button
          type="button"
          class="marpup-notion-dialog__close"
          aria-label="Fermer la définition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
	          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
	          <path d="M6.707 5.293l5.293 5.292l5.293 -5.292a1 1 0 0 1 1.414 1.414l-5.292 5.293l5.292 5.293a1 1 0 0 1 -1.414 1.414l-5.293 -5.292l-5.293 5.292a1 1 0 1 1 -1.414 -1.414l5.292 -5.293l-5.292 -5.293a1 1 0 0 1 1.414 -1.414" />
          </svg>
        </button>
      </div>

      <p class="marpup-notion-dialog__definition"></p>
    `;

    dialog
      .querySelector(".marpup-notion-dialog__close")
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

  function openNotion(trigger) {
    const key = trigger.dataset.notion;

    if (!key) return;

    const notion = notions[key];

    if (!notion) {
      console.error(`[MarpUp] Notion inconnue : "${key}".`);
      return;
    }

    lastTrigger = trigger;

    const currentDialog = createDialog();

    currentDialog.querySelector(".marpup-notion-dialog__group").textContent =
      notion.groupe ?? "";

    currentDialog.querySelector(".marpup-notion-dialog__title").textContent =
      notion.terme;

    currentDialog.querySelector(
      ".marpup-notion-dialog__definition",
    ).textContent = notion.definition;

    // Le dialog est placé dans la slide active afin de rester dans le scope CSS du thème
    const slide = trigger.closest("section");

    if (slide && currentDialog.parentElement !== slide) {
      slide.appendChild(currentDialog);
    }

    if (!currentDialog.open) {
      currentDialog.showModal();
    }
  }

  // Un seul listener pour toutes les notions du deck
  document.addEventListener("click", (event) => {
    const trigger = event.target.closest(".marpup-notion[data-notion]");

    if (!trigger) return;

    openNotion(trigger);
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
