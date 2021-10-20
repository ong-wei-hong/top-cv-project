export const ExperienceForm = ({experiences, experienceChange}) =>
	<div className="section-wrapper">
		<div className="section-description bold">
			<h2>RELEVANT EXPERIENCE</h2>
		</div>
		{experiences.map((experience, i) =>
			<div className="experience" key={'experience' + i}>
				<div className="experience-name">
					<input type="text" value={experience[0]} className="bold" onChange={(e) => experienceChange(e, i, 0)}/>
				</div>
				<div className="experience-role">
					<input type="text" className="italic" value={experience[1]} onChange={(e) => experienceChange(e, i, 1)}/>
				</div>
				<div className="experience-description">
					<input type="text" value={experience[2]} onChange={(e) => experienceChange(e, i, 2)}/>
				</div>
			</div>
		)}
	</div>
