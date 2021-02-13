const { physicians, appointments } = require('./db');

const fetchPhysicians = () => {
	return physicians;
};

const fetchAppointments = (physicianId) => {
	return appointments[physicianId];
};

module.exports = { fetchAppointments, fetchPhysicians };
