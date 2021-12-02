function uniqueChar(word) {
   
    for(let i = 0; i < word.length; i++){  
      
      if(word[i] === word[i +1]){
         
         return true

      } else {

        return false

      }     
 }

} 
let hasUniqueChars = uniqueChar("Moonday")
console.log(hasUniqueChars)

// Runtime Complexity: O(1) - Constant Time
// Space Complexity: O(1) - Constant Space
