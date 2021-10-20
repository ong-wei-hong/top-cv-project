export const InfoForm = ({ name, email, number, location, nameChange, emailChange, locationChange, numberChange }) =>
	<div className="section-wrapper">
		<div className="name bold">
			<h1><input type="text" className="name-input bold" value={name} onChange={nameChange} /></h1>
		</div>
		<div className="contact">
			<div className="email contact-details">
				<p><input type="text" value={email} onChange={emailChange} /></p>
			</div>
			<i className="fab fa-diaspora"></i>
			<div className="number contact-details">
				<p><input type="text" value={number} onChange={numberChange} /></p>
			</div>
			<i className="fab fa-diaspora"></i>
			<div className="location contact-details">
				<p><input type="text" value={location} onChange={locationChange} /></p>
			</div>
		</div>
	</div>
