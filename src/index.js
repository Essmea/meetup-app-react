import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import './index.css';
import App from './App'; //importerar App komponenten
import { FavoritesContextProvider } from './store/favorites-context' //Importerar vår funktion från favoritesContext

/*Render motod på vår ReactDom som vi importerat ovan. </App/> är ett html element, Html skriven i javascript kod kallas för jsx-kod.
Vi vill rendera vår <App></App> komponent in i elementet med id 'root' som vi kan hitta i index.html i public foldern. Vi 'wrappar' vår app komponent med BrowserRouter. 
Vi initierar Router-paketet, gör det 'awear of' vår app-komponent.
Vi wrappar allting i FavoritesContextProvider för att göra det möjligt att använda vår context i alla komponenter i applikationen.*/
ReactDOM.render(
    <FavoritesContextProvider>
        <BrowserRouter> 
            <App />
        </BrowserRouter>
    </FavoritesContextProvider>,
document.getElementById('root')); 
