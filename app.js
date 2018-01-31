'use strict';

var form = document.getElementById('sample_form');
var table = document.getElementById('student_table');

var data = [];

function Student(first, last, enrolled, future_classes) {
  this.first = first;
  this.last = last;
  this.enrolled = enrolled;
  this.future_classes = future_classes;
}
//'event' is prevent the default action of this event -- THIS FUNCTION ONLY GATHERS DATA --
function formData(event) {
  event.preventDefault();

//looking for value attributes  (event.target = once we fire this event find that element)
  var first = event.target.first.value;
  var last = event.target.last.value;
  var enrolled = event.target.enrolled.value;
  var future_classes = event.target.future_classes.value;

//everytime we click a button it push what was entered into the data array
  data.push(new Student(first, last, enrolled, future_classes));
  creatTable();
  form.reset(); //takes form fills and resets them
}

function creatTable() {
  var row;
  //loop thru my data array, then
  for (var i = 0; i < data.length; i++) {
    row = document.createElement('tr');
    row.innerHTML ='<td>' + data[i].first +'</td>' +
    '<td>' + data[i].last + '</td>' +
    '<td>' + data[i].enrolled + '</td>' +
    '<td>' + data[i].future_classes + '</td>';
  }
  //finds table and added new row with all the <td>'s'
  table.appendChild(row);
}

form.addEventListener('submit', formData);
