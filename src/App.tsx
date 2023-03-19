import {createTheme, ThemeProvider} from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';

import {DatePicker, LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';

const noop = () => {
};


export default function App() {
    return (
        <ThemeProvider theme={createTheme()}>
            <CssBaseline/>
            <LocalizationProvider dateAdapter={AdapterDateFns} locale={{}}>
                <DatePicker
                    key='field-id'
                    disableFuture
                    openTo="year"
                    format="dd/MM/yyyy"
                    views={['year', 'month', 'day']}
                    value={new Date()}
                    onChange={noop}
                    className="identity-form-item"
                />
            </LocalizationProvider>
        </ThemeProvider>
    );
}
