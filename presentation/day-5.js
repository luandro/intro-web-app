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
  github: require("../assets/imgs/github.png"),
  heroku: require("../assets/imgs-5/heroku.png"),
  digitalocean: require("../assets/imgs-5/digitalocean.png"),
  dokku: require("../assets/imgs-5/dokku.png"),
  aws: require("../assets/imgs-5/aws.png"),
  microservices: require("../assets/imgs-5/microservices.png"),
  serverless: require("../assets/imgs-5/serverless.png"),
  lambda: require("../assets/imgs-5/lambda.png"),
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
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps textColor="secondary">Distribuição na nuvem</Heading>
            <List textColor="#fff">
              <ListItem>Github</ListItem>
              <ListItem>Heroku</ListItem>
              <ListItem>Digital Ocean</ListItem>
              <ListItem>AWS</ListItem>
              <ListItem>Micro-Services & Serverless</ListItem>
            </List>
          </Slide>
          <Slide transition={["zoom"]} bgColor="#fff">
            <Link href="https://pages.github.com/"><Image src={images.github.replace("/", "")} height="200"></Image></Link>
            <Text>Usando o Github Pages basta criar um repositório com o seu nome de usuário ou o nome de uma organização, mais '.githhub.io', e automaticamente uma página será hospedada com o conteúdo do repositório. Para respositórios com outros nomes, também pode ser usado o método manual criando um branch <Link href="https://help.github.com/articles/creating-project-pages-manually/">gh-pages</Link>.</Text>
            <Link href="https://ufv-js.github.io">https://ufv-js.github.io</Link>
          </Slide>
          <Slide transition={["zoom"]} bgColor="#fff">
            <Link href="http://heroku.com"><Image src={images.heroku.replace("/", "")} height="200"></Image></Link>
            <Text>Serviço de platafomra como serviço (PaaS), que tem a forma mais fácil de colocar um projeto fullstack no ar.</Text>
            <Text>Para começar crie uma conta no <Link href="https://signup.heroku.com/">Heroku</Link> e baixe o <Link href="https://toolbelt.heroku.com/">Heroku Toolbelt</Link>, ferramente da linha de comando para trabalhar com a plataforma.</Text>
          </Slide>
          <Slide transition={["zoom"]} bgColor="#fff">
            <List textColor="primary">
              <ListItem textSize="0.9em">Faça um <Code textSize="0.9em">heroku login</Code> e coloque seu e-mail e senha</ListItem>
              <ListItem textSize="0.9em">Use <Code textSize="0.9em">heroku create nome_do_projeto</Code> para o Heroku automaticamente criar um novo aplicativo com o endereço "https://nome_do_projeto.herokuapp.com"</ListItem>
              <ListItem textSize="0.9em">Tenha certeza que todos arquivos para o aplicativo funcionar esteja sendo colocado no respositório, cuidado para que o <Code textSize="0.9em">.gitignore</Code> não esteja ignorando algo essencial</ListItem>
              <ListItem textSize="0.9em">O Heroku reconhece que o projeto usa NodeJS, e faz um <Code textSize="0.9em">npm install</Code> automaticamente em cada deploy</ListItem>
              <ListItem textSize="0.9em">Normalmente o Heroku tenta rodar o projeto usando o <Code textSize="0.9em">npm start</Code>, mas caso queira usar outro comando crie um <Link href="https://devcenter.heroku.com/articles/procfile">Procfile</Link>, arquivo de configuração do Heroku, que pode ser tão simples quando <Code textSize="0.9em">web: npm run production</Code>, para que o Heroku rode nosso aplicativo usando esse comando</ListItem>
            </List>
          </Slide>
          <Slide transition={["zoom"]} bgColor="#fff">
              <Text textSize="0.9em">Caso o projeto precise rodar alguma ferramenta como Webpack, Browserify, Gulp ou Grunt, crie um script <Code textSize="0.9em">postinstall</Code> no <Code textSize="0.9em">package.json</Code>, que ela será executado pelo Heroku logo após ele rodar o <Code textSize="0.9em">npm install</Code>. Um exemplo simples:</Text>
              <CodePane
                lang="js"
                source={require("raw!../assets/script_postinstall")}
                margin="20px auto"/>
              <Text textSize="0.9em">Essas ferramenas precisam de módulos que provavelmente foram instalados usando o <Code textSize="0.9em">-D</Code>. O Heroku normalmente não instala as devDependencies, mas podemos usar o comando <Code textSize="0.9em">heroku config:set NPM_CONFIG_PRODUCTION=false</Code>, para ignorar esse comportamento.</Text>
          </Slide>
          <Slide transition={["zoom"]} bgColor="#fff">
            <Text textSize="0.9em">Finalmente, todo aplicativo tem um arquivo de configuração com dados sensíveis como chaves de acesso e senhas. Usando o <Code textSize="0.9em">heroku config:set</Code> podemos setar qualquer número de variáveis que podem ser acessadas no aplicativo usando <Code textSize="0.9em">process.env.VAR</Code>. Então por examplo se setarmos <Code textSize="0.9em">heroku config:set CHAVE=47j284019 OUTRA_CHAVE=ru98U2839o</Code> essas variáveis seram colocadas no lugar de <Code textSize="0.9em">process.env.CHAVE</Code> e <Code textSize="0.9em">process.env.OUTRA_CHAVE</Code></Text>
          </Slide>
          <Slide transition={["zoom"]} bgColor="#fff">
            <Text>Agora toda vez que der um <Code>git push heroku master</Code>, que seu aplicativo será colocado no Heroku. Também podemos conectar a plataforma ao <Link href="https://devcenter.heroku.com/articles/github-integration">Github</Link>, para que todo commit novo a um repositório do Github seja automaticamente enviado ao Heroku.</Text>
            <Text>O Heroku tem um limite de 5 aplicativos grátis por usuário. Nessa versão grátis os aplicativos entram em hibernação após um tempo, o que impossibilita o uso deles em produção real.</Text>
          </Slide>
          <Slide transition={["zoom"]} bgColor="#fff">
            <Link href="https://m.do.co/c/544f3f63da88"><Image src={images.digitalocean.replace("/", "")} height="100"></Image></Link>
            <Text>O <Link href="https://m.do.co/c/544f3f63da88">Digital Ocean</Link> é uma infraestrutura de hospedagem na nuvem. Algumas vantagens são o preço em conta (US$5 por uma máquina virtual privada), armanezamento em discos <Link href="https://pt.wikipedia.org/wiki/SSD">SSD</Link>, e <Link href="https://www.digitalocean.com/features/one-click-apps/">muitas opções de aplicativos</Link> que podem ser pre-instalados na máquina.</Text>
          </Slide>
          <Slide transition={["zoom"]} bgColor="#fff">
            <Link href="http://dokku.viewdocs.io/dokku/"><Image src={images.dokku.replace("/", "")} height="150"></Image></Link>
            <Text>Uma opção que trás as facilidades do Heroku, porém usando a infraestrutura do DigitalOcean que é mais barata é o <Link href="http://dokku.viewdocs.io/dokku/">Dokku</Link>. Essa ferramenta trás várias opções de <Link href="https://github.com/dokku/dokku/blob/master/docs/plugins.md">plugins </Link> para ligar o aplicativo a banco de dados e outras ferramentas.</Text>
          </Slide>
          <Slide transition={["zoom"]} bgColor="#fff">
            <Link href="https://aws.amazon.com/free/"><Image src={images.aws.replace("/", "")} height="140"></Image></Link>
            <Text>O <Link href="https://aws.amazon.com/">Amazon Web Services</Link> é a maior infraestrutura de dados do planeta e possui ferramentas para praticamente qualquer necessidade de hospedagem na nuvem. O primeiro ano de uso é grátis, e apartir de então é cobrado pelo uso. É a única dessas empresas que possui servidores no Brasil.</Text>
            <Text>Para criar uma máquina virtual é usado o serviço <Link href="https://aws.amazon.com/ec2/">EC2</Link>, porém seus custos podem ser muito mais elevados que do DigitalOcean, e seu uso é um pouco mais complicado.</Text>
          </Slide>
          <Slide transition={["zoom"]} bgColor="#fff">
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              Micro-Services
            </Heading>
            <Text>Essa é uma arquitetura de infraestrutura usada pela maioria das grandes companias hoje. Ao contrário do modelo monolítico, onde todos os serviços estão rodando juntos em uma única estância de uma máquina virtual, esse modelo usa vários processos independentes que se comunicam. Dessa forma é possível criar uma infraestrutura onde as APIs podem ser criadas independentes de linguagem e não possuem um ponto central de falha.</Text>
          </Slide>
          <Slide transition={["zoom"]} bgColor="#fff">
            <Image src={images.microservices.replace("/", "")} height="500"></Image>
          </Slide>
          <Slide transition={["zoom"]} bgColor="#fff">
            <Heading size={1} caps lineHeight={1} textColor="orange">
              serverless
            </Heading>
            <Image src={images.lambda.replace("/", "")} height="140"></Image>
          </Slide>
          <Slide transition={["zoom"]} bgColor="#fff">
            <Text>Em 2014 a Amazon Web Services lançou um serviço inovador chamado de <Link href="https://aws.amazon.com/lambda/">AWS Lambda</Link> que oferece uma nova forma de distrubuir código de serviços na nuvem. Em vez de enviar todo o código do aplicativo de uma só vez, com o Lambda enviamos cada funcionalidade de forma separada para seu próprio container.</Text>
            <br />
            <Text>Com esse serviço você paga apenas se seu serviço for executada, e um <Link href="https://aws.amazon.com/lambda/pricing/">valor muito pequeno</Link>. Portanto sem cobranças mensais fixas e sem cobranças por serviços subutilizados. Cada função escala automaticamente então não existe a necessidade de se preocupar em administrar ou escalar servidores.</Text>
          </Slide>
          <Slide transition={["zoom"]} bgColor="#fff">
            <Image src={images.serverless.replace("/", "")} height="600"></Image>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} caps fit lineHeight={1} textColor="secondary">
              FIM...
            </Heading>
            <Heading size={1} caps lineHeight={1} textColor="#fff">
              luandro@gmail
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
