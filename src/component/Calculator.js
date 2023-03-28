
import React, { useState } from 'react'
import './Calculator.css'

const Calculator = () => {
    const [display, setDisplay] = useState('');
    const [operation, setOperation] = useState('')

    const handleClick = (value) => {
        setDisplay(display + "" + value);
        console.log("value", value)
    }
    const handleReset = () => {
        setDisplay(0)
    }
    const handleOperation = (value) => {
        setOperation(value)
        setDisplay(display + "" + value);
    }

    const handleTotal = () => {
        const total = display
            .split(operation)
            .map(Number)
            .reduce((acc, cur) => {
                console.log('acc', acc);
                console.log('cur', cur);
                switch (operation) {
                    case '+':
                        return acc + cur;
                    case '-':
                        return acc - cur;
                    case '*':
                        return acc * cur;
                    case '/':
                        return acc / cur;
                    case '%':
                        return acc % cur;
                    default:
                        return 0
                }
            });
        setDisplay(total);
    }

    return (
        <div>
            <body>
                <div class="container">
                    <div id="clear">{display}</div>
                    <div class="box">
                        <div class="btn" onClick={handleReset}>AC</div>
                        <div class="btn" onClick={() => handleOperation('+/-')}>+/-</div>
                        <div class="btn" onClick={() => handleOperation('%')}>%</div>
                        <div class="btn" id="equal" onClick={() => handleOperation('/')}>÷</div>
                        <div class="btn" onClick={() => handleClick(7)}>7</div>
                        <div class="btn" onClick={() => handleClick(8)}>8</div>
                        <div class="btn" onClick={() => handleClick(9)}>9</div>
                        <div class="btn" id="equal" onClick={() => handleOperation('*')}>x</div>
                        <div class="btn" onClick={() => handleClick(4)}>4</div>
                        <div class="btn" onClick={() => handleClick(5)}>5</div>
                        <div class="btn" onClick={() => handleClick(6)}>6</div>
                        <div class="btn" id="equal" onClick={() => handleOperation('-')} >-</div>
                        <div class="btn" onClick={() => handleClick(1)}>1</div>
                        <div class="btn" onClick={() => handleClick(2)}>2</div>
                        <div class="btn" onClick={() => handleClick(3)}>3</div>
                        <div class="btn" id="equal" onClick={() => handleOperation('+')}>+</div>
                        <div class="btn" id="span-two" onClick={() => handleClick(0)}>0</div>
                        <div class="btn" onClick={() => handleOperation('.')}>.</div>
                        <div class="btn" id="equal" onClick={handleTotal}>=</div>
                    </div>
                </div>
            </body>
        </div>
    )
}

export default Calculator