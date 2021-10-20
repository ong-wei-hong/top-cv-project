export const Education = ({institute}) =>
	<div className="section-wrapper">
		<div className="section-description bold">
			<h2>EDUCATION</h2>
		</div>
		<div className="institute-name bold">
			<h3>{institute[0]}</h3>
		</div>
		<div className="qualification italic">
			<p>{institute[1]}</p>
		</div>
		<ul className="education-details">
			<li className="academics">{institute[2]}</li>
			<li className="cocurriculars">{institute[3]}</li>
			<li className="notable">{institute[4]}</li>
		</ul>
	</div>
