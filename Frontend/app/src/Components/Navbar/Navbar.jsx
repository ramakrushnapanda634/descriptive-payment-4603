import React from 'react'
import styled from "styled-components"
import {IoBagOutline} from "react-icons/io5"
import {SearchIcon} from "@chakra-ui/icons"
import { VscHeart } from "react-icons/vsc";
import { FaUserAlt } from "react-icons/fa";

import {Link} from "react-router-dom"

//import {Link} from "react-router-dom"
const Div5 = styled.div`
margin-top:20px;
padding-left:60px;
  height: 27px;
  padding-right:60px;
  
  display: flex;
  // align-items: center;
  justify-content: space-between;
`;
const Div7 = styled.div`
  margin-top: 20px;
  display: flex;
  cursor: pointer;
  gap: 20px;
  justify-content: space-around;
`;
const Div6 = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 20px;
  cursor: pointer;
  margin-left:50%
  justify-content: space-around;
`;
const LINK=styled.a`
text-decoration: none;
color:black;
font-size:17px;
font-weight:bold;
`
const Input=styled.input`
height:80px
width:60px
`
const Navbar = () => {
  return (
    <Div5>
      <Div6>
        <div>
          <img
            src="https://images.bewakoof.com/web/ic-desktop-normal-bwkf-logo.svg"
            alt="logo"
          />
        </div>
        <div>
          <LINK href="">Men</LINK>
        </div>
        <div>
          <LINK href=""> WOMEN</LINK>
        </div>
        <div>
          <LINK href=""> MOBILE COVERS</LINK>
        </div>
      </Div6>
      <Div7>
        <div style={{}}>
          <SearchIcon
            style={{ heiht: "10px", width: "10px", marginLeft: "-0px" }}
          />
          <input
            style={{ height: "26px", width: "300px", textAlign: "center" }}
            type="text"
            name=""
            id=""
            placeholder="search by product,category or collection"
          />
        </div>

        <div>
          <FaUserAlt />
        </div>
        <div>
          <VscHeart />
        </div>
        <div>
          <IoBagOutline />
        </div>
      </Div7>
    </Div5>
  );
}

export default Navbar