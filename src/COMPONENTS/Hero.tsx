import React from "react";
import styled from "styled-components";
import pic from "./ASSESTS/hero_banner.png";
const Hero = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </Wrapper>
        <Card>
          <First>
            <h5>We are Web Developers from Nigeria</h5>
            <h1>We build and Deploy websites that Users Love</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Assumenda, laboriosam. Ad quas odio quibusdam iure reiciendis
              sapiente, rerum ducimus perspiciatis.
            </p>
            <Button>Learn More</Button>
          </First>
          <Second>
            <Img src={pic} />
          </Second>
        </Card>
      </Container>
    </div>
  );
};

export default Hero;

const Img = styled.img`
  height: 100%;
  object-fit: cover;
`;
const Button = styled.div`
  height: 50px;
  width: 170px;
  background-image: linear-gradient(
    90deg,
    rgba(230, 37, 125, 1) 49%,
    rgba(242, 112, 4, 1) 94%
  );

  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 20px;
  color: white;
  cursor: pointer;
  transition: all 350ms;
  :hover {
    transform: scale(0.9);
  }
`;

const First = styled.div``;

const Second = styled.div`
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  margin-left: 100px;
`;

const Card = styled.div`
  position: absolute;
  color: white;
  display: flex;
  margin-top: 50px;

  h5 {
    color: orange;
  }

  h1 {
    font-size: 40px;
    width: 400px;
  }

  p {
    width: 400px;
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 700px;
  background-color: white;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;

  svg {
    position: relative;
    display: block;
    width: calc(300% + 1.3px);
    height: 700px;
    transform: rotateY(180deg);
  }
  path {
    fill: #36216e;
  }
`;
