import React from "react";
import styled from "styled-components";
import { Product } from "./data";
import cardAnimation from "./cardAnimation";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  ${cardAnimation}
`;

const Image = styled.div`
  flex-grow: 1;
  background: ${(p: { background: string }) => p.background};
  padding-top: 100%;
`;

const Titles = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  background: white;
  padding: 1.5rem 1rem;
  min-height: 4rem;
`;

const Title = styled.h2`
  color: black;
  font-size: 1.1rem;
  margin: 0;
  margin-bottom: 0.5em;
`;

const SubTitle = styled.h3`
  color: gray;
  margin: 0;
  font-size: 1rem;
  font-weight: normal;
`;

interface Props {
  card: Product;
  className?: string;
}

export default function ProductCard(props: Props) {
  return (
    <Container className={props.className} random={Math.random()}>
      <Image background={props.card.background} />
      <Titles>
        <Title>{props.card.title}</Title>
        <SubTitle>{props.card.subTitle}</SubTitle>
      </Titles>
    </Container>
  );
}
