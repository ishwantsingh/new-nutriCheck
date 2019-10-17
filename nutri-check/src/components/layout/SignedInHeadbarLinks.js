import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

import { logout } from "../../state/actions/authAction.js";

const StyledHeadDiv = styled.div`
  display: flex;
  align-items: center;
  width: 20%;
  height: 100%;
  justify-content: flex-end;
  a {
    margin-top: 0 !important;
  }
  .links {
    width: 25%;
  }
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-right: 0;
    align-items: center;
  }
`;

const StyledUserImg = styled.img`
  margin-top: 7px;
  border-radius: 50%;
  height: 45px;
  width: 45px;
  margin-left: -50%;
`;

const StyledLogoutBut = styled.button`
  background-color: white;
  color: #009688;
  border-radius: 3px;
  font-weight: bold;
  font-size: 0.92rem;
  width: 8rem;
`;

function SignedInHeadbarLinks(props) {
  return (
    <StyledHeadDiv>
      <NavLink to="/user" className="link-user">
        <StyledUserImg
          src={props.auth.photoURL}
          alt="profile pic"
          className="profile-img"
        />
      </NavLink>
      <div className="link-container">
        <StyledLogoutBut onClick={props.logout} className="waves-effect btn">
          Log Out
        </StyledLogoutBut>
        {/* <Link to="/about" className="links">
          <StyledBut className="waves-effect btn"> About </StyledBut>
        </Link> */}
      </div>
    </StyledHeadDiv>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};
export default connect(
  null,
  mapDispatchToProps
)(SignedInHeadbarLinks);
