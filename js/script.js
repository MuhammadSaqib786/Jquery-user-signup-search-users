$(document).ready(function () {
  let chkName = false,
    chkPass = false,
    chkCPass = false,
    chkTerms = false,
    chkDate = false;
  let submit = document.getElementById("btnSubmit");
  let msg = document.getElementById("message");
  submit.disabled = true;
  //controlling short and long buttons, reset
  let short = document.getElementById("short");
  short.onclick = function () {
    displayShort();
  };
  let long = document.getElementById("long");
  long.onclick = function () {
    displayLong();
  };
  let reset= document.getElementById("reset");
  reset.onclick = function () {
    ResetData();
  };
  //adding event to name text field
  document.getElementById("uname").onchange = function () {
    changeName();
  };
  //adding event to password text field
  document.getElementById("password").onchange = function () {
    changePassword();
  };
  //adding event to confirm password text field
  document.getElementById("cpassword").onchange = function () {
    changeCPassword();
  };
  //adding event to confirm date  field
  document.getElementById("dob").onchange = function () {
    changeDOB();
  };
  //adding event to confirm terms checkbox  field
  document.getElementById("terms").onchange = function () {
    changeTerms();
  };
  function changeName() {
    //function to check name
    var name = document.getElementById("uname").value;

    if (name.length >= 5) {
      chkName = true;
    } else {
      chkName = false;
    }
    checkDetails();
    fillMessage();
  }
  function changePassword() {
    //function to validate password
    var pass = document.getElementById("password").value;
    if (pass.length >= 12 && pass.includes("#") == true) {
      chkPass = true;
    } else {
      chkPass = false;
    }
    checkDetails();
    fillMessage();
  }
  function changeCPassword() {
    //function to validate confirm password
    var pass = document.getElementById("password").value;
    var cpass = document.getElementById("cpassword").value;
    if (pass == cpass) {
      chkCPass = true;
    } else {
      chkCPass = false;
    }
    checkDetails();
    fillMessage();
  }
  function changeDOB() {
    //function to validate date
    var dob = document.getElementById("dob").value;
    console.log(dob);
    chkDate = true;
    checkDetails();
    fillMessage();
  }
  function changeTerms() {
    //function to valiade terms
    var terms = document.getElementById("terms").checked;
    if (terms == true) {
      chkTerms = true;
    } else {
      chkTerms = false;
    }

    checkDetails();
    fillMessage();
  }
  function checkDetails() {
    //function to make submit button enable or disable
    if (
      chkName == true &&
      chkPass == true &&
      chkCPass == true &&
      chkDate == true &&
      chkTerms == true
    ) {
      submit.disabled = false;
    } else {
      submit.disabled = true;
    }
  }

  function fillMessage() {
    //to display message
    if (chkName == false) {
      msg.innerHTML =
        "The username must contain a string with at least 5 characters";
    } else if (chkPass == false) {
      msg.innerHTML =
        "the password input field must contain at least 12 characters and contain a # symbol in it ";
    } else if (chkCPass == false) {
      msg.innerHTML =
        "The confirm password input field must contain the same string as the first password field ";
    } else if (chkDate == false) {
      msg.innerHTML = "Please select a date value";
    } else if (chkTerms == false) {
      msg.innerHTML = "Please agree to the terms to proceed";
    } else {
      msg.innerHTML = "";
    }
  }
  //controlling form submission
  var form = document.getElementById("myform");

  // Send a message when the form is submitted.
  form.onsubmit = function (e) {
    //adding table
    var $tableBody = $("<tbody></tbody>");
    var $row = $("<tr></tr>"); // Create row for them
    $row.append($("<td></td>").text(document.getElementById("uname").value)); // Add name
    $row.append(
      $("<td></td>").text(document.getElementById("password").value.length)
    ); // Add password length
    $row.append($("<td></td>").text(document.getElementById("dob").value)); // Adding dob
    $tableBody.append($row);
    $("thead").after($tableBody);
    // table end
    e.preventDefault();
  };
  // function to display short names
  function displayShort() {
    var  table, tr, td, i;
    table = document.getElementById("data");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0]; //user name
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.length < 12) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
  // function to display long names
  function displayLong() {
    var  table, tr, td, i;
    table = document.getElementById("data");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0]; //user name
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.length >= 12) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
  // function to reset table
  function ResetData() {
    var  table, tr, td, i;
    table = document.getElementById("data");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0]; //user name
          tr[i].style.display = "";
       
      }
    }
  
});
