import { useState } from 'react';
import QRCode from 'react-qr-code';
import './App.css'

function QrCodeApp() {
	const [value, setValue] = useState('qrcode value');
	const [bgColor, setbgColor] = useState('#fff');
	const [fgColor, setfgColor] = useState('#000');
	const [size, setSize] = useState(256);

	return (
		<div className="App">
			<div className="Container">
				<div className='Controls'>
					<h1>QrCode Generator</h1>
					<input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Value .."/>
					<input type="text" value={size} onChange={(e) => setSize(parseInt(e.target.value === '' ? 0 : e.target.value, 10))} placeholder="Size"/>
					<div className="color-inputs">
						<label htmlFor="">BGcolor</label>
						<input type="color" value={bgColor} onChange={(e) => setbgColor(e.target.value)} placeholder="BgColor"/>
						<label htmlFor="">FGcolor</label>
						<input type="color" value={fgColor} onChange={(e) => setfgColor(e.target.value)} placeholder="FgColor"/>
					</div>
				</div>
				<div className='Display'>
					{value && (<div className="QRCode">
						<QRCode title={value} value={value} bgColor={bgColor} fgColor={fgColor} size={size === '' ? 0 : size} />
					</div>)}
				</div>
			</div>
		</div>
	);
}
export default QrCodeApp;