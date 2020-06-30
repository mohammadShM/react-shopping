import React from "react";

export function Detail() {

    const data = {
        id: 1,
        title: 'ابزار آلات نوین',
        price: '2000 تومان',
        pic: process.env.PUBLIC_URL + '/tools1.jpg',
        desc: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                 از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
                 روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی 
                تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی
                 می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                 جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
                 رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد،
                 در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، 
                و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، 
                و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد .`,
    };

    return <div className="container">
        <div className="row">
            <div className="col-5">
                <img src={data.pic} alt={data.id} width="100%" height="100%"/>
            </div>
            <div className="col-7" style={styles.content}>
                <h1>{data.title}</h1>
                <p>{data.desc}</p>
                <strong style={styles.price}>{data.price}</strong>
            </div>
        </div>
        <div className="mb-5" />
    </div>
}

const styles = {
    price: {
        color: 'green',
        fontSize: '22px',
    },
    content: {
        textAlign: 'right',
        description: 'rtl'
    }
};