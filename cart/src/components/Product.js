import React from "react";

export default function Product(props) {
  return (
    <div className="row">
      <div className="col-5">
        <h2>
          {props.product.name}
          <span class="badge text-bg-secondary">Rs {props.product.price}</span>
        </h2>
      </div>
      <div className="col-3">
        <button type="button" class="btn btn-danger">
          -
        </button>
        <button type="button" class="btn btn-warning">
          {props.product.quantity}
        </button>
        <button type="button" class="btn btn-success">
          +
        </button>
      </div>
      <div className="col-4">{props.product.quantity*props.product.price}</div>
    </div>
  );
}
