const formElem = document.querySelector("form");
const tableElem = document.querySelector(".table tbody");
let users = []
let userID = 0;
formElem.addEventListener("submit", (e) => {
    e.preventDefault()
    const { fullname, useremail, userpassword } = e.target
    let foundUser = users.find(user => user.email === useremail.value)
    if (!foundUser) {
        users.push({
            id: ++userID,
            fullname: fullname.value,
            email: useremail.value,
            password: userpassword.value
        })
    } else {
        alert("Bu user artiq movcuddur!")
    }
    addUi(users)



    fullname.value = ""
    useremail.value = ""
    userpassword.value = ""
})
function deleteUser (id) {
    users = users.filter(user => user.id !== id)
    addUi(users)
}
function editUser (id){
    const foundUser =users.find(user=> user.id === id)
    const newFullName = document.getElementById("newFullName");
    const newEmail = document.getElementById("newEmail");
    const fullNameSpan = document.querySelector(".fullnamespan")
    const emailspan = document.querySelector(".emailspan")
    newFullName.classList.remove("d-none")
    newEmail.classList.remove("d-none")
    fullNameSpan.classList.add("d-none")
    emailspan.classList.add("d-none")

    newFullName.value = foundUser.fullname;
    newEmail.value = foundUser.fullname;
}


function addUi(param) {
    tableElem.innerHTML =""
    param.forEach(user => {
        const {id, fullname,email,} = user
        tableElem.innerHTML += `
        <tr>
        <td>${id}</td>
        <td>
       <span class="fullnamespan"> ${fullname}</span>
        <input  id="newFullName" type="text" class="form-control d-none" placeholder="Ender your NewFullname" required>
        </td>
        <td>
              <span class="emailspan"> ${email}</span>
              <input id="newEmail" type="email" class="form-control d-none" placeholder="Ender your NewEmail" required>
        </td>
        <td>
            <button class="btn btn-danger" onclick= deleteUser(${id})>Delete</button>
            <button class="btn btn-secondary" onclick= editUser(${id})>Edit</button>
        </td>
        </tr>
        `
    });
}

