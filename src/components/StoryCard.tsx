import React from "react";
import styled from "styled-components";
import cardAnimation from "./cardAnimation";
import { Story } from "./data";

interface ContainerProps {
  background: string;
  random: number;
}

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  border-radius: 1rem;
  background: ${(p: ContainerProps) => p.background};
  padding: 1.5rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  min-height: 15rem;
  ${cardAnimation}
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
    <Container
      background={props.card.background}
      className={props.className}
      random={Math.random()}
    >
      <Title>{props.card.title}</Title>
    </Container>
  );
}
