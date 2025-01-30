import { checkStorage, initStorage } from "./cacheGestion.js";

document.addEventListener("DOMContentLoaded", () => {
    const startBtn: HTMLElement | null = document.querySelector(".startBtn");

    startBtn?.addEventListener("click", () => {    
        if (checkStorage()) {
            const overwrite = window.confirm(
                "Une sauvegarde existe déjà. Voulez-vous l'écraser et recommencer ?"
            );
            if (overwrite) {
                initStorage();
            }
        } else {
            initStorage();
        }
    });
});
