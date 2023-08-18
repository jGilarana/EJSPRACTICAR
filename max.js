function maxim(a,b) {
    if (a > b) {
        return a

        } else {
            return b
        }
    }


maxim(8,10)

function maxOfThree(a,b,c) {
    if (a > b && a > c) {
        return a

        } else if (b > a && b >c){
            return b
        }else {
          return c
        }
    }

maxOfThree(7,10,20)

function isCharacterAVowel(a) {
  if (a === 'a' || a === 'e' || a === 'i' || a === 'o' || a === 'u'){
    
  
return true
    } else {
    return false
  }
 }

  isCharacterAVowel('o')
let arr = ['a', 'e', 'i', 'o', 'u']
function Vocalismo(a){ 
  for (let i=0; i < arr.length; i++) {
    if (a === arr[i]) {
      return true
    } else {
      return false
    }
} 

}

Vocalismo('o')














