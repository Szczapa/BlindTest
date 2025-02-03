

export function saveScore(score: number): void {
    localStorage.setItem('gameScore', score.toString());
  }


  
  export function getScore(): number {
    const storedScore = localStorage.getItem('gameScore');
    return storedScore ? parseInt(storedScore, 10): 0;
    }

  export function saveMoney(money :number): void {
    localStorage.setItem('donation',money.toString())
  }

  export function getMoney(): number {
    const storedMoney = localStorage.getItem("donation")
    return storedMoney ? parseInt(storedMoney,10):0;
  }

  export function checkStorage(): boolean {
    const donation = parseInt(localStorage.getItem("donation") || "0", 10);
    const gameScore = parseInt(localStorage.getItem("gameScore") || "0", 10);
    return donation > 0 || gameScore > 0; 
}

export function addListCharacter (): void{

}

export function resetListCharacter (): void {

}

export function getCharacterList(): String[]{
  return [];
}


  export function initStorage(): void{
    localStorage.clear();
    localStorage.setItem("donation","0");
    console.log(localStorage.setItem("donation","0"));

    localStorage.setItem("gameScore","0");
    console.log(localStorage.setItem("gameScore","0"));    
    localStorage.setItem("characterList","");
  }

  