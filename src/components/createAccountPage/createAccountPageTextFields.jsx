// import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useBoxCSS } from './boxProps';

const CreateAccountPageTextFields = () => {

	const boxCSS = useBoxCSS();

	const currencies = [
		"ALL", "DZD", "AOA", "ARS", "AMD", "AUD", "EUR", "AZN", "BHD", "BBD", "BYN", "BMD", "BOB", "BAM", "BWP", 
		"BRL", "BGN", "CVE", "KHR", "XAF", "CAD", "KYD", "CLP", "CNY", "COP", "CDF", "CRC", "HRK", "CZK", "DKK", 
		"DOP", "USD", "EGP", "ETB", "FJD", "GEL", "GHS", "GIP", "GTQ", "GBP", "GYD", "HNL", "HKD", "HUF", "ISK", 
		"INR", "IDR", "IQD", "ILS", "JMD", "JPY", "JOD", "KZT", "KES", "KRW", "KWD", "KGS", "LAK", "LBP", "LYD", 
		"CHF", "MOP", "MGA", "MWK", "MYR", "MVR", "MRU", "MUR", "MXN", "MDL", "MNT", "MAD", "MZN", "MMK", "NAD", 
		"NZD", "NIO", "NGN", "MKD", "NOK", "OMR", "PKR", "PAB", "PGK", "PYG", "PEN", "PHP", "PLN", "QAR", "RON", 
		"RUB", "RWF", "XCD", "SAR", "RSD", "SGD", "ZAR", "LKR", "SZL", "SEK", "TWD", "TJS", "TZS", "THB", "TTD", 
		"TND", "TRY", "TMT", "UGX", "UAH", "AED", "UYU", "UZS", "VEF", "VND", "ZMW", "ZWD"
	];

  return (
		<Box
			component="form"
			sx={{
				width: boxCSS.width,
				height: boxCSS.height
				// justifyContent: 
			}}
			noValidate
			autoComplete="off"
		>
			
			<TextField
				sx={{
					marginLeft: 2,
					marginRight: 2,
					marginTop: 3,
					marginBottom: 3,
					width: boxCSS.width	- 30
				}}
				required
				class='textfield1'
				id="outlined-required"
				label="Account Name"
			/>

			<TextField
				required
				id="outlined-required"
				label="Starting Amount"
			/>

			<TextField
				required
				id="outlined-number"
				label="Interest Rate"
				type="number"
			/>

			<Autocomplete
				// sx={}
				disablePortal
				id="combo-box-demo"
				options={currencies}
				// sx={{ width: 300 }}
				renderInput={(params) => <TextField {...params} label="Currency" />}
				/>


			
		</Box>
  );
}

export default CreateAccountPageTextFields;