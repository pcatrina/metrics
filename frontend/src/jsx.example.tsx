import {createElement as e, useState} from "react";

function App() {
    const [count, setCount] = useState(0)

    return e('div', {className: 'container'}, [
        e('h1', {className: 'cont1', key: 1}, `Count = ${count}`),
        e("button", {
            className: 'btn',
            key: 2,
            onClick: () => setCount(count + 1)
        }, "Click me!")
    ])
}
