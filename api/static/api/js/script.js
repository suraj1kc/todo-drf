document.addEventListener("DOMContentLoaded", () => {
    const todoContainer = document.getElementById("todo-container");

    if (!todoContainer) {
        console.error("Todo container element not found");
        return;
    }

    // Function to fetch todos
    async function fetchTodos() {
        try {
            const response = await fetch("http://localhost:8000/api/v1/todos/");
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const todos = await response.json();
            displayTodos(todos);
        } catch (error) {
            console.error("Error fetching todos:", error);
        }
    }

    // Function to display todos
    function displayTodos(todos) {
        todoContainer.innerHTML = ""; // Clear existing todos

        todos.forEach((todo) => {
            const todoItem = document.createElement("div");
            todoItem.classList.add("card");

            const todoImage = document.createElement("img");
            todoImage.src = todo.image;
            todoImage.alt = todo.title;
            todoImage.classList.add("card-img-top");

            const todoBody = document.createElement("div");
            todoBody.classList.add("card-body");

            const todoTitle = document.createElement("h5");
            todoTitle.classList.add("card-title");
            todoTitle.textContent = todo.title;

            const todoStatus = document.createElement("p");
            todoStatus.classList.add("card-text");
            todoStatus.textContent = todo.is_completed
                ? "Completed"
                : "Not Completed";

            const todoCreated = document.createElement("p");
            todoCreated.classList.add("card-text");
            todoCreated.textContent = `Created at: ${new Date(
                todo.created_at
            ).toLocaleString()}`;

            todoBody.appendChild(todoTitle);
            todoBody.appendChild(todoStatus);
            todoBody.appendChild(todoCreated);

            todoItem.appendChild(todoImage);
            todoItem.appendChild(todoBody);
            todoContainer.appendChild(todoItem);
        });
    }

    // Fetch and display todos on page load
    fetchTodos();
});
