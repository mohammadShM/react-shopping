import React, { Fragment, useEffect, useState } from "react";
// noinspection ES6CheckImport
import { Link, useParams } from "react-router-dom";
import {
   HELPER_ADDRESS_FOR_IMG,
   productService,
   cartStore,
   addToCart,
} from "../components/product";
import { CommentList, CreateComment } from "../components/comment";
import "./detail.css";
export function DetailPage() {
   // this.props.match.params.id for function component
   const { id } = useParams();
   // setState for function component
   const [data, setData] = useState({});

   // componentDidMount for function component
   useEffect(() => {
      const fetchBusinesses = async () => {
         // axios by promise
         // productService.getProductById(id)
         //     .then(response => setData(response.data));
         // axios by async
         const { data } = await productService.getProductById(id);
         setData(data);
      };
      fetchBusinesses().then();
      // for redux =====
      let unsubscribe = cartStore.subscribe(() => {
         console.log(cartStore.getState());
      });
      // componentWillUnmount =====
      return () => {
         // Anything in here is fired on component unmount.
         unsubscribe();
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);
   if (!data) {
      return <div className="text-center">Loading ...</div>;
   }
   // for post comment to server
   const submitComment = async (comment) => {
      // axios by async
      const response = await productService.addComment(data.id, comment);
      if (response.status === 200) {
         const dataComment = await productService.getComments(data.id);
         setData({ ...data, comments: dataComment.data });
      }
   };

   // for redux =====
   const addToCartHandler = () => {
      cartStore.dispatch(addToCart(data));
   };

   return (
      <Fragment>
         <div className="row card-box-for-me">
            <div className="col-5 ">
               <div className=" card bg-success shadow-lg mt-5">
                  <img
                     src={HELPER_ADDRESS_FOR_IMG + data.pic}
                     alt={data.id}
                     className="card-img zoom-for-me"
                  />
               </div>
            </div>
            <div className="col-7 mt-5" style={styles.content}>
               <h1>{data.title}</h1>
               <p style={styles.pText}>{data.desc}</p>
               <strong style={styles.price}>{data.price}</strong>
               <br />
               <br />
               <button
                  onClick={addToCartHandler}
                  className="btn btn-success btn-lg"
               >
                  اضافه به سبد خرید
               </button>
               <br />
               <br />
               <Link to="/">
                  <span className="btn btn-primary pr-3 pl-3">بازگشت</span>
               </Link>
            </div>
         </div>
         <hr className="mt-5" />
         <div className="row mt-5 mb-5">
            <div className="col-10 mx-auto" style={styles.content}>
               <CommentList comments={data.comments || []} />
               <br />
               <hr />
               <br />
               <CreateComment onComment={submitComment} />
            </div>
         </div>
      </Fragment>
   );
}

const styles = {
   price: {
      color: "green",
      fontSize: "25px",
   },
   content: {
      textAlign: "right",
      description: "rtl",
   },
   img: {
      width: "100%",
      height: "100%",
      backgroundSize: "content",
   },
   pText: {
      textAlign: "justify",
      textJustify: "inter-word",
      letterSpacing: "1px",
      fontSize: "21px",
      lineHeight: "1.8",
      textAlignLast: "right",
   },
};
