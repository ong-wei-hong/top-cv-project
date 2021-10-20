import React, { Component } from 'react';

import './App.css';

import { Info } from './components/info';
import { Experience } from './components/Experience'
import { Education } from './components/Education'
import { Extras } from './components/Extras'

import {InfoForm} from './components/infoForm'
import {ExperienceForm} from './components/ExperienceForm'
import {EducationForm} from './components/EducationForm'
import {ExtrasForm} from './components/ExtrasForm'

const ExtrasSection = ({extrasForm, extra, extrasFormChange, extrasChange}) => {
	if(extrasForm) {
		return (
			<div>
				<div className="edit"><i className="far fa-save" onClick={extrasFormChange}></i></div>
				<ExtrasForm extra={extra} extrasChange={extrasChange} />
			</div>
		)
	}else {
		return(
			<div>
				<div className="edit"><i className="fas fa-edit" onClick={extrasFormChange}></i></div>
				<Extras extra={extra} />
			</div>
		)
	}
}

const EducationSection = ({ educationForm, institute, educationFormChange, educationChange }) => {
	if(educationForm) {
		return(
			<div>
				<div className="edit"><i className="far fa-save" onClick={educationFormChange}></i></div>
				<EducationForm institute={institute} educationChange={educationChange} />
			</div>
		)
	}else{
		return(
			<div>
				<div className="edit"><i className="fas fa-edit" onClick={educationFormChange}></i></div>
				<Education institute={institute} />
			</div>
		)
	}
}

const ExperienceSection = ({ experienceForm, experiences, experienceFormChange, experienceChange }) => {
	if(experienceForm) {
		return (
			<div>
				<div className="edit"><i className="far fa-save" onClick={experienceFormChange}></i></div>
				<ExperienceForm experiences={experiences} experienceChange={experienceChange} />
			</div>
		)
	}else{
		return(
			<div>
				<div className="edit"><i className="fas fa-edit" onClick={experienceFormChange}></i></div>
				<Experience experiences={experiences} />
			</div>
		)
	}
}

const InformationSection = ({ infoForm, name, email, number, location, infoFormChange, nameChange, emailChange, numberChange, locationChange }) => {
	if(infoForm) {
		return(
			<div>
				<div className="edit"><i className="far fa-save" onClick={infoFormChange}></i></div>
				<InfoForm
					name={name}
					email={email}
					number={number}
					location={location}
					nameChange={nameChange}
					emailChange={emailChange}
					numberChange={numberChange}
					locationChange={locationChange}
				/>
			</div>
		)
	} else {
		return(
			<div>
				<div className="edit"><i className="fas fa-edit" onClick={infoFormChange}></i></div>
				<Info
					name={name}
					email={email}
					number={number}
					location={location}
				/>
			</div>
		)
	}
}

class App extends Component {
	constructor() {
		super()

		this.state = {
			name: 'Name This',
			email: 'name@email.com',
			number: '+65 12345678',
			location: 'Singapore',
			experiences: [['Experience Name 1', 'Experience Role 1', 'Experience Description 1'], ['Experience Name 2', 'Experience Role 2', 'Experience Description 2'], ['Experience Name 3', 'Experience Role 3', 'Experience Description 3']],
			institute: ['Institute Name', 'Qualification', 'Academic achievements', 'co-curricular achievements', 'notable achievements'],
			extra: ['skill 1, skill 2, skill 3', 'interest 1, interest 2, interest 3'],
			infoForm: false,
			experienceForm: false,
			educationForm: false,
			extrasForm: false
		};

		this.infoFormChange = this.infoFormChange.bind(this);
		this.nameChange = this.nameChange.bind(this);
		this.emailChange = this.emailChange.bind(this);
		this.numberChange = this.numberChange.bind(this);
		this.locationChange = this.locationChange.bind(this);

		this.experienceFormChange = this.experienceFormChange.bind(this);
		this.experienceChange = this.experienceChange.bind(this);

		this.educationFormChange = this.educationFormChange.bind(this)
		this.educationChange = this.educationChange.bind(this)

		this.extrasFormChange = this.extrasFormChange.bind(this)
		this.extrasChange = this.extrasChange.bind(this)
	}

	extrasChange = (e, i) => {
		const changedExtras = this.state.extra
		changedExtras[i] = e.target.value
		this.setState({
			extra: changedExtras
		})
	}

	extrasFormChange = () => {
		this.setState({
			extrasForm: !this.state.extrasForm
		})
	}

	educationChange = (e, i) => {
		const changedInstitute = this.state.institute
		changedInstitute[i] = e.target.value
		this.setState({
			institute: changedInstitute
		})
	}

	educationFormChange = () => {
		this.setState({
			educationForm: !this.state.educationForm
		})
	}

	experienceChange = (e, i, j) => {
		const changedExperiences = this.state.experiences
		changedExperiences[i][j] = e.target.value
		this.setState({
			experiences: changedExperiences
		})
	}

	experienceFormChange = () => {
		this.setState({
			experienceForm: !this.state.experienceForm
		})
	}

	infoFormChange = () => {
		this.setState({
			infoForm: !this.state.infoForm
		})
	}

	nameChange = (e) => {
		this.setState({
			name: e.target.value
		})
	}

	emailChange = (e) => {
		this.setState({
			email: e.target.value
		})
	}

	numberChange = (e) => {
		this.setState({
			number: e.target.value
		})
	}

	locationChange = (e) => {
		this.setState({
			location: e.target.value
		})
	}

  render() {
		return (
			<div className="wrapper">
				<InformationSection
					infoForm={this.state.infoForm}
					name={this.state.name}
					email={this.state.email}
					number={this.state.number}
					location={this.state.location}
					infoFormChange={this.infoFormChange}
					nameChange={this.nameChange}
					emailChange={this.emailChange}
					numberChange={this.numberChange}
					locationChange={this.locationChange}
				/>
				<ExperienceSection
					experienceForm={this.state.experienceForm}
					experiences={this.state.experiences}
					experienceFormChange={this.experienceFormChange}
					experienceChange={this.experienceChange}
				/>
				<EducationSection
				educationForm={this.state.educationForm}
				institute={this.state.institute}
				educationFormChange={this.educationFormChange}
				educationChange={this.educationChange} />
				<ExtrasSection
					extrasForm={this.state.extrasForm}
					extra={this.state.extra}
					extrasFormChange={this.extrasFormChange}
					extrasChange={this.extrasChange} />
			</div>
  );
}
}

export default App;
