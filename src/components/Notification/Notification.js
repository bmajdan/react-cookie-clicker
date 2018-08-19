import React, { Component } from 'react';
import '../../css/notification.css';

export class NotificationTop extends Component {
    render() {

        const {notification_show} = this.props;

        return (
            <div className={notification_show ? 'notification__top notification__top--visible' : 'notification__top'}>
                <h3>{this.props.notification_text}</h3>
            </div>
        );
    }
}

export class NotificationLeft extends Component {
    render() {

        const {notification_show} = this.props;
        return (
            <div className={notification_show ? 'notification__left notification__left--visible' : 'notification__left'}>
                <h3>{this.props.notification_text}</h3>
            </div>
        );
    }
}