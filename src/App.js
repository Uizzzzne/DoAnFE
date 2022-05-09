import './App.css';
import {Component} from "react";
import {withRouter} from "react-router-dom";
import MainAdmin from "./view/admin/page/MainAdmin";
import MainCustomer from "./view/customer/page/MainCustomer";


class App extends Component {
    render() {
        let {pathname} = this.props.location;
        if (pathname.startsWith("/admin/")) {
            return <MainAdmin/>;
        } else {
            return <MainCustomer/>;
        }
    }
}

export default withRouter(App);