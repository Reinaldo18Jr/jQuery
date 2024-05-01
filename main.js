$(document).ready(function() {
    const taskForm = $("#task-form");
    const taskList = $("#lista-tarefa");

    taskForm.submit(function(e) {
        e.preventDefault();

        const taskName = $("#nova-tarefa").val();

        taskList.append("<li>" + taskName + "</li>");

        $("#nova-tarefa").val("");

        $("#lista-tarefa").click(function() {
            $('<li style="text-decoration: line-through"></li>')
        })
    })
    })