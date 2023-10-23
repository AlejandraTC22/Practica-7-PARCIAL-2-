export default class PalindromeChecker 
{
    checkPalindrome(word) 
    {
        let wordLower = word.trim();

        wordLower = wordLower.replace(/\s/g, '').toLowerCase();

        const reversedWord = wordLower.split("").reverse().join("");

        return wordLower === reversedWord;

    }
}
