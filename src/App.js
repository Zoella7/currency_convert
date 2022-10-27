import {Header} from "./Header";
import {CurrencyComponent} from "./CurrencyComponent";
import "./App.css"
import {useEffect, useState} from "react";


const baseURL = 'https://api.exchangerate.host/latest?base=uah'


function App() {

    const [allCurrency, setCurrency] = useState([]);
    const [firstCurrency, setFirstCurrency] = useState();
    const [secondCurrency, setSecondCurrency] = useState();
    const [amount, setAmount] = useState(1);
    const [firstInputAmount, setFirstInputAmount] = useState(true);
    const [exchange, setExchange] = useState();

    let toAmount, fromAmount;

    if (firstInputAmount) {
        fromAmount = amount
        toAmount = amount * exchange
    } else {
        toAmount = amount
        fromAmount = amount / exchange
    }
    const onChangeAmountFrom = (e) => {
        setAmount(e.target.value)
        setFirstInputAmount(true)
    }
    const onChangeAmountTo = (e) => {
        setAmount(e.target.value)
        setFirstInputAmount(false)
    }


    useEffect(() => {
        fetch(baseURL)
            .then(res => res.json())
            .then(data => {
                setCurrency([data.base, ...Object.keys(data.rates)]);
                setFirstCurrency(data.base);
                setSecondCurrency(Object.keys(data.rates)[0]);
                setExchange(data.rates[secondCurrency])
            })
    }, [])


    useEffect(() => {
        fetch(`https://api.exchangerate.host/latest?base=${firstCurrency}&symbols=${secondCurrency}`)
            .then(res => res.json())
            .then(data =>
                setExchange(data.rates[secondCurrency])
            )

    }, [firstCurrency, secondCurrency])


    return (
        <div>

            <h1>Currency convert</h1>


            <Header allcurrency={allCurrency}/>
            <CurrencyComponent
                allCurrency={allCurrency}
                defaultValue={firstCurrency}
                onChangeValue={e => setFirstCurrency(e.target.value)}
                amountValue={fromAmount}
                onChangeAmount={onChangeAmountFrom}
            />
            <div> =</div>
            <CurrencyComponent
                allCurrency={allCurrency}
                defaultValue={secondCurrency}
                onChangeValue={e => setSecondCurrency(e.target.value)}
                amountValue={toAmount}
                onChangeAmount={onChangeAmountTo}
            />
        </div>)


}

export default App;
