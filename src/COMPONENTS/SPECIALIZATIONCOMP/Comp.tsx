import React from "react";
import styled from "styled-components";
import pic from "../ASSESTS/One.png";
import { IoTelescopeSharp } from "react-icons/io5";
import { FaGreaterThan } from "react-icons/fa";
const SpecializationComp = () => {
  return (
    <Container id="services">
      <h1>Our Specialization</h1>
      <Stroke></Stroke>
      {/* <IconHold>
				<IoTelescopeSharp />
			</IconHold> */}
      <CardHolder>
        <Card>
          <Img src={pic} />

          <Hold>
            {" "}
            <h2>Strategy & Research</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
              consectetur voluptatem, molestias consequuntur excepturi
              architecto facilis reiciendis veniam animi minus perferendis
              praesentium laborum placeat sed?
            </p>
          </Hold>
          <Circle>
            {" "}
            <p>
              <FaGreaterThan />
            </p>
          </Circle>
        </Card>
        <Card>
          <Img src={pic} />
          <Hold>
            {" "}
            <h2>Web Development</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
              consectetur voluptatem, molestias consequuntur excepturi
              architecto facilis reiciendis veniam animi minus perferendis
              praesentium laborum placeat sed?
            </p>
          </Hold>
          <Circle>
            <p>
              <FaGreaterThan />
            </p>
          </Circle>
        </Card>
        <Card>
          <Img src={pic} />
          <Hold>
            {" "}
            <h2>Web Solution</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
              consectetur voluptatem, molestias consequuntur excepturi
              architecto facilis reiciendis veniam animi minus perferendis
              praesentium laborum placeat sed?
            </p>
          </Hold>
          <Circle>
            {" "}
            <p>
              <FaGreaterThan />
            </p>
          </Circle>
        </Card>
      </CardHolder>
    </Container>
  );
};

export default SpecializationComp;

const Img = styled.img`
  background-color: #f7cbdd;
  cursor: pointer;

  :hover {
    background-color: #ff0066;
    transition: all 350ms;
  }
`;

const Circle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: 1px solid #ff0066;
  cursor: pointer;
  color: #ff0066;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 13px;
    font-weight: 200;
  }

  :hover {
    background-color: #ff0066;
    color: white;
    transition: all 350ms;
    transform: scale(0.8);
  }
`;

const Hold = styled.div`
  margin-top: -50px;

  h2 {
    color: blue;
  }

  p {
    color: darkgray;
    font-size: 15px;
  }
`;

const IconHold = styled.div`
  color: black;
  position: absolute;
  top: 0;
  bottom: 0;
`;

const Card = styled.div`
  /* position: relative; */
  height: 380px;
  margin-left: 30px;
  margin-right: 30px;
  width: 350px;
  background-color: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 5px;
  margin-left: 10px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  text-align: center;
  /* path {
    fill: #f7cbdd;
    :hover {
      fill: #ff0066;
      transition: all 350ms;
    }
  } */
`;
const CardHolder = styled.div`
  margin-top: 50px;
  display: flex;
`;

const Stroke = styled.div`
  height: 7px;
  width: 250px;
  border-radius: 5px;
  background-image: linear-gradient(
    90deg,
    rgba(230, 37, 125, 1) 49%,
    rgba(242, 112, 4, 1) 94%
  );
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;

  h1 {
    color: #1f2470;
    font-size: 40px;
  }
`;
