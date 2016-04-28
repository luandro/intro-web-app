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
  reactrouter: require("../assets/imgs-3/react-router.png"),
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
            <Heading caps fit>Componentes de Apresentação</Heading>
            <List>
              <ListItem>Responsáveis por mostrar a aparência (estilo e markup)</ListItem>
              <ListItem>Recebem 'props' dos containers</ListItem>
              <ListItem>Raramente possuem 'state', quando existe é somente estado da interface</ListItem>
              <ListItem>Nomeados apartir do componente</ListItem>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Componentes Containers</Heading>
            <List>
              <ListItem>Comparados com o 'C' no MVC (Model-View-Controller)</ListItem>
              <ListItem>Descrevem como as coisas funcionam</ListItem>
              <ListItem>Produzem dados para o aplicativo e fazem Ajax</ListItem>
              <ListItem>Possuem 'state' e são responsáveis por muda-lo</ListItem>
              <ListItem>Nomeados apartir do componente com *Container</ListItem>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Vantagens desse padrão</Heading>
            <List>
              <ListItem>Melhor separação das preocupações no aplicativo</ListItem>
              <ListItem>Melhor re-ultilização, pois os componentes de apresentação podem ser usados em outras partes do aplicativo</ListItem>
              <ListItem>Fácil para que um designer trabalhe nos componentes de apresentação sem correr o risco de mexer com a lógica</ListItem>
              <ListItem>Nós força a extrair componentes de layout, para não precisar ficar repetindo markup</ListItem>
            </List>
            <Link href="https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0">veja mais</Link>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Componentes</Heading>
            <Heading caps fit textColor="secondary">PropTypes e DefaultProps</Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="backup">
            <Heading caps fit>PropTypes</Heading>
            <Markdown>Pense no `PropTypes` como uma carta de amor para o próximo desenvolvedor que vai trabalhar no componente depois de você. Seu componente deve ser o mais declarativo possível, e os erros do React usando essa propriedade são claros e específicos.</Markdown>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="backup">
            <Heading caps fit>DefaultProps</Heading>
            <Markdown>Default não apenas ajudam a evitar errors, mas também auxiliam decoberta de `props` que precisam ser clarificadas. Se não é obrigatória e não tem um valor default, o que é?</Markdown>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="backup">
            <Heading caps fit>Como usa-los</Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/react_proptypes_defaultprops")}
              margin="20px auto"/>
              <Link href="https://facebook.github.io/react/docs/reusable-components.html">veja mais</Link>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="#fff">
            <Image src={images.reactrouter.replace("/", "")} height="350"></Image>
            <Text>Uma solução completa de roteamente de urls para aplicativos React, com uma API simples e poderosa</Text>
            <br />
            <Text textSize="0.8em">
              <Link href="https://css-tricks.com/learning-react-router/">Guia detalhado </Link>
              e
              <Link href="https://github.com/reactjs/react-router"> Página oficial</Link>
            </Text>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="backup">
            <Heading caps fit>API Básica: Componentes</Heading>
            <List>
              <ListItem textSize="0.8em" textColor="primary">
                <Link href="https://github.com/reactjs/react-router/blob/master/docs/API.md#router">{'<Router>'}</Link>: componente primário que mantém as urls e a UI em sincronia
              </ListItem>
              <ListItem textSize="0.8em" textColor="primary">
                <Link href="https://github.com/reactjs/react-router/blob/master/docs/API.md#link">{'<Link>'}</Link>: componente que permite navegar pelo aplicativo, funciona similar a uma tag {'<a>'}
              </ListItem>
              <ListItem textSize="0.8em" textColor="primary">
                <Link href="https://github.com/reactjs/react-router/blob/master/docs/API.md#route">{'<Route>'}</Link>: usado para mapear declarativamente a hierarquia de componentes do aplicativo
              </ListItem>
              <ListItem textSize="0.8em" textColor="primary">
                <Link href="https://github.com/reactjs/react-router/blob/master/docs/API.md#redirect">{'<Redirect>'}</Link>: cria um redirecionameto para outra rota para manter URL antigas
              </ListItem>
              <ListItem textSize="0.8em" textColor="primary">
                <Link href="https://github.com/reactjs/react-router/blob/master/docs/API.md#indexroute">{'<IndexRoute>'}</Link>: permite definir um 'filho' default para uma rota 'pai', quando sua URL é acessada
              </ListItem>
            </List>
            <Link href="https://github.com/reactjs/react-router/blob/master/docs/API.md">Veja mais</Link>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="backup">
            <Heading caps fit>API Básica: Propriedades</Heading>
            <List>
              <ListItem textSize="0.8em" textColor="primary">
                <Link href="https://github.com/reactjs/react-router/blob/master/docs/API.md#location">location</Link>: a localização atual
              </ListItem>
              <ListItem textSize="0.8em" textColor="primary">
                <Link href="https://github.com/reactjs/react-router/blob/master/docs/API.md#params">params</Link>: o segmento dinâmico da rota
              </ListItem>
              <ListItem textSize="0.8em" textColor="primary">
                <Link href="https://github.com/reactjs/react-router/blob/master/docs/API.md#route-1">route</Link>: a rota que renderizou esse componente
              </ListItem>
              <ListItem textSize="0.8em" textColor="primary">
                <Link href="https://github.com/reactjs/react-router/blob/master/docs/API.md#children-1">children</Link>: o elemento de rota filho a ser renderizado
              </ListItem>
            </List>
            <Link href="https://github.com/reactjs/react-router/blob/master/docs/API.md">Veja mais</Link>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="backup">
            <Heading caps fit>API Básica: Históricos</Heading>
            <List>
              <ListItem textSize="0.8em" textColor="primary">
                <Link href="https://github.com/reactjs/react-router/blob/master/docs/API.md#browserhistory">browserHistory</Link>: usa a History API do HTML5 quando disponível, ou então atualiza a página. É a maneira preferencial para páginas modernas.
              </ListItem>
              <ListItem textSize="0.8em" textColor="primary">
                <Link href="https://github.com/reactjs/react-router/blob/master/docs/API.md#hashhistory">hashHistory</Link>: usa hashes e chaves de query para rastrear o estado, gera urls do tipo #Aj9Io7u87
              </ListItem>
            </List>
            <Link href="https://github.com/reactjs/react-router/blob/master/docs/API.md">Veja mais</Link>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="backup">
            <Heading caps fit>API Básica: Utilitários</Heading>
            <List>
              <ListItem textSize="0.8em" textColor="primary">
                <Link href="https://github.com/reactjs/react-router/blob/master/upgrade-guides/v2.0.0.md#navigating-inside-deeply-nested-components">browserHistory.push('/')</Link>: função que pode ser usada para mudar a URL
              </ListItem>
              <ListItem textSize="0.8em" textColor="primary">
                <Link href="https://github.com/reactjs/react-router/blob/master/docs/API.md#onenternextstate-replace-callback">onEnter</Link>: pode ser usado para invocar funções antes que uma rota específica seja acessada; útil para rotas que necessitam de autenticação
              </ListItem>
              <ListItem textSize="0.8em" textColor="primary">
                <Link href="https://github.com/reactjs/react-router/blob/master/docs/API.md#onchangeprevstate-nextstate-replace-callback">onChange</Link>: invocado quando a localização muda, mas não se sai ou entra na rota, por exemplo quando um parametro muda
              </ListItem>
              <ListItem textSize="0.8em" textColor="primary">
                <Link href="https://github.com/reactjs/react-router/blob/master/docs/API.md#onleave">onLeave</Link>: invocado logo que se for sair de uma rota
              </ListItem>
            </List>
            <Link href="https://github.com/reactjs/react-router/blob/master/docs/API.md">Veja mais</Link>
          </Slide>
          <CodeSlide
           transition={[]}
           lang="js"
           textSize="0.8em"
           code={require("raw!../assets/react_router")}
           ranges={[
             { loc: [0, 150], title: "React Router" },
             { loc: [2, 3], note: "Importamos os componentes de roteamento do React-Router" },
             { loc: [3, 7], note: "Importamos os componentes do noso aplicativo" },
             { loc: [8, 17], note: "Exportamos a função que retorna nosso mapa de rotas" },
             { loc: [9, 10], note: "Nesse caso todos componentes são filhos do AppContainer" },
             { loc: [10, 11], note: "A rota / será redirecionada a rota /ru" },
             { loc: [11, 12], note: "As rotas /ru, /ru/qualquerCoisa serão redirecionadas para o componente MealContainer, qualquerCoisa será acessível como this.props.params.nextMeal no componente" },
             { loc: [12, 13], note: "As rotas /mu, /mu/qualquerCoisa serão redirecionadas para o componente MealContainer, qualquerCoisa será acessível como this.props.params.nextMeal no componente" },
             { loc: [13, 14], note: "A rota /about será direcionada para o componente About" },
             { loc: [14, 15], note: "Qualquer outra rota que não seja uma das a cima será direcionada para o component NotFound" },
             { loc: [19, 31], note: "Agora no componente raiz App" },
             { loc: [21, 22], note: "Importamos o componente Router e o método de histórico browserHistory" },
             { loc: [22, 23], note: "Importamos nosso arquivo de rotas" },
             { loc: [26, 27], note: "Renderizamos o componente Router passando o método de histórico e as rotas" },
             { loc: [34, 44], note: "Agora no componente que colocamos no mapa de rotas" },
             { loc: [34, 35], note: "Importamos o método browserHistory" },
             { loc: [37, 38], note: "Podemos acessar a propriedade location para verificar qual nossa localização, acessando a propriedade pathname" },
             { loc: [38, 39], note: "Podemos usar o método browserHistory para mudar a URL" },
             { loc: [40, 41], note: "Podemos acessar a propriedade 'params' para obter os parâmetros que foram passados para rota" },
         ]}/>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Próximos passos</Heading>
            <List>
              <ListItem textSize="1em">Padrão de design <Link textColor="#fff" href="https://code-cartoons.com/a-cartoon-guide-to-flux-6157355ab207">Flux</Link> ( <Link textColor="#fff" href="https://github.com/reactjs/redux">Redux</Link>, <Link textColor="#fff" href="https://github.com/mobxjs/mobx">MobX</Link> ) para manejar estado entre componentes que não são diretamente relacionados; essencial para apps complexos</ListItem>
              <ListItem textSize="1em"><Link textColor="#fff" href="https://www.typescriptlang.org/">TypeScript</Link> ou <Link textColor="#fff" href="http://flowtype.org/">Flow</Link> para checagem de erros</ListItem>
              <ListItem textSize="1em">Renderizar no servidor ( <Link textColor="#fff" href="https://www.lullabot.com/articles/what-is-an-isomorphic-application">aplicativos isomórficos</Link> ) para melhor tempo de renderização e SEO</ListItem>
              <ListItem textSize="1em">Aplicativos nativos para desktop ( <Link textColor="#fff" href="http://electron.atom.io/">Electron</Link>) e mobile (<Link textColor="#fff" href="https://facebook.github.io/react-native/">React Native</Link>)</ListItem>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Próximos passos</Heading>
            <List>
              <ListItem textSize="1em"><Link textColor="#fff" href="https://github.com/pazguille/offline-first">Off-line first</Link>, para que os aplicativos possam ser usados sem conexção e mantenham os dados do aparelho sincronizados com o servidor</ListItem>
              <ListItem textSize="1em"><Link textColor="#fff" href="http://www.sitepoint.com/javascript-testing-unit-functional-integration/">Testar</Link> o aplicativo</ListItem>
                <ListItem textSize="1em"><Link textColor="#fff" href="https://webpack.github.io/docs/code-splitting.html">Code-splitting</Link>, que é uma forma inteligente de dividir o aplicativo em pedaços menores de arquivos, para que o usuário baixe apenas o que precisar</ListItem>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Vamos desenvolver?</Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
