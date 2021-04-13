//Anagram

function findAnagram(words) {
    let anagrams = [words[0]]
    let updatedWords = []

    if(words.length <= 1) return words.length > 0 ? [anagrams] : ""
    
    for(let i = 1; i < words.length; i++){
        let splittedWord1 = words[i].split("").sort()
        let splittedWord2 = words[0].split("").sort()
        if(splittedWord1.join() === splittedWord2.join()){
            anagrams.push(words[i])
        } else {
            updatedWords.push(words[i])
        }
    }
    
    return [anagrams, ...findAnagram(updatedWords)]
}

console.log(findAnagram(["kita", "atik", "tika", "aku", "kia", "makan", "kua", "abc"]))
