import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./screens/Home";
import { Container } from "react-bootstrap";
import RegisterUserScreen from "./screens/RegisterUserScreen";
import Items from "./screens/Items";
import AddItem from "./screens/AddItem";
import LoginScreen from "./screens/LoginScreen";
import Footer from "./components/Footer";
import ProductListPage from "./screens/ProductListPage";

function App() {
  return (
    <main>
      <Header />
      <Container>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/items" component={Items} />
          <Route path="/additem" component={AddItem} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterUserScreen} />
          <Route path="/products" component={ProductListPage} />
        </Switch>
      </Container>
      <Footer />
    </main>
  );
}

export default App;
