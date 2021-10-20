export const ExtrasForm = ({extra, extrasChange}) =>
	<div className="section-wrapper">
		<div className="section-description bold">
			<h2>SKILLS & INTERESTS</h2>
		</div>
		<div className="bold">
			<h3>Skills</h3>
		</div>
		<div className="skills">
			<input type="text" value={extra[0]} onChange={e => extrasChange(e, 0)} />
		</div>
		<div className="bold">
			<h3>Interests</h3>
		</div>
		<div className="interests">
		<input type="text" value={extra[1]} onChange={e => extrasChange(e, 1)} />
		</div>
	</div>
