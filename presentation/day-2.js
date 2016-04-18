// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Code,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";
import CodeSlide from 'spectacle-code-slide';


// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";


const images = {
  markdown: require("../assets/imgs/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#84B1ED"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500} progress={'pacman'}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Introdução a Criação de Aplicativos para Web
            </Heading>
            <Heading size={1} fit caps>
              Universidade Federal de Viçosa
            </Heading>
            <Heading size={1} fit caps textColor="black">
              Departamento de Ciências da Computação
            </Heading>
            <Link href="https://github.com/luandro/intro-web-app">
              <Text bold caps textColor="tertiary">veja no Github</Text>
            </Link>
          </Slide>
          <Slide transition={["slide"]} bgColor="#000">
            <List style={{color: '#fff'}}>
              <ListItem>JS Frameworks</ListItem>
              <ListItem>Componentes</ListItem>
              <ListItem>Virtual DOM</ListItem>
              <ListItem>Propriedades</ListItem>
              <ListItem>Estado</ListItem>
              <ListItem>Eventos</ListItem>
              <ListItem>Arquitetura do aplicativo</ListItem>
              <ListItem>Início do desenvolvimento</ListItem>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading size={2} caps fit textColor="primary">JS Frameworks</Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading size={2} caps fit textColor="primary">Componentes</Heading>
          </Slide>
          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/deck.example")}
            ranges={[
              { loc: [0, 270], title: "Componente React básico" },
              { loc: [0, 1], title: "The Beginning" },
              { loc: [1, 2] },
              { loc: [1, 2], note: "Heres a note!" },
              { loc: [2, 3] },
              { loc: [4, 7] },
              { loc: [8, 10] },
            ]}/>
        </Deck>
      </Spectacle>
    );
  }
}
