export enum Tag {
  energieOpwekken,
  inzichtEnBesparen,
  slimVerwarmen,
}

export interface Story {
  type: "story";
  id: number;
  title: string;
  background: string;
  tags: Tag[];
}

export interface Product {
  type: "product";
  id: number;
  title: string;
  subTitle: string;
  background: string;
  tags: Tag[];
}

export type Card = Story | Product;

export const cards: Card[] = [
  {
    type: "product",
    id: 0,
    title: "CV-ketel",
    subTitle: "Bespaar met een zuinigere ketel",
    background: "linear-gradient(#d0d0ec, #b1b4e2)",
    tags: [Tag.slimVerwarmen],
  },
  {
    type: "product",
    id: 1,
    title: "KetelComfort",
    subTitle: "Altijd zeker van een veilige ketel",
    background: "linear-gradient(#a4a4bc, #babad7)",
    tags: [Tag.slimVerwarmen],
  },
  {
    type: "story",
    id: 2,
    title: "Altijd zeker van een veilige, werkende ketel",
    background: "linear-gradient(#6aa1bf, #80aac2)",
    tags: [Tag.slimVerwarmen],
  },
  {
    type: "product",
    id: 3,
    title: "Zonneboiler",
    subTitle: "Verwarm je kraanwater met de zon",
    background: "linear-gradient(#a4a4bc, #babad7)",
    tags: [Tag.slimVerwarmen],
  },
  {
    type: "product",
    id: 4,
    title: "Warmtepompen",
    subTitle: "Hybride met de Techneco Elga en Eneco WarmteWinner",
    background: "linear-gradient(#f7cbda, #f2a2c1)",
    tags: [Tag.slimVerwarmen],
  },
  {
    type: "product",
    id: 5,
    title: "StukjeZon",
    subTitle: "Schakel om met StukjeZon en verlaag zo je energierekening",
    background: "#8fbcca",
    tags: [],
  },
  {
    type: "product",
    id: 6,
    title: "Zonnepanelen",
    subTitle: "Wek je eigen energie op",
    background: "linear-gradient(#c7ecdf, #90d4cc)",
    tags: [Tag.energieOpwekken],
  },
  {
    type: "story",
    id: 7,
    title: "Bekijk welke duurzame stap bij jou past",
    background: "linear-gradient(#6a9495, #6a9495)",
    tags: [],
  },
  {
    type: "product",
    id: 8,
    title: "Toon",
    subTitle: "Besparen met een slimme termostaat",
    background: "linear-gradient(#90b9b1, #c0ddd5)",
    tags: [Tag.inzichtEnBesparen],
  },
  {
    type: "product",
    id: 9,
    title: "Isolatie",
    subTitle: "Meer wooncomfort in temperatuur en geluid",
    background: "linear-gradient(#fdf3de, #fbe1a4)",
    tags: [Tag.inzichtEnBesparen],
  },
  {
    type: "product",
    id: 10,
    title: "Eneco App",
    subTitle: "Regel alles makkelijk op je mobiel",
    background: "linear-gradient(#e59daa, #f2b2c1)",
    tags: [Tag.inzichtEnBesparen],
  },
  {
    type: "story",
    id: 11,
    title: "Extra blij met zonnig weer",
    background: "linear-gradient(#5f742c, #6b7930)",
    tags: [Tag.inzichtEnBesparen],
  },
  {
    type: "product",
    id: 12,
    title: "Slimme meter",
    subTitle: "Geef noot meer meterstanden door",
    background: "linear-gradient(#f9dae4, #f4b2c9)",
    tags: [Tag.inzichtEnBesparen],
  },
  {
    type: "product",
    id: 13,
    title: "Mijn Eneco",
    subTitle: "Regel je zaken online",
    background: "linear-gradient(#e7e5f5, #c2c6e5)",
    tags: [Tag.inzichtEnBesparen],
  },
  {
    type: "product",
    id: 14,
    title: "Bespaartips",
    subTitle: "Bespaar energie met deze slimme tips",
    background: "linear-gradient(#e0f4f2, #aedfe4)",
    tags: [Tag.inzichtEnBesparen],
  },
];
