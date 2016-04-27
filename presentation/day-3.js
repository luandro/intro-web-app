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
  git: require("../assets/imgs/git.png"),
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
              <ListItem>Webpack</ListItem>
              <ListItem>Melhores Práticas de React</ListItem>
              <ListItem>React-Router</ListItem>
              <ListItem>Aplicativos Progressivos para Web</ListItem>
              <ListItem>Próximos passos</ListItem>
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
            <Code textSize="0.8em">git clone https://github.com/ufv-js/exemplo_webpack.git</Code>
            <br />
            <Code textSize="0.8em">cd exemplo_webpack</Code>
            <br />
            <Code textSize="0.8em">npm i</Code>
            <br />
            <Code textSize="0.8em">webpack src/App.js dist/bundle.js</Code>
            <br />
            <Code textSize="0.8em">open index.html</Code>
            <br />
            <Code textSize="0.8em">webpack --watch src/App.js dist/bundle.js</Code>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="backup">
            <Heading caps fit textColor="#fff">Wepack dev-server</Heading>
            <br />
            <Code textSize="0.8em">npm install webpack-dev-server -g</Code>
            <br />
            <br />
            <Code textSize="0.8em">webpack-dev-server</Code>
            <br />
            <br />
            <Code textSize="0.8em">http://localhost:8080/webpack-dev-server/</Code>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="backup">
            <Heading caps fit textColor="#fff">Arquivo de configuração</Heading>
            <br />
            <Code>npm i -D webpack</Code>
            <br />
            <Text>ou</Text>
            <br />
            <Code>npm install --save-dev webpack</Code>
          </Slide>
           <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/webpack_basic")}
            ranges={[
              { loc: [0, 150], title: "Config Básica" },
              { loc: [0, 1], note: "importamos o módulo 'path' do Node, para lidar com os diretórios" },
              { loc: [1, 2], note: "importamos o webpack" },
              { loc: [4, 5], note: "a primeira configuração é 'entry' onde definimos o arquivo de entrada do nosso aplicativo. Esse arquivo sera o ponto de entrada, onde todos outros arquivos seram conectados diretamente ou indiretamente." },
              { loc: [5, 10], note: "definimos o 'ouput', o caminho para onde nossa bundle será salva e o nome do arquivo. Também definimos o 'publiPath' que será um caminho virtual de onde o nosso devServer vai servir os arquivos." },
              { loc: [3, 4], note: "finalmente exportamos o arquivo de configuração" },

          ]}/>
          <Slide transition={["zoom", "fade"]} bgColor="backup">
            <Markdown>Agora ao rodar `webpack` ele automaticamente vai buscar pelo arquivo `webpack.config.js` e vai rodar usando nossas configurações.</Markdown>
            <br />
            <Markdown textSize="0.8em">Podemos adicionar ao `package.json` os scripts para facilitar a inicialização.</Markdown>
            <br />
            <CodePane
              lang="js"
              source={require("raw!../assets/webpack_npm_scripts")}
              margin="20px auto"/>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="backup">
            <Image src={images.git.replace("/", "")} height="150"></Image>
            <br />
            <Code>git checkout config</Code>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="backup">
            <Heading caps fit textColor="#fff">Adicionando Babel</Heading>
            <Code textSize="0.5em">npm install -D babel-loader babel-core</Code>
            <br />
            <Code textSize="0.5em">npm install -D babel-preset-es2015 babel-preset-react babel-preset-stage-0</Code>
            <br />
            <CodePane
              lang="js"
              source={require("raw!../assets/webpack_babel_loader")}
              margin="20px auto"/>
             <CodePane
              lang="js"
              source={require("raw!../assets/webpack_babelrc")}
              margin="20px auto"/>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="backup">
            <Image src={images.babel.replace("/", "")} height="150"></Image>
            <br />
            <Text>O Babel nós permite usar a próxima geração de Javascript hoje, transformando ES6 em ES5. <Link href="https://babeljs.io/">Veja mais</Link>.</Text>
            <br />
            <Text>Com os presets de React, podemos usar JSX e escrever componentes com ES6.</Text>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="backup">
            <Image src={images.git.replace("/", "")} height="150"></Image>
            <br />
            <Code>git checkout babel</Code>
            <br />
            <Code>npm run build</Code>
            <br />
            <Code>npm start</Code>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="backup">
            <Heading caps fit textColor="#fff">React-Hot-Loader</Heading>
            <Text>É um plugin para Webpack que permite que componentes do React sejam recarregados sem perder seu estado. Isso facilita muito quando estamos desenvolvendo aplicativos com React. <Link href="http://gaearon.github.io/react-hot-loader">Veja mais</Link>.</Text>
            <br />
            <Code textSize='0.8em'>npm i -D react-hot-loader@3.0.0-alpha.12</Code>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="backup">
            <Heading caps fit textColor="#fff">React-Hot-Loader</Heading>
            <Text>Devido a complexidade dessa ultilidade a vários lugares que devemos fazer modificações para que ele funcione.</Text>
            <br />
            <Markdown>Primeiro adicionamos no arquivo `.babelrc`</Markdown>
            <CodePane
             lang="js"
             source={require("raw!../assets/webpack_babelrc_hot")}
             margin="20px auto"/>
           </Slide>
           <Slide transition={["zoom", "fade"]} bgColor="backup">
             <Markdown>Depois devemos modificar nosso arquivo de configuração do Webpack `webpack.config.js`</Markdown>
             <CodePane
              lang="js"
              source={require("raw!../assets/webpack_hot")}
              margin="20px auto"/>
            </Slide>
            <Slide transition={["zoom", "fade"]} bgColor="backup">
              <Text>Mudamos nosso aplicativo para usar o componente 'container' do react-hot-loader, e para aceitar mudança de estados:</Text>
              <CodePane
               lang="js"
               source={require("raw!../assets/webpack_hot_app")}
               margin="20px auto"/>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="backup">
            <Markdown>Finalmente criamos um novo arquivo `server.js` para configurar o servidor de desenvolvimento com as opções necessárias como o `HotModuleReplacementPlugin`.</Markdown>
            <CodePane
             lang="js"
             source={require("raw!../assets/webpack_hot_server")}
             margin="20px auto"/>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="backup">
            <Heading caps fit textColor="#fff">React-Hot-Loader</Heading>
            <Text>Ou simplesmente baixe um boilerplate:</Text>
            <Text>
              <Link href="https://github.com/gaearon/react-hot-boilerplate/tree/next">
                github.com/gaearon/react-hot-boilerplate
              </Link>
            </Text>
            <br />
            <Code textSize="0.5em">git clone https://github.com/gaearon/react-hot-boilerplate.git -b next</Code>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="backup">
            <Image src={images.git.replace("/", "")} height="150"></Image>
            <br />
            <Code>git checkout hot</Code>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="backup">
            <Heading caps fit textColor="#fff">Webpack</Heading>
            <Text>Essa foi apenas uma breve introdução ao Webpack. Ele tem muitas muitas outras funcionalidades. Para se aprofundar mais veja a <Link href="https://webpack.github.io">documentação oficial</Link>.</Text>
            <br />
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
            <Heading caps fit textColor="secondary">Apresentação vs Containers</Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Markdown></Markdown>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Componentes</Heading>
            <Heading caps fit textColor="secondary">PropTypes e DefaultProps</Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Markdown></Markdown>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
