(() => {
    const toDoForm = document.querySelector(".todo__form");
    const toDOList = document.getElementById("todo-list");
    const toDoInput = toDoForm.querySelector("input");

    const TODOS_KEY = "todos";
    let toDos = [];

    const savedToDos = localStorage.getItem(TODOS_KEY);
    if (savedToDos) {
        const parsedToDos = JSON.parse(savedToDos);
        toDos = parsedToDos;
        parsedToDos.forEach(paintToDo); // painToDo함수의 매개변수가 1개이기 때문에 item인자를 그대로 받아올 수 있음
    }

    function saveToDos() {
        localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    }

    function deleteToDo(event) {
        const li = event.target.parentElement;

        toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
        li.remove();
        saveToDos();
    }

    function paintToDo(newTodo) {
        const li = document.createElement("li");
        li.id = newTodo.id;
        const div = document.createElement("div");
        div.innerText = newTodo.text;
        const button = document.createElement("button");
        button.innerText = "❌";
        button.addEventListener("click", deleteToDo);

        li.appendChild(div);
        li.appendChild(button);
        toDOList.appendChild(li);
    }

    function handleToDoSubmit(event) {
        event.preventDefault();

        const newTodo = toDoInput.value;
        const newTodoObj = {
            text: newTodo,
            id: Date.now(),
        };

        toDoInput.value = "";
        toDos.push(newTodoObj);
        paintToDo(newTodoObj);
        saveToDos();
    }

    toDoForm.addEventListener("submit", handleToDoSubmit);
})();
