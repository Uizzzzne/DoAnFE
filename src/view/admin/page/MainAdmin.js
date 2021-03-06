import MenuSidebar from "../layout/menu/MenuSidebar";
import Header from "../layout/header/Header";
import Footer from "../layout/footer/Footer";
import {Route, Switch, withRouter} from "react-router-dom";
import {routes} from "./routes";
import {ToastContainer} from "react-toastify";
import {loadCss, loadScript} from "../../../index";
import {Component} from "react";

class MainAdmin extends Component {

    renderPages = () => {
        return routes.map((route, index) => {
            return (
                <Route key={index}
                       path={route.url}
                       exact={route.isExact}
                       component={route.component}
                />
            );
        })
    }

    render() {
        loadCss(true);
        loadScript(true);
        return (
            <>
                <ToastContainer/>
                <div className="screen-overlay"/>
                <MenuSidebar/>
                <main className="main-wrap">
                    <Header/>
                    <section className="content-main">
                        <Switch>
                            {this.renderPages()}
                        </Switch>
                    </section>
                    <Footer/>
                </main>
            </>
        );
    }
}

export default withRouter(MainAdmin);
