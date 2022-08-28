import React from 'react'
import styled from "styled-components"
import { IoBagOutline } from "react-icons/io5"
import { SearchIcon } from "@chakra-ui/icons"
import { VscHeart } from "react-icons/vsc";
import { FaUserAlt } from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom"
import { Image, Text } from '@chakra-ui/react';

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
const LINK = styled.a`
text-decoration: none;
color:black;
font-size:17px;
font-weight:bold;
`
const Input = styled.input`
height:80px
width:60px
`
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Div5>
      <Div6>
        <div>
          <Image
            src="https://images.bewakoof.com/web/ic-desktop-normal-bwkf-logo.svg"
            alt="logo"
            w={"147px"}
            h={"20px"}
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <Text textDecoration={"none"} color={"black"} fontSize={"17px"} fontWeight={"bold"}><Link to="/products/men-clothing">MEN</Link></Text>
        </div>
        <div>
          <Text textDecoration={"none"} color={"black"} fontSize={"17px"} fontWeight={"bold"}><Link to="/products/women-clothing">WOMEN</Link></Text>
        </div>
        <div>
          <Text textDecoration={"none"} color={"black"} fontSize={"17px"} fontWeight={"bold"}><Link to="/products/mobile-covers">MOBILE COVERS</Link></Text>
        </div>
      </Div6>
      <Div7>
        <div style={{}}>
          <SearchIcon
            w={"18px"}
            color={"#949494"}
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
          <FaUserAlt onClick={() => navigate("/signup")} />
        </div>
        <div>
          <VscHeart />
        </div>
        <div>
          <IoBagOutline onClick={() => navigate("/checkout")} />
        </div>
      </Div7>
    </Div5>
  );
}

export default Navbar