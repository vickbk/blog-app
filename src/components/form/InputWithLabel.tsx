import { FocusString } from '@/script/common/FocusString';
import React, { useState } from 'react';

interface InputWithLabelProps {
    id?: string;
    label: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    name?: string;
    required?: boolean
}

const InputWithLabel: React.FC<InputWithLabelProps> = ({ id = FocusString.randomString(8), label, value = '', onChange, type = 'text', name = FocusString.randomString(5), required = false}) => {
    const [val, setVal] = useState(value);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVal(e.target.value);
        if (onChange) onChange(e);
    },
    checkContent = () => {
        if (val === "") {
            console.log("this field is required");
        }
    }
    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label">{label}{required===true?" *":""}</label>
            <input id={id} type={type} value={val} onChange={handleChange} 
            className="form-control" name={name} onFocus={required === true ? checkContent : void 0}/>
        </div>
    );
};

export default InputWithLabel;