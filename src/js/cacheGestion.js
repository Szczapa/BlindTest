export function saveScore(score) {
    localStorage.setItem('gameScore', score.toString());
}
export function getScore() {
    const storedScore = localStorage.getItem('gameScore');
    return storedScore ? parseInt(storedScore, 10) : 0;
}
export function saveMoney(money) {
    localStorage.setItem('donation', money.toString());
}
export function getMoney() {
    const storedMoney = localStorage.getItem("donation");
    return storedMoney ? parseInt(storedMoney, 10) : 0;
}
export function checkStorage() {
    const donation = parseInt(localStorage.getItem("donation") || "0", 10);
    const gameScore = parseInt(localStorage.getItem("gameScore") || "0", 10);
    return donation > 0 || gameScore > 0;
}
export function addListCharacter() {
}
export function resetListCharacter() {
}
export function getCharacterList() {
    return [];
}
export function initStorage() {
    localStorage.clear();
    localStorage.setItem("donation", "0");
    console.log(localStorage.setItem("donation", "0"));
    localStorage.setItem("gameScore", "0");
    console.log(localStorage.setItem("gameScore", "0"));
    localStorage.setItem("characterList", "");
}
