import { useState } from 'react';

const UseBind = (initialValue) => {

    const [value, setValue] = useState(initialValue)

    const onChange = (text) => {
        console.log("aa")
        setValue(text)
        console.log(text)
    }

    const reset = () => setValue(initialValue)

    return [value, onChange, reset]
}

export default UseBind