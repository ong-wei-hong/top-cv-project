export const Experience = ({experiences}) =>
	<div className="section-wrapper">
		<div className="section-description bold">
			<h2>RELEVANT EXPERIENCE</h2>
		</div>
		{experiences.map((experience, i) =>
			<div className="experience" key={'experience' + i}>
				<div className="experience-name bold">
					<h3>{experience[0]}</h3>
				</div>
				<div className="experience-role italic">
					<p>{experience[1]}</p>
				</div>
				<div className="experience-description">
					<p>{experience[2]}</p>
				</div>
			</div>
		)}
	</div>
