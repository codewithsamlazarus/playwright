

function findTheLastWordLength(sentance) {
    let sentanceArray = sentance.split(" ")
    for (let index = 0; index < sentanceArray.length; index++) {
        if (index == sentanceArray.length-1) {
            console.log(`The last word in the String is ${sentanceArray[index]}, and its length is ${sentanceArray[index].length}`);
        }
    }
}
findTheLastWordLength("Fly to the moon")

function checkAnagram(word1, word2){
// let word1 = `tar`;
// let word2 = `rat`;
    if (word1.length !== word2.length) {
        console.log(`${word1} and ${word2} are not anagram`);
        // return false;
    } else {
        const sortedString1 = word1.toLowerCase().split('').sort().join();
        const sortedString2 = word2.toLowerCase().split('').sort().join();
        if (sortedString1 === sortedString2) {
            console.log(`${word1} and ${word2} are anagram`);
            // return ;
        }
    }
}
checkAnagram(`rat`,`tar`);

