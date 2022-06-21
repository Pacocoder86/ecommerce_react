import axios from "axios";
import { useEffect, useState } from 'react';
import "./EcomScreen.css";


export const EcomScreen = () => {

    const [producto, setproductos] = useState([])

    const getProductos = async () => {
        const res = await axios.get('https://ecomerce-master.herokuapp.com/api/v1/item/')
        console.log('api', res.data);
        setproductos(res.data)
    }

    useEffect(() => {
        getProductos();
    }, [])



    return (

        <div className='App App-header'>
            {
                producto.map((producto) => (
                    <div className="parent">
                        <ul >
                            <li key={producto._id}>
                                {`Nombre: ${producto.product_name} `}
                            </li>
                            <li>
                                {`Precio: $ ${producto.price} `}
                            </li>
                            <li className="imagen">
                                <img src={producto.image} alt={producto.product_name} />
                            </li>
                        </ul>
                    </div>
                ))
            }
        </div>
    )
}

