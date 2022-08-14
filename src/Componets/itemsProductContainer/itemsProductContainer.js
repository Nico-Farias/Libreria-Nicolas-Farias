import React from 'react'
import Product from '../ItemsProducts/Products'
import "./style.scss"

export default function ItemsProductContainer({ productsList, Loading }) {
    return (
        <div className='contenedorItemsProduct row'>

            {
                Loading ? <h2>Cargando...</h2> :

                    productsList.map(product =>

                        <div key={product.id} className='col-3'>
                            <Product
                                key={product.id}
                                id={product.id}
                                image={product.image}
                                title={product.title}
                                price={product.price}
                                cantidad={product.cantidad}
                                stock={product.stock}
                                categorias={product.categorias}
                            >

                            </Product >

                        </div>

                    )


            }





        </div>
    )
}
