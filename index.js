// import { add } from "../15AddToCart/functions.js" // console.log(add(3,4))
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
// Challenge: Import the 'getDatabase' from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
import { getDatabase, ref, push, onValue, remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const addSettings = {
  databaseURL: "https://addtocart-bf4b1-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(addSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList") //which database and name of reference

// html contents
const add_button = document.getElementById('add-button')
const inputField = document.getElementById('input-field')
const ulEl = document.getElementById('shopping-list')


// fetching element from database and putting into html list li
onValue(shoppingListInDB, function (snapshot) {
  if(snapshot.exists()){
    let array = Object.entries(snapshot.val())
    clearShoppingListEl();
  
    for(let i=0;i<array.length;++i){
      let currEl = array[i];
      let currentItemID = currEl[0];
      let currentItemValue = currEl[1];
      // check if it is already in array element
      appendListItems(currEl);
    }
  }
  else{
    let message = 'No items here... yet'
    ulEl.innerHTML = message
  }
})


// OnButton Click
add_button.addEventListener("click", function () {
  let inputValue = inputField.value
  // inputField.value = ""
  clearInputFieldEl()

  push(shoppingListInDB,inputValue)
  // console.log(`${inputValue} added to database`)
  // appendListItems(inputValue)
})

function clearShoppingListEl(){
  ulEl.innerHTML = ""
}
function clearInputFieldEl() {
  inputField.value = ""
}

function appendListItems(item) {
  let itemId = item[0];
  let itemValue = item[1];

  let newEl = document.createElement("li") // <li></li>
  newEl.textContent = itemValue; // <li>text</li>

  newEl.addEventListener("click",function(){
    let exactLocationOfItemInDb = ref(database,`shoppingList/${itemId}`);
    remove(exactLocationOfItemInDb)
  })

  ulEl.append(newEl); // <ul><li>text</li></ul>
}


// let scrimbaUsers = {
//   "00": "sindre@scrimba.com",
//   "01": "per@scrimba.com",
//   "02": "frode@scrimba.com"
// }

// let users = Object.values(scrimbaUsers)
// let id = Object.keys(scrimbaUsers)
// console.log(id)
// console.log(users)

// // Challenge: Create a let variable called 'scrimbaUsersEmails' and use one of Object methods to 
// // set it equal to an array with the values
// let scrimbaUsersEmails = Object.values(scrimbaUsers)
// console.log(scrimbaUsersEmails)

// // Challenge: Create a let variable called 'scrimbaUsersIDs' and use one of Object methods to set it equal to an array with the keys
// let scrimbaUsersIDs = Object.keys(scrimbaUsers)
// console.log(scrimbaUsersIDs)

// // Challenge: Create a let variable called 'scrimbaUsersEntries' and use one of Object methods to  set it equal to an array with the both the keys and values

// // let scrimbaUsersEntries = Object(scrimbaUsers)
// let scrimbaUsersEntries = Object.entries(scrimbaUsers)
// console.log(scrimbaUsersEntries)