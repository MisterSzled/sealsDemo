import styled from "styled-components";
import React from 'react';

import sealHeader from "../../assets/sealHeader.png"
import tagBackground from "../../assets/tagBackground.png"

const ImageBody = styled.div`
  display: flex;
  flex-direction: column;

  height: 487px;
  width: 447px;

  border: 2px solid #1F1C19;
  outline: 2px solid #342D25;
`;
const SealHeader = styled.div`
  height: 38px;
  width: 359px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin: 15px 0;

`;
const Image = styled.img`
  position: absolute;
  
  height: 396px;
  width: 396px;
`;
const SealHeaderImg = styled.img`
  height: 38px;
  width: 359px;
  position: absolute;
`;
const SealImageBody = styled.div`
  height: 406px;
  width: 406px;
  
  
  align-self: center;
  overflow: hidden;
  position: relative;
  &:hover .slideUp {
    bottom: 1.5%;
  }
`;
const SealImageInner = styled.div`
  height: 400px;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #846E4C;
`;
const SealDetail = styled.div`
  height: 250px;
  width: 399px;
  margin-left: 2px;
  background: rgba( 0, 0, 0, 0.9 );
  bottom: -100%;
  color: red;
  left: 0%;
  text-align: center;
  position: absolute;
  transition: bottom 0.5s ease;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    bottom: 1.5%;
  }
`;
const IndexTag = styled.div`
  height: 28px;
  width: 123px;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const IndexBackground = styled.img`
  height: 28px;
  width: 123px;
  position: absolute;
`;
const IndexSpan = styled.span`
  z-index: 1;
  color: #DAC17D;
  font-size: 16px;
  margin-top: 2px;
`;

export const SealImage = (props) => 
            <ImageBody>
              <SealHeader>
                <SealHeaderImg src={sealHeader}/>
                DETAIL
              </SealHeader>
              <SealImageBody>
                <SealImageInner>
                  <Image src={props.sealImg}/>
                  
                  <SealDetail className={"slideUp"}>
                    <span>SEAL</span>
                    <span>Seal Type: {props.seal.type}</span>
                    <span>Radius: {props.seal.radius}</span>
                    <span>Background Type: {props.seal.backgroundType}</span>
                  </SealDetail>
                </SealImageInner>
                
                <IndexTag>
                  <IndexBackground src={tagBackground}/>
                  <IndexSpan>#{props.seal.token_id}</IndexSpan>
                </IndexTag>
              </SealImageBody>
            </ImageBody>

export default SealImage;
