import {useState, useEffect} from 'react';

const Test = () => {
    const [name, setName] = useState ('mario');
    const [count, setCount] = useState (0);

    useEffect(() => {
        console.log('effected...');
        console.log(name);
        console.log(count);
    }, [name])

    return (  
        <div>
            <h2> hola amigo ! </h2>
            <p>count : {count}</p>
            <p>name : {name}</p>
            <button onClick={() => setCount(count+1)}>increase</button> 
            <button onClick={() => setName(name + 'pikic')}>changed</button> 
        </div>
    );
}
 
export default Test;