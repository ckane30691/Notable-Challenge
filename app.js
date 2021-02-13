const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

const { fetchAppointments, fetchPhysicians } = require('./db/db_util');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/physicians', (req, res) => {
	try {
		const physicians = fetchPhysicians();
		res.json(physicians);
	} catch (err) {
		res.status(400).send('Could not find physicians');
	}
});

app.get('/api/appointments/:physicianId', (req, res) => {
	const physicianId = req.params.physicianId;
	try {
		const appointments = fetchAppointments(physicianId);
		res.json(appointments);
	} catch (err) {
		res.status(400).send('Could not get appointments');
	}
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
