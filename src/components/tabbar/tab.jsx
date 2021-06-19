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

        let className = 'tab-list-item';

        if (activeTab === label) {
            className += ' tab-list-active';
        }

        return (
            <li
                className={className}
                onClick={onClick}
            >
                {label === 'Todo List' ? (<FontAwesomeIcon icon="tasks"/>) : ( <FontAwesomeIcon icon="check-square"/> )}
            </li>
        );
    }
}
 
export default Tab;