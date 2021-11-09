import styled from "styled-components";
import React from 'react';
import banner from "../../assets/banner.png";
import ipfs from "../../assets/ipfs.png";
import pinata from "../../assets/pinata.png";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 62px;
`;
const Banner = styled.img`
  width: 100%;
  height: 99px;
`;
const BannerText = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  height: 99px;
`;
const Icons = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: -18px;
    width: 140px;
`;
const Icon = styled.img`
    cursor: pointer;
`;

export const Footer = () => 
    <Main>
        <Banner src={banner}/>
        <BannerText>* DEMO FE - Zuperslog *</BannerText>
        <Icons>
            <Icon src={ipfs} id={"bumpOnClick"}/>
            <Icon src={pinata} id={"bumpOnClick"}/>
        </Icons>
    </Main>

export default Footer;
