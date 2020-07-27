import React, { useState } from "react";

export function CreateComment(props) {
   const [state, setState] = useState({ comment: {}, errors: {} });
   const changeHandlerAuthor = (event) => {
      const formDataAuthor = { [event.target.name]: event.target.value };
      setState({ ...state, comment: { ...state.comment, ...formDataAuthor } });
   };
   const changeHandlerText = (event) => {
      const formDataText = { [event.target.name]: event.target.value };
      setState({ ...state, comment: { ...state.comment, ...formDataText } });
   };
   const formIsValid = () => {
      const errors = {};
      if (!state.comment.author) {
         errors.author = "نام نویسنده کاربر نباید خالی باشد";
      }
      if (!state.comment.text) {
         errors.text = "متن کامنت کاربر نباید خالی باشد";
      }
      setState({ ...state, errors });
      return !(errors.author || errors.text);
   };
   const submitHandler = (event) => {
      event.preventDefault();
      if (formIsValid()) {
         props.onComment(state.comment);
         setState({ comment: {}, errors: {} });
      }
   };
   return (
      <form onSubmit={submitHandler} className="shadow p-5 ">
         <div className="form-group ">
            <label style={styles.text}>نام : </label>
            <input
               value={state.comment.author || ""}
               onChange={changeHandlerAuthor}
               name="author"
               style={styles.text}
               type="text"
               className="form-control"
            />
            <small
               id="emailHelp"
               style={styles.text}
               className="form-text mb-4 text-danger"
            >
               {state.errors.author}
            </small>
         </div>
         <div className="form-group">
            <label style={styles.text}>متن خود را وارد کنید : </label>
            <textarea
               value={state.comment.text || ""}
               onChange={changeHandlerText}
               className="form-control mb-4"
               style={styles.text}
               rows="5"
               name="text"
            />
            <small
               id="emailHelp"
               style={styles.text}
               className="form-text mb-4 text-danger"
            >
               {state.errors.text}
            </small>
         </div>
         <button type="submit" className="btn btn-primary">
            ارسال
         </button>
      </form>
   );
}

const styles = {
   text: {
      color: "#212121",
      fontSize: "19px",
      textAlign: "right",
   },
};
