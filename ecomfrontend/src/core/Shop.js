import React, {useEffect,useState}from "react";
import Layout from "./Layout";
import
{
    API
} from '../config'
import {getProducts} from "./apiCore";
import Card from "./Card";
import {getCategories} from './apiCore'
import Checkbox from "./Checkbox";
const Shop = () => {

    const [categories,setCategories] = useState([])
    const [error,setError] = useState([])

    const init = () =>{
        getCategories().then(data=>{
            if(data.error){
                setError(data.error)
            }else{
                setCategories(data)
            }
        })
    }

    useEffect(()=>{
        init()
    },[])
    return (
        <Layout title="Shop Page" description="Search and Find Books of your choice" className="container-fluid">

            <div className="row">
                <div className="col-4">
                    <h4>Filter by Category</h4>
                    <Checkbox categories={categories}/>
                </div>
                <div className="col-8">
                    Left Side
                </div>
            </div>

        </Layout>
    )
}
 export default Shop
