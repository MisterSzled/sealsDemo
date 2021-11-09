import styled from "styled-components";
import React from 'react';
import logo from "../../assets/logo.png"
import {Button} from "../index";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Logo = styled.img`
  width: 372px;
  height: 235px;
`;
const NavBar = styled.div`
  display: flex;
  margin-top: 40px;
`;

export const Header = () => 
    <Main>
        <Logo src={logo}/>
        <Button type={"play"}>Play</Button>
        <NavBar>
          <Button type={"basic"}    >Treasures</Button>
          <Button type={"highlight"}>Seals</Button>
          <Button type={"basic"}    >Characters</Button>
          <Button type={"basic"}    >Marketplace</Button>
          <Button type={"basic"}    >Activites</Button>
          <Button type={"basic"}    >Wallet</Button>
        </NavBar>
    </Main>

export default Header;
