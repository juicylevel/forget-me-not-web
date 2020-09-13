import React from 'react';
import styled from 'styled-components';
import { useForm, useField } from 'react-final-form-hooks';
import { Box } from '@material-ui/core';
import { FieldAdaptor } from 'components/form';
import Period from './Period';
import Categories from './Categories';

const Wrapper = styled(Box)`
    max-width: 330px;
    padding-top: 9px;
    background-color: #E2E5E6;
`;

const SideBar = () => {
    const initialValues = {
        period: 'TODAY',
        category: 2,
    };

    const onSubmit = () => {};
    const { form, handleSubmit } = useForm({ initialValues, onSubmit });

    const periodFieldProps = useField('period', form);
    const categoryFieldProps = useField('category', form);

    return (
        <form onSubmit={handleSubmit}>
            <Wrapper
                display="flex"
                flexDirection="column"
                component="aside"
            >
                <FieldAdaptor
                    {...periodFieldProps}
                    Component={Period}
                />
                <FieldAdaptor
                    {...categoryFieldProps}
                    Component={Categories}
                />
            </Wrapper>
        </form>
    );
};

export default SideBar;