import React, { PropTypes, Component } from 'react';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.styles = {
      main: {
        position: 'fixed',
        top: 0,
        buttom: 0,
        left: 0,
        right: 0,
        width: '100vw',
        height: '100vh',
        zIndex: '1000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      background: {
        position: 'absolute',
        top: 0,
        buttom: 0,
        left: 0,
        right: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(0,0,0,.6)',
      },
      content: {
        width: props.width,
        height: props.height,
        maxWidth: 'calc(100vw - 50px)',
        maxHeight: 'calc(100vh - 50px)',
        zIndex: 1,
        position: 'relative',
        backgroundColor: 'rgba(142,142,142,.4)',
      },
      closeButton: {
        position: 'absolute',
        top: '-15px',
        right: '-15px',
        width: '30px',
        height: '30px',
        padding: '3px',
        borderRadius: '50%',
        zIndex: 2,
        color: '#fff',
        background: '#000',
        opacity: '.6',
        cursor: 'pointer',
      },
    };
  }

  handleClose(e) {
    const { close } = this.props;
    e.preventDefault();
    close(e);
  }

  render() {
    const { active, children } = this.props;
    if (!active) return false;

    return (
      <div style={this.styles.main}>
        <div style={this.styles.background} onClick={this.handleClose.bind(this)} />
        <div style={this.styles.content}>
          <a style={this.styles.closeButton} onClick={this.handleClose.bind(this)}>
            <i className="material-icons">close</i>
          </a>
          {children}
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  active: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default Modal;
