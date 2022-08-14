import { useState, useEffect } from 'react'
import DetailsProducts from '../DetailsProduct/DetailsProducts'

import { useParams } from 'react-router-dom';
import { getDataId } from './../../data/Product';

export default function ItemsDetailContainer() {

    const [product, setProduct] = useState({});
    const { productId } = useParams();

    useEffect(() => {
        getDataId(productId)
            .then(product => {
                setProduct(product)
            })
            .catch(err => {
                console.log(err)
            }, [productId])

    })

    return (
        <div>

            <DetailsProducts product={product} />

        </div>
    )
}
