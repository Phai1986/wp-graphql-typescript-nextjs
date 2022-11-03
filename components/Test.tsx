import { useEffect, useState } from "react";

type Props = {};

export default function Test({ contents }: any) {

    const [count, setCount] = useState(0)
    useEffect(()=>{
        if(count<=0) setCount(0)
    },[count])

    return (
        <div style={{ textAlign: "center", margin: "50px 0" }}>

            <p>{`Count : ${count} ${count == 0 ? '== 0' : '> 0'}`}</p>

            <input type="text" onChange={(event) => {setCount(event.target.value)}} value={count} />
            <button onClick={() => { setCount(count + 1) }}>add</button>
            <button onClick={() => { setCount(count - 1) }}>remove</button>

            <ul>
                {contents.pages.map((content: any, i: any) => (
                    <li style={{ display: 'inline-block', margin: '0 5px' }}>{content.node.title}</li>
                ))}
            </ul>
        </div>
    )
}
