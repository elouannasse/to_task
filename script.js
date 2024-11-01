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

let eta = document.querySelector(".tst");
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
      objEtat: 0,
    };

    tasks.push(objOfTasks);
  }
}
let choix = "";

// table.addEventListener("click", (e) => {
//   if (e.target.classList.contains("etat")) {
//     // console.log(e.target.value);
//     if (e.target.value == "to do") {
//       console.log("bggg");
//       table.className = "bggg";
//       e.target.className = "bggg";
//     } else if (e.target.value == "done") {
//       table.className = "bggg2";
//       console.log("bggg2");
//     }
//   }
// });

tableHeader();
function addTaskToTable() {
  tableHeader();

  for (let i = 0; i < tasks.length; i++) {
    table.innerHTML += `
        <tr id="row${i}" class="tst ${
      tasks[i].objEtat == 0
        ? "bgggdefault"
        : tasks[i].objEtat == 1
        ? "bgggdefault"
        : "bggg2"
    }" >
            <td>${tasks[i].objTitle} </td>
            <td>${tasks[i].objDescrption} </td>
            <td>${tasks[i].objDate} <br>${tasks[i].objTim} </td>
            <td><select onchange='etatmenu(${i})' class="etat" name="" id="etatmenuid${i}" style="pdding: 8px;
                border-radius: 20px;
                margin-left: 40px;
                border: none;
                background-color: coral;
                color: black;
            }">   
            <option value="" ${
              tasks[i].objEtat == 0 && "selected"
            } >doing</option>
           <option class="todo" value="to do" ${
             tasks[i].objEtat == 1 && "selected"
           }>to do</option>
             <option value="done" ${
               tasks[i].objEtat == 2 && "selected"
             }>done</option>
</select> </td>
            <td>
            <button class="btn" onclick="delet(${i})"> delet </button>
            <button class="btn" onclick="edit(${i})"> edit </button>
             </td>
           
        </tr>
    `;
  }
}
function etatmenu(i) {
  const row = document.getElementById("row" + i);
  const menu = document.getElementById("etatmenuid" + i);

  if (menu.value == "doing") {
    tasks[i].objEtat = 0;
    row.classList.remove("bggg2");
    row.classList.add("bgggdefault");
  } else if (menu.value == "to do") {
    tasks[i].objEtat = 1;
    row.classList.remove("bggg2");
    row.classList.add("bgggdefault");
  } else if (menu.value == "done") {
    tasks[i].objEtat = 2;
    row.classList.remove("bgggdefault");
    row.classList.add("bggg2");
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
