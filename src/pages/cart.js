import React, { useState, useEffect } from "react";
import { Cart } from "../components/cart";
import { cartStore } from "../components/product";

export function CartPage() {
   const [state, setState] = useState({});
   useEffect(() => {
      setState({ products: cartStore.getState() });
      const unsubscribe = cartStore.subscribe(() =>
         setState({ products: cartStore.getState() })
      );
      return () => {
         unsubscribe();
      };
   }, []);
   return <Cart products={state.products} />;
}
