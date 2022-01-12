import { Route, Switch} from 'react-router-dom'; //Route komponentens jobb är att definiera olika paths. Med switch berättar vi för react att bara en path ska vara aktiv på en gång.

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupsPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout';

/*En komponent måste returnera något som är läsbart i browsern, exempelvis enkel Html kod.
path='/' är vår default path, i detta fallet vår AllMeetupsPage 
Med switch berättar vi för react att bara en av de routes vi har ska vara aktiva. Med exact propen på vår default route ser react till att den fulla pathen matchar vad som sökts istället för att stoppa på vad den börjar med / */
function App() {
  return <Layout>
      <Switch> 
        <Route path='/' exact={true}>
          <AllMeetupsPage />
        </Route> 
        <Route path='/new-meetup'>
          <NewMeetupsPage />
        </Route>
        <Route path='/favorites'>
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>

}

export default App; //export för att göra den tillgänglig utanför denna specifika appen
