import React from "react";
import { cartStore, removeFromCart } from "../product";

export function Cart({ products }) {
   if (!products || !products.length) {
      return (
         <div className="text-center" style={{ marginTop: 300, fontSize: 50 }}>
            ! سبد خرید شما خالی است
         </div>
      );
   }

   const removeHandler = (product) => {
      cartStore.dispatch(removeFromCart(product));
   };

   return (
      <table
         className="table"
         style={{
            marginTop: 120,
            boxShadow: "1px 1px 5px rgba(0,0,0,0.5)",
         }}
      >
         <thead className="thead-light">
            <tr>
               <th scope="col">شماره</th>
               <th scope="col">عکس</th>
               <th scope="col">نام</th>
               <th scope="col">قیمت</th>
               <th scope="col">مقدار</th>
               <th scope="col">حذف</th>
            </tr>
         </thead>
         <tbody>
            {products.map((product, index) => (
               <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>
                     <img
                        width="50"
                        height="50"
                        src={product.pic}
                        alt={product.title}
                     />
                  </td>
                  <td>{product.title}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td>
                     <button
                        onClick={() => removeHandler(product)}
                        className="btn btn-danger"
                     >
                        حذف از سبد خرید
                     </button>
                  </td>
               </tr>
            ))}
         </tbody>
      </table>
   );
}
