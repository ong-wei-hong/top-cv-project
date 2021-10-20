export const Info = ({name, email, number, location}) =>
	<div className="section-wrapper">
		<div className="name bold">
			<h1>{name}</h1>
		</div>
		<div className="contact">
			<div className="email contact-details">
				<p>{email}</p>
			</div>
			<i className="fab fa-diaspora"></i>
			<div className="number contact-details">
				<p>{number}</p>
			</div>
			<i className="fab fa-diaspora"></i>
			<div className="location contact-details">
				<p>{location}</p>
			</div>
		</div>
	</div>
