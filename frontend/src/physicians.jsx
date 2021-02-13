import React from 'react';

const Physicians = ({ physicians, fetchAppointments }) => {
	const renderPhysicians = Object.values(physicians).map((doctorObj, idx) => {
		return (
			<div key={idx} onClick={() => fetchAppointments(doctorObj.id)}>
				{doctorObj.fname} {doctorObj.lname}
			</div>
		);
	});
	return (
		<>
			<h1>Notable Health</h1>
			<h2>Physicians</h2>
			<div>{renderPhysicians}</div>
			<button>Logout</button>
		</>
	);
};

export default Physicians;
