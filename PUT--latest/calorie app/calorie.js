   // Add a new calorie entry to the table
function addCalorieEntry() {
  // Get form input values
  var date = document.getElementById("date").value;
  var food = document.getElementById("food").value;
  var calories = document.getElementById("calories").value;

  // Create a new table row
  var newRow = document.createElement("tr");

  // Create table cells for the date, food, calories, and actions
  var dateCell = document.createElement("td");
  var foodCell = document.createElement("td");
  var caloriesCell = document.createElement("td");
  var actionsCell = document.createElement("td");

  // Set the text content of the cells to the input values
  dateCell.textContent = date;
  foodCell.textContent = food;
  caloriesCell.textContent = calories;

  // Create update and delete buttons for the actions cell
  var updateButton = document.createElement("button");
  updateButton.classList.add("actions-button");
  updateButton.textContent = "Update";
  updateButton.onclick = function() {
    updateCalorieEntry(newRow);
  };
  var deleteButton = document.createElement("button");
  deleteButton.classList.add("actions-button");
  deleteButton.textContent = "Delete";
  deleteButton.onclick = function() {
    deleteCalorieEntry(newRow);
  };

  // Append the buttons to the actions cell
  actionsCell.appendChild(updateButton);
  actionsCell.appendChild(deleteButton);

  // Append the cells to the new row
  newRow.appendChild(dateCell);
  newRow.appendChild(foodCell);
  newRow.appendChild(caloriesCell);
  newRow.appendChild(actionsCell);

  // Add the new row to the table
  var calorieTrackerTable = document.getElementById("calorie-tracker-table");
  calorieTrackerTable.appendChild(newRow);
}

// Update an existing calorie entry in the table
function updateCalorieEntry(row) {
  // Get the current values of the cells in the row
  var dateCell = row.getElementsByTagName("td")[0];
  var foodCell = row.getElementsByTagName("td")[1];
  var caloriesCell = row.getElementsByTagName("td")[2];

  // Set the text content of the cells to the input values
  dateCell.textContent = document.getElementById("date").value;
  foodCell.textContent = document.getElementById("food").value;
  caloriesCell.textContent = document.getElementById("calories").value;
}

// Delete an existing calorie entry from the table
function deleteCalorieEntry(row) {
  // Remove the row from the table
  var calorieTrackerTable = document.getElementById("calorie-tracker-table");
  calorieTrackerTable.removeChild(row);
}

/*
// Add a new calorie entry to the table
function addCalorieEntry() {
  // Get form input values
  var date = document.getElementById("date").value;
  var food = document.getElementById("food").value;
  var calories = document.getElementById("calories").value;

  // Create a new table row
  var newRow = document.createElement("tr");

  // Create table cells for the date, food, calories, and actions
  var dateCell = document.createElement("td");
  var foodCell = document.createElement("td");
  var caloriesCell = document.createElement("td");
  var actionsCell = document.createElement("td");

  // Set the text content of the cells to the input values
  dateCell.textContent = date;
  foodCell.textContent = food;
  caloriesCell.textContent = calories;

  // Create update and delete buttons for the actions cell
  var updateButton = document.createElement("button");
  updateButton.classList.add("actions-button");
  updateButton.textContent = "Update";
  updateButton.onclick = function() {
    updateCalorieEntry(newRow);
  };
  var deleteButton = document.createElement("button");
  deleteButton.classList.add("actions-button");
  deleteButton.textContent = "Delete";
  deleteButton.onclick = function() {
    deleteCalorieEntry(newRow);
  };

  // Append the buttons to the actions cell
  actionsCell.appendChild(updateButton);
  actionsCell.appendChild(deleteButton);

  // Append the cells to the new row
  newRow.appendChild(dateCell);
  newRow.appendChild(foodCell);
  newRow.appendChild(caloriesCell);
  newRow.appendChild(actionsCell);

  // Add the new row to the table
  var calorieTrackerTable = document.getElementById("calorie-tracker-table");
  calorieTrackerTable.appendChild(newRow);
}

// Update an existing calorie entry in the table
function updateCalorieEntry(row) {
  // Get the current values of the cells in the row
  var dateCell = row.getElementsByTagName("td")[0];
  var foodCell = row.getElementsByTagName("td")[1];
  var caloriesCell = row.getElementsByTagName("td")[2];

  // Set the text content of the cells to the input values
  dateCell.textContent = document.getElementById("date").value;
  foodCell.textContent = document.getElementById("food").value;
  caloriesCell.textContent = document.getElementById("calories").value;
}

// Delete an existing calorie entry from the table
function deleteCalorieEntry(row) {
  // Remove the row from the table
  var calorieTrackerTable = document.getElementById("calorie-tracker-table");
  calorieTrackerTable.removeChild(row);
}

*/
