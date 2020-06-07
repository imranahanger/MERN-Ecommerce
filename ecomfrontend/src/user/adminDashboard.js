import React from "react";
import Layout from "../core/Layout";
import {isAuthenticated} from "../auth";
import {Link} from "react-router-dom";

const AdminDashboard = () => {
    const {user: {_id, name, email, role}} = isAuthenticated()

    const adminLinks = () => {
        return (
            <div className="card">
                <h3 className="card-header">Admin Links</h3>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link className="nav-link" to="/create/category">create Category</Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to="/create/products">Create products</Link>
                    </li>
                </ul>
            </div>
        )
    }

    const adiminInfo = () => {
        return (
            <div className="card mb-5">
                <h3 className="card-header">User Information</h3>
                <ul className="list-group">
                    <li className="list-group-item">{name}</li>
                    <li className="list-group-item">{email}</li>
                    <li className="list-group-item">{role == 1 ? "ADMIN" : "Registered User"}</li>

                </ul>
            </div>
        )
    }
    return (
        <Layout title="Dashboard"
                description={`G'day ${name}`}
                className="container-fluid"
        >
            <div className="row">
                <div className="col-3">{adminLinks()}</div>
                <div className="col-9">
                    {adiminInfo()}
                </div>
            </div>
        </Layout>
    )
}
export default AdminDashboard
