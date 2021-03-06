import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
// import Logo from "../Logo";

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  z-index: 99999;
  background: rgba(0, 0, 0, 0.5);
  opacity: 1;
  visibility: visible;
  transition: all 0.3s ease-out;
  &.hidden {
    opacity: 0;
    visibility: hidden;
  }
`;

const Drawer = styled.div`
  position: fixed;
  width: 240px;
  max-width: 100vw;
  top: 0;
  bottom: 0;
  height: 100%;
  z-index: 999999;
  background: #fff;
  overflow-y: auto;
  transform: translateX(0);
  transition: all 0.3s ease-out;
  &.hidden {
    transform: translateX(-100%);
  }
  .dropdown-menu {
    position: static !important;
    will-change: initial !important;
    transform: initial !important;
    float: none !important;
  }
  .list-group-flush .list-group-item:hover {
    border: 0 !important;
}
/* styling the menu */
.list-group-flush{
  .list-group-item{
    background: none;
    text-decoration: none;
    &.active{
      background-color: #6b66f8;
      color: #fff;
      span{
        color: #fff !important;

      }
    }
    &::hover{
      border: 0;
    }
    padding: 0;
    border: 0;
    a{
      text-transform: capitalize;
      padding: 9px 32px 9px 17px;
      display: block;
      font-weight: 600 !important;
      border-bottom: 1px solid #e6e7f5 !important;
      font-size: 14px;
      color: #2c2c2c;
      line-height: 25px;
      &:hover{
        color: #6b66f8 !important;
      }
  } 
    span{
      text-transform: capitalize;
      padding: 9px 32px 9px 17px;
      display: block;
      font-weight: 600 !important;
      font-size: 14px;
      color: #2c2c2c;
      line-height: 25px;
  } 
  } 
}

.mobile-button{
  margin-top: 34px;
  .btn{
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 85%;
    margin: auto;
    height: 41px;
  }
}
`;

const LogoContainer = styled.div`
  font-weight: 600;
  font-size: 1.25rem;
`;

const CloseWrapper = styled.div`
  cursor: pointer;
  height: 1.5rem;
  width: 1.5rem;
  align-items: center;
  display: inline-flex;
  justify-content: center;
  z-index: 10;
  color: #121212;
`;

const CloseButton = (props) => (
  <CloseWrapper {...props}>
    <svg
      role="img"
      viewBox="0 0 24 24"
      css={`
        fill: #121212;
        vertical-align: middle;
        height: 1rem;
        width: 1rem;
      `}
    >
      <path
        d="M9.82 12L0 2.18 2.18 0 12 9.82 21.82 0 24 2.18 14.18 12 24 21.82 21.82 24 12 14.18 2.18 24 0 21.82z"
        css={`
          fill: #121212;
        `}
      ></path>
    </svg>
  </CloseWrapper>
);

const Offcanvas = ({ show, onHideOffcanvas, children, ...rest }) => {
  if (typeof document !== "undefined") {
    if (show) {
      document.querySelector("html").classList.add("has-offcanvas");
      document.body.classList.add("has-offcanvas");
    } else {
      document.querySelector("html").classList.remove("has-offcanvas");
      document.body.classList.remove("has-offcanvas");
    }
  }

  return (
    <div {...rest}>
      <Overlay className={show ? "" : "hidden"} onClick={onHideOffcanvas} />
      <Drawer className={show ? "" : "hidden"}>
          <Container fluid className="p-0">
            <div className="pt-2">{children}</div>
            <div className="mobile-button">
            <a className="btn ripple  btn-info" href="register.html">Register Now</a>
            </div>
          </Container>
      </Drawer>
    </div>
  );
};

export default Offcanvas;
