/*
Question 1
1. Given the following array and implement the table dynamically(you need to create the table via JavaScript)
2. And then you should implement a form(focus on the logic only, you DON'T need to create the form via JavaScript) for taking the some format input form users(Student Name，Age，Phone,Address). When the user clicks the Add button, the data will be added into the existing table(after the existing data), and the user input in the form should be cleared. 
*/

const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};

const tbl = document.createElement("table");
tbl.setAttribute("id", "onetable");
const question1 = document.getElementById("q1");

function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let values of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(values);
    th.appendChild(text);
    row.appendChild(th);
  }
}

const generateTableBody = (table, data) => {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
};
let data = Object.values(tableInfo.tableContent);

generateTableHead(tbl, tableInfo.tableHeader);
generateTableBody(tbl, data);
question1.appendChild(tbl);

const newButton = document.getElementById("button1");
function addNewDataintoTable() {
  const newData = document.getElementById("newdata").value.split(";");
  let table = document.getElementById("onetable");
  let row = table.insertRow();
  for (key in newData) {
    let cell = row.insertCell();
    let text = document.createTextNode(newData[key]);
    cell.appendChild(text);
  }
  document.getElementById("newdata").value = "";
}

/* *Question 2
Given the array and generate order list and unordered list dynamically as following:*/

const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

const question2 = document.getElementById("q2");
const ol = document.createElement("ol");
ol.setAttribute("id", "orderlist");
for (i = 0; i < list.length; ++i) {
  let li = document.createElement("li");
  li.innerText = list[i];
  ol.appendChild(li);
}

const question2_1 = document.getElementById("q2");
const ul = document.createElement("ul");
ul.setAttribute("id", "unorderlist");
for (i = 0; i < list.length; ++i) {
  let li = document.createElement("li");
  li.innerText = list[i];
  ul.appendChild(li);
}
question2.append(ol, ul);

/*
Question 3
1. Given the array and implement a dropdown list with the following options dynamically 
2. Console the value, when the user select one option
*/

const dropDownList = [
  { value: "", content: "Please select" },
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];
const question3 = document.getElementById("q3");
const downList = document.createElement("select");
//console.log(dropDownList);//
for (i = 0; i < dropDownList.length; i++) {
  let option = document.createElement("option");
  option.setAttribute("value", dropDownList[i].value);
  option.innerText = dropDownList[i].content;
  downList.appendChild(option);
}
question3.appendChild(downList);
