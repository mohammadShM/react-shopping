import React from "react";

export function CommentItem(props) {
    return <div className="row shadow p-3 ">
        <div className="col-10">
            <h3 className="heading mb-4">{props.author}</h3>
            <p style={styles.pText} className="text-body">{props.text}</p>
        </div>
        <div className="col-2 ">
            <img width='100%' className="responsive-img " src="/profile.png" alt={props.author}/>
        </div>
    </div>
}

const styles = {
    pText: {
        textAlign: 'justify',
        textJustify: 'inter-word',
        letterSpacing: '1px',
        fontSize: '18px',
        lineHeight: '1.8',
        textAlignLast: 'right',
    }
};