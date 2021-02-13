import React from 'react';

const Appointments = ({ appointments, currPhysician }) => {
	if (!currPhysician.fname) return null;
	const renderAppointments = Object.values(appointments).map(
		(appointment, idx) => {
			return (
				<tr key={idx}>
					<td>{appointment.number}</td>
					<td>{appointment.name}</td>
					<td>{appointment.time}</td>
					<td>{appointment.kind}</td>
				</tr>
			);
		}
	);

	return (
		<>
			<h1>{`Dr. ${currPhysician.fname} ${currPhysician.lname}`}</h1>
			<h2>{currPhysician.email}</h2>
			<table>
				<tbody>
					<tr>
						<th>#</th>
						<th>Name</th>
						<th>Time</th>
						<th>Kind</th>
					</tr>
					{renderAppointments}
				</tbody>
			</table>
		</>
	);
};

export default Appointments;
