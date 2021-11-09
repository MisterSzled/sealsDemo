import styled from "styled-components";
import {SealType} from "../../types";
import ipfsLogo from "../../assets/ipfsLogo.png"
import {Button} from "../index";

const InfoDisplay = styled.div`
  position: relative;
  height: 454px;
  width: 552px;
  display: flex;
  flex-direction: column;
`;
const SaleDisplay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 202px;
  width: 552px;
  border: 2px solid #191B1C;
  border-radius: 4px;
  background: rgb(10,10,10);
  background: linear-gradient(180deg, rgba(10,10,10,1) 0%, rgba(15,15,15,1) 100%); 
`;
const SaleLine = styled.span`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 455px;
    margin-bottom: 30px;
`;
const SaleHeader = styled(SaleLine)`
    font-size: 20px;
    margin-bottom: 10px;
`;
const DetailDisplay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 252px;
  width: 552px;
`;
const DetailLines = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 40px;
`;
const DetailPair = styled.div`
  display: flex;
  width: 400px;
  justify-content: space-between;
`;

interface SealDetailsProps {
  seal: SealType
}

export const SealDetails = (props: SealDetailsProps) => 
    <InfoDisplay>
        <SaleDisplay>
            <SaleHeader>SEAL - {props.seal.token_id}</SaleHeader>
            <SaleLine>OWNED BY - 0x0000000000000000000000000000000000000000</SaleLine>
            <Button type={"sale"} colorOverride={"#640711"}>NOT FOR SALE</Button>
        </SaleDisplay>
        <DetailDisplay>
            <DetailLines>
                <DetailPair>
                <span>Treasure:</span>
                <span style={{"color": props.seal.is_invoked ? "red" : "green"}}>
                    {props.seal.is_invoked ? "Claimed" : "Claimable"}
                </span>
                </DetailPair>
                <DetailPair>
                <span>Seal Type:</span>
                <span> {props.seal.type} </span>
                </DetailPair>
                <DetailPair>
                <span>Radius:</span>
                <span> {props.seal.radius} </span>
                </DetailPair>
                <DetailPair>
                <span>Background Type:</span>
                <span style={{textTransform: "uppercase"}}>{props.seal.backgroundType}</span>
                </DetailPair>
                <DetailPair>
                <span>Background:</span>
                <span style={{"color": props.seal.background}}>{props.seal.background}</span>
                </DetailPair>
            </DetailLines>
            <Button type={"gilded"} colorOverride={"#DAC17D"}>SEE ON IPFS<img alt={"ipfsLogo"} src={ipfsLogo}/></Button>
        </DetailDisplay>
    </InfoDisplay>

export default SealDetails;
