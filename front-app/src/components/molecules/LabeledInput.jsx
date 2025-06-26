import Label from '../atoms/InputLabel';
import Input from '../atoms/input';

import React from 'react';

const LabeledInput = ({ label, ...inputProps }) => {
    return (
        <div className='mb-1'>
            <Label>{label}</Label>
            <Input {...inputProps} />
        </div>
    );
}

export default LabeledInput;