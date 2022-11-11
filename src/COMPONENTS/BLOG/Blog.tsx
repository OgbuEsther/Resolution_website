import React from "react";
import styled from "styled-components";
import CardProps from "../CardProps";
import pic from "../ASSESTS/blog1.jpg";
import pic1 from "../ASSESTS/blog2.jpg";
import pic2 from "../ASSESTS/blog3.jpg";
import pic3 from "../ASSESTS/blog4.jpg";
const Blog = () => {
  return (
    <div>
      <Container>
        <Txt>Our Blog</Txt>
        <Stroke></Stroke>
        <Holder>
          <CardProps
            MyImg={pic}
            bg="plum"
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod commodi distinctio possimus."
          />
          <CardProps
            MyImg={pic1}
            bg="orchid"
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod commodi distinctio possimus."
          />
        </Holder>
        {/* <Holder1>
          <CardProps MyImg={pic2} bg="plum" title="i am here" />
          <CardProps MyImg={pic3} bg="indigo" title="i am here" />
        </Holder1> */}
      </Container>
    </div>
  );
};

export default Blog;

const Stroke = styled.div`
  height: 7px;
  width: 150px;
  border-radius: 5px;
  background-image: linear-gradient(
    90deg,
    rgba(230, 37, 125, 1) 49%,
    rgba(242, 112, 4, 1) 94%
  );
  margin-bottom: 50px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Holder = styled.div`
  display: flex;
  width: 80%;
  /* background-color: black; */
  justify-content: space-evenly;
  margin-bottom: 30px;
  margin-left: 180px;
`;
const Holder1 = styled.div`
  display: flex;
  margin-left: 100px;
  margin-right: 200px;
`;

const Txt = styled.div`
  font-weight: bold;
  color: #1f2470;
  font-size: 40px;
`;
