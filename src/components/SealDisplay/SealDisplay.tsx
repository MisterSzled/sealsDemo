import styled from "styled-components";
import backButton from "../../assets/backButton.png"
import {SealImage, SealDetails} from "../index";
import exampleSealJSON from "../../assets/exampleSeal.json";
import exampleSeal from "../../assets/exampleSeal.png"

const Component = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 624px;
  width: 1280px;
  align-self: center;
  border: 2px solid black;
  outline: 2px solid #76695C;

  background: rgb(21,20,21);
  background: linear-gradient(180deg, rgba(21,20,21,1) 0%, rgba(14,12,14,1) 100%); 

  position: relative;
`;
const Back = styled.img`
  height: 43px;
  width: 43px;
  position: absolute;
  right: 5px;
  top: 5px;
  cursor: pointer;
`;
const Main = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
`;
const ImageDisplay = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Tag = styled.span`
  position: absolute;
  bottom: 20px;
  font-size: 12px;
`;

export const SealDisplay = () => 
    <Component>
        <Back id={"bumpOnClick"} src={backButton}/>
        <Main>
          <ImageDisplay>
            <SealImage seal={exampleSealJSON} sealImg={exampleSeal}/>
            <Tag>(HOVER TO SEE PROPERTIES)</Tag>
          </ImageDisplay>
          <SealDetails seal={exampleSealJSON}/>
        </Main>
    </Component>

export default SealDisplay;
