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
  gmail: require("../assets/imgs/gmail.png"),
  android: require("../assets/imgs/android.png"),
  apple: require("../assets/imgs/apple.png"),
  instagram: require("../assets/imgs/instagram.png"),
  whatsapp: require("../assets/imgs/whatsapp.png"),
  facebook: require("../assets/imgs/facebook.png"),
  pokemon: require("../assets/imgs/pokemon.png"),
  atomLogo: require("../assets/imgs/atom-logo.png"),
  node: require("../assets/imgs/nodejs.png"),
  javascript: require("../assets/imgs/javascript.jpg"),
  npm: require("../assets/imgs/npm.png"),
  fullstack: require("../assets/imgs/jsfullstack.jpg"),
  front: require("../assets/imgs/jsfront.jpg"),
  back: require("../assets/imgs/jsback.png"),
  jsgithub: require("../assets/imgs/jsgithub.jpg"),
  git: require("../assets/imgs/git.png"),
  chrome: require("../assets/imgs/chrome.png"),
  github: require("../assets/imgs/github.png"),
  clientServer: require("../assets/imgs/Client-server-model.png"),
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
              <ListItem>Como funciona a web?</ListItem>
              <ListItem>IDE</ListItem>
              <ListItem>Git & Github</ListItem>
              <ListItem>NodeJS & NPM</ListItem>
              <ListItem>Dev Tools</ListItem>
              <ListItem>Recursos online</ListItem>
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
          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={2}>Como funciona a web?</Heading>
            <Text></Text>
            <Image src={images.clientServer.replace("/", "")} height='100'></Image>
            <Text></Text>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading size={2}>IDE</Heading>
            <Heading size={1} fit caps>Integrated development environment</Heading>
            <Text>Disponibiliza várias facilidades para desenvolvedores como linting, debugging, hightlighting</Text>
            <Text textColor="#D4DFE6">Vim, Sublime Text, Atom, Brackets...</Text>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Image src={images.atomLogo.replace("/", "")}></Image>
            <p><Code fit>$ sudo add-apt-repository ppa:webupd8team/atom</Code></p>
            <p><Code fit>$ sudo apt-get update</Code></p>
            <p><Code fit>$ sudo apt-get install atom</Code></p>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Image src={images.git.replace("/", "")} height="80"></Image>
            <Heading size={1} fit caps>sistema de gerenciamento de código fonte</Heading>
            <Text>O controle de versão é um sistema que registra as mudanças feitas em um arquivo ou um conjunto de arquivos ao longo do tempo de forma que você possa recuperar versões específicas.</Text>
            <Code>$ sudo apt-get install git-all</Code>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Image src={images.github.replace("/", "")} height="120"></Image>
            <Heading size={1} caps>Github</Heading>
            <Text>GitHub é um Serviço de Web Hosting Compartilhado para projetos que usam o controle de versionamento Git. Este site possui funcionalidades de uma rede social como feeds, followers, wiki e um gráfico que mostra como os desenvolvedores trabalham as versões de seus repositórios.</Text>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={1} caps>Javascript</Heading>
            <Image src={images.jsgithub.replace("/", "")} height="500"></Image>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Image src={images.npm.replace("/", "")} height="500"></Image>
            <p><Link href="http://www.modulecounts.com">*</Link></p>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Image src={images.javascript.replace("/", "")} height="500"></Image>
            <p><Link href="http://stackoverflow.com/research/developer-survey-2016#developer-profile-experience">*</Link></p>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Image src={images.fullstack.replace("/", "")} height="500"></Image>
            <p><Link href="http://stackoverflow.com/research/developer-survey-2016#developer-profile-experience">*</Link></p>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Image src={images.front.replace("/", "")} height="500"></Image>
            <p><Link href="http://stackoverflow.com/research/developer-survey-2016#developer-profile-experience">*</Link></p>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Image src={images.back.replace("/", "")} height="500"></Image>
            <p><Link href="http://stackoverflow.com/research/developer-survey-2016#developer-profile-experience">*</Link></p>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Image src={images.node.replace("/", "")}></Image>
            <p><Code fit>$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | bash
            </Code></p>
            <p><Code fit="true">$ nvm install 4</Code></p>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={2}>Dev Tools</Heading>
            <Image src={images.chrome.replace("/", "")} height="80"></Image>
            <Text>As ferramentas de desenvolvedor são um conjunto de ferramentas de autoria web e debugging integradas aos navegadores. Essas fornecem aos desenvolvedores acesso profundo a informações internas do navegador e aplicações web. Use as DevTools para identificar de forma eficiente problemas de layout, definir pontos de interrupção no JavaScript, e obter insights para otimização de código.</Text>
            <Link href="https://developer.chrome.com/devtools">mais informações</Link>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={2}>Painel de Elementos</Heading>
            <Text>Permite visualizar informações estruturadas sobre a página atual. Em aplicações de hoje, a marcação HTML servido em um carregamento da página inicial não é necessariamente o que você verá na árvore do Document Object Model (DOM). Ter uma representação em tempo real da página pode ser uma ferramenta poderosa para debugging e criação de páginas web.</Text>
            <Text>Você pode usar o painel Elementos para uma variedade de tarefas:</Text>
            <List>
              <ListItem>Inspecionar o HTML & CSS de uma página web.</ListItem>
              <ListItem>Testar diferentes layouts.</ListItem>
              <ListItem>Editar CSS em tempo real.</ListItem>
            </List>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={2}>Painel de Recursos</Heading>
            <Text>O painel Recursos permite que você inspecione fontes de dados locais da sua aplicação, incluindo IndexedDB, bancos de dados Web SQL, armazenamento local e sessão, cookies, e os recursos de cache do aplicativo. Você também pode inspecionar rapidamente recursos visuais da sua aplicação, incluindo imagens, fontes e folhas de estilo.</Text>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={2}>Painel de Rede</Heading>
            <Text>Contém informações sobre cada operação de rede em um aplicativo, incluindo dados detalhados de temporização, solicitação HTTP e cabeçalhos de resposta, cookies, dados WebSocket, e muito mais. O painel de rede ajuda com dúvidas sobre o desempenho da rede de sua aplicação web, como:</Text>
            <List>
              <ListItem>Que recurso tem o tempo mais lento para primeiro byte?</ListItem>
              <ListItem>Que recursos levou mais tempo para carregar (duração)?</ListItem>
              <ListItem>Quem iniciou uma solicitação de rede particular?</ListItem>
              <ListItem>Quanto tempo foi gasto nas várias fases de rede para um recurso particular?</ListItem>
            </List>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
