import React, { useState } from "react";

const dArray = [
    { name: 'Scissors', value: '✌️' },
    { name: 'Paper', value: '🖐️' },
    { name: 'Rock', value: '👊' }
];

const choice = ['Rock', 'Paper', 'Scissors'];

const Heading = () => {
    const [value, setValue] = useState('');
    const [compvalue, setCompvalue] = useState('');
    const [result, setResult] = useState('');
    const [pcount,setPcount]=useState(0)
    const [ccount,setCcount]=useState(0)

    const check = (userChoice) => {
        const computerChoice = choice[Math.floor(Math.random() * 3)];
        setValue(userChoice);
        setCompvalue(computerChoice);

        let outcome;
        if (userChoice === computerChoice) {
            outcome = "It's a tie!";
    
        } else if (
            (userChoice === 'Rock' && computerChoice === 'Scissors') ||
            (userChoice === 'Scissors' && computerChoice === 'Paper') ||
            (userChoice === 'Paper' && computerChoice === 'Rock')
        ) {
            outcome = 'You win!';
            setPcount(x=>x+1)
        } else {
            outcome = 'You lose!';
            setCcount(y=>y+1)
        }

        setResult(outcome);
    
    };

    return (
        <div id='container'>
            {dArray.map((n, i) => (
                <button onClick={() => check(n.name)} key={i}>
                    {n.value}
                </button>
            ))}
            <h1>You: {value}</h1>
            <h1>Computer: {compvalue}</h1>
            <h2>{result}</h2>
            <div id='last'>
                <h3>Player win count: {pcount}</h3>
                <h3>Computer win count: {ccount}</h3>
            </div>

        </div>
    );
};

const Main = () => {
    return (
        <div>
            <Heading />
        </div>
    );
};

export default Main;
