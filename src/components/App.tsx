import React, { useState } from "react";
import styled from "styled-components";

import GridA from "./GridA";
import GridB from "./GridB";
import GridC from "./GridC";

const Container = styled.div`
  font-family: Helvetica, sans-serif;
  margin: 100px auto;
  width: 800px;
`;

const OptionButton = styled.a`
  font-weight: ${(p: { isActive: boolean }) =>
    p.isActive ? "bold" : "normal"};
  text-decoration: none;
  padding-bottom: 1rem;
  display: block;
`;

interface Option {
  description: string;
  grid: React.ReactNode;
}

const options: Option[] = [
  {
    description:
      "Laat items die niet passen naar de volgende regel lopen, ook als dat witruimtes veroorzaakt",
    grid: <GridA />,
  },
  {
    description: "Zet een story naar 1 kolom als hij op de 3e kolom uitkomt",
    grid: <GridB />,
  },
  {
    description:
      "Wissel een story met een product als een story op de 3e kolom uitkomt",
    grid: <GridC />,
  },
];

export default function App() {
  const [optionIndex, setOptionIndex] = useState(2);
  return (
    <Container>
      <ol>
        {options.map((option, index) => (
          <li key={index}>
            <OptionButton
              onClick={(e) => {
                e.preventDefault();
                setOptionIndex(index);
              }}
              isActive={optionIndex === index}
              href="#"
            >
              {option.description}
            </OptionButton>
          </li>
        ))}
      </ol>
      {options[optionIndex].grid}
    </Container>
  );
}
