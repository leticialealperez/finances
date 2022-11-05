import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import {
  Grid, Typography, IconButton, Card, Toolbar,
  TextField, FormControl, InputLabel, Select,
  CardContent, CardActions, Button, Box, MenuItem, useTheme,
} from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

import { useStyles } from './styles';
import { AppAlert } from '../../components/Alert/Alert';
import { useAppDispatch } from '../../store/modules/hooks';
import { addIncomeIn } from '../../store/modules/income-in/incomeInSlice';
import { addIncomeOut } from '../../store/modules/income-out/incomeOutSlice';

type TypeIncome = 'Entrada' | 'Saída' | '';
type Key = 'description' | 'value' | 'type';

export interface Income {
    uid: string,
    description: string;
    value: string;
    type: TypeIncome;
}

export type Incomes = Income[]

const Register: React.FC = () => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const [type, setType] = useState<TypeIncome>('');
    const [isFormValid, setIsFormValid] = useState(false);

    const dispatch = useAppDispatch();
    // SET => dispatch(intensao) => reducer

    useEffect(() => {
        if(description && value && type){ 
            setIsFormValid(true)  
        }else {
           setIsFormValid(false)
        }

    }, [description, value, type])


    const handleChangeInput = (value: string, key: Key) => {
        switch(key){
            case 'description':
                setDescription(value)
            break;

            case 'value': 
                setValue(value)
            break;

            default:
        }
    };

    const handleChangeTypeIncome = (value: TypeIncome) => {
        setType(value)
    }

    const handleSubmit = () => {
        const income = {
            uid: uuidv4(),
            description: description,
            value: value,
            type: type,
        }

        if(income.type === 'Entrada'){
            dispatch(addIncomeIn(income))
        }

        if(income.type === 'Saída'){
            dispatch(addIncomeOut(income))
        }

        handleClear();
    };

    const handleClear = () => {
        setDescription('');
        setValue('');
        setType('');
    }

    return (
        <Grid item>
            <Toolbar>
                <Link to="/">
                    <IconButton aria-label="back" component="span">
                        <ArrowBack />
                    </IconButton>
                </Link>
                <Typography variant="h6">
                    Voltar
                </Typography>
            </Toolbar>

           <AppAlert type="success" message='Cadastrado com sucesso!' />

            <Grid container spacing={3} alignItems='center' justifyContent='center'>
                <Grid item xs={12}>
                    <Typography variant="h4" align="center">Cadastrar um lançamento</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography gutterBottom sx={classes.titleInfo}>
                                Utilize o formulário abaixo para cadastrar suas saídas e entradas.
                            </Typography>
                            <Box p={1}>
                                <TextField onChange={(ev) => handleChangeInput(ev.target.value, 'description')} value={description} fullWidth label="Descrição" variant="outlined" />
                            </Box>
                            <Box p={1}>
                                <TextField onChange={(ev) => handleChangeInput(ev.target.value, 'value')} value={value} type="number" fullWidth label="R$ valor" variant="outlined" />
                            </Box>
                            <Box p={1}>
                                <FormControl variant="outlined" fullWidth>
                                    <InputLabel id="demo-simple-select-outlined-label">Tipo</InputLabel>
                                    <Select
                                        value={type}
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        onChange={(ev) => handleChangeTypeIncome(ev.target.value as TypeIncome)}
                                        label='Tipo'
                                    >
                                        <MenuItem value='Entrada'>Entrada</MenuItem>
                                        <MenuItem value='Saída'>Saída</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </CardContent>

                        <CardActions sx={classes.actions}>
                            <Box alignSelf="flex-start">
                                <Button variant="outlined" onClick={handleClear} color="secondary">
                                    limpar
                                </Button>
                            </Box>
                            <Box alignSelf="flex-end">
                                <Button variant="contained" onClick={handleSubmit} color="secondary" disabled={!isFormValid}>
                                    cadastrar
                                </Button>
                            </Box>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Register;