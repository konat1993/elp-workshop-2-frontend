import React from 'react'
import { FormControl, FormHelperText, InputBase, Paper } from '@mui/material'
import { CustomInputPropTypes } from '../types/inputTypes'
import { customInputSx } from '../sxStyles/customInputSx'

const CustomInput: React.FC<CustomInputPropTypes> = ({ id, type, registerProps, placeholder, error }) => {
    return (
        <FormControl error={!!error} sx={customInputSx.formContainer.inputWrapper}>
            <Paper
                sx={customInputSx.formContainer.paperWrapper(error)}>
                <InputBase
                    id={id}
                    type={type}
                    rows={8}
                    placeholder={placeholder}
                    {...registerProps}
                    sx={customInputSx.formContainer.input}
                />
            </Paper>
            <FormHelperText sx={{
                fontFamily: 'Raleway',
                fontSize: "10px",
                zIndex: "9",
                margin: "-15px auto 0",
            }}>{error ? error.message : ''}</FormHelperText>
        </FormControl>
    )
}

export default CustomInput