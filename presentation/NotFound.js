import React from 'react';
import * as Router from 'react-router';
const RouteLink = Router.Link;
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
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

const images = {
  background: require("../assets/coding.jpg"),
};

preloader(images);

const theme = createTheme({
  primary: "#84B1ED"
});

export default class MainIndex extends React.Component {
	render() {
		return (
			<Spectacle theme={theme}>
		        <Deck transition={["zoom", "slide"]} transitionDuration={500} progress={'none'}>
		          	<Slide transition={["zoom"]} bgColor="primary" bgImage={images.background.replace("/", "")} bgDarken={0.45}>
		            	<Heading size={1} fit caps lineHeight={1} textColor="#FFBC42" style={{textShadow: '2px 2px #000'}}>
		             		Página não encontrada
		            	</Heading>
		            	<Heading size={1} fit caps lineHeight={1} textColor="#fff" style={{textShadow: '2px 2px #000'}}>
		             		Introdução a Criação de Aplicativos para Web
		            	</Heading>
		            	<Heading size={0.5} caps lineHeight={1} textColor="primary" style={{textShadow: '2px 2px #000'}}>
		             		1ª semana
		            	</Heading>
		            	<p><RouteLink style={{color: '#fff'}} to="dia-1">Dia 1 - Ferramentas e introdução a web</RouteLink></p>
		            	<Heading size={0.5} caps lineHeight={1} textColor="primary" style={{textShadow: '2px 2px #000'}}>
		             		2ª semana
		            	</Heading>
		            	<p><RouteLink style={{color: '#fff'}} to="dia-2">Dia 2 - Ecosistema React e Arquitetura de Componentes</RouteLink></p>
		            	<p><RouteLink style={{color: '#fff'}} to="dia-3">Dia 3 - Ferramentas e Desenvolvimento do Front-End</RouteLink></p>
		            	<Heading size={0.5} caps lineHeight={1} textColor="primary" style={{textShadow: '2px 2px #000'}}>
		             		3ª semana em breve
		            	</Heading>
		            	<Link href="https://github.com/luandro/intro-web-app">
			              	<Text bold caps textColor="tertiary">Veja no Github</Text>
			            </Link>
			            <Link href="http://luandro.com">
			              	<Text caps textColor="#FFBC42" textSize="22px">por Luandro</Text>
			            </Link>
		            </Slide>
		        </Deck>    
		    </Spectacle>
		);
	}
}
