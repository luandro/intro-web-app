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
import Caixa from '../assets/Caixa';

const images = {
  jsframeworks: require("../assets/imgs-2/jsframeworks.jpg"),
};

preloader(images);

const theme = createTheme({
  primary: "#222",
  secondary: "#61dafb",
  backup: "#84B1ED"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500} progress={'pacman'}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              Introdução a Criação de Aplicativos para Web
            </Heading>
            <Heading size={1} fit caps>
              Universidade Federal de Viçosa
            </Heading>
            <Heading size={1} fit caps textColor="secondary">
              Departamento de Ciências da Computação
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="#000">
            <List textColor="secondary">
              <ListItem>Ferramentas</ListItem>
              <ListItem>Melhores Práticas de React</ListItem>
              <ListItem>React-Router</ListItem>
              <ListItem>Desenvolvimento do Aplicativo</ListItem>
            </List>
          </Slide>


          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit textColor="secondary">React</Heading>
            <Heading caps fit>Melhores Práticas</Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Componentes</Heading>
            <Heading caps fit textColor="secondary">Burros vs Espertos</Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Componentes</Heading>
            <Heading caps fit textColor="secondary">PropTypes e DefaultProps</Heading>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
