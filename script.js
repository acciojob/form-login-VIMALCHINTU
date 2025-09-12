function getFormvalue() {
  // 1. Retrieve input values
  let fname = document.getElementById("fname").value.trim();
  let lname = document.getElementById("lname").value.trim();

  // 2. Concatenate full name
  let fullName = fname + " " + lname;

  // 3. Handle empty case
  if (!fname && !lname) {
    alert("Please enter your first and last name.");
    return;
  }

  // 4. Display result
  alert(fullName);
}
