import { useState } form 'react';

export default function Counter() {
    const [count, setCount] = useState(0);
    function incremant() {
        setCount(count + 1);
    }
    function decrement() {
        setCount(count - 1);
    }

    return (
        <div>
        </div>
    )
}