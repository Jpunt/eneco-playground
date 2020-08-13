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

export default function GridC(props: Props) {
  // Haal de volgende card een stap terug, als er een story in
  // de derde kolom zit en de volgende een product is:
  let used = 0;
  const orderedCards = props.cards.reduce((result, card, index) => {
    const columns = card.type === "story" ? 2 : 1;
    const isThird = (used + 1) % 3 === 0;
    const nextCard = props.cards[index + 1];

    if (isThird && card.type === "story" && nextCard?.type === "product") {
      used += columns;
      return [...result, nextCard, card];
    } else {
      used += columns;
      return [...result, card];
    }
  }, [] as Card[]);

  // Filter dubbele cards weer weg
  const processedCards = orderedCards.filter((card, index) => {
    const cardsBefore = orderedCards.slice(0, index);
    return !cardsBefore.some((c) => c.id === card.id);
  });

  return (
    <Container>
      {processedCards.map((card) => {
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
