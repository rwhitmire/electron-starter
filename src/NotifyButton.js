// @flow

import React, { Component } from 'react';

type Props = {
  title: string,
  body: string
}

class NotifyButton extends Component<Props> {
  handleClick() {
    new window.Notification(this.props.title, { body: this.props.body });
  }

  render() {
    return <button onClick={() => this.handleClick()}>
      Notify
    </button>
  }
}

export default NotifyButton;
