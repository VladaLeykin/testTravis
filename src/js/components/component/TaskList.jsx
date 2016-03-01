define(['react', 'router','./Item'],
    function (React, ReactRoute, Item) {
        'use strict';

        return React.createClass({
                generateItem: function (key) {
                    var item = this.props.items[key];
                    return <Item key={item.key}
                                 index={item.key}
                                 data={item}
                                 setItemStatus ={this.props.setItemStatus}/>;
                },
                render: function () {
                    return <ul>{Object.keys(this.props.items).reverse().map(key => this.generateItem(key))}</ul>;
                }
            }
        );
    }
);
