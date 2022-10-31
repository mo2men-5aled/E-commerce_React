import React from "react";
import {
  CCard,
  CCardBody,
  CCardImage,
  CCardTitle,
  CCardText,
  CButton,
} from "@coreui/react";
import "bootstrap/dist/css/bootstrap.min.css";
const CARD = () => {
  return (
    <CCard style={{ width: "18rem" }}>
      <CCardImage
        orientation="top"
        src="https://picsum.photos/id/237/300/200
"
      />
      <CCardBody>
        <CCardTitle>Card title</CCardTitle>
        <CCardText>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </CCardText>
        <CButton href="#">Go somewhere</CButton>
      </CCardBody>
    </CCard>
  );
};
export default CARD;
