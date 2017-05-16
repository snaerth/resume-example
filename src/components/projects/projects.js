import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ImageBlurWrapper from '../imageBlurWrapper';
import './projects.css';

class Projects extends Component {
	static propTypes = {
		data: PropTypes.array.isRequired
	};

	renderHobbyProjects(projects) {
		return projects.map((project, i) => {
			const { id, url, image, thumbnail, text, title, titleText } = project;

			return (
				<a
					href={url}
					title={text}
					key={'project-image' + i}
					className="project"
					target="_blank"
				>
					<div className="even">
						<ImageBlurWrapper
							id={id}
							src={'images/' + image}
							thumbnail={'images/' + thumbnail}
							alt={text}
							text={text}
							overlay={true}
							overlayTitle={title}
							overlayText={titleText}
						/>
					</div>
				</a>
			);
		});
	}

	renderSection(sections) {
		return sections.map((section, i) => {
			return (
				<div key={'project-' + i}>
					<h2
						className={classnames(
							'project-header',
							i === 1 ? 'work-header' : ''
						)}
					>
						<span>{section.title}</span>
					</h2>
					<div className="image-blur--container">
						{i === 0 ? this.renderHobbyProjects(section.projects) : null}
						{i === 1
							? <p className="work-text">
									{section.text}
								</p>
							: null}
					</div>
				</div>
			);
		});
	}

	render() {
		const { data } = this.props;

		return (
			<div className="projects-list-container">
				{this.renderSection(data)}
			</div>
		);
	}
}

export default Projects;
