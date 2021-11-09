import styled from "styled-components";
import React from 'react';
import {importAll} from "../../helpers/importAll";

const images = importAll(require.context('../../assets/buttons', false, /\.png/));

const Main = styled.button`
  display: flex;
  cursor: pointer;
`;
const ButtonType = styled.img`
    width: ${props => props.long ? "302px" : "250px"};
    height: ${props => props.long ? "53px" : "50px"};
`;
const ButtonText = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${props => props.long ? "302px" : "250px"};
    height: ${props => props.long ? "53px" : "50px"};
    color: ${props => props.colorOverride ? props.colorOverride : "#76695C"};
`;

const longs = ["play"]

export const Button = (props) => 
    <Main id={"bumpOnClick"}>
        <ButtonType src={images[props.type + ".png"].default} long={longs.includes(props.type)}/>
        <ButtonText long={longs.includes(props.type)} colorOverride={props.colorOverride}>{props.children}</ButtonText>
    </Main>

export default Button;
