export const EducationForm = ({institute, educationChange}) =>
	<div className="section-wrapper">
		<div className="section-description bold">
			<h2>EDUCATION</h2>
		</div>
		<div className="institute-name">
			<input type="text" className="bold" value={institute[0]} onChange={(e) => educationChange(e, 0)} />
		</div>
		<div className="qualification">
			<input type="text" value={institute[1]} className="italic" onChange={(e) => educationChange(e, 1)} />
		</div>
		<ul className="education-details">
			<li className="academics">
				<input type="text" value={institute[2]} onChange={(e) => educationChange(e, 2)} />
			</li>
			<li className="cocurriculars">
				<input type="text" value={institute[3]} onChange={(e) => educationChange(e, 3)} />
			</li>
			<li className="notable">
				<input type="text" value={institute[4]} onChange={(e) => educationChange(e, 4)} />
			</li>
		</ul>
	</div>
