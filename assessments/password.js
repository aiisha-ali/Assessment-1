// Additional Checks is having symbols and less than 20 characters
let password = "White945790/"

let hasnumber = false
let hasletter = false
let hassymbol = false

letters = "abcdefghijklmnopqrstuvwxyz"
symbols = "+_-=[]{}:;'/?.>,<~`!@#$%^&*()"

for(let i = 0; i < password.length; i++) {
    if (isNaN(password[i]) == false) {
        hasnumber = true
    }
    if (letters.includes(password[i]) == true) {
        hasletter = true
    }
    if (symbols.includes(password[i]) == true) {
        hassymbol = true
    }
    
}

if(password.length>=10 && hasnumber === true && hasletter === true && hassymbol === true && password.length < 20) {
  console.log("success")
} else{
console.log("failure")
}
