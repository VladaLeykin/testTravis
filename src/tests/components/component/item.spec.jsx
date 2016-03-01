define([ 'lodash', 'React', 'reactDOM', 'components/component/Item'],
    function (_, React, ReactDOM, Item) {
        'use strict';

        var TestUtils = React.addons.TestUtils;

        describe('Item in To Do List', function () {
            var parentMock = {
                setItemStatus: function() { }
            };

            beforeEach(function() {
                spyOn(parentMock, 'setItemStatus');
            });


            function getDemoItemInstance()
            {
                var key = _.uniqueId();
                return (<Item key={key}
                                      index={key}
                                      data={{done: true, title: 'my first task!'}}
                                      setItemStatus = {parentMock.setItemStatus}/>);
            }

            function getStyleofRenderedToDoItem(isDone)
            {
                var key = _.uniqueId();
                var setItemStatus = function(index, newStatus)
                {console.log('Task ' + index + ' got new status ' + newStatus )};

                var instance = (<Item key={key}
                                      index={key}
                                      data={{done: isDone, title: 'my first task!!'}}
                                      setItemStatus = {setItemStatus}/>);

                var renderer = TestUtils.createRenderer();
                renderer.render(instance);
                return renderer.getRenderOutput().props.style;
            }

            it('should be without line-through decoration when not done', function () {
                expect(getStyleofRenderedToDoItem(false)).toEqual({textDecoration: "none"});
            });

            it('should fail', function () {
                expect(0).toEqual(1);
            });

            it('should be with line-through decoration when done', function () {
                expect(getStyleofRenderedToDoItem(true)).toEqual({textDecoration: "line-through"});
            });

            //not useful
            //it('should get defined callback', function () {
            //    var renderer = TestUtils.createRenderer();
            //    renderer.render(getDemoItemInstance());
            //    var props = renderer.getRenderOutput().props;
            //    expect(props.onClick).toBeDefined();
            //});

            it('should call the callback on click', function () {
                var comp = TestUtils.renderIntoDocument(getDemoItemInstance());
                var node = ReactDOM.findDOMNode(comp);
                TestUtils.Simulate.click(node);
                expect(parentMock.setItemStatus).toHaveBeenCalledWith(comp.props.index, !comp.props.data.done);
            });
        });

    });
