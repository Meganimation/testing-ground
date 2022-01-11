import React from 'react'

interface IBabyTestProps {
    name: string;
    desc: string;
    handleCount: () => void;
    count: number;
  }

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



export default BabyTest
