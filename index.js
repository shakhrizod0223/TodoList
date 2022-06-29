var container = document.getElementById('container')
var inputName = document.getElementById('input')
var btn = document.getElementById('btn')
var inputs = document.getElementById('inputs')
var taskList = document.getElementById('taskList')

var arr = [
  { id: 1, name: 'Something Here' },
  { id: 2, name: 'CSS' },
  { id: 3, name: 'HTML' },
  { id: 4, name: 'Vue' }
]


//All users
function getUser() {
  var user = ''
  arr.map((value, index) => {
    user += `<div class="box"><p class="list">${index + 1}.</p><p class="list-name">${value.name}</p><button class="del-btn" onclick={deleteUser(${value.id})}>Delete</button></div>`
  })
  container.innerHTML = user
  taskList.innerHTML = arr.length
}

//Search

function headBtn() {
  inputs.value == "" && alert('Create name!')
  var newData = arr.filter(({ name }) => name.toLowerCase().includes(inputs.value.toLowerCase()))
  inputs.value = ""
  newData == "" && alert('Not this kind of task!')
  arr = newData
  getUser()
}

//Delete user
function deleteUser(ids) {
  var newData = arr.filter((value) => value.id !== ids)
  arr = newData
  taskList.innerHTML = arr.length
  getUser()
  taskList.innerHTML = arr.length
}

// Add user
function addUser() {

  if (inputName.value == '') {
    alert('Please write a` task name!')
  } else {

    return new Promise((resolve, reject) => {
      var newUser = { id: arr.length + 1, name: inputName.value }
      arr = [...arr, newUser]
      resolve()
      taskList.innerHTML = arr.length
      inputName.value = ''
    })
  }
}

//Button click

btn.addEventListener('click', () => {
  addUser().then(getUser).catch(err => container.innerHTML = err)
})

getUser()