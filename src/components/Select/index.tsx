import React, { SelectHTMLAttributes}from 'react';
import './styles.css';

interface SelectProps extends SelectHTMLAttributes <HTMLSelectElement>{
    name: string;
    label: string;
    option: Array<{
        value: string;
        label: string;
    }>;
}

const Select: React.FC<SelectProps> = ({label, name, option,...rest}) => {

    return(
        <div className="select-block">
                <label htmlFor={name}>{label}</label>
                <select value="" id={name} {...rest}>
                <option hidden value="">---</option>
                    {option.map(option =>{
                        return <option key={option.value} value={option.value}>{option.label}</option>
                    }
                    )}
                </select>
        </div>
    );
}

export default Select;