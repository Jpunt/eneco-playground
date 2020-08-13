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
  grid-column: ${(p: { columns: number }) => `span ${p.columns}`};
`;

type CardWithColumns = Card & { columns: number };

interface Props {
  cards: Card[];
}

export default function GridB(props: Props) {
  let used = 0;
  const cardsWithColumns: CardWithColumns[] = props.cards.map((card) => {
    switch (card.type) {
      case "product": {
        // Products zijn altijd 1 kolom
        const columns = 1;
        used += columns;
        return { ...card, columns };
      }
      case "story": {
        // Stories zijn twee kolommen, tenzij we op de derde kolom uitkomen
        const columns = (used + 1) % 3 === 0 ? 1 : 2;
        used += columns;
        return { ...card, columns };
      }
    }
  });

  return (
    <Container>
      {cardsWithColumns.map((card) => {
        switch (card.type) {
          case "product":
            return <ProductCard key={card.id} card={card} />;
          case "story":
            return (
              <StyledStoryCard
                key={card.id}
                card={card}
                columns={card.columns}
              />
            );
        }
      })}
    </Container>
  );
}
