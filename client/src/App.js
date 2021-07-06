import "./sass/main.scss";
import Home from "./components/Home.js";
import Navbar from "./components/Navbar.js";
import ShoppingCart from "./components/ShoppingCart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewProducts from "./components/NewProducts";
import NotMatch from "./components/NotMatch";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import BestSellers from "./components/BestSellers";
import AboutUs from "./components/AboutUs";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <div>
                    <Navbar />
                    <ShoppingCart />
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/newProducts">
                            <NewProducts />
                        </Route>
                        <Route exact path="/bestSellers">
                            <BestSellers />
                        </Route>
                        <Route exact path="/aboutUs">
                            <AboutUs />
                        </Route>
                        <Route path="*">
                            <NotMatch />
                        </Route>
                    </Switch>
                </div>
            </Router>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}

export default App;
