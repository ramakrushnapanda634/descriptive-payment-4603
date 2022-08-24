import React from 'react'
import styled from "styled-components"
import {IoBagOutline} from "react-icons/io5"
import { VscHeart } from "react-icons/vsc";
import { FaUserAlt } from "react-icons/fa";
import {Link} from "react-router-dom"
import { IoSearchOutline } from "react-icons/io5";
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
const Navbar = () => {
  return (
    
    <Div5>
      <Div6>
        <div>
          <img style={{width:"150px"}}
            src="https://images.bewakoof.com/web/ic-desktop-normal-bwkf-logo.svg"
            alt="logo"
          />
        </div>
        <div> <Link to="/men">Men</Link> 
        </div>
        <div>WOMEN</div>
        <div>MOBILE COVERS</div>
      </Div6>
      <Div7>
        <div>
          <input
            type="text"
            placeholder="    search by product,category or collection"
          >
            {/* <IoSearchOutline /> */}
          </input>
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