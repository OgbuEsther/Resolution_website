import React from "react";
import styled from "styled-components";
import pic from "../ASSESTS/Features.png";
import { IoBulbOutline } from "react-icons/io5";
import { IoIosColorPalette } from "react-icons/io";
import { BsCodeSlash } from "react-icons/bs";
import { IoRocket } from "react-icons/io5";
const Features = () => {
  return (
    <div>
      <Container>
        <h1>Our Features</h1>
        <Stroke></Stroke>
        <Holder>
          <One>
            <Wrapper>
              <Sub>
                <Circle>
                  <IconHold>
                    <IoBulbOutline />
                  </IconHold>
                </Circle>
                <TextHold>
                  <h2>Idea & Analysis</h2>
                  <p>
                    Praesent tincidunt congue est ut <br /> hendrerit.
                    Pellentesque et eros sit <br /> amet ipsum venenatis
                  </p>
                </TextHold>
              </Sub>
              <Sub>
                <Circle>
                  <IconHold>
                    <IoIosColorPalette />
                  </IconHold>
                </Circle>
                <TextHold>
                  <h2>Designing</h2>
                  <p>
                    Praesent tincidunt congue est ut <br /> hendrerit.
                    Pellentesque et eros sit <br /> amet ipsum venenatis
                  </p>
                </TextHold>
              </Sub>
            </Wrapper>
          </One>
          <Two>
            <Img src={pic} />
          </Two>
          <Three>
            <Wrapper>
              <Sub>
                <Circle>
                  <IconHold>
                    <BsCodeSlash />
                  </IconHold>
                </Circle>
                <TextHold>
                  <h2>Development</h2>
                  <p>
                    Praesent tincidunt congue est ut <br /> hendrerit.
                    Pellentesque et eros sit <br /> amet ipsum venenatis
                  </p>
                </TextHold>
              </Sub>
              <Sub>
                <Circle>
                  <IconHold>
                    <IoRocket />
                  </IconHold>
                </Circle>
                <TextHold>
                  <h2>Testing and Launching</h2>
                  <p>
                    Praesent tincidunt congue est ut <br /> hendrerit.
                    Pellentesque et eros sit <br /> amet ipsum venenatis
                  </p>
                </TextHold>
              </Sub>
            </Wrapper>
          </Three>
        </Holder>
      </Container>
    </div>
  );
};

export default Features;

const IconHold = styled.div`
  font-size: 35px;
  color: white;
  font-weight: lighter;
`;

const Sub = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Wrapper = styled.div``;

const Circle = styled.div`
  margin-top: 15px;
  margin-right: 20px;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 10px 10px; */
  /* position: relative; */

  /* background: rgb(29, 29, 96);
  background: linear-gradient(
    90deg,
    rgba(29, 29, 96, 1) 45%,
    rgba(71, 36, 119, 0.76234243697479) 90%
  ); */

  /* background: rgb(29, 29, 96);
  background: linear-gradient(
    90deg,
    rgba(29, 29, 96, 1) 80%,
    rgba(71, 36, 119, 1) 100%
  ); */

  background: rgb(29, 29, 96);
  background: linear-gradient(
    0deg,
    rgba(29, 29, 96, 1) 32%,
    rgba(71, 36, 119, 1) 91%
  );
  border-radius: 100%;
`;
const TextHold = styled.div`
  h2 {
    color: #1f2470;
    font-weight: bold;
    font-size: 25px;
  }

  p {
    color: #1f2470;
    font-weight: 300;
  }
`;
const Img = styled.img``;

const One = styled.div`
  width: 30%;
  height: 100%;
  /* background-color: aqua; */
`;

const Two = styled.div`
  width: 30%;
  height: 100%;
  /* background-color: aquamarine; */
`;

const Three = styled.div`
  width: 30%;
  height: 100%;
  /* background-color: brown; */
`;
const Stroke = styled.div`
  height: 7px;
  width: 200px;
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

  h1 {
    color: #1f2470;
    font-size: 40px;
  }
`;

const Holder = styled.div`
  margin-top: 60px;
  width: 90%;
  /* height: 400px; */
  /* background-color: blue; */
  display: flex;
  justify-content: space-between;
`;
