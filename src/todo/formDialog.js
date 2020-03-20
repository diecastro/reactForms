import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

export default function FormDialog(props) {
  const {onClose, open,identifier} = props;

  const handleClose = () => {
    onClose(identifier);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} maxWidth='sm' fullWidth>
      <DialogTitle id="simple-dialog-title">Set your reminders</DialogTitle>
      <DialogContent>
        {props.children}
      </DialogContent>
    </Dialog>
  );
}

