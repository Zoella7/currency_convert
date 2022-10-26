import React from 'react';
import css from "./App.css"

const CurrencyComponent = ({allCurrency, defaultValue,onChangeValue,amountValue,onChangeAmount}) => {


    return (
        <div className={css.mainWrap}>

            <input  className={css.inputWrap} type="number" value={amountValue} onChange={onChangeAmount}/>
            <select value={defaultValue} onChange={onChangeValue}>
                {allCurrency.map((value,index) => <option key={index} value={value}>{value}</option>)}
            </select>
            
        </div>
    );
};

export {CurrencyComponent};