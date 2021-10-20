export const Extras = ({extra}) =>
	<div className="section-wrapper">
		<div className="section-description bold">
			<h2>SKILLS & INTERESTS</h2>
		</div>
		<div className="bold">
			<h3>Skills</h3>
		</div>
		<div className="skills">
			{extra[0]}
		</div>
		<div className="bold">
			<h3>Interests</h3>
		</div>
		<div className="interests">
			{extra[1]}
		</div>
	</div>
