import React from "react";
import styled from "styled-components";

import { Card } from "./data";
import ProductCard from "./ProductCard";
import StoryCard from "./StoryCard";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
`;

const StyledStoryCard = styled(StoryCard)`
  grid-column: span 2;
`;

interface Props {
  cards: Card[];
}

export default function GridA(props: Props) {
  return (
    <Container>
      {props.cards.map((card) => {
        switch (card.type) {
          case "product":
            return <ProductCard key={card.id} card={card} />;
          case "story":
            return <StyledStoryCard key={card.id} card={card} />;
        }
      })}
    </Container>
  );
}
