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
  php: require("../assets/imgs-4/php.png"),
  python: require("../assets/imgs-4/python.png"),
  ror: require("../assets/imgs-4/ror.png"),
  go: require("../assets/imgs-4/go.png"),
  node_back: require("../assets/imgs-4/node-back.png"),
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
              <ListItem>Porque NodeJS?</ListItem>
              <ListItem>Básicos</ListItem>
              <ListItem>HTTP</ListItem>
              <ListItem>Criação da API</ListItem>
              <ListItem>Banco de dados</ListItem>
              <ListItem>Autenticação</ListItem>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="backup">
            <Heading caps fit textColor="primary">Back-End</Heading>
            <Image src={images.php.replace("/", "")} height="140"></Image>
            <Image src={images.python.replace("/", "")} height="140"></Image>
            <Image src={images.ror.replace("/", "")} height="140"></Image>
            <Image src={images.go.replace("/", "")} height="140"></Image>
            <Text>O código que reside no servidor</Text>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.node_back.replace("/", "")}
            notes="Performance: compilação Just-in-Time usando o V8 JavaScript Engine. Non-Blocking: . Compartilhamento: podemos usar mesmas ferramentas de testes para ambos front e back end.">
            <Heading caps fit textColor="#fff">Porque Node?</Heading>
            <List>
              <ListItem>Performance</ListItem>
              <ListItem>Non-Blocking</ListItem>
              <ListItem>Compartilhamento do código</ListItem>
              <ListItem>WebSockets</ListItem>
              <ListItem>Comunidade</ListItem>
            </List>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
