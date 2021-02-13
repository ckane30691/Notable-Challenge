import './App.css';
import React, { useState, useEffect } from 'react';
import Physicians from './components/physicians.jsx';
import Appointments from './components/appointments.jsx';
import axios from 'axios';

function App() {
	const [physicians, setPhysicians] = useState([]);
	const [appointments, setAppointments] = useState([]);
	const [currPhysician, setCurrPhysician] = useState({});

	useEffect(() => {
		const fetchPhysicians = async () => {
			let res = await axios.get('/api/physicians');
			setPhysicians(res.data);
		};
		if (!physicians.length) {
			fetchPhysicians();
		}
	}, []);

	const fetchAppointments = async (id) => {
		let res = await axios.get(`/api/appointments/${id}`);
		setAppointments(res.data);
		setCurrPhysician(physicians[id]);
	};

	return (
		<div className="App">
			<Physicians
				physicians={physicians}
				fetchAppointments={fetchAppointments}
			/>
			<Appointments appointments={appointments} currPhysician={currPhysician} />
		</div>
	);
}

export default App;
