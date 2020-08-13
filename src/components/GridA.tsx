import React from "react";
import styled from "styled-components";

import { cards } from "./data";
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

const StyledProductCard = styled(ProductCard)``;

export default function GridA() {
  return (
    <Container>
      {cards.map((card, index) => {
        switch (card.type) {
          case "product":
            return <StyledProductCard key={index} card={card} />;
          case "story":
            return <StyledStoryCard key={index} card={card} />;
        }
      })}
    </Container>
  );
}
