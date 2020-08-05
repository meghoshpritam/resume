import { useEffect, useState } from 'preact/hooks';
import Main from './components/Main';
import Skills from './components/Skills';
import './style.scss';
import Section from './components/Section';
import Footer from './components/Footer';
import Educations from './components/Educations';
import Languages from './components/Languages';
import { skillsSortOptions, sortedSkills } from './data';

export default () => {
	const defaultSkillSelected = 1;
	const [skills, setSkills] = useState(sortedSkills(defaultSkillSelected));

	const sortSkillsHandler = (idx) => {
		setSkills(sortedSkills(idx));
	};

	useEffect(() => {
		document.title = 'Pritam Ghosh | @meghoshpritam | resume';
	}, []);

	return (
		<div id="App">
			<link
				href="https://cdn.materialdesignicons.com/5.3.45/css/materialdesignicons.min.css"
				rel="stylesheet"
			/>
			<Main />
			<div class="contain-main">
				<Section
					id="skills"
					heading="Skills"
					sortOptions={skillsSortOptions}
					handleOptionSelection={sortSkillsHandler}
					select={defaultSkillSelected}
				>
					<Skills skills={skills} />
				</Section>
				<Section id="educations" heading="Educations">
					<Educations />
				</Section>
				<Section id="languages" heading="Languages">
					<Languages />
				</Section>
			</div>
			<Footer />
		</div>
	);
};
