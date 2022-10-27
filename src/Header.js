import React from 'react';
import css from "./Header.module.css"


const Header = ({allcurrency}) => {
    const rates = allcurrency
    console.log(allcurrency);


    return (

        <div>

            <h2>All possible currency :</h2>
            <hr/>
            {rates.map(rate => <div className={css.ratesWrap}>{rate}</div>)}
            <hr/>
        </div>
    );
};

export {Header};