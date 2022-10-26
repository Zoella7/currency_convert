import React from 'react';
import css from "./Header.module.css"


const Header = ({allcurrency}) => {
const rates = allcurrency
console.log(allcurrency);


    return (
        <div className={css.mainWrap}>
            <h1>Currency convert</h1>
            <h3>All possible currency :</h3>
            {rates.map(rate=><div className={css.ratesWrap}>{rate}</div>)}
        </div>
    );
};

export {Header};