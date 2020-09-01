import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextField } from '@material-ui/core';
import { text } from './constants';

export default function AgreeDialog({ open, handleClose, onClickAgree }) {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">개인정보 처리방침</DialogTitle>
        <DialogContent>
          <DialogContentText style={{ whiteSpace: 'pre-wrap', fontSize: 14 }}>
            {text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            닫기
          </Button>
          <Button onClick={onClickAgree} color="primary" autoFocus>
            동의
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
