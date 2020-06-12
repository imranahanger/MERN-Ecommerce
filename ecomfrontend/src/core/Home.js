import React, {useEffect,useState}from "react";
import Layout from "./Layout";
import
{
    API
} from '../config'
import {getProducts} from "./apiCore";
import Card from "./Card";

const Home = () => {
    const [productBySell, setProductBySell] = useState([])
    const [productByArrival, setProductByArrival] = useState([])
    const [error, setError] = useState([])
    const loadProductsBYSell = () => {
        getProducts('sold').then(data => {
            if (data.error) {
                setError(data.error)
            } else {
                setProductBySell(data)
            }
        })
    }

    const loadProductsBYArrival = () => {
        getProducts('createdAt').then(data => {
            if (data.error) {
                setError(data.error)
            } else {
                setProductByArrival(data)
            }
        })
    }
    useEffect(() => {
        loadProductsBYArrival()
        loadProductsBYSell()
    }, [])
    return (
        <Layout title="Home Page" description="Node React Ecom Application" className="container-fluid">

            <h2 className="mb-4">New Arrivals</h2>
            <div className="row">
                {productByArrival.map((product, i) => (
                    <Card key={i} product={product}/>
                ))}
            </div>
            <h2 className="mb-4">best Sellers</h2>
            <div className="row">
                {productBySell.map((product, i) => (
                    <Card key={i} product={product}/>
                ))}
            </div>

        </Layout>
    )
}

export default Home
