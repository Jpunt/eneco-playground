import React from "react";
import styled from "styled-components";
import { Story } from "./data";

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  border-radius: 1rem;
  background: ${(p: { background: string }) => p.background};
  padding: 1.5rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  grid-column: 1 / 3;
`;

const Title = styled.h2`
  color: white;
  margin: 0;
`;

interface Props {
  card: Story;
  className?: string;
}

export default function StoryCard(props: Props) {
  return (
    <Container background={props.card.background}>
      <Title>{props.card.title}</Title>
    </Container>
  );
}
