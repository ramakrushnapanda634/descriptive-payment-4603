import React from "react";
//import styles from "./Header.module.css";
import { BsPhone } from "react-icons/bs";
import styled from "styled-components";
const Div1=styled.div`

  height: 27px;
    width: 100vw;
    background: #eeeeee;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Div2 = styled.div`
  width: 80%;
  /* background-color: turquoise; */
  display: flex;
  justify-content: space-between;
`;
const Div3 = styled.div`
  display: flex;
  gap: 20px;
  cursor: pointer;
  font-size: 11px;
  color: rgba(0, 0, 0, 0.8);
`;
const Div4 = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  font-size: 11px;
  color: rgba(0, 0, 0, 0.8);
`;

function Header() {
  return (
    <Div1 >
      <Div2 >
        <Div3>
          <div>
            
              Offers
            
          </div>
          <div>
          
              Fanbook
            
          </div>
          <div>
            <BsPhone />
             Download App
          </div>
          <div>
           TriBe Membership
          </div>
        </Div3>
        <Div4 >
          <div>
          
              Contact Us
            
          </div>
          <div>
           Track Order
          </div>
        </Div4>
      </Div2>
    </Div1>
    
  );
}

export default Header;
