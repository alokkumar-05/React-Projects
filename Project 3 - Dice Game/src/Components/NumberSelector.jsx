import { useState } from "react";
import styled from "styled-components";

const NumberSelector = () => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const [selectedNumber , setSelectedNumber] = useState();
  return (
    <NumberSelector>
    <div className="flex">
      {arrNumber.map((value, i) => (
        <Box 
        $isSelected ={value===selectedNumber}
        key={i} onClick={()=>setSelectedNumber(value)}
        >{value}</Box>
      ))}
    </div>
    </NumberSelector>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  
`

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;

 
  background-color: ${({ $isSelected }) =>
    $isSelected ? "black" : "white"};
  color: ${({ $isSelected }) =>
    $isSelected ? "white" : "black"};
`;
