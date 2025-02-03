

export function saveScore(score: number): void {
  localStorage.setItem('gameScore', score.toString());
}



export function getScore(): number {
  const storedScore = localStorage.getItem('gameScore');
  return storedScore ? parseInt(storedScore, 10) : 0;
}

export function saveMoney(money: number): void {
  localStorage.setItem('donation', money.toString());
}

export function getMoney(): number {
  const storedMoney = localStorage.getItem("donation");
  return storedMoney ? parseInt(storedMoney, 10) : 0;
}

export function checkStorage(): boolean {
  const donation = parseInt(localStorage.getItem("donation") || "0", 10);
  const gameScore = parseInt(localStorage.getItem("gameScore") || "0", 10);
  return donation > 0 || gameScore > 0;
}

export function saveCharacterList(characterList: string[]): void {
  localStorage.setItem("characterList", JSON.stringify(characterList));
}


export function resetCharacterList(): void {
  localStorage.removeItem("characterList");
}


export function getCharacterList(): string[] {
  const storedList = localStorage.getItem("characterList");
  return storedList ? JSON.parse(storedList) : [];

}

export function setLevel(level: number): void {
  localStorage.setItem('level', level.toString());
}

export function getLevel(): number {
  const storedLevel = localStorage.getItem("level");
  return storedLevel ? parseInt(storedLevel,10):0;
}



export function initStorage(): void {
  localStorage.clear();
  localStorage.setItem("donation", "0");
  localStorage.setItem("gameScore", "0");
  localStorage.setItem("characterList", "");
  localStorage.setItem("level","0");
}

