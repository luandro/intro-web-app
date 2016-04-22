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
  jquery: require("../assets/imgs-2/jquery.png"),
  react: require("../assets/imgs-2/react.png"),
  angular: require("../assets/imgs-2/angular.png"),
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
              <ListItem>JS Frameworks</ListItem>
              <ListItem>Conceitos Básicos de React</ListItem>
              <ListItem>Componentes</ListItem>
              <ListItem>Virtual DOM</ListItem>
              <ListItem>Estado</ListItem>
              <ListItem>Eventos</ListItem>
              <ListItem>Arquitetura do aplicativo</ListItem>
              <ListItem>Início do desenvolvimento</ListItem>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" 
            notes="Pelo enorme crescimento da popularidade do Javascript nos últimos anos, o ecosistema de desenvolvimento ficou crowdiado pela imensidão de ferramentas e frameworks. Fica difícil escolher a melhor alternativa para seu projeto. Vamos analisar alguns dos mais populares">
            <Heading size={2} caps fit>JS Frameworks</Heading>
            <Image src={images.jsframeworks.replace("/", "")} height="350"></Image>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="backup">
            <Image src={images.jquery.replace("/", "")} height="80"></Image>
            <Markdown>Lançado em 2006 ele simplificou a forma como Javascript é escrito. Ainda hoje é a biblioteca mais popular em uso. A maior desvantagem é que para aplicativos complexos cada mudança de estado do aplicativo precisa ser descrito explicitamente.
            </Markdown>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="backup">
            <Image src={images.angular.replace("/", "")} height="180"></Image>
            <Markdown>
              Por ser um ***framework*** não uma biblioteca como React e jQuery ele tem uma curva de aprendizado mais elevada e é mais pesado. Usa de *two-way data binding*, que pode ser rápido para prototipar aplicativos, mas rapidamente fica muito difícil de manejar o estado em aplicativos mais complexos.
            </Markdown>
            <Markdown>
              Com o lançamento de ***Angular 2***, ele se parece muito mais com React, usando estrutura de componentes, DOM virtual, etc. Mas é ainda mais pesado e complexo.
            </Markdown>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="backup"
            notes="Pra quem está familiarizado com o conceito de MVC, React é como se fosse a View.">
            <Image src={images.react.replace("/", "")} height="180"></Image>
            <BlockQuote>
              <Quote textSize="1em">Uma biblioteca de Javascript para criar interfaces de usuário</Quote>
              <Cite>Facebook</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary"
            notes="Declarativo: olhando o código da UI fica fácil de entender exatamente como é o estado e como ele pode mudar. Componentes: quebre seu aplicativo em vários pequenos componentes, que podem ser re-ultilizados em várias partes do aplicativo ou até em outros projetos. Dom Virtual: Faz um diff no DOM, re-renderizando apenas as partes que mudaram de acordo com o estado. Fluxo: facilita o modelo mental de como o aplicativo funciona.">
            <Heading caps fit>O que faz dele diferente?</Heading>
            <List>
              <ListItem>Declarativo e usa estrutura de componentes</ListItem>
              <ListItem>DOM Virtual</ListItem>
              <ListItem>Fluxo de dados unilateral</ListItem>
              <ListItem>Ensina a escrever Javascript</ListItem>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps>Quem usa React?</Heading>
            <List>
              <div style={{float: 'left'}}>
                <ListItem>Atlassian</ListItem>
                <ListItem>BBC</ListItem>
                <ListItem>Codecademy</ListItem>
                <ListItem>Dropbox</ListItem>
                <ListItem>EveryDollar</ListItem>
                <ListItem>Facebook</ListItem>
                <ListItem>Flipboard</ListItem>
                <ListItem>GitHub</ListItem>
                <ListItem>Imgur</ListItem>
              </div>  
              <div style={{float: 'right'}}>
                <ListItem>Instagram</ListItem>
                <ListItem>Khan Academy</ListItem>
                <ListItem>Netflix</ListItem>
                <ListItem>PayPal</ListItem>
                <ListItem>Reddit</ListItem>
                <ListItem>Salesforce</ListItem>
                <ListItem>WhatsApp</ListItem>
                <ListItem>Wired</ListItem>
                <ListItem>Yahoo</ListItem>
              </div>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Text textColor="secondary">A ideia fundamental do React é que interfaces podem ser expressadas como funções puras, que com um mesmo input sempre terá o mesmo output.</Text>
            <br />
            <br />
            <BlockQuote>
              <Quote textSize="0.8em" textColor="#fff">
                React pensa em UIs como maquinas de estado. Ao pensar que uma UI pode estar em vários estados e renderizando esses estados, é fácil mante-la consistente.
              </Quote>
              <br />
              <Quote textSize="0.8em" textColor="#fff">
                No React você simplesmente atualiza o estado de um componente, e então renderiza uma nova UI com base nesse novo estado. React se responsabiliza por atualizar o DOM para você do modo mais eficiente possível.
              </Quote>
              <Cite><Link textColor="#fff" href="https://facebook.github.io/react/docs/interactivity-and-dynamic-uis.html#components-are-just-state-machines">Documentação React</Link></Cite>
            </BlockQuote>
          </Slide>
          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/react_concepts")}
            ranges={[
              { loc: [0, 150], title: "Conceitos Básicos" },
              { loc: [0, 1], title: "Transformação" },
              { loc: [1, 7], note: "Função pura que recebe 'name' e retorna uma caixa" },
              { loc: [8, 13], note: "Executanto essa função com meu nome retorna uma caixa com meu nome no rótulo" },
              { loc: [14, 15], title: "Abstração" },
              { loc: [15, 28], note: "Função pura que recebe 'user' e retorna a função CaixaComNome, passando 'name'" },
              { loc: [29, 43], note: "Executando essa função passando meu primeiro e último nome retorna uma caixa com 'Nome Luandro Vieira' no rótulo" },
              { loc: [44, 45], title: "Composição" },
              { loc: [45, 51], note: "Para que os componentes possam ser re-utilizados é necessários que várias abstrações sejam combinadas em uma" },
              { loc: [52, 62], note: "Desse modo qualquer coisa pode ser passada para CaixaChique, e ela passa a ser re-utilizável" },
              { loc: [63, 64], title: "Estado" },
              { loc: [64, 76], note: "Cada componente tem seu próprio estado" },
              { loc: [79, 84], note: "O valor das curtidas, e a função de curtir que incrementa o valor e re-renderiza o componente" },
              { loc: [85, 93], note: "Inicializando o componente" },
          ]}/>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Caixa />
          </Slide>
          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/react_basis")}
            ranges={[
              { loc: [0, 19], title: "Exemplo" },
              { loc: [5, 6], note: "Biblioteca React!" },
              { loc: [6, 7], note: "Biblioteca para conectar React ao DOM" },
              { loc: [11, 17], note: "Exemplo 'Hello World' do React" },
              { loc: [11, 12], note: "Método da biblioteca react-dom que conecta o componente ao DOM. Isso é geralmente feito apenas uma vez no aplicativo" },
              { loc: [12, 13], note: "Método que cria um elemento no DOM" },
              { loc: [13, 14], note: "Elemento que queremos criar: <h1>Hello World</h1>" },
              { loc: [15, 16], note: "Elemento existente no DOM em que montamos nosso componente" },
              { loc: [0, 20], title: "Muito trabalho" },
          ]}/>
          <Slide transition={["zoom", "fade"]} bgColor="backup">
            <Heading>JSX</Heading>
            <Markdown>
              É um pre-processador que possibilita a ultilização da sitaxe de HTML no Javascript. Combinar HTML e JS pode parecer má prática, mas é muito eficiente pois reduz a mudança de contexto entre arquivos `html` e `js`.
              Uma diferença com HTML de verdade é que devemos usar `className` ao invés de `class`, por ser uma palavra reservada no JS. É importante também que todos elementos devem ser fechados />, que nem sempre é o caso com HTML normal.
            </Markdown>
            <br />
            <Markdown>`<button className="like-button">👍</button></Markdown>
          </Slide>
          <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw!../assets/react_basis_jsx")}
          ranges={[
            { loc: [0, 19], title: "Exemplo com JSX" },
            { loc: [7, 8], note: "Babel: transpilador de Javascript" },
            { loc: [13, 14], note: "Essa syntax incomum é o JSX. O Babel faz o pre-processamento, transformando em React.createElement()" },
          ]}/>

          <Slide transition={["zoom", "fade"]} bgColor="backup">
            <Heading caps>DOM Virtual</Heading>
            <Markdown>
              Por que todo esse trabalho so pra criar um elemento simples? Para que o HTML possa ser renderizado de forma otimizada ultilizando o DOM Virtual. Ele existe como uma [biblioteca independente](https://github.com/Matt-Esch/virtual-dom), mas foi popularizado pelo React. Ele recria o DOM toda vez que o estado do aplicativo muda, mas faz isso da mesma forma que o Git faz quando comitamos algo, com um diff, e re-renderiza apenas as partes que mudaram.
            </Markdown>          

          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading size={2} caps fit>Componentes</Heading>
            <BlockQuote>
              <Quote textSize="0.8em" textColor="#fff">
                React component is a highly cohesive building block for UIs loosely coupled with other components." --Pete Hunt 
              </Quote>
            <Cite>Pete Hunt</Cite>
            </BlockQuote>
            <CodePane 
              lang="jsx"
              source={require("raw!../assets/react_basic_component")}
              margin="20px auto"/>
          </Slide>
          <CodeSlide
          transition={[]}
          lang="js"
          textSize="0.8em"
          code={require("raw!../assets/react_basic_component_es6")}
          ranges={[
            { loc: [0, 0], title: "Componente com ES6" },
            { loc: [2, 9], note: "Um componente básico React" },
            { loc: [2, 3], note: "Usamos o método novo de classe do ES6 que estende a função Componente do React" },
            { loc: [3, 8], note: "Essa classe tem um método render que é responsável por retornar o conteúdo do componente" },
            { loc: [5, 6], note: "Propriedades são passadas de pais para filhos, nesse caso message='Hello' " },
            { loc: [11, 12], note: "Esse é um chamado componente puro, a maioria dos componentes num aplicativo serão desse tipo" },
            { loc: [14, 22], note: "Esse componente ira produzir um erro, pois está retornando dois elementos" },
            { loc: [18, 19], note: "Vai produzir um erro pelo uso da palavra reservada 'class'" },
            { loc: [24, 34], note: "Colocamos os dois elementos dentro de um, e mudamos para className" },
          ]}/>
          <Slide>
            <iframe width="100%" height="300" src="//jsfiddle.net/v7dfr0xy/2/embedded/result,js,html/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="#fff">
            <Heading caps fit textColor="secondary">Ciclo de Vida dos Componentes</Heading>
            <List>
              <Appear><ListItem><Markdown>
                ***componentWillMount*** : Disparado uma vez com a renderização inicial. Bom lugar para ligar _listeners_ ou fazer _Ajax_
              </Markdown></ListItem></Appear>
              <Appear><ListItem><Markdown>
                ***componentDidMount*** : Disparado uma vez depois que a renderização é finalizada.
              </Markdown></ListItem></Appear>
              <Appear><ListItem><Markdown>
                ***componentDidUpdate*** : Disparado depois que as atualizações do componente foram feitas no DOM.
              </Markdown></ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="#fff">
            <List>
              <Appear><ListItem><Markdown>
                ***componentWillReceiveProps*** : Disparado quando o componente está recebendo novas propriedades.
              </Markdown></ListItem></Appear>
              <Appear><ListItem><Markdown>
                ***shouldComponentUpdate*** : Disparado antes de renderizar quando novas propriedades ou estado são recebidos. Bom lugar para otimizações de renderização, `return false` caso saiba que a atualização não é necessária. 
              </Markdown></ListItem></Appear>
              <Appear><ListItem><Markdown>
                ***componentWillUnmount*** : Disparado logo antes do componentes ser desmontado do DOM. Bom lugar para desligar _listeners_.
              </Markdown></ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <iframe width="100%" height="300" src="//jsfiddle.net/luandro/fag3gzvs/4/embedded/result,js/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
          </Slide>
           <CodeSlide
            transition={[]}
            lang="js"
            textSize="0.8em"
            code={require("raw!../assets/react_didmount")}
            ranges={[
              { loc: [0, 0], title: "Exemplo com Ajax" },
              { loc: [1, 3], note: "Método construtor chamado assim que a classe é inicializada" },
              { loc: [3, 8], note: "Definimos os estados iniciais do componente" },
              { loc: [9, 10], note: "Método do ciclo de vida, assim que o componente é renderizado no DOM" },
              { loc: [10, 11], note: "Da um valor aleatório de 1 a 85" },
              { loc: [11, 12], note: "Fetch é um método de Ajax que fara parte do JS, ele retorna uma promessa com os dados" },
              { loc: [12, 15], note: "Quando a promessa é resolvida transformamos os dados para o formato JSON" },
              { loc: [30, 35], note: "Usamos o método setState do React para atualizar o estado do aplicativo com o nome do personagem recebido da API" },
              { loc: [15, 17], note: "Cada personagem tem um Array contendo os filmes em que apareceu. Fazemos uma iteração nessa lista usando o método map do JS" },
              { loc: [17, 18], note: "Para cada filme que o personagem apareceu fazemos outro Ajax para obter as informações do filme" },
              { loc: [22, 25], note: "Usamos o método setState do React concatenar o título do filme a lista de filmes do estado" },
              { loc: [26, 29], note: "Um método da API de promessas para capturar erros" },
              { loc: [40, 54], note: "Método renderiza automaticamente nosso componente no DOM de acordo com o estado" },
              { loc: [43, 44], note: "O estado msg do nosso componente." },
              { loc: [44, 45], note: "O estado que recebe o nome do personagem da API" },
              { loc: [46, 49], note: "Fazemos uma iteração no Array do estado de films, criando um item para cada filme que o personagem participou." },
              { loc: [47, 48], note: "Sempre que geramos elementos dinamicamente usando uma iteração devemos dar uma Key para que o React possa identificar cada elemento" },
              { loc: [55, 58], title: "Dúvidas ?" },

            ]}/>

          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Componentes</Heading>
            <Heading caps fit textColor="#000">Burros vs Espertos</Heading>
          </Slide>
         
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading size={2}>Alternativas</Heading>
            <List>
              <ListItem>
                <Text textSize="0.8em"><Link href="https://github.com/trueadm/inferno">InfernoJS</Link>: implementação mais rápida do Virtual DOM, com API do React</Text>
              </ListItem>
              <ListItem>
                <Text textSize="0.8em"><Link href="https://github.com/Lucifier129/react-lite">React-Lite</Link>: API similar a do React mas com apenas 25Kb (vs 136kb)</Text>
              </ListItem>
              <ListItem>
                <Text textSize="0.8em"><Link href="https://github.com/developit/preact">Preact</Link>: com apenas 3Kb, um ecosistema próprio, mas similar ao React</Text>
              </ListItem>
            </List>  
          </Slide>
          
          <Slide transition={["zoom", "fade"]} bgColor="primary">
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
          </Slide>
          
        </Deck>
      </Spectacle>
    );
  }
}
