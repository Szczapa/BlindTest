import { saveScore, getScore, saveMoney, getMoney } from "./cacheGestion.js";
document.addEventListener("DOMContentLoaded", () => {
    const imgContainer = document.querySelector(".img_container");
    const form = document.querySelector("#blindtest");
    const input = document.querySelector("#answer");
    const audioPlayer = document.querySelector("#audioPlayer");
    const scoreElement = document.querySelector(".score");
    const triesElement = document.querySelector(".tries");
    const nextBtn = document.querySelector(".nextBtn");
    const characterList = [
        "adamwarlock", "blackpanther", "blackwidow", "captainamerica",
        "cloak&dagger", "doctorstrange", "groot", "hawkeye", "hela", "hulk",
        "invisiblewoman", "ironfist", "ironman", "jeffthelandshark", "loki", "lunasnow",
        "magik", "magneto", "mantis", "misterfantastic", "moonknight",
        "namor", "peniparker", "psylocke", "rocketraccoon", "scarletwitch",
        "spider-man", "squirrelgirl", "star-lord", "storm", "thepunisher",
        "thor", "venom", "wintersoldier", "wolverine"
    ];
    let playedCharacterList = [];
    let score = getScore();
    let money = getMoney();
    let tryAnswer = 2;
    let actualStep = 0;
    let currentCharacter = null;
    nextBtn === null || nextBtn === void 0 ? void 0 : nextBtn.classList.add("hidden");
    updateUI();
    pickRandomCharacter();
    form === null || form === void 0 ? void 0 : form.addEventListener("submit", validateAnswer);
    nextBtn === null || nextBtn === void 0 ? void 0 : nextBtn.addEventListener("click", nextCharacter);
    function validateAnswer(evt) {
        evt.preventDefault();
        if (!input || !imgContainer || !currentCharacter)
            return;
        const userAnswer = input.value.trim().toLowerCase().replace(/\s/g, '');
        const correctAnswer = currentCharacter.toLowerCase();
        resetContainer();
        if (userAnswer === correctAnswer) {
            displayImage(currentCharacter);
            showMessage("Bonne réponse ! 🎉", "feedback-success");
            score++;
            saveScore(score);
            toggleNextButton(true);
        }
        else {
            tryAnswer--;
            if (tryAnswer <= 0) {
                money++;
                saveMoney(money);
                displayImage(currentCharacter);
                addBefore();
                toggleNextButton(true);
            }
            else {
                money += .5;
                displayImage("fail");
                showMessage(`Mauvaise réponse. ${tryAnswer} essai(s) restant.`, "feedback-error");
            }
        }
        updateUI();
        clearInput();
    }
    function pickRandomCharacter() {
        tryAnswer = 2;
        resetContainer();
        let actualScore = getScore();
        let randomIndex;
        let newCharacter;
        if (playedCharacterList.length >= characterList.length) {
            console.log("fin du jeu");
        }
        do {
            randomIndex = Math.floor(Math.random() * characterList.length);
            newCharacter = characterList[randomIndex];
        } while (playedCharacterList.indexOf(newCharacter) !== -1);
        console.log(score);
        console.log(playedCharacterList);
        console.log(newCharacter);
        currentCharacter = newCharacter;
        playedCharacterList.push(currentCharacter);
        let newStep = actualScore >= 15 ? 2 : actualScore >= 10 ? 1 : 0;
        if (newStep !== actualStep) {
            actualStep = newStep;
            playedCharacterList = [];
        }
        let soundCharacter = currentCharacter + (actualStep === 2 ? "2" : actualStep === 1 ? "1" : "");
        if (soundCharacter != "") {
            audioPlayer.src = `./src/audio/${soundCharacter}.mp3`;
        }
        else {
            console.error(`Fichier audio introuvable pour ${soundCharacter}`);
        }
    }
    function nextCharacter() {
        pickRandomCharacter();
        toggleNextButton(false);
        const allImages = imgContainer === null || imgContainer === void 0 ? void 0 : imgContainer.querySelectorAll("img");
        allImages === null || allImages === void 0 ? void 0 : allImages.forEach(img => img.classList.remove("failed"));
    }
    function displayImage(character) {
        if (!imgContainer)
            return;
        const img = document.createElement("img");
        img.src = `./src/image/${character}.png`;
        img.alt = `Image de ${character}`;
        img.classList.add("card");
        imgContainer.appendChild(img);
    }
    function addBefore() {
        const failedimg = document.createElement("img");
        failedimg.src = `./src/image/fail.png`;
        failedimg.alt = `Image de fail}`;
        failedimg.classList.add("failed");
        imgContainer.appendChild(failedimg);
    }
    function showMessage(text, className) {
        if (!imgContainer)
            return;
        const messageDiv = document.createElement("div");
        messageDiv.textContent = text;
        messageDiv.classList.add(className);
        imgContainer.appendChild(messageDiv);
    }
    function updateUI() {
        if (scoreElement)
            scoreElement.textContent = `${score}`;
        if (triesElement)
            triesElement.textContent = `${money}€`;
    }
    function resetContainer() {
        imgContainer === null || imgContainer === void 0 ? void 0 : imgContainer.replaceChildren();
    }
    function clearInput() {
        if (input)
            input.value = "";
    }
    function toggleNextButton(show) {
        if (form && nextBtn) {
            if (show) {
                form.classList.add("hidden");
                nextBtn.classList.remove("hidden");
            }
            else {
                form.classList.remove("hidden");
                nextBtn.classList.add("hidden");
            }
        }
    }
});
