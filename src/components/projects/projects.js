import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TimelineLite, Elastic } from 'gsap';
import classnames from 'classnames';
import ImageBlurWrapper from '../imageBlurWrapper';
import './projects.css';

class Projects extends Component {
	static propTypes = {
		data: PropTypes.array.isRequired
	};

	constructor(props) {
		super(props);

		this.state = {
			tl: new TimelineLite()
		};
	}

	componentDidMount() {
		setTimeout(() => {
			this.animateComponent();
		}, 500);
	}

	animateComponent() {
		const { tl } = this.state;
		const children = this.refs.container.children;
		let headers = [];
		let images = [];

		for (let i = 0, len = children.length; i < len; i++) {
			headers.push(children[i].children[0]);

			const temp = children[i].children[1].children;

			for (let j = 0, len = temp.length; j < len; j++) {
				images.push(temp[j]);
			}
		}

		tl
			.staggerTo(
				headers,
				1.5,
				{
					y: '0%',
					autoAlpha: 1,
					ease: Elastic.easeOut,
					easeParams: [0.9, 1]
				},
				1
			)
			.staggerTo(
				images,
				1.5,
				{ y: '0%', autoAlpha: 1, ease: Elastic.easeOut, easeParams: [0.9, 1] },
				0.1,
				0.3
			);
	}

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
			const { title, projects, text } = section;
			const titleClass = i === 1 ? 'work-header' : '';

			return (
				<div key={'project-' + i}>
					<h2 className={classnames('project-header', titleClass)}>
						<span>{title}</span>
					</h2>
					<div className="image-blur--container">
						{i === 0 ? this.renderHobbyProjects(projects) : null}
						{i === 1 ? <p className="work-text">{text}</p> : null}
					</div>
				</div>
			);
		});
	}

	render() {
		const { data } = this.props;

		return (
			<div className="projects-list-container" ref="container">
				{this.renderSection(data)}
			</div>
		);
	}
}

export default Projects;
