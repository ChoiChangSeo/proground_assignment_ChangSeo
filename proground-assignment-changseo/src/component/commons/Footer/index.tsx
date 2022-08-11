import styled from "styled-components";

const Footers = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 80px;
  position: fixed;
  z-index: 1;
  background-color: white;
  bottom: 0;
  border-top: 1px solid lightgray;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
`;
const Score = styled.img`
  width: 50px;
  height: 50px;
`;
const ScoreFont = styled.span`
  text-align: center;
  font-weight: bold;
  color: #ff5100;
`;
export default function Footer() {
  return (
    <Footers>
      <Box>
        <Score src="/score_a.png" />
        <ScoreFont>Score</ScoreFont>
      </Box>
    </Footers>
  );
}
