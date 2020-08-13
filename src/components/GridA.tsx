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

export default function GridA() {
  return (
    <Container>
      {cards.map((card, index) => {
        switch (card.type) {
          case "product":
            return <ProductCard key={index} card={card} />;
          case "story":
            return <StoryCard key={index} card={card} />;
        }
      })}
    </Container>
  );
}
