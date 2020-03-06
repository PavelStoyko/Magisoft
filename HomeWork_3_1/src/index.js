import './styles/style.scss';
// window.onload = function(){
// let todoList = [];
// if(localStorage.getItem('todo')!=undefined){
//     todoList = JSON.parse(localStorage.getItem('todo'));
//     console.log(todoList);
//     out2();
// }
//
// // function valueWatcher(value1, value2, fn){
// //     if(value1 !== '' && value2 !== ''){
// //         document.getElementById('add-task').disabled = false;
// //     }
// // }
//
// document.getElementById('add-task').addEventListener('click', function () {
//     let t = document.getElementById('text-input').value;
//     let dateNow = new Date().toJSON().slice(0,10);
//     let dueDate = document.getElementById('date-input').value;
//     let temp={};
//     temp.title = t;
//     temp.createdAt = dateNow;
//     temp.dueDate = dueDate;
//     temp.isDone = false;
//
//     let i = todoList.length;
//     todoList[i] = temp;
//     console.log(todoList);
//     out();
//     localStorage.setItem('todo', JSON.stringify(todoList));
// });
//
// function out() {
//     let out = '';
//     let dateNowValue = '';
//     let dueDateValue = '';
//     for(let key in todoList){
//         out = todoList[key].title;
//         dateNowValue = todoList[key].createdAt;
//         dueDateValue = todoList[key].dueDate;
//     }
//
//     let task = document.createElement('tr');
//     task.className = 'task';
//
//     let tasksTable = document.getElementsByClassName('tasks-table')[0];
//     tasksTable.appendChild(task);
//
//     let p = document.createElement('p');
//     p.className = 'task-text__p';
//     p.innerHTML = out;
//
//
//     let taskText = document.createElement('td');
//     taskText.className = 'task-text';
//     taskText.appendChild(p);
//
//     let del = document.createElement('td');
//     del.className = 'task-del';
//     del.innerHTML = '<button class="task-del__btn btn-red">DEL</button>';
//
//     let done = document.createElement('td');
//     done.className = 'task-done';
//     done.innerHTML = '<button class="task-done__btn btn-green">DONE</button>';
//
//     task.appendChild(taskText);
//     task.appendChild(del);
//     task.appendChild(done);
// }
//
//     function out2() {
//         let out = '';
//         let dateNowValue = '';
//         let dueDateValue = '';
//         for(let key in todoList) {
//             out = todoList[key].title;
//             dateNowValue = todoList[key].createdAt;
//             dueDateValue = todoList[key].dueDate;
//             // }
//
//             let task = document.createElement('tr');
//             task.className = 'task';
//
//             let tasksTable = document.getElementsByClassName('tasks-table')[0];
//             tasksTable.appendChild(task);
//
//             let p = document.createElement('p');
//             p.className = 'task-text__p';
//             p.innerHTML = out;
//
//
//             let taskText = document.createElement('td');
//             taskText.className = 'task-text';
//             taskText.appendChild(p);
//
//             let del = document.createElement('td');
//             del.className = 'task-del';
//             del.innerHTML = '<button class="task-del__btn btn-red">DEL</button>';
//             del.addEventListener("click", function () {
//                 let node = this.parentNode;
//                 node.remove();
//                 console.log('del');
//             });
//
//             let done = document.createElement('td');
//             done.className = 'task-done';
//             done.innerHTML = '<button class="task-done__btn btn-green">DONE</button>';
//             done.addEventListener('click', function () {
//                 let a = this.previousSibling.previousSibling;
//                 a.classList.toggle('done');
//                 console.log(a);
//             });
//
//             task.appendChild(taskText);
//             task.appendChild(del);
//             task.appendChild(done);
//         }
//     }
// function makeDone(el) {
//     let task1 = el.parentNode;
// }
// function removeTask (el) {
//     console.log(el);
//     console.log('del');
//     // localStorage.removeItem('todo');
//     // out2();
// }


/*************************************************************************/
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

/********************************************************/
// const express = require('express');
const bodyParser = require('body-parser');
// const mysql = require('mysql2');
//
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'todo'
});

try {
    connection.connect();
} catch (e) {
    console.log('Oops. Connection to MySQL failed.');
    console.log(e);
}

const api = express();
api.use(express.static(__dirname + '/public'));
api.use(bodyParser.json());

api.listen(3000, () => {
    console.log('API up and running!');
});

api.get('/tasks', (req, res) => {
    connection.query('SELECT * FROM tasks ORDER BY created DESC', (error, results) => {
        if (error) return res.json({ error: error });

        res.json(results);
    });
});

api.post('/tasks/add', (req, res) => {
    connection.query('INSERT INTO tasks (description) VALUES (?)', [req.body.item], (error, results) => {
        if (error) return res.json({ error: error });

        connection.query('SELECT LAST_INSERT_ID() FROM tasks', (error, results) => {
            if (error) return res.json({ error: error });

            res.json({
                id: results[0]['LAST_INSERT_ID()'],
                description: req.body.item
            });
        });
    });
});

api.post('/tasks/:id/update', (req, res) => {
    connection.query('UPDATE tasks SET completed = ? WHERE id = ?', [req.body.completed, req.params.id], (error, results) => {
        if (error) return res.json({ error: error });

        res.json({});
    });
});

api.post('/tasks/:id/remove', (req, res) => {
    connection.query('DELETE FROM tasks WHERE id = ?', [req.params.id], (error, results) => {
        if (error) return res.json({ error: error });

        res.json({});
    });
});
/*******************************************************/

