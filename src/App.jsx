import './App.scss';
import React from 'react';
import { Button, FormControl, MenuItem, Select, InputLabel, Stack, Chip } from '@mui/material';
import {Context as HamdContext} from './Context/HamdContext';
import {Context as IstigforContext} from './Context/IstigforContext';
import {Context as SalovatContext} from './Context/SalovatContext';

function App() {
    const hamdCtx = React.useContext(HamdContext);
    const istCtx = React.useContext(IstigforContext);
    const salCtx = React.useContext(SalovatContext);
    const [select, setSelect ] = React.useState(window.localStorage.getItem('select') || 'hamd')

    React.useEffect(()=>{
        window.localStorage.setItem('select', select);
    }, [select]);
    return (
        <main className='main'>
            <div className="container">
                <div className="main__inner">
                    <Stack direction={'row'} spacing={2} alignItems="center" justifyContent="center">
                        <FormControl sx={{ minWidth: 120 }}>
                            <InputLabel id='demo-select'>Select</InputLabel>
                            <Select labelId='demo-select' label='Select' className='select' value={select} onChange={(evt)=>{
                                setSelect(evt.target.value);
                            }}>
                                <MenuItem value={'istig\'for'}>Istig'for</MenuItem>
                                <MenuItem value='salovat'>Salovat</MenuItem>
                                <MenuItem value='hamd'>Hamd</MenuItem>
                            </Select>
                        </FormControl>

                        <Button variant='contained' onClick={()=>{
                            if (select === 'hamd') {
                                hamdCtx.setCount(hamdCtx.count + 1);
                            } else if (select === "istig'for") {
                                istCtx.setCount(istCtx.count + 1);
                            } else if (select === 'salovat') {
                                salCtx.setCount(salCtx.count + 1);
                            }
                        }}>Count</Button>

                        <Chip label={`Count: ${select === 'hamd' ? hamdCtx.count : select === "istig'for" ? istCtx.count : select === 'salovat' ? salCtx.count : 'No'}`} onDelete={()=>{
                            if (select === 'hamd') {
                                hamdCtx.setCount(0);
                                hamdCtx.setLaps(0);
                            } else if (select === "istig'for") {
                                istCtx.setCount(0);
                                istCtx.setLaps(0);
                            } else if (select === 'salovat') {
                                salCtx.setCount(0);
                                salCtx.setLaps(0);
                            }
                        }}/>

                        <Chip label={`Laps: ${select === 'hamd' ? hamdCtx.laps : select === "istig'for" ? istCtx.laps : select === 'salovat' ? salCtx.laps : 'No'}`} onDelete={()=>{
                            if (select === 'hamd') {
                                hamdCtx.setCount(0);
                                hamdCtx.setLaps(0);
                            } else if (select === "istig'for") {
                                istCtx.setCount(0);
                                istCtx.setLaps(0);
                            } else if (select === 'salovat') {
                                salCtx.setCount(0);
                                salCtx.setLaps(0);
                            }
                        }}/>
                    </Stack>
                </div>
            </div>
        </main>
    );
}

export default App;