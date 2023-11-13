import { useState } from 'react';

const UseBind = (initialValue) => {

    const [value, setValue] = useState(initialValue)

    const onChange = (text) => {
        setValue(text)
    }

    const reset = () => setValue(initialValue)
    return [value, onChange, reset]

}

export default UseBind