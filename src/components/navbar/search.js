import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export function Search() {
   const [state, setState] = useState("");
   const history = useHistory();

   const submitHandler = (e) => {
      e.target.reset();
      e.preventDefault();
      if (state !== "" && state !== null && state !== undefined) {
         history.push("/?q=" + state);
      } else {
         history.push("");
      }
      setState("");
   };

   return (
      <form onSubmit={submitHandler} className="form-inline my-2 my-lg-0 ">
         <input
            className="form-control mr-sm-2 ml-1"
            type="search"
            placeholder="جستجو ..."
            aria-label="Search"
            onChange={(e) => setState(e.target.value)}
         />
         <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
            جستجو
         </button>
      </form>
   );
}
