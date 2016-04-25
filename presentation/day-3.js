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
  grunt: require("../assets/imgs-3/grunt.png"),
  gulp: require("../assets/imgs-3/gulp.png"),
  browserify: require("../assets/imgs-3/browserify.png"),
  webpack: require("../assets/imgs-3/webpack.png"),
  jspm: require("../assets/imgs-3/jspm.png"),
  babel: require("../assets/imgs-3/babel.png"),
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
              <ListItem>CSS</ListItem>
              <ListItem>Desenvolvimento do Aplicativo</ListItem>
            </List>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="backup">
            <Heading caps fit textColor="#fff">Ferramentas</Heading>
            <Image src={images.grunt.replace("/", "")} height="100"></Image>
            <Image src={images.gulp.replace("/", "")} height="100"></Image>
            <Image src={images.browserify.replace("/", "")} height="100"></Image>
            <Image src={images.webpack.replace("/", "")} height="100"></Image>
            <Image src={images.jspm.replace("/", "")} height="100"></Image>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="#fff">
            <Heading caps fit textColor="primary">Porque?</Heading>
              <List>
                <ListItem>Minimificação do código</ListItem>
                <ListItem>Empacotamento de módulos (bundling)</ListItem>
                <ListItem>Transpilação de ES6 para JS</ListItem>
                <ListItem>Comprimir imagens</ListItem>
                <ListItem>Recarregamento ao vivo (Live Reloading)</ListItem>
                <ListItem>Hashing dos recursos</ListItem>
              </List>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="backup">
            <Heading caps fit textColor="#fff">Webpack</Heading>
            <Image src={images.webpack.replace("/", "")} height="250"></Image>
            <br />
            <Code textSize="0.8em">npm install webpack -g</Code>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="backup">
            <Heading caps fit textColor="#fff">Básico do Webpack</Heading>
            <Code textSize="0.8em">git clone https://github.com/ufv-js/exemplo.git</Code>
            <br />
            <Code textSize="0.8em">cd exemplo</Code>
            <br />
            <Code textSize="0.8em">webpack ./entry.js bundle.js</Code>
            <br />
            <Code textSize="0.8em">webpack --watch ./entry.js bundle.js</Code>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="backup">
            <Heading caps fit textColor="#fff">Arquivo de configuração</Heading>
            <br />
            <Code>npm i -S webpack</Code>
            <br />
            <Text>ou</Text>
            <br />
            <Code>npm install --save webpack</Code>
          </Slide>
           <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/webpack_basic")}
            ranges={[
              { loc: [0, 150], title: "Config Básica" },
             
          ]}/>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Link href="https://webpack.github.io/docs/list-of-loaders.html">Lista de Loaders</Link>
            <br />
            <Link href="https://github.com/webpack/docs/wiki/list-of-plugins">Lista de plugins</Link>
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
