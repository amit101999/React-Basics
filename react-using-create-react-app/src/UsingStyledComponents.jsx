import React from "react";
import styled from "styled-components";

// we use styled components because css file can give us naming conflicts and its scope is global

// we have created our own using css syntex div styled component we can use like html tags
const Mydiv = styled.div`
  width: 500px;
  color: red;
  font-size: 1.5em;
  text-align: center;
  &:hover {
    font-size: 1em;
  }
`;

// dynamic styling component
// since styled components are internally the same element it can access the props as well we pass on
const MyP = styled.p`
  width: 500px;
  color: ${(props) => props.color};
  font-size: 1em;
  display: ${(props) => (props.show ? "none" : "block")};
  text-align: center;
`;

const UsingStyledComponents = () => {
  return (
    <>
      <Mydiv>From new cart using styled component</Mydiv>
      {/* passing the color prop to Myp */}
      <MyP color="blue" show={false}>
        Name is : Amit{" "}
      </MyP>
      <p>Age is :23</p>
    </>
  );
};

export default UsingStyledComponents;
