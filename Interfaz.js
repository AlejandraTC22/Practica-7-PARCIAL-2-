export default class UI 
{
    constructor(palindromeChecker) 
    {
        this.palindromeChecker = palindromeChecker;
        this.checkButton = document.getElementById("checkButton");
        this.inputWord = document.getElementById("inputWord");
        this.result = document.getElementById("result");

        this.checkButton.addEventListener("click", () => this.checkPalindrome());
    }

    checkPalindrome() 
    {
        const word = this.inputWord.value;
        if (this.palindromeChecker.checkPalindrome(word)) 
        {
            this.result.textContent = "Es un palíndromo.";
        } 
        
        else 
        {
            this.result.textContent = "No es un palíndromo.";
        }
    }
}
