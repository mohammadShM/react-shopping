import React from "react";
import {Link} from 'react-router-dom';

export function Product(props) {
    const data = props.data;
    return <div className="card mt-5">
        <img src={data.pic} alt={data.id} style={{height: '200px'}} className="card-img-top w-100"/>
        <div className="card-body" style={{direction: 'rtl', textAlign: 'right'}}>
            <h5 className="card-title">{data.title}</h5>
            <p className="text-success" style={{fontSize: 22, fontWeight: 700}}>{data.price} </p>
            <Link to="/detail/{{data.id}}"><span className="btn btn-primary">
                مشاهده بیشتر
            </span></Link>
        </div>
    </div>
}