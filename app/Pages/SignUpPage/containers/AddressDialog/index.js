import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextField } from '@material-ui/core';
import DaumPostcode from 'react-daum-postcode';
import { text } from './constants';

export default function AddressDialog({ open, handleClose, close }) {
  // setLocation ->
  const setLocationRedux = location => {
    console.log(location);
  };

  const handleComplete = data => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    setLocationRedux(fullAddress);

    // 추가적으로 주소 정보를 활용하는 함수를 받아왔다면 실행
    // if (setLocation) {
    //   setLocation(fullAddress);
    // }

    close();
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div>
          <DaumPostcode onComplete={handleComplete} />
          <script src="http://dmaps.daum.net/map_js_init/postcode.v2.js?autoload=false" />
        </div>
      </Dialog>
    </div>
  );
}
