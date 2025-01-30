import { checkStorage, initStorage } from "./cacheGestion.js";
document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.querySelector(".startBtn");
    startBtn === null || startBtn === void 0 ? void 0 : startBtn.addEventListener("click", () => {
        if (checkStorage()) {
            const overwrite = window.confirm("Une sauvegarde existe déjà. Voulez-vous l'écraser et recommencer ?");
            if (overwrite) {
                initStorage();
            }
        }
        else {
            initStorage();
        }
    });
});
