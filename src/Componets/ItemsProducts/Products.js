
import "./style.scss"
import { Link } from 'react-router-dom'






export default function Product({ id, title, price, image, stock }) {



    return (
        <div className="row" >


            <div >

                <div key={id} className="contenedorProduct col-3">
                    <img className="imageP" src={image} alt="imagenproducto"></img>

                    <div className="title">
                        <h2 className="titleP">{title}</h2>
                    </div>

                    <div className="info">
                        <p className="priceP">Precio: $ {price}</p>
                        <div>
                            {
                                stock >= 1 ?
                                    <p className="stockP"> Disponibles {stock} </p> : <p className="SinStock">Sin stock</p>
                            }

                        </div>



                    </div>

                    <div className="botones">
                        <Link to={`/detail/${id}`}>
                            <button className="verMas" >Ver libro</button>
                        </Link>

                    </div>


                </div>
            </div>



        </div>

    )

}

