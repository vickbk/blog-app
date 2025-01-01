import { FocusString } from '@/script/common/FocusString';
import React, { useState } from 'react';

interface TextareaWithLabelProps {
    id: string;
    label: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    name?: string
}

const TextareaWithLabel: React.FC<TextareaWithLabelProps> = ({ id, label, value = '', onChange, name = FocusString.randomString(5)}) => {
    const [val, setVal] = useState(value);
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (onChange) onChange(e);
        setVal(e.target.value);
    }
    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label">{label}</label>
            <textarea id={id} value={val} onChange={handleChange} className="form-control" name={name} />
        </div>
    );
};

export default TextareaWithLabel;