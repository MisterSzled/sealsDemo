import styled from "styled-components";
import basic from "../../assets/buttons/basic.png";
import gilded from "../../assets/buttons/gilded.png";
import highlight from "../../assets/buttons/highlight.png";
import play from "../../assets/buttons/play.png";
import sale from "../../assets/buttons/sale.png";

const Main = styled.button`
  display: flex;
  cursor: pointer;
`;
const ButtonType = styled.img<{long: boolean}>`
    width: ${props => props.long ? "302px" : "250px"};
    height: ${props => props.long ? "53px" : "50px"};
`;
const ButtonText = styled.div<{long: boolean, colorOverride?: string}>`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${props => props.long ? "302px" : "250px"};
    height: ${props => props.long ? "53px" : "50px"};
    color: ${props => !!props.colorOverride ? props.colorOverride : "#76695C"};
`;

const longs = ["play"]

interface ButtonProps {
    type: string,
    colorOverride?: string,
    children?: any
}

export const Button = (props: ButtonProps) => 
    <Main id={"bumpOnClick"}>
        <ButtonType src={
            props.type === "basic" ? basic :
            props.type === "gilded" ? gilded :
            props.type === "highlight" ? highlight :
            props.type === "play" ? play :
            props.type === "sale" ? sale :
            basic
        } 
        long={longs.includes(props.type)}/>
        <ButtonText long={longs.includes(props.type)} colorOverride={props.colorOverride}>{props.children}</ButtonText>
    </Main>

export default Button;
