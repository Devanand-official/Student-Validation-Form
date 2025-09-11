function save(event) {
  event.preventDefault();
  var nam = document.getElementById("name");
  var ag = document.getElementById("age");
  var cour = document.getElementById("programming");
  var mail = document.getElementById("mailid");
  var gen = document.querySelector('input[name="gender"]:checked');

  if (!nam.value || !ag.value || !cour.value || !mail.value) {
    // alert("Please fill in all fields.")
    return;
  }
  if (!gen) {
    alert("Please select a gender.");
    return;
  } else {
    alert("Your Form has been Submited Successfully");
  }
  var out = document.getElementById("output");
  var row = out.insertRow(-1);
  row.insertCell(0).innerText = nam.value;
  row.insertCell(1).innerText = ag.value;
  row.insertCell(2).innerText = cour.value;
  row.insertCell(3).innerText = gen.value;
  row.insertCell(4).innerText = mail.value;

  var deleteCell = row.insertCell(5);
  var delbtn = document.createElement("button");
  delbtn.innerHTML = "Delete";
  delbtn.onclick = function () {
    deleteRow(this);
  };
  deleteCell.appendChild(delbtn);

  // Clear the inputs
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("programming").selectedIndex = 0;
  document.getElementById("mailid").value = "";
  document
    .querySelectorAll('input[name="gender"]')
    .forEach((el) => (el.checked = false));
}

function deleteRow(btn) {
  var row = btn.closest("tr"); // Finds the nearest row
  row.remove(); // Removes that row
}
