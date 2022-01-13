import React from 'react'

function BabyTest(props: IBabyTestProps) {

    const { name, desc, handleCount, count } = props;

    return (
        <div>
            <button onClick={handleCount}> The Count is {count}</button>
           {name}
            <p>{desc}</p>
        </div>
    )
}

interface IBabyTestProps {
    name: string;
    desc: string;
    handleCount: () => void;
    count: number;
  }



export default BabyTest