// Remove and complete icons in SVG format
var removeSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect class="noFill" width="22" height="22"/><g><g><path class="fill" d="M16.1,3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9,1,7.8,2,7.8,3.3v0.2H5.9c-1.3,0-2.3,1-2.3,2.3v1.3c0,0.5,0.4,0.9,0.9,1v10.5c0,1.3,1,2.3,2.3,2.3h8.5c1.3,0,2.3-1,2.3-2.3V8.2c0.5-0.1,0.9-0.5,0.9-1V5.9C18.4,4.6,17.4,3.6,16.1,3.6z M9.1,3.3c0-0.6,0.5-1.1,1.1-1.1h1.7c0.6,0,1.1,0.5,1.1,1.1v0.2H9.1V3.3z M16.3,18.7c0,0.6-0.5,1.1-1.1,1.1H6.7c-0.6,0-1.1-0.5-1.1-1.1V8.2h10.6V18.7z M17.2,7H4.8V5.9c0-0.6,0.5-1.1,1.1-1.1h10.2c0.6,0,1.1,0.5,1.1,1.1V7z"/></g><g><g><path class="fill" d="M11,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v6.8C11.6,17.7,11.4,18,11,18z"/></g><g><path class="fill" d="M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z"/></g><g><path class="fill" d="M14,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C14.6,17.7,14.3,18,14,18z"/></g></g></g></svg>';
var completeSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect y="0" class="noFill" width="22" height="22"/><g><path class="fill" d="M9.7,14.4L9.7,14.4c-0.2,0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l2.1,2.1l4.8-4.8c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-5.3,5.3C10.1,14.3,9.9,14.4,9.7,14.4z"/></g></svg>';

/**
 * Fetch all tasks from API and add the to the DOM lists.
 */
getTasks((tasks) => {
    tasks.forEach((item) => {
        addItemToDOM(item, item.completed);
    });
});

// User clicked on the add button
// If there is any text inside the item field, add that text to the todo list
document.getElementById('add').addEventListener('click', function() {
    var value = document.getElementById('item').value;
    if (value) {
        addItem(value);
    }
});

document.getElementById('item').addEventListener('keydown', function (e) {
    var value = this.value;
    if (e.code === 'Enter' && value) {
        addItem(value);
    }
});

function addItem (value) {
    document.getElementById('item').value = '';

    sendTaskToAPI(value, (item) => {
        addItemToDOM(item);
    });
}

function removeItem() {
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    var taskId = parseInt(item.getAttribute('data-id'));

    var req = new XMLHttpRequest();
    req.open('POST', '/tasks/' + taskId + '/remove');
    req.setRequestHeader('Content-Type', 'application/json');
    req.send();

    req.addEventListener('load', () => {
        var results = JSON.parse(req.responseText);
        if (results.error) return console.log(results.error);

        parent.removeChild(item);
    });

    req.addEventListener('error', (e) => {
        console.log('Shit, something bad happened.');
        console.log(e);
    });
}

function completeItem() {
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    var id = parent.id;
    var value = item.innerText;
    var taskId = parseInt(item.getAttribute('data-id'));

    // Check if the item should be added to the completed list or to re-added to the todo list
    var target = (id === 'todo') ? document.getElementById('completed'):document.getElementById('todo');

    var req = new XMLHttpRequest();
    req.open('POST', '/tasks/' + taskId + '/update');
    req.setRequestHeader('Content-Type', 'application/json');
    req.send(JSON.stringify({ completed: (id === 'todo') }));

    req.addEventListener('load', () => {
        var results = JSON.parse(req.responseText);
        if (results.error) return console.log(results.error);

        parent.removeChild(item);
        target.insertBefore(item, target.childNodes[0]);
    });

    req.addEventListener('error', (e) => {
        console.log('Shit, something bad happened.');
        console.log(e);
    });
}

// Adds a new item to the todo list
function addItemToDOM(task, completed) {
    var list = (completed) ? document.getElementById('completed'):document.getElementById('todo');

    var item = document.createElement('li');
    item.innerText = task.description;
    item.setAttribute('data-id', task.id);

    var buttons = document.createElement('div');
    buttons.classList.add('buttons');

    var remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerHTML = removeSVG;

    // Add click event for removing the item
    remove.addEventListener('click', removeItem);

    var complete = document.createElement('button');
    complete.classList.add('complete');
    complete.innerHTML = completeSVG;

    // Add click event for completing the item
    complete.addEventListener('click', completeItem);

    buttons.appendChild(remove);
    buttons.appendChild(complete);
    item.appendChild(buttons);

    list.insertBefore(item, list.childNodes[0]);
}

/**
 * Method for sending to-do item to API
 */
function sendTaskToAPI(item, callback) {
    var req = new XMLHttpRequest();
    req.open('POST', '/tasks/add');
    req.setRequestHeader('Content-Type', 'application/json');
    req.send(JSON.stringify({ item: item }));

    req.addEventListener('load', () => {
        var results = JSON.parse(req.responseText);
        if (results.error) return console.log(results.error);

        if (callback) callback(results);
    });

    req.addEventListener('error', (e) => {
        console.log('Shit, something bad happened.');
        console.log(e);
    });
}

/**
 * Will fetch all tasks from API.
 */
function getTasks(callback) {
    var req = new XMLHttpRequest();
    req.open('GET', '/tasks');
    req.send();

    req.addEventListener('load', () => {
        var results = JSON.parse(req.responseText);
        if (results.error) return console.log(results.error);

        if (callback) callback(results);
    });

    req.addEventListener('error', (e) => {
        console.log('Shit, something bad happened.');
        console.log(e);
    });
}
