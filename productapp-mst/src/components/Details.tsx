import { useEffect, useState } from "react"
import Product from "../model/Product"
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Details() {
    let [product, setProduct] = useState<Product>();
    let { id } = useParams(); // Reading Pathparameter
    //componentDidUpdate
    useEffect(() => {
        axios(`https://fakestoreapi.com/products/${id}`).then(response => {
            setProduct(response.data);
        });
    }, [id]);

    return <>
        {
            product && <div>
                <img src={product.image} /> <br />
                Description : {product.description} <br />
            </div>
        }
    </>
}