import React, { useState, useRef } from 'react';
import { PageHeader } from 'antd';
import { ContentEditable } from 'components';

const Todo = () => {
    const [title, setTitle] = useState('Туду лист');
    const contentEditableRef = useRef();

    const handleChangeTitle = event => {
        const { value } = event.target;
        setTitle(value);
    };

    const handleBlurTitle = event => {
        const value = contentEditableRef.current.innerHTML;
        if (value === '') {
            setTitle('Туду лист');
        }
    };

    return (
        <PageHeader 
            title={
                <ContentEditable 
                    innerRef={contentEditableRef}
                    tagName="h2"
                    html={title}
                    onChange={handleChangeTitle}
                    onBlur={handleBlurTitle}
                />
            } 
        />
    );
};

export default Todo;
