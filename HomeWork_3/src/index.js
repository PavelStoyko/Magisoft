import './styles/style.scss';
// window.onload = function(){
let todoList = [];
if(localStorage.getItem('todo')!=undefined){
    todoList = JSON.parse(localStorage.getItem('todo'));
    console.log(todoList);
    out2();
}

// function valueWatcher(value1, value2, fn){
//     if(value1 !== '' && value2 !== ''){
//         document.getElementById('add-task').disabled = false;
//     }
// }

document.getElementById('add-task').addEventListener('click', function () {
    let t = document.getElementById('text-input').value;
    let dateNow = new Date().toJSON().slice(0,10);
    let dueDate = document.getElementById('date-input').value;
    let temp={};
    temp.title = t;
    temp.createdAt = dateNow;
    temp.dueDate = dueDate;
    temp.isDone = false;

    let i = todoList.length;
    todoList[i] = temp;
    console.log(todoList);
    out();
    localStorage.setItem('todo', JSON.stringify(todoList));
});

function out() {
    let out = '';
    let dateNowValue = '';
    let dueDateValue = '';
    for(let key in todoList){
        out = todoList[key].title;
        dateNowValue = todoList[key].createdAt;
        dueDateValue = todoList[key].dueDate;
    }

    let task = document.createElement('tr');
    task.className = 'task';

    let tasksTable = document.getElementsByClassName('tasks-table')[0];
    tasksTable.appendChild(task);

    let p = document.createElement('p');
    p.className = 'task-text__p';
    p.innerHTML = out;


    let taskText = document.createElement('td');
    taskText.className = 'task-text';
    taskText.appendChild(p);

    let del = document.createElement('td');
    del.className = 'task-del';
    del.innerHTML = '<button class="task-del__btn btn-red">DEL</button>';

    let done = document.createElement('td');
    done.className = 'task-done';
    done.innerHTML = '<button class="task-done__btn btn-green">DONE</button>';

    task.appendChild(taskText);
    task.appendChild(del);
    task.appendChild(done);
}

    function out2() {
        let out = '';
        let dateNowValue = '';
        let dueDateValue = '';
        for(let key in todoList) {
            out = todoList[key].title;
            dateNowValue = todoList[key].createdAt;
            dueDateValue = todoList[key].dueDate;
            // }

            let task = document.createElement('tr');
            task.className = 'task';

            let tasksTable = document.getElementsByClassName('tasks-table')[0];
            tasksTable.appendChild(task);

            let p = document.createElement('p');
            p.className = 'task-text__p';
            p.innerHTML = out;


            let taskText = document.createElement('td');
            taskText.className = 'task-text';
            taskText.appendChild(p);

            let del = document.createElement('td');
            del.className = 'task-del';
            del.innerHTML = '<button class="task-del__btn btn-red">DEL</button>';
            del.addEventListener("click", function () {
                let node = this.parentNode;
                node.remove();
                console.log('del');
            });

            let done = document.createElement('td');
            done.className = 'task-done';
            done.innerHTML = '<button class="task-done__btn btn-green">DONE</button>';
            done.addEventListener('click', function () {
                let a = this.previousSibling.previousSibling;
                a.classList.toggle('done');
                console.log(a);
            });

            task.appendChild(taskText);
            task.appendChild(del);
            task.appendChild(done);
        }
    }
function makeDone(el) {
    let task1 = el.parentNode;
}
function removeTask (el) {
    console.log(el);
    console.log('del');
    // localStorage.removeItem('todo');
    // out2();
}
//
// (function () {
//     let tasks = {
//             current: [],
//             done: [],
//             get allTasks() {
//                 return this.current.length + this.done.length;
//             },
//             get doneTasks() {
//                 return this.done.length;
//             }
//         },
//         tasksList = document.getElementById("app__list"),
//         allTasks = document.getElementById("js-all-tasks"),
//         doneTasks = document.getElementById("js-done-tasks"),
//         addNewTaskField = document.getElementById("app__task-new");
//
//     if(localStorage.getItem('todo')!=undefined){
//         tasks.current = JSON.parse(localStorage.getItem('todo'));
//     }
//     if(localStorage.getItem('done')!=undefined){
//         tasks.done = JSON.parse(localStorage.getItem('done'))
//     }
//
//     function INIT() {
//         for (const item of tasks.current) {
//             createItem(item);
//         }
//         for (const item of tasks.done) {
//             createItem(item);
//         }
//         allTasks.innerHTML = tasks.allTasks;
//         doneTasks.innerHTML = tasks.doneTasks;
//     }
//
//     function createItem(el) {
//         let item = document.createElement('li'),
//             remove = document.createElement('div'),
//             text = document.createElement('span');
//         remove.classList.add('app__list-remove');
//         remove.addEventListener('click', function () {
//             removeTask(this);
//         });
//         text.classList.add('app__list-text');
//         text.addEventListener('click', function () {
//             doneTask(this);
//         });
//         switch (el.taskState) {
//             case 'done':
//                 item.classList.add('app__list-item', 'app__list-item--done');
//                 break;
//             default:
//                 item.classList.add('app__list-item');
//         }
//         item.id = el.taskId;
//         text.innerHTML = el.taskContent;
//         item.appendChild(text);
//         item.appendChild(remove);
//         tasksList.appendChild(item);
//     }
//
//     function doneTask(el) {
//         let elem = el.parentNode,
//             elemId = elem.id,
//             elemState = elem.classList.contains('app__list-item--done');
//
//         const [itemsRemove, itemsAdd] = elemState ? [tasks.done, tasks.current] : [tasks.current, tasks.done];
//         elem.classList.toggle('app__list-item--done');
//         for (const [index, item] of itemsRemove.entries()) {
//             if (item.taskId !== elemId) continue;
//             itemsAdd.push(item);
//             itemsRemove.splice(index, 1);
//         }
//         doneTasks.innerHTML = tasks.doneTasks;
//     }
//
//     function removeTask(el) {
//         let removeEl = el.parentNode,
//             removeElId = removeEl.id,
//             removeElState = removeEl.classList.contains('app__list-item--done');
//
//         removeEl.remove();
//         const items = removeElState ? tasks.done : tasks.current;
//         for (const [index, item] of items.entries()) {
//             if (item.taskId !== removeElId) continue;
//             items.splice(index, 1);
//         }
//         allTasks.innerHTML = tasks.allTasks;
//         doneTasks.innerHTML = tasks.doneTasks;
//     }
//
//     function addTasks(str) {
//         let elem = {
//             taskId: doId(),
//             taskContent: str,
//             taskState: "current"
//         };
//         tasks.current.push(elem);
//         createItem(elem);
//         allTasks.innerHTML = tasks.allTasks;
//         localStorage.setItem('todo', JSON.stringify(elem));
//     }
//
//     function doId() {
//         return Math.random().toString(36).substr(2, 16);
//     }
//
//     INIT();
//
//     addNewTaskField.addEventListener('keyup',function (e) {
//         if(e.keyCode === 13) {
//             addTasks(this.value);
//             this.value = "";
//         }
//     })
//
// })();