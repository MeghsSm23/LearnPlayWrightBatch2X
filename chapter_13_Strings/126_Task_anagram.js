let word1 = "tea";
let word2 = "eat";

function areAnagrams(a, b) {
    const normalize = (str) => str.toLowerCase().split("").sort().join("");
    return normalize(a) === normalize(b);
}

if (areAnagrams(word1, word2)) {
    console.log("The words are anagrams.");
} else {
    console.log("The words are not anagrams.");
}
