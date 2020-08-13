export interface Story {
  type: "story";
  title: string;
  background: string;
}

export interface Product {
  type: "product";
  title: string;
  subTitle: string;
  background: string;
}

type Card = Story | Product;

export const cards: Card[] = [
  {
    type: "story",
    title: "Altijd zeker van een veilige, werkende ketel",
    background: "linear-gradient(#aba08c, #b9b8b1)",
  },
  {
    type: "product",
    title: "CV-ketel",
    subTitle: "Bespaar met een zuinigere ketel",
    background: "linear-gradient(#d0d0ec, #b1b4e2)",
  },
  {
    type: "product",
    title: "KetelComfort",
    subTitle: "Altijd zeker van een veilige ketel",
    background: "linear-gradient(#a4a4bc, #babad7)",
  },
  {
    type: "product",
    title: "StukjeZon",
    subTitle: "Schakel om met StukjeZon en verlaag zo je energierekening",
    background: "#8fbcca",
  },
  {
    type: "product",
    title: "Eneco App",
    subTitle: "Regel alles makkelijk op je mobiel",
    background: "linear-gradient(#e59daa, #f2b2c1)",
  },
  {
    type: "product",
    title: "Zonnepanelen",
    subTitle: "Wek je eigen energie op",
    background: "linear-gradient(#c7ecdf, #90d4cc)",
  },
  {
    type: "product",
    title: "Toon",
    subTitle: "Besparen met een slimme termostaat",
    background: "linear-gradient(#90b9b1, #c0ddd5)",
  },
  {
    type: "story",
    title: "Extra blij met zonnig weer",
    background: "linear-gradient(#5f742c, #6b7930)",
  },
  {
    type: "product",
    title: "Isolatie",
    subTitle: "Meer wooncomfort in temperatuur en geluid",
    background: "linear-gradient(#fdf3de, #fbe1a4)",
  },
  {
    type: "product",
    title: "Bespaartips",
    subTitle: "Bespaar energie met deze slimme tips",
    background: "linear-gradient(#e0f4f2, #aedfe4)",
  },
];
