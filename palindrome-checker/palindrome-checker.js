function palindrome(str) {
    //Step 1.Lowercase the string and use the RegExp to remove unwanted charachters from it.
    var re = /[\W_]/g;

    var lowRegStr = str.toLowerCase().replace(re, '');
    //str.lowerCase() all chars has been lowCased.
    //str.replace(/[\W_]g,'') we have removed all non alphanumeric chars etc. includes spaces.

    //Step 2. Used a method for Reversing a String
    var reverseStr = lowRegStr.split('').reverse().join('');
    //when we use .split('') method we splitted every charachter within quotes.
    //after we used reverse(); method for reversing the same array.
    //At the last; .join() method we can create an array which consists of these chars.

    //Step 3. We should check if reverseStr is strictly equals to lowRegStr and return a Boolean.

    return reverseStr == lowRegStr;
}
const isItPalindrome = palindrome("A man, a plan, acanal.Panama");
console.log(isItPalindrome);
  //notes
  // \W removes all non-alphanumeric characters
  //We will need to add “_” to pass this specific test case.
  //We will also need to add the g flag for global search.


