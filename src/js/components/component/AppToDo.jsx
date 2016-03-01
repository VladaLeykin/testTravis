define(['lodash', 'react', 'router', './TaskList', './Input'],
    function (_, React, ReactRoute, TaskList, Input) {
        'use strict';

        return React.createClass(
            {
                getInitialState: function () {
                    return {
                        items: {}
                    };
                },
                addItem: function (newItemTitle) {
                    var newKey = _.uniqueId();
                    this.state.items[newKey] = {key: newKey, title: newItemTitle, done: false};
                    this.setState({
                        items: this.state.items
                    });
                },
                setItemStatus: function (key, isDone) {
                    this.state.items[key].done = isDone;
                    this.setState({
                        items: this.state.items
                    });
                },
                render: function () {

                    return (
                        <div>
                            <Input addItem={this.addItem}/>
                            <TaskList items = {this.state.items} setItemStatus={this.setItemStatus}/>
                        </div>
                    );
                }
            }
        );
    }
);
