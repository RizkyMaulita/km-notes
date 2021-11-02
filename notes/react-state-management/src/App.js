import { HomePage, FavoritePage, MangaPage } from "./pages"
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/favorites" exact component={FavoritePage} />
      <Route path="/mangas" exact component={MangaPage} />
      <Route>
        <div className="container my-4">
          <h1 className="text-center"> 404 Page Not Found </h1>
        </div>
      </Route>
    </Switch>
  );
}

export default App;
