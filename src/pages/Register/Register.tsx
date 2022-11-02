import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Grid, Typography, IconButton, Card, Toolbar,
  TextField, FormControl, InputLabel, Select,
  CardContent, CardActions, Button, Box, MenuItem, useTheme,
} from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

import { useStyles } from './styles';
import { AppAlert } from '../../components/Alert/Alert';

type Type = 'Entrada' | 'Saída' | '';
type Key = 'description' | 'value';

const Register: React.FC = () => {
    const theme = useTheme();
    const classes = useStyles(theme);

    const [type, setType] = useState<Type>('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const [isFormInvalid, setIsFormInvalid] = useState(true);
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        if(!description || !value || !type) {
            setIsFormInvalid(true)
        } else {
            setIsFormInvalid(false)
        }
    }, [type, description, value])

    const handleChangeSelect = (value: Type) => {
        setType(value);
    };

    const handleChangeInput = (value: string, key: Key) => {
        switch(key){
            case 'description':
                setDescription(value);
            break;

            case 'value':
                setValue(value);
            break;

            default:
            break;
        }
    };

    const handleReset = () => {
        setType('');
        setDescription('');
        setValue('');
    };

    const handleSubmit = () => {
        console.log({
            uid: '1234',
            description,
            value,
            type
        });

        handleReset();
        setShowAlert(true);
    };

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

           <AppAlert type="success" message='Cadastrado com sucesso!' show={showAlert} setShow={setShowAlert}/>

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
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        value={type}
                                        onChange={(ev) => handleChangeSelect(ev.target.value as Type)}
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
                                <Button variant="outlined" onClick={handleReset} color="secondary">
                                    limpar
                                </Button>
                            </Box>
                            <Box alignSelf="flex-end">
                                <Button variant="contained" onClick={handleSubmit} color="secondary" disabled={isFormInvalid}>
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