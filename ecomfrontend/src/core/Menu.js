import React,{Fragment} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {signout, isAuthenticated, authenticate} from "../auth";


const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return {color: "#ff9900"}
    } else {
        return {color: "#ffffff"}
    }
}
const Menu = ({history}) => {

    return (
        <div>
            <ul className="nav nav-tabs bg-dark">
                <li className="nav-item">
                    <Link className="nav-link" to="/" style={isActive(history,"/")}
                    >Home
                    </Link>
                </li>
                {isAuthenticated()&&isAuthenticated().user.role===0&&(<li className="nav-item">
                    <Link className="nav-link" to="/user/dashboard" style={isActive(history,"/Dashboard")}
                    >Dashboard
                    </Link>
                </li>)}
                {isAuthenticated()&&isAuthenticated().user.role===1&&(<li className="nav-item">
                    <Link className="nav-link" to="/admin/dashboard" style={isActive(history,"/Dashboard")}
                    >Dashboard
                    </Link>
                </li>)}

                {!isAuthenticated()&&<Fragment>
                    <li className="nav-item">
                        <Link className="nav-link" to="/SignUp" style={isActive(history,"/SignUp")}
                        >SignUp
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/SignIn" style={isActive(history,"/SignIn")}
                        >SignIn
                        </Link>
                    </li>
                </Fragment>}
                {isAuthenticated()&&<Fragment>
                    <li className="nav-item">
                    <span
                        className="nav-link"
                        style={{cursor: 'pointer', color: '#ffffff'}}
                        onClick={() =>
                            signout(() => {
                                history.push("/")
                            })
                        }
                    > signOut
                    </span>
                    </li>
                </Fragment>}

            </ul>
        </div>
    )

}

export default withRouter(Menu)
