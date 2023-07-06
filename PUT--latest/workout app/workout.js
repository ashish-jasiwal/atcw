// Get the form and table elements
const form = document.querySelector('form');
const table = document.querySelector('table');

// Add a submit event listener to the form
form.addEventListener('submit', (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the input values from the form
    const date = form.date.value;
    const exercise = form.exercise.value;
    const sets = form.sets.value;
    const reps = form.reps.value;


    // Create a new table row element
    const row = document.createElement('tr');

    // Set the inner HTML of the row to the input values
    row.innerHTML = `
<td>${date}</td>
<td>${exercise}</td>
<td>${sets}</td> 
<td>${reps}</td>

<td>
 <button class="delete-button">Delete</button>
</td>
`;
    // Append the row to the table
    table.appendChild(row);

    // Clear the form inputs
    form.reset();
});

// Add a click event listener to the table
table.addEventListener('click', (event) => {
    // Check if the clicked element is a delete button
    if (event.target.classList.contains('delete-button')) {
        // Remove the parent row element of the delete button (the entire workout row)
        event.target.parentElement.parentElement.remove();
    }
});
