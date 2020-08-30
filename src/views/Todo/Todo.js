import React from 'react';
import { Form, Field } from 'react-final-form';
import { adaptor } from 'components/form/utils';
import Title from './Title';

const Todo = () => {
    return (
        <Form
            initialValues={{
                title: 'Туду лист',
            }}
            onSubmit={() => {}}
        >
            {({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <Field
                        name="title"
                        render={adaptor(Title)}
                    />
                </form>
            )}
        </Form>
    );
};

export default Todo;