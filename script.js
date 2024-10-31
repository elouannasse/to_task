let title = document.getElementById("title");
let descrption = document.getElementById("description");
let date = document.getElementById("date");
let time = document.getElementById("time");
let addBtn = document.getElementById("add");
let table = document.querySelector("table");

let titleEdit = document.querySelector(".edit-title");
let descrptionEdit = document.querySelector(".edit-description");
let dateEdit = document.querySelector(".edit-date");
let timeEdit = document.querySelector(".edit-time");
let addBtnEdit = document.querySelector(".edit-add");

let editTask = document.querySelector(".editTask");
// let cancelBtn = document.getElementById("cancel");
let editTaskIndex = 0;
let tasks = [];

function tableHeader() {
  table.innerHTML = `
  <tr>
        <th>title</th>
        <th>description</th>
        <th>dedline</th>
        <th>type</th>
        <th>action</th>
      </tr>
  `;
}
addBtn.addEventListener("click", () => {
  addTask();
  addTaskToTable();
  title.value = "";
  descrption.value = "";
  date.value = "";
  time.value = "";
});

function addTask() {
  if (
    title.value != "" &&
    descrption.value != "" &&
    date.value != "" &&
    time.value != ""
  ) {
    let objOfTasks = {
      objTitle: title.value,
      objDescrption: descrption.value,
      objDate: date.value,
      objTim: time.value,
    };

    tasks.push(objOfTasks);
  }
}

tableHeader();

function addTaskToTable() {
  tableHeader();
  for (let i = 0; i < tasks.length; i++) {
    table.innerHTML += `
        <tr>
            <td>${tasks[i].objTitle} </td>
            <td>${tasks[i].objDescrption} </td>
            <td>${tasks[i].objDate} <br>${tasks[i].objTim} </td>
            <td><select name="" id="" style=" pdding: 8px;
    border-radius: 20px;
    margin-left: 40px;
    border: none;
    background-color: coral;
    color: black;
}">
            <option value="" >doing  </option>
           <option value="">to do</option>
             <option value="">done</option>
</select> </td>
            <td>
            <button class="btn" onclick="delet(${i})"> delet </button>
            <button class="btn" onclick="edit(${i})"> edit </button>
             </td>
           
        </tr>
    `;
  }
}

function edit(index) {
  editTask.style.display = "block";
  titleEdit.value = tasks[index].objTitle;
  descrptionEdit.value = tasks[index].objDescrption;
  timeEdit.value = tasks[index].objTim;
  dateEdit.value = tasks[index].objDate;
  editTaskIndex = index;
}

function delet(i) {
  tasks.splice(i, 1);
  addTaskToTable();
}

addBtnEdit.addEventListener("click", () => {
  tasks[editTaskIndex] = {
    objTitle: titleEdit.value,
    objDescrption: descrptionEdit.value,
    objDate: dateEdit.value,
    objTim: timeEdit.value,
  };

  editTask.style.display = "none";
  addTaskToTable();
});
