import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../scss/todolist.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Tab extends Component {
    static propTypes = {
        activeTab: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
    };

    state = {
        imgUrlTaskList: "../img/list.png",
        imgUrlTaskCompleted: "../img/task-completed.png"
    }

    onClick = () => {
        const { label, onClick } = this.props;
        onClick(label);
    }

    render() {
        const { onClick, props: { activeTab, label} } = this;

        let className = 'tab-list-item col-6';

        if (activeTab === label) {
            className += ' tab-list-active';
        }

        return (
            <li
                className={className}
                onClick={onClick}
            >
                {label === 'Todo List' ? (<FontAwesomeIcon className="font-size-font-25" icon="tasks"/>) : ( <FontAwesomeIcon className="font-size-font-25" icon="check-square"/> )}
            </li>
        );
    }
}
 
export default Tab;