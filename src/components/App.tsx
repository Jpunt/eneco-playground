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

  ul,
  ol {
    margin: 2rem 0;
  }

  li {
    margin-bottom: 1rem;
  }
`;

const Button = styled.button`
  font-weight: ${(p: { isActive: boolean }) =>
    p.isActive ? "bold" : "normal"};
`;

interface Solution {
  description: string;
  Grid: React.FC<{ cards: Card[] }>;
}

const solutions: Solution[] = [
  {
    description:
      "Laat items die niet passen naar de volgende regel lopen (ook als dat witruimtes veroorzaakt)",
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

  const tagFilters = cards
    .flatMap((card) => card.tags)
    .filter((tag, index, self) => self.indexOf(tag) === index);

  return (
    <Container>
      <p>
        Een product-card is 1 kolom, een story 2. Wat doen we als een story in
        de 3e kolom valt?
      </p>

      <h4>Opmerkingen:</h4>
      <ul>
        <li>
          Om dit prototype te versimpelen wordt de breedte vast gezet op 800px.
        </li>
        <li>Het bekende 3d/tilt-effect zit hier nog niet in.</li>
        <li>De content in de cards is fake.</li>
        <li>
          We maken gebruik van{" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout">
            CSS Grid Layout
          </a>
          , geen 3rd party libs.
        </li>
        <li>
          We gaan er vanuit dat er 1 array is, waar alle cards (products en
          stories samen) in zitten. Filtering werkt obv een property in iedere
          card. De filters worden ook opgebouwd adv deze property in de cards.
        </li>
        <li>
          De source is hier te zien:{" "}
          <a href="https://github.com/Jpunt/eneco-playground/tree/master/src/components">
            https://github.com/Jpunt/eneco-playground/tree/master/src/components
          </a>
          .
        </li>
      </ul>

      <h4>Mogelijke oplossingen:</h4>
      <ol>
        {solutions.map((solution, index) => (
          <li key={index}>
            <Button
              onClick={() => setSolutionIndex(index)}
              isActive={solutionIndex === index}
            >
              {solution.description}
            </Button>
          </li>
        ))}
      </ol>

      <h4>Filters:</h4>
      <ul>
        {tagFilters.map((tagFilter) => {
          return (
            <li key={tagFilter}>
              <Button
                isActive={filter === tagFilter}
                onClick={() => {
                  if (filter === tagFilter) {
                    setFilter(undefined);
                  } else {
                    setFilter(tagFilter);
                  }
                }}
              >
                {tagFilter}
              </Button>
            </li>
          );
        })}
      </ul>

      <Grid cards={filteredCards} />
    </Container>
  );
}
