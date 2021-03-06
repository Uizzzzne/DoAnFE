import {Component} from "react";


class Header extends Component {
    render() {
        return (
            <header className="main-header navbar">
                <div className="col-search">
                    <form className="searchform">
                        <div className="input-group">
                            <input list="search_terms" type="text" className="form-control" placeholder="Nhập từ tìm kiếm..."/>
                            <button className="btn btn-light bg" type="button"><i
                                className="material-icons md-search"/></button>
                        </div>
                        <datalist id="search_terms">
                            <option value="Products"></option>
                            <option value="New orders"></option>
                            <option value="Apple iphone"></option>
                            <option value="Ahmed Hassan"></option>
                        </datalist>
                    </form>
                </div>
                <div className="col-nav">
                    <button className="btn btn-icon btn-mobile me-auto" data-trigger="#offcanvas_aside"><i
                        className="material-icons md-apps"></i></button>
                    <ul className="nav">
                        {/*<li className="nav-item">*/}
                        {/*    <a className="nav-link btn-icon" href="#">*/}
                        {/*        <i className="material-icons md-notifications animation-shake"></i>*/}
                        {/*        <span className="badge rounded-pill">3</span>*/}
                        {/*    </a>*/}
                        {/*</li>*/}
                        <li className="nav-item">
                            <a className="nav-link btn-icon darkmode" href="#"> <i
                                className="material-icons md-nights_stay"></i> </a>
                        </li>
                        {/*<li className="nav-item">*/}
                        {/*    <a href="#" className="requestfullscreen nav-link btn-icon"><i*/}
                        {/*        className="material-icons md-cast"></i></a>*/}
                        {/*</li>*/}

                        <li className="dropdown nav-item">
                            <a className="dropdown-toggle" data-bs-toggle="dropdown" href="#" id="dropdownAccount"
                               aria-expanded="false"> <img className="img-xs rounded-circle"
                                                           src="/assets/imgs/people/avatar-1.png" alt="User"/></a>
                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownAccount">
                                <a className="dropdown-item" href="#"><i
                                    className="material-icons md-perm_identity"></i>Tài khoản</a>
                                {/*<a className="dropdown-item" href="#"><i className="material-icons md-settings"></i>Account*/}
                                {/*    Settings</a>*/}

                                {/*<a className="dropdown-item" href="#"><i className="material-icons md-help_outline"></i>Help*/}
                                {/*    center</a>*/}
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item text-danger" href="#"><i
                                    className="material-icons md-exit_to_app"></i>Đăng xuất</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </header>
        );
    }


}

export default Header;