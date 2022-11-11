import React from "react";
import styled from "styled-components";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import { AiOutlineShareAlt } from "react-icons/ai";

interface Iprops {
  bg: string;
  title: string;
  MyImg: string;
}

//AiOutlineClockCircle
//BsFillClockFill
//BiMessageRounded
//FiMessageCircle
//BsShare
//AiOutlineShareAlt
//SlShare
const CardProps: React.FC<Iprops> = ({ title, MyImg, bg }) => {
  return (
    <Container>
      <Wrap>
        <Card bg={bg}>
          <Imag src={MyImg} />
          <TextHold>
            <Text1>{title}</Text1>
            <Text2>
              <Icon>
                <AiOutlineClockCircle />
              </Icon>
              <p>11 November , 2022</p>{" "}
              <Icon>
                <BiMessageRounded />
              </Icon>
              <Icon>
                <AiOutlineShareAlt />
              </Icon>
            </Text2>
          </TextHold>
        </Card>
      </Wrap>
    </Container>
  );
};

export default CardProps;

const Card = styled.div<{ bg: string }>`
  height: 400px;
  width: 350px;
  background-color: ${(props) => props.bg};
  color: white;
  border-radius: 10px;
  overflow: hidden;
  margin: 10px;
  /* display: flex; */
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;
const Imag = styled.img`
  height: 220px;
  width: 100%;
  /* background-color: black; */
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  cursor: pointer;
  overflow: hidden;

  :hover {
    transform: scale(1.1);
    transition: all 350ms;
    filter: grayscale(1);
  }
`;
const TextHold = styled.div`
  margin-left: 10px;
`;
const Text1 = styled.div`
  margin-top: 10px;
  /* background-color: red; */
  width: 80%;
`;
const Text2 = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;

  color: #1f2470;
`;
const Icon = styled.div`
  margin-left: 10px;
  margin-top: 5px;
`;
const Container = styled.div`
  /* background-color: powderblue; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrap = styled.div`
  /* background-color: purple; */
  width: 90%;
`;
