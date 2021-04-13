function findFirstStringInBracket(str) {

    let indexFirstBracket = str.indexOf("(")
    let wordsAfterFirstBracket = indexFirstBracket >= 0 ? str.substr(indexFirstBracket + 1) : null

    if (!wordsAfterFirstBracket) return ""

    let indexClosingBracket = wordsAfterFirstBracket.indexOf(")");
    return indexClosingBracket >= 0 ? wordsAfterFirstBracket.substring(0, indexClosingBracket) : ""


}

console.log(findFirstStringInBracket("tes test tes)"))
console.log(findFirstStringInBracket("(tes test tes)"))
console.log(findFirstStringInBracket("(aaates test tes)"))
console.log(findFirstStringInBracket("(aaates test tes"))

