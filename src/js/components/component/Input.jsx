define(['react'],
    function (React) {
        'use strict';

        return React.createClass( {
                addTask: function () {
                    var taskTitle = this.refs.taskText.value;
                    if (taskTitle !== '') {
                        this.props.addItem(taskTitle);
                    }
                },
                render: function () {
                    return (
                        <label>Task:
                            <input type="text" ref="taskText"/>
                            <button onClick={this.addTask}>Add</button>
                        </label>
                    );
                }
            }
        );
    }
);
