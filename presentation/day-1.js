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
  clientServer2: require("../assets/imgs/rua.jpg"),
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
          </Slide>
          <Slide transition={["slide"]} bgColor="#000">

            <List style={{color: '#fff'}}>
              <ListItem>Apps</ListItem>
              <ListItem>Como funciona a web?</ListItem>
              <ListItem>IDE</ListItem>
              <ListItem>Git & Github</ListItem>
              <ListItem>NodeJS & NPM</ListItem>
              <ListItem>Dev Tools</ListItem>
              <ListItem>Recursos online</ListItem>
              <ListItem>Idealização do aplicativo</ListItem>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="SPAs (Ajax sem baixar toda a página) tornaram a experiência melhor por não precisar fazer uma viagem de ida e volta toda vez que o usuário faz uma interação. Aplicativos ganharam popularidade com os aparelhos móveis, que possibilitaram o uso offline e menos viagens para o servidor.">
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
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="Com novas tecnologias da web a diferença entre aplicativos nativos e web ficam cada vez menores. Em vez de ter que baixar um aplicativo na loja, basta o usuário acessar uma página da web e salvar  o aplicativo para usar como se fosse nativo.">
            <Text>2016</Text>
            <Image src={images.pokemon.replace("/", "")} height="200"></Image>
            <Link href="https://www.pokedex.org/">
              <Text>www.pokedex.org</Text>
            </Link>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary" notes="">
            <Heading size={2}>Como funciona a web?</Heading>
            <Image src={images.clientServer.replace("/", "")} height='300'></Image>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary" notes="A pessoa encontra o endereço da loja, caminha pela rua até ela, pede os bens que procura e recebe os bens.">
            <Image src={images.clientServer2.replace("/", "")} height='350'></Image>
            <Text>Imagine que a Web é uma rua. De um lado está o <i>Cliente</i>, que é como sua casa. Do outro lado está o <i>Servidor</i> que é como a loja, onde você quer ir fazer compras.</Text>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary" notes="">
            <List>
              <ListItem textSize="1.2em"><b>Conexão com a internet</b>: permite que você envie e receba dados. Como se fosse a rua.</ListItem><br />
              <ListItem textSize="1.2em"><b>TCP/IP</b>: <i>Transmission Control Protocol</i> e <i>Internet Protocol</i> são os protocolos de comunicação que definem como dados são transportados. São o que permitem a locomoção, como seus pés ou um automóvel.</ListItem><br />
              <ListItem textSize="1.2em"><b>DNS</b>: Quando digitamos um endereço o navegador primeiro busca nos <i>Domain Name System Servers</i> para encontrar qual servidor o pedido deve ser mandado. Funciona como uma lista telefônica para encontrar o endereço da loja que procuramos.</ListItem>
            </List>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary" notes="">
            <List>
              <ListItem><b>HTTP</b>: <i>Hypertext Transfer Protocol</i> é um protocolo que define a linguagem que servidor e cliente comunicam um com o outro. É como o idioma que permite que você faça o pedido na loja.</ListItem><br />
              <ListItem><b>Arquivos</b>: uma página ou aplicativo é feita de vários arquivos. <i>HTML, CSS e Javascript</i>, além de vários arquivos multimídia como imagens, videos, etc. Esses são os bens que vamos comprar na loja.</ListItem>
            </List>
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
            <br />
            <br />
            <Link href="http://rogerdudler.github.io/git-guide/index.pt_BR.html">mais informações</Link>
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
          <Slide transition={["fade"]} bgColor="primary" notes="Nodejs revolucionou o desenvolvimento para web permitindo a programação do back-end em Javascript. Posteriormente ferramentas permitiram usar o sistema de módulos no cliente, fazendo do NPM o maior sistema de gerenciamento de módulos de qualquer linguagem.">
            <Image src={images.node.replace("/", "")}></Image>
            <p><Code textSize="0.8em">$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | bash
            </Code></p>
            <p><Code fit="true">$ nvm install 4</Code></p>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={2}>Dev Tools <Image src={images.chrome.replace("/", "")} height="80"></Image></Heading>
            
            <Text textAlign="left">As ferramentas de desenvolvedor são um conjunto de ferramentas de autoria web e debugging integradas aos navegadores. Essas fornecem aos desenvolvedores acesso profundo a informações internas do navegador e aplicações web. Use as DevTools para identificar de forma eficiente problemas de layout, definir pontos de interrupção no JavaScript, e obter insights para otimização de código.</Text>
            <Link href="https://developer.chrome.com/devtools">mais informações</Link>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={2}>Painel de Elementos</Heading>
            <Text textSize="1.2em" textAlign="left">Permite visualizar informações estruturadas sobre a página atual. Em aplicações de hoje, a marcação HTML servido em um carregamento da página inicial não é necessariamente o que você verá na árvore do Document Object Model (DOM). Ter uma representação em tempo real da página pode ser uma ferramenta poderosa para debugging e criação de páginas web.</Text>
            <Text textSize="1.2em" textAlign="left">O painel de elementos pode ser usado para uma variedade de tarefas:</Text>
            <List textSize="1.2em">
              <ListItem>Inspecionar o HTML & CSS de uma página web.</ListItem>
              <ListItem>Testar diferentes layouts.</ListItem>
              <ListItem>Editar CSS em tempo real.</ListItem>
            </List>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={2}>Painel de Recursos</Heading>
            <Text textAlign="left">O painel Recursos permite que você inspecione fontes de dados locais da sua aplicação, incluindo IndexedDB, bancos de dados Web SQL, armazenamento local e sessão, cookies, e os recursos de cache do aplicativo. Você também pode inspecionar rapidamente recursos visuais da sua aplicação, incluindo imagens, fontes e folhas de estilo.</Text>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={2}>Painel de Rede</Heading>
            <Text textAlign="left" textSize="1em">Contém informações sobre cada operação de rede em um aplicativo, incluindo dados detalhados de temporização, solicitação HTTP e cabeçalhos de resposta, cookies, dados WebSocket, e muito mais. O painel de rede ajuda com dúvidas sobre o desempenho da rede de sua aplicação web, como:</Text>
            <List textSize="1em">
              <ListItem>Qual recurso é o mais lento para o primeiro byte?</ListItem>
              <ListItem>Quais recursos levaram mais tempo para carregar (duração)?</ListItem>
              <ListItem>Quem em particular iniciou uma solicitação de rede?</ListItem>
              <ListItem>Quanto tempo foi gasto nas várias fases de rede para um recurso particular?</ListItem>
            </List>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={2}>Exemplo simples</Heading>
            <Text>Página do Github da organização <b>web-vicosa</b> para que cada membro possa colocar seu nome e nome de usuário, usando <Link href="https://www.firebase.com/">Firebase</Link>.</Text>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={2}>Recursos online</Heading>
            <List>
              <ListItem><Link href="http://stackoverflow.com/">Stackoverflow</Link></ListItem>
              <ListItem><Link href="https://github.com/sindresorhus/awesome">Awesome lists</Link></ListItem>
              <ListItem>Reddit (<Link href="https://www.reddit.com/r/javascript">Javascript</Link>, <Link href="https://www.reddit.com/r/webdev">Webdev</Link>, <Link href="https://www.reddit.com/r/node">Node</Link>)</ListItem>
              <ListItem><Link href="http://javascriptweekly.com/">Javascript weekly</Link></ListItem>
              <ListItem><Link href="https://github.com/kamranahmedse/githunt">Githunt</Link></ListItem>
            </List>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={1} fit caps>Idealização do aplicativo</Heading>
            <List>
              <ListItem>Deve ser um SPA (<i>Single Page Application</i>)</ListItem>
              <ListItem>Deve atender uma necessidades específica da UFV ou de Viçosa</ListItem>
            </List>
            <Heading caps>...</Heading>
            <List>
              <ListItem>Qual o objetivo?</ListItem>
              <ListItem>Como é a experiência ou jornada do usuário?</ListItem>
              <ListItem>De onde vai vir o conteúdo?</ListItem>
              <ListItem>Quais as funcionalidades do aplicativo?</ListItem>
            </List>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
