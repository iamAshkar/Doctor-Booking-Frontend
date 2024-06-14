import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
      <>
        <MDBNavbar light bgColor='light'>
          <MDBContainer fluid>
            <MDBNavbarBrand href='#'>
              <img
                src='https://t4.ftcdn.net/jpg/02/29/53/11/360_F_229531197_jmFcViuzXaYOQdoOK1qyg7uIGdnuKhpt.jpg'
                height='30'
                alt=''
                loading='lazy'
              />
              <b>              Doctor Booking
              </b>
            </MDBNavbarBrand>
          </MDBContainer>
        </MDBNavbar>
      </>
    </div>
  )
}

export default Header
