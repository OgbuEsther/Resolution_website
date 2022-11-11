import React from "react";
import styled from "styled-components";

import pic from "../ASSESTS/Agent.png";

const AgentComp = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <First>
            <Img src={pic} />
          </First>
          <Second>
            <h1>Why Our Agency</h1>
            <Line></Line>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis,
              provident beatae, repellat asperiores sequi error esse assumenda
              quibusdam cumque, alias non earum explicabo sit officiis
              dignissimos architecto accusantium natus dolore nobis blanditiis
              consequatur! Sunt, at!
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              quaerat. Quos reiciendis officiis nulla beatae illo deleniti
              molestias distinctio eius?
            </p>
            <CardHold>
              {" "}
              <Card>
                <Numb>9875</Numb>
                <span>Satisfied Clients</span>
              </Card>
              <Card>
                <Numb>7894</Numb>
                <span>Project Lunched</span>
              </Card>
              <Card>
                <Numb>75</Numb>
                <span>Years Completed</span>
              </Card>
            </CardHold>
          </Second>
        </Wrapper>
      </Container>
    </div>
  );
};

export default AgentComp;

const CardHold = styled.div`
  display: flex;
`;

const Numb = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const Card = styled.div`
  height: 100px;
  width: 150px;
  margin-right: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  h2 {
    margin-bottom: 5px;
  }
`;

const Img = styled.img`
  height: 75%;
`;

const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  display: flex;

  /* background-color: red; */
`;
const Container = styled.div`
  width: 100%;
  height: 600px;
  /* background-color: blue; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const First = styled.div`
  width: 50%;
  height: 100%;
`;

const Second = styled.div`
  margin-left: 40px;
  width: 50%;
  height: 100%;

  h1 {
    color: #1f2470;
    font-size: 45px;
  }
`;

const Line = styled.div`
  width: 250px;
  height: 7px;
  background-image: linear-gradient(
    90deg,
    rgba(230, 37, 125, 1) 49%,
    rgba(242, 112, 4, 1) 94%
  );
  border-radius: 10px;
`;
