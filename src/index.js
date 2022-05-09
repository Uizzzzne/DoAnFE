import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import storeConfig from "./service/config/storeConfig";
import {Provider} from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter} from "react-router-dom";


ReactDOM.render(
    <Provider store={storeConfig()}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

/**
 * @param isAdmin boolean
 */
export function loadScript(isAdmin) {
    let sources = null;
    if (isAdmin) {
        sources = [
            "/assets/admin/js/vendors/jquery-3.6.0.min.js",
            "/assets/admin/js/vendors/bootstrap.bundle.min.js",
            "/assets/admin/js/vendors/select2.min.js",
            "/assets/admin/js/vendors/perfect-scrollbar.js",
            "/assets/admin/js/vendors/jquery.fullscreen.min.js",
            "/assets/admin/js/vendors/chart.js",
            "/assets/admin/js/main.js?v=1.1",
            "/assets/admin/js/custom-chart.js"
        ]
    } else {
        sources = [
            "/assets/customer/js/vendor/modernizr-3.6.0.min.js",
            "/assets/customer/js/vendor/jquery-3.6.0.min.js",
            "/assets/customer/js/vendor/jquery-migrate-3.3.0.min.js",
            "/assets/customer/js/vendor/bootstrap.bundle.min.js",
            "/assets/customer/js/plugins/slick.js",
            "/assets/customer/js/plugins/jquery.syotimer.min.js",
            "/assets/customer/js/plugins/waypoints.js",
            "/assets/customer/js/plugins/wow.js",
            "/assets/customer/js/plugins/perfect-scrollbar.js",
            "/assets/customer/js/plugins/magnific-popup.js",
            "/assets/customer/js/plugins/select2.min.js",
            "/assets/customer/js/plugins/counterup.js",
            "/assets/customer/js/plugins/jquery.countdown.min.js",
            "/assets/customer/js/plugins/images-loaded.js",
            "/assets/customer/js/plugins/isotope.js",
            "/assets/customer/js/plugins/scrollup.js",
            "/assets/customer/js/plugins/jquery.vticker-min.js",
            "/assets/customer/js/plugins/jquery.theia.sticky.js",
            "/assets/customer/js/plugins/jquery.elevatezoom.js",
            "/assets/customer/js/main.js?v=4.0",
            "/assets/customer/js/shop.js?v=4.0"
        ];
    }

    sources.forEach((source) => {
        let script = document.createElement("script");
        script.src = source;
        script.async = false;
        // script.onload = () => this.scriptLoaded();
        document.body.appendChild(script);
    })

}

/**
 * @param isAdmin boolean
 */
export function loadCss(isAdmin) {
    let hrefs = null;
    if (isAdmin) {
         hrefs = [
            "/assets/admin/css/main.css?v=1.1"
        ];
    } else {
        hrefs = [
            "/assets/customer/css/plugins/animate.min.css",
            "/assets/customer/css/main.css?v=4.0"
        ];
    }

    hrefs.forEach(href => {
        let link = document.createElement("link");
        link.href = href;
        link.rel = "stylesheet";
        link.type = "text/css";
        document.head.appendChild(link);
    })
}