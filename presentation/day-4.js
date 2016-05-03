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
  npm_graph: require("../assets/imgs/npm.png"),
  php: require("../assets/imgs-4/php.png"),
  python: require("../assets/imgs-4/python.png"),
  ror: require("../assets/imgs-4/ror.png"),
  go: require("../assets/imgs-4/go.png"),
  node_back: require("../assets/imgs-4/node-back.png"),
  v8: require("../assets/imgs-4/v8.png"),
  libuv: require("../assets/imgs-4/libuv.png"),
  npm: require("../assets/imgs-4/npm.png"),
  middlewares: require("../assets/imgs-4/middlewares.png"),
  mongo: require("../assets/imgs-4/mongo.png"),
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
              <ListItem>Servidor HTTP</ListItem>
              <ListItem>Criação de APIs</ListItem>
              <ListItem>Banco de dados</ListItem>
              <ListItem>Recursos</ListItem>
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
          <Slide transition={["slide"]} bgColor="backup">
            <Image src={images.v8.replace("/", "")} height="140"></Image>
            <Image src={images.libuv.replace("/", "")} height="140"></Image>
            <BlockQuote textColor="#fff">
              Node.js is a JavaScript runtime built on Chromes V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.
            </BlockQuote>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Image src={images.npm.replace("/", "")} height="140"></Image>
            <br />
            <Image src={images.npm_graph.replace("/", "")} height="400"></Image>
            <br />
            <Link href="https://npmjs.com">https://npmjs.com</Link>
          </Slide>
          <Slide transition={["slide"]} bgColor="backup">
            <Heading caps fit textColor="#fff">Básicos</Heading>
          </Slide>
          <CodeSlide
            textSize="0.8em"
            transition={[]}
            lang="js"
            code={require("raw!../assets/node_1_fs")}
            ranges={[
              { loc: [0, 150], title: "Node 101" },
              { loc: [0, 1], note: "Importamos o módulo fs(file system) que já vem com o Node, portanto não precisa ser instaldo através do npm. Ele serve para manipulação de arquivos do sistema." },
              { loc: [2, 3], note: "O método readFile lê um arquivo do diretório, aceita um argumento onde passamos como o arquivo deve ser decodificado (utf-8), e finalmente retorna uma chamada contendo o erro e o conteúdo do arquivo " },
              { loc: [3, 6], note: "É sempre importante criar um método onde logamos o erro, caso ele exista" },
              { loc: [7, 8], note: "A função em si não retorna nenhum valor, mas sim sua função de retorno (callback function), que no caso usamos para logar o conteúdo do arquivo" },
              { loc: [0, 0], note: "" },
              { loc: [0, 0], note: "" },
          ]}/>
          <CodeSlide
            textSize="0.8em"
            transition={[]}
            lang="js"
            code={require("raw!../assets/node_2_fs")}
            ranges={[
              { loc: [0, 150], title: "Asincronicidade" },
              { loc: [0, 1], note: "Importamos o módulo" },
              { loc: [2, 3], note: "Fazemos um log antes da nossa função rodar" },
              { loc: [4, 5], note: "Usamos a mesma função do exemplo passado que já é asincrona por natureza. A versão sincrona dela seria fs.readFileSync." },
              { loc: [5, 9], note: "Logamos caso exista um erro" },
              { loc: [10, 11], note: "Logamos o conteúdo da leitura do arquivo" },
              { loc: [13, 14], note: "Criamos outro log depois da função" },
              { loc: [13, 14], title: "Qual a ordem?" },
          ]}/>
          <Slide transition={["slide"]} bgColor="backup">
            <Heading caps fit textColor="#fff">Como isso é possível?</Heading>
            <Text>O Node assim como a linguagem do Javascript tem como alma o "Event Loop", ou loop de eventos. Ele é responsável por agendar as operações sem sincronicidade.</Text>
            <br />
            <Text>Ambos usam um paradigma de programação chamado de <Link href="https://pt.wikipedia.org/wiki/Programa%C3%A7%C3%A3o_orientada_a_eventos">Programação Orientada a Eventos</Link>, onde o fluxo do programa é ditado por eventos externos, como eventos do usuário. Isso quer dizer que o programa responde a eventos. O Node abstrai a complexidade de lidar com múltiplas sub-rotinas usando o Event Loop.</Text>
            <br />
            <Link href="https://www.youtube.com/watch?v=8aGhZQkoFbQ">Aprenda mais sobre o Event Loop</Link>
          </Slide>
          <Slide transition={["slide"]} bgColor="backup">
            <Heading caps fit textColor="#fff">Servidor HTTP</Heading>
          </Slide>
          <CodeSlide
            textSize="0.8em"
            transition={[]}
            lang="js"
            code={require("raw!../assets/node_3_server")}
            ranges={[
              { loc: [0, 150], title: "Servidor HTTP" },
              { loc: [0, 1], note: "Importamos o módulo http do Node, também não precisa ser instalado através do npm." },
              { loc: [1, 2], note: "Criamos uma variável para guardar o número da porta onde nosso servidor irá rodar." },
              { loc: [3, 7], note: "Criamos uma função que é executada toda vez que o servidor recebe um pedido HTTP" },
              { loc: [3, 4], note: "A função aceita dois argumentos, request(pedido) e respose(resposta)." },
              { loc: [4, 5], note: "Logamos a url na qual o pedido está sendo feito." },
              { loc: [5, 6], note: "Enviamos uma respota ao cliente." },
              { loc: [8, 9], note: "Criamos uma variável onde nossa função será executada dentro da função createServer do módulo http." },
              { loc: [10, 11], note: "Usamos o método listen para que nosso servidor escute na porta que indicamos a cima. Esse método tem uma função de retorno." },
              { loc: [11, 14], note: "Usamos a função de retorno para logar um erro caso ele exista." },
              { loc: [15, 16], note: "E logamos para o usuário que o servidor está rodando na porta indicada." },
          ]}/>
          <Slide transition={["slide"]} bgColor="backup">
            <Heading caps fit textColor="#fff">Criação de APIs</Heading>
            <Text>Diferente de linguagens como Ruby que tem frameworks bem definidos como o Rails, o NodeJS tem uma variedade muito grande de módulos voltados cada um para uma funcionalidade ou arquitetura diferente.</Text>
            <List style={{float: 'left'}}>
              <ListItem><Link href="http://expressjs.com">Express</Link></ListItem>
              <ListItem><Link href="http://hapijs.com/">Hapi</Link></ListItem>
              <ListItem><Link href="http://koajs.com/">Koa</Link></ListItem>
              <ListItem><Link href="http://restify.com/">Restify</Link></ListItem>
            </List>
            <List style={{float: 'right'}}>
              <ListItem><Link href="http://restify.com/">Restify</Link></ListItem>
              <ListItem><Link href="http://sailsjs.org/">Sails</Link></ListItem>
              <ListItem><Link href="http://www.nodaljs.com/">Nodal</Link></ListItem>
              <ListItem><Link href="http://feathersjs.com/">Feathers</Link></ListItem>
            </List>
          </Slide>
          <CodeSlide
            textSize="0.8em"
            transition={[]}
            lang="js"
            code={require("raw!../assets/node_4_express")}
            ranges={[
              { loc: [0, 150], title: "Express 101" },
              { loc: [0, 1], note: "Importamos o express, que foi instalado através do npm" },
              { loc: [1, 2], note: "Criamos uma variável onde vamos rodar nosso aplicativo express" },
              { loc: [2, 3], note: "Criamos uma variável para a porta" },
              { loc: [4, 7], note: "Podemos começar a criar as rotas da nossa API." },
              { loc: [4, 5], note: "O aplicativo express aceita os métodos do HTTP que são: GET, PUT, POST, DELETE" },
              { loc: [4, 5], note: "Passamos a rota na qual o cliente vai acessar a API" },
              { loc: [4, 5], note: "E finalmente passamos a função de callback, com o pedido e a resposta" },
              { loc: [5, 6], note: "Usando o método 'send' da resposta, enviamos uma resposta para o cliente" },
              { loc: [8, 15], note: "Ouvimos na porta a cima, e logamos qualquer erro" },
          ]}/>
          <Slide transition={["slide"]} bgColor="backup">
            <Heading caps fit textColor="primary">Middlewares</Heading>
            <br />
            <Image src={images.middlewares.replace("/", "")} height="120"></Image>
          </Slide>
          <CodeSlide
            textSize="0.8em"
            transition={[]}
            lang="js"
            code={require("raw!../assets/node_5_express")}
            ranges={[
              { loc: [0, 150], title: "Express Middlewares" },
              { loc: [4, 8], note: "Essa é a forma que criamos um middleware para o Express, usando app.use" },
              { loc: [4, 5], note: "A função app.use aceita uma função com três parâmetros: request, response, e um callback next" },
              { loc: [5, 6], note: "Esse middleware é responsável apenas por logar o cabeçalho de todo pedido" },
              { loc: [6, 7], note: "Ao chamar next() indicamos que o express deve passar para o próximo middleware ou rota" },
              { loc: [9, 13], note: "Esse é o próximo middleware da fila." },
              { loc: [10, 11], note: "Responsável por dar uma valor aleatório para request.chance. Essa é uma das mais poderosas funcionalidade dos middlewares, poder adicionar dados extras ao pedido." },
              { loc: [14, 19], note: "Finalmente após passar pelos dois middlewares, chegamos ao nosso manipulador de rotas" },
              { loc: [15, 18], note: "Ele apenas envia uma resposta no formato json para o cliente, contendo o valor aleatório gerado pelo middleware" },
          ]}/>
          <CodeSlide
            textSize="0.8em"
            transition={[]}
            lang="js"
            code={require("raw!../assets/node_6_express")}
            ranges={[
              { loc: [0, 150], title: "Lidando com Errors" },
              { loc: [4, 7], note: "Nesse caso, assim que o cliente acessar a rota, a única resposta sera um erro" },
              { loc: [4, 7], note: "Mas precisamos de um jeito que o cliente saiba como lidar com esse erro" },
              { loc: [8, 13], note: "Para isso criamos um middleware, que deve ser posto depois da função de rotas, para lidar com erros" },
              { loc: [10, 11], note: "Toda vez que o pedido se resolve como um erro mandamos logar o erro" },
              { loc: [11, 12], note: "Mandamos uma resposta com o status 500, que indicar erro no servidor, e também uma mensagem de erro" }
          ]}/>
          <Slide transition={["slide"]} bgColor="backup">
            <Heading caps fit textColor="#fff">Banco de Dados</Heading>
          </Slide>
          <CodeSlide
            textSize="0.8em"
            transition={[]}
            lang="js"
            code={require("raw!../assets/node_7_database")}
            ranges={[
              { loc: [0, 150], title: "Salvando dados 101" },
              { loc: [3, 4], note: "Criamos uma variável para guardar nossos dados" },
              { loc: [5, 13], note: "Criamos uma rota /users para receber um POST" },
              { loc: [6, 7], note: "A variável user irá receber os parâmetros de query do pedido do cliente" },
              { loc: [7, 11], note: "Inserimos os valores da query na variável users" },
              { loc: [11, 12], note: "Mandamos uma resposta para o cliente que a operação teve sucesso" },
              { loc: [13, 16], note: "Usamos a mesma rota /users, porém para receber o método GET" },
              { loc: [14, 15], note: "Ela envia ao usuário em formato json a lista de usuários salvos na lista" },
          ]}/>
          <CodeSlide
            textSize="0.8em"
            transition={[]}
            lang="js"
            code={require("raw!../assets/node_8_database")}
            ranges={[
              { loc: [0, 150], title: "Salvando em arquivo" },
              { loc: [1, 2], note: "Vamos usar o módulo fs para criar um arquivo de usuários" },
              { loc: [7, 13], note: "Ao invés de salvar em uma variável, salvamos em um arquivo users.txt" },
              { loc: [7, 8], note: "Usamos o método appendFile para adicionar ao arquivo" },
              { loc: [8, 9], note: "Selecionamos o arquivo users.txt" },
              { loc: [9, 10], note: "Transformamos os valores do query em json para salva-los" },
              { loc: [11, 12], note: "Finalmente na função de callback enviamos uma resposta de sucesso ao cliente" },
              { loc: [14, 19], note: "Na rota para o método GET, lemos o arquivo e enviamos o resultado para o usuário" },
          ]}/>
          <Slide transition={["slide"]} bgColor="backup">
            <Image src={images.mongo.replace("/", "")} height="140"></Image>
            <br />
            <Text>MongoDB is an open-source document database that provides high performance, high availability, and automatic scaling. MongoDB obviates the need for an Object Relational Mapping (ORM) to facilitate development.</Text>
            <br />
            <Text>Normalmente se usa a biblioteca <Link href="http://mongoosejs.com/">Mongoose</Link> para facilitar a criação com MongoDB</Text>
            <br />
            <Link href="https://www.mongodb.org/">Página oficial</Link>
          </Slide>
          <CodeSlide
            textSize="0.8em"
            transition={[]}
            lang="js"
            code={require("raw!../assets/node_9_request")}
            ranges={[
              { loc: [0, 150], title: "Usando Request" },
              { loc: [2, 3], note: "Importamos o módulo request, que foi instaldo com npm" },
              { loc: [3, 4], note: "Importamos o módulo cheerio, que funciona como um jQuery para o Back-End" },
              { loc: [5, 6], note: "Definimos qual a url que vamos pegar informações" },
              { loc: [7, 8], note: "Criamos nossa rota /cafe para o método GET" },
              { loc: [8, 9], note: "Usamos a biblioteca request para coletar as informações da url, que nós da a resposta na função de callback" },
              { loc: [9, 11], note: "Caso não tenha erro, carregamos as informações de html da página coletada na biblioteca cheerio" },
              { loc: [11, 12], note: "Usamos exatamente como jQuery para buscar elementos na página com o ID refeicoesRU, e pegamos seu atributo 'quantidademax' e guardamos na variável daysToFetch" },
              { loc: [12, 13], note: "Criamos uma variável para guardar nossos dados" },
              { loc: [13, 14], note: "Fazemos um loop de acordo com quantos dias tem no cardápio" },
              { loc: [14, 17], note: "Em cada um desses dias pegamos as informações da data e do cardápio do café da manhã" },
              { loc: [17, 21], note: "Para as informações de cada dia inserimos na nossa variável de dados" },
              { loc: [23, 24], note: "Finalmente enviamos para o cliente a lista contendo as informações em formato json" },
          ]}/>
          <Slide transition={["slide"]} bgColor="backup">
            <Heading caps fit textColor="#fff">Recursos</Heading>
            <List>
              <ListItem><Link href="https://blog.risingstack.com/">Blog RisingStack</Link></ListItem>
              <ListItem><Link href="http://stackoverflow.com/questions/2353818/how-do-i-get-started-with-node-js">How do I get started with NodeJs (Stackoverflow)</Link></ListItem>
            </List>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
