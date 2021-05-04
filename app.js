'use strict';
const donationForm = document.getElementById('DonationForm');

let arrayOfObjects=[];
function Donor(name,age,amount){
  this.name=name;
  this.age=age;
  this.amount=amount;
  arrayOfObjects.push(this);
  saveTols();
}

donationForm.addEventListener('submit',handleSubmit);
function handleSubmit(event){
  event.preventDefault();
  const name=event.target.name.value;
  const age=Math.floor(Math.random() * (30 - 18 + 1) ) + 18;
  const amount=event.target.amount.value;

  let newDonor = new Donor(name,age,amount);
  console.log(newDonor);
  newDonor.render();
}

Donor.prototype.render = function(){
  let tableData = document.createElement('tr');
  tableE1.appendChild(tableData);
  let tdE1 = document.createElement('td');
  tableData.appendChild(tdE1);
  tdE1.textContent=this.name;
  let tdE2 = document.createElement('td');
  tableData.appendChild(tdE2);
  tdE2.textContent=this.age;
  let tdE3 = document.createElement('td');
  tableData.appendChild(tdE3);
  tdE3.textContent=this.amount;
};

function saveTols(){
  let arrStr = JSON.stringify(arrayOfObjects);
  localStorage.setItem('Donors',arrStr);
}

function getLs(){
  let data = localStorage.getItem('Donors');
  let donor = JSON.parse(data);
  if(donor!==null)
  {
    arrayOfObjects=donor;
  }
  for(let i = 0 ; i<arrayOfObjects.length ; i++)
  {
    let tableData = document.createElement('tr');
    tableE1.appendChild(tableData);
    let tdE1 = document.createElement('td');
    tableData.appendChild(tdE1);
    tdE1.textContent=arrayOfObjects[i].name;
    let tdE2 = document.createElement('td');
    tableData.appendChild(tdE2);
    tdE2.textContent=arrayOfObjects[i].age;
    let tdE3 = document.createElement('td');
    tableData.appendChild(tdE3);
    tdE3.textContent=arrayOfObjects[i].amount;
  }
}

const container = document.getElementById('container');
let tableE1 = document.createElement('table');
container.appendChild(tableE1);
let headingRow=document.createElement('tr');
tableE1.appendChild(headingRow);
let th = document.createElement('th');
headingRow.appendChild(th);
th.textContent='Donor Name';
let th1 = document.createElement('th');
headingRow.appendChild(th1);
th1.textContent='Donor Age';
let th2 = document.createElement('th');
headingRow.appendChild(th2);
th2.textContent='Amount';


getLs();
