define(['react','components/component/Modal'],
    function (React, Modal) {
        'use strict';

        return React.createClass({
            getInitialState: function () {
                return {
                    modalShouldBeOpened: false
                };
            },
            openModal: function(evt){
                evt.preventDefault();
                evt.stopPropagation();
                this.setState({
                    modalShouldBeOpened: true
                });
                document.body.style.overflow = 'hidden';
            },
            closeModal: function(){
                this.setState({
                    modalShouldBeOpened: false
                });
            },
            render() {
                var className = this.state.modalShouldBeOpened ? "modalDialog opened" : "modalDialog closed";

                return (
                    <div>
                        <a href="#" onClick={this.openModal}>Open Modal</a>
                        <Modal className={className} onClose={this.closeModal}>
                            <h1>This is modal header</h1>
                            <p>This is modal content</p>
                            <ModalFooter></ModalFooter>
                        </Modal>
                    </div>
                );
            },
        });
    }
);
