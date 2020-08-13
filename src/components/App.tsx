import React, { useState } from "react";
import styled from "styled-components";

import GridA from "./GridA";
import GridB from "./GridB";
import GridC from "./GridC";
import { Tag, cards, Card } from "./data";

const Container = styled.div`
  font-family: Helvetica, sans-serif;
  margin: 100px auto;
  width: 800px;
`;

const SolutionButton = styled.a`
  font-weight: ${(p: { isActive: boolean }) =>
    p.isActive ? "bold" : "normal"};
  text-decoration: none;
  padding-bottom: 1rem;
  display: block;
`;

const FilterButton = styled.a`
  font-weight: ${(p: { isActive: boolean }) =>
    p.isActive ? "bold" : "normal"};
  text-decoration: none;
  padding-bottom: 1rem;
  display: inline-block;
`;

interface Solution {
  description: string;
  Grid: React.FC<{ cards: Card[] }>;
}

const solutions: Solution[] = [
  {
    description:
      "Laat items die niet passen naar de volgende regel lopen, ook als dat witruimtes veroorzaakt",
    Grid: GridA,
  },
  {
    description: "Zet een story naar 1 kolom als hij op de 3e kolom uitkomt",
    Grid: GridB,
  },
  {
    description:
      "Wissel een story met een product als een story op de 3e kolom uitkomt",
    Grid: GridC,
  },
];

export default function App() {
  const [solutionIndex, setSolutionIndex] = useState(0);
  const [filter, setFilter] = useState<Tag>();
  const { Grid } = solutions[solutionIndex];

  const filteredCards = cards.filter((card) =>
    card.tags.some((tag) => !filter || tag === filter),
  );

  return (
    <Container>
      <ol>
        {solutions.map((solution, index) => (
          <li key={index}>
            <SolutionButton
              onClick={(e) => {
                e.preventDefault();
                setSolutionIndex(index);
              }}
              isActive={solutionIndex === index}
              href="#"
            >
              {solution.description}
            </SolutionButton>
          </li>
        ))}
      </ol>

      <ul>
        {Object.keys(Tag).map((key) => {
          const tag = Tag[key] as Tag;
          return (
            <li key={key}>
              <FilterButton
                href="#"
                isActive={filter === tag}
                onClick={(e) => {
                  e.preventDefault();
                  if (filter === tag) {
                    setFilter(undefined);
                  } else {
                    setFilter(tag);
                  }
                }}
              >
                {tag}
              </FilterButton>
            </li>
          );
        })}
      </ul>

      <Grid cards={filteredCards} />
    </Container>
  );
}
