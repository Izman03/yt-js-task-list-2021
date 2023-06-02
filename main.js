// Wait for the window to finish loading before executing the code
window.addEventListener('load', () => {

    // Select the form, input, and task list elements from the DOM
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");

    // Listen for the form submission event
    form.addEventListener('submit', (e) => {
        // Prevent the default form submission behavior
        e.preventDefault();

        // Get the value entered in the input field
        const task = input.value;

        // Create the task element
        const task_el = document.createElement('div');
        task_el.classList.add('task');

        // Create the task content element
        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content');

        // Append the task content element to the task element
        task_el.appendChild(task_content_el);

        // Create the task input element
        const task_input_el = document.createElement('input');
        task_input_el.classList.add('text');
        task_input_el.type = 'text';
        task_input_el.value = task;
        task_input_el.setAttribute('readonly', 'readonly');

        // Append the task input element to the task content element
        task_content_el.appendChild(task_input_el);

        // Create the task actions element
        const task_actions_el = document.createElement('div');
        task_actions_el.classList.add('actions');

        // Create the task edit button
        const task_edit_el = document.createElement('button');
        task_edit_el.classList.add('edit');
        task_edit_el.innerText = 'Edit';

        // Create the task delete button
        const task_delete_el = document.createElement('button');
        task_delete_el.classList.add('delete');
        task_delete_el.innerText = 'Delete';

        // Append the task edit and delete buttons to the task actions element
        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);

        // Append the task actions element to the task element
        task_el.appendChild(task_actions_el);

        // Append the task element to the task list
        list_el.appendChild(task_el);

        // Clear the input field after submitting the form
        input.value = '';

        // Add event listener for the task edit button
        task_edit_el.addEventListener('click', (e) => {
            // Check if the button text is "Edit"
            if (task_edit_el.innerText.toLowerCase() == "edit") {
                // If the button text is "Edit", change it to "Save" and allow editing
                task_edit_el.innerText = "Save";
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
            } else {
                // If the button text is "Save", change it back to "Edit" and make the input readonly
                task_edit_el.innerText = "Edit";
                task_input_el.setAttribute("readonly", "readonly");
            }
        });

        // Add event listener for the task delete button
        task_delete_el.addEventListener('click', (e) => {
            // Remove the task element when the delete button is clicked
            list_el.removeChild(task_el);
        });
    });
});
