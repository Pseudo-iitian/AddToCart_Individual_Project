let scrimbaUsers = {
  "00": "sindre@scrimba.com",
  "01": "per@scrimba.com",
  "02": "frode@scrimba.com"
}

let users = Object.values(scrimbaUsers)
let id = Object.keys(scrimbaUsers)
console.log(id)
console.log(users)

// Challenge: Create a let variable called 'scrimbaUsersEmails' and use one of Object methods to 
// set it equal to an array with the values
let scrimbaUsersEmails = Object.values(scrimbaUsers)
console.log(scrimbaUsersEmails)

// Challenge: Create a let variable called 'scrimbaUsersIDs' and use one of Object methods to set it equal to an array with the keys
let scrimbaUsersIDs = Object.keys(scrimbaUsers)
console.log(scrimbaUsersIDs)

// Challenge: Create a let variable called 'scrimbaUsersEntries' and use one of Object methods to  set it equal to an array with the both the keys and values

let scrimbaUsersEntries = Object(scrimbaUsers)
console.log(scrimbaUsersEntries)