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

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";


const images = {
  gmail: require("../assets/gmail.png"),
  android: require("../assets/android.png"),
  apple: require("../assets/apple.png"),
  instagram: require("../assets/instagram.png"),
  whatsapp: require("../assets/whatsapp.png"),
  facebook: require("../assets/facebook.png"),
  pokemon: require("../assets/pokemon.png"),
  atomLogo: require("../assets/atom-logo.png"),
  clientServer: require("../assets/Client-server-model.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
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
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              1º Dia
            </Heading>
            <List style={{color: '#fff'}}>
              <ListItem>Introdução</ListItem>
              <ListItem>IDEs</ListItem>
              <ListItem>CLI</ListItem>
              <ListItem>Git</ListItem>
              <ListItem>Chrome Dev Tools</ListItem>
              <ListItem>Como funciona a web?</ListItem>
              <ListItem>Idealização do aplicativo</ListItem>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="O que são aplicativos? Breve história. Futuro de aplicativos para web.">
            <Text>2005</Text>
            <Image src={images.gmail.replace("/", "")} height="80"></Image>
            <Text>2007</Text>
            <Image src={images.android.replace("/", "")} height="100"></Image>
            <Image src={images.apple.replace("/", "")} height="100"></Image>
            <Text>Aplicativos</Text>
            <Image src={images.instagram.replace("/", "")} height="100"></Image>
            <Image src={images.whatsapp.replace("/", "")} height="100"></Image>
            <Image src={images.facebook.replace("/", "")} height="100"></Image>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Text>2016</Text>
            <Image src={images.pokemon.replace("/", "")} height="200"></Image>
            <Link href="https://www.pokedex.org/">
              <Text>www.pokedex.org</Text>
            </Link>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading size={2}>IDEs</Heading>
            <Heading size={1} fit caps>Integrated development environment</Heading>
            <Text>Disponibiliza varias facilidades para desenvolvedores como linting, debug, hightlight </Text>
            <Text textColor="#D4DFE6">Vim, Sublime Text, Atom, Brackets</Text>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Image src={images.atomLogo.replace("/", "")}></Image>
            <p><Code fit="true">$ sudo add-apt-repository ppa:webupd8team/atom</Code></p>
            <p><Code fit="true">$ sudo apt-get update</Code></p>
            <p><Code fit="true">$ sudo apt-get install atom</Code></p>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={2}>CLI</Heading>
            <Heading size={1} fit caps>command line interface</Heading>
              <Appear fid="1">
                <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat omnis cum corrupti tempora ducimus, maxime perferendis quo, dicta deleniti itaque aut laborum rerum sit saepe. Cumque voluptate, consequuntur animi incidunt.</Text>
              </Appear>
              <Appear fid="2">
                <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo eius nesciunt nostrum iste ex praesentium. Temporibus aperiam cumque quos suscipit dicta error inventore, tempore quam, quas blanditiis maiores culpa laborum.</Text>
              </Appear>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={2}>Git</Heading>
            <Heading size={1} fit caps>source code management system</Heading>
            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat omnis cum corrupti tempora ducimus, maxime perferendis quo, dicta deleniti itaque aut laborum rerum sit saepe. Cumque voluptate, consequuntur animi incidunt.</Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo eius nesciunt nostrum iste ex praesentium. Temporibus aperiam cumque quos suscipit dicta error inventore, tempore quam, quas blanditiis maiores culpa laborum.</Text>
            <Code>$ sudo apt-get install git-all</Code>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={2}>Chrome Dev Tools</Heading>
            <Heading size={1} fit caps>command line interface</Heading>
            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat omnis cum corrupti tempora ducimus, maxime perferendis quo, dicta deleniti itaque aut laborum rerum sit saepe. Cumque voluptate, consequuntur animi incidunt.</Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo eius nesciunt nostrum iste ex praesentium. Temporibus aperiam cumque quos suscipit dicta error inventore, tempore quam, quas blanditiis maiores culpa laborum.</Text>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={2}>Como funciona a web?</Heading>
            <Heading size={1} fit caps>command line interface</Heading>
            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat omnis cum corrupti tempora ducimus, maxime perferendis quo, dicta deleniti itaque aut laborum rerum sit saepe. Cumque voluptate, consequuntur animi incidunt.</Text>
            <Image src={images.clientServer.replace("/", "")} height='100'></Image>
            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo eius nesciunt nostrum iste ex praesentium. Temporibus aperiam cumque quos suscipit dicta error inventore, tempore quam, quas blanditiis maiores culpa laborum.</Text>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
