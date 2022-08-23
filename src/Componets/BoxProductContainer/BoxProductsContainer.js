import React from 'react'
import { useEffect, useState } from 'react';
import { getData, getCategory } from '../../data/Product';
import ItemsProductContainer from '../itemsProductContainer/itemsProductContainer';
import { useParams } from 'react-router-dom'


export default function BoxProductsContainer() {



    const { categoryId } = useParams();

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {


        getData(categoryId)
            .then((product) => setData(product))

            .finally(() => setLoading(false))




    }, [categoryId])





    return (
        <div className='container'>
            <ItemsProductContainer productsList={data} Loading={loading} >

            </ItemsProductContainer>
        </div>
    )
}
