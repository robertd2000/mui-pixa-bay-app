import { Dialog, FlatButton } from 'material-ui'
import React from 'react'

export const DialogItem = ({open, currentImg, handleClose}) => {

    const actions = [
        <FlatButton 
            label="Close" 
            primary={true} 
            onClick={handleClose} />
      ];

    return (
        <Dialog
            actions={actions}
            modal={false}
            open={open}
            onRequestClose={handleClose}>
                <img src={currentImg} alt="" style={{ width: '100%' }} />
        </Dialog>
    )
}
