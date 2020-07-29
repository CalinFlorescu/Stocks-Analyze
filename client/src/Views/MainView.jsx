import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

export default function MainView() {
  return (
    <MDBContainer fluid className="m-0">
      <MDBRow>
        <MDBCol md="12">Navbar</MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol md="12">Content</MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
