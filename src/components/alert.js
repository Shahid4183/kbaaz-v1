import React from 'react';
import Dialog from 'material-ui/Dialog';

/**
 * Alerts are urgent interruptions, requiring acknowledgement, that inform the user about a situation.
 */

const AlertBox = (props) => {
    let { displayAlertBox, message, actions } = props;
    return (
        <div>
            <Dialog
                actions={actions}
                modal={false}
                open={displayAlertBox}
                onRequestClose={this.handleClose}
            >
                {message}
            </Dialog>
        </div>
    );

}

export default AlertBox;