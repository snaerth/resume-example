import React, { Component } from 'react';
import { TimelineLite, Power2 } from 'gsap';
import WaveSvg from '../waveSvg';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter, Link } from 'react-router-dom';
import classnames from 'classnames';
import ProcessBarsList from '../processBarsList';
import Projects from '../projects';
import Button from '../button';
import Evenodd from '../evenodd';
import * as actionCreators from '../../common/actions';
import { withinViewport } from '../../common/utils';
import './resume.css';

class Resume extends Component {
	constructor(props) {
		super(props);
		this.back = this.back.bind(this);
		this.removeHiddenClass = this.removeHiddenClass.bind(this);

		const { processbars } = this.props.translations;
		this.state = {
			tl: new TimelineLite(),
			processbarVisible: processbars.map(() => false),
			sectionsVisible: [false, false],
			projectsVisible: false,
			imagesVisible: [false, false, false]
		};
	}

	componentDidMount() {
		this.initElementInViewportChecker();
        const { back } = this.refs;
        const tl = new TimelineLite();
        tl.to(back, 1, { x: '0%', opacity: 1, ease: Power2.easeOut }, 0.2);
        console.log(this.refs);
		// const { tl } = this.state;
		// const { title, back, rows0 } = this.refs;
		// const rows = rows0.children;

		// tl
		// 	.set(title, { rotationX: -45 })
		// 	.to(back, 1, { x: '0%', opacity: 1, ease: Power2.easeOut }, 0.2)
		// 	.to(
		// 		title,
		// 		1.5,
		// 		{
		// 			y: '0%',
		// 			opacity: 1,
		// 			transformOrigin: '0 50%',
		// 			rotationX: 0,
		// 			ease: Power2.easeOut  
		// 		},
		// 		0.8
		// 	);

		// Animate texts in section

		//this.animateSections(rows, 3, tl);
	}

	componentWillUnmount() {
		withinViewport(true);
	}



	initElementInViewportChecker() {
		let cnt = 0;
		const maxCount = document.querySelectorAll('.onscroll-reveal').length;

		withinViewport(null, 'onscroll-reveal', 'inViewport', (isVisible, el) => {
			if (isVisible && !el.isAnimated) {
				const { imagesVisible, processbarVisible } = this.state;
				if (el.classList.contains('processbars')) {
					this.changeStateVisibility(
						el,
						processbarVisible,
						'processbarVisible',
						'processbar'
					);
				}

				if (el.classList.contains('images-container')) {
					this.changeStateVisibility(
						el,
						imagesVisible,
						'imagesVisible',
						'images-container'
					);
				}

				if (el.classList.contains('projects-wrapper')) {
					el.isAnimated = true;

					this.setState((prevState, props) => {
						return { projectsVisible: true };
					});
				}

				cnt++;

				if (cnt === maxCount) {
					withinViewport(true);
				}
			}
		});
	}

	changeStateVisibility(el, statePropVal, statePropName, className) {
		el.isAnimated = true;
		let newArr = [...statePropVal];
		let newStateProp = {};

		for (let i = 0, len = statePropVal.length; i < len; i++) {
			if (el.classList.contains(className + i) && !newArr[i]) {
				newArr[i] = true;
			}
		}

		newStateProp[statePropName] = newArr;
		this.setState(() => newStateProp);
	}

	/**
   * Animates section title and text
   */
	animateSections(rows, indexMax, tl) {
		tl = tl ? tl : new TimelineLite();
		const len = indexMax || rows.length;

		for (let i = 0; i < len; i++) {
			const cols = rows[i].children;
			for (let j = 0, len = cols.length; j < len; j++) {
				const delayBetween = 0.4 + (i + 1) / 10 + (j + i + 1) / 10;
				tl.to(
					cols[j],
					1.5,
					{ y: '0%', opacity: 1, ease: Power2.easeOut },
					delayBetween
				);
			}
		}

		tl.play();
	}

	back(ev) {
		ev.preventDefault();
		this.state.tl.timeScale(4).reverse();
		this.props.actions.revealAnimationBackward();
		setTimeout(this.props.history.push, 1500, '/');
	}

	renderSection(section, index, last) {
		const { more } = this.props.translations;
		const rows = section.rows ? this.renderRows(section.rows, index) : null;
		const colImages = this.renderColImages(section.images, index);

		return (
			<div className={'resume-section section-' + index} key={index}>
				<div>
					<h1
						className={index === 0 ? 'name relative' : 'name visible relative'}
					>
						<span ref={index === 0 ? 'title' : ''}>{section.title}</span>
					</h1>
					{rows
						? <div ref={'rows' + index} className="resume-section--row">
								{rows}
								{rows.length > 3
									? <div className="text-center">
											<button
												ref={'morebutton' + index}
												className="more"
												onClick={e => this.removeHiddenClass(e, index, rows)}
											>
												{more}
											</button>
										</div>
									: null}
							</div>
						: null}
					{section.text
						? <div className="resume-section--row">
								<div className="resume-row">
									<p className="max-1000 text-section">{section.text}</p>
								</div>
							</div>
						: null}
					{colImages ? colImages : null}
				</div>
				<WaveSvg />
			</div>
		);
	}

	renderColImages(images, index) {
		let left = [];
		let right = [];

		for (let i = 0, len = images.length; i < len; i++) {
			if (i % 2 === 0) {
				left.push(images[i]);
			} else {
				right.push(images[i]);
			}
		}

		return (
			<div
				className={classnames(
					'onscroll-reveal',
					'images-container',
					'images-container' + index
				)}
			>
				<Evenodd
					left={left}
					right={right}
					type={index % 2 !== 0 ? 'odd' : 'even'}
					visible={this.state.imagesVisible[index]}
				/>
			</div>
		);
	}

	renderRows(rows, index) {
		return rows.map((row, i) => {
			const hidden = !this.state.sectionsVisible[index] && i > 2
				? 'hidden'
				: '';

			return (
				<div className={classnames('resume-row', hidden)} key={'row-' + i}>
					<div className="resume-left">
						<h2>{row.title}</h2>
						<h2>{row.secondTitle}</h2>
					</div>
					<div className="resume-right">
						<p>{row.content}</p>
					</div>
				</div>
			);
		});
	}

	/**
	 * Removes hidden class from row and starts animation on section texts
	 */
	removeHiddenClass(e, index, rows) {
		e.preventDefault();
		const newArr = [...this.state.sectionsVisible];
		newArr[index] = true;
		let newRows = [];
		rows = this.refs['rows' + index].children;

		for (let i = 3; i < rows.length; i++) {
			const row = rows[i];

			if (row.className.indexOf('hidden') > 1) {
				newRows.push(rows[i]);
			}
		}

		const button = this.refs['morebutton' + index];
		button.classList.add('fadeOut');

		setTimeout(() => {
			button.classList.add('hidden');
			this.setState((prevState, props) => {
				return { sectionsVisible: newArr };
			});
			this.animateSections(newRows);
		}, 250);
	}

	renderProcessbarsList(processbars, processbarVisible) {
		return (
			<div className="resume-section">
				<div>
					<h1 className="name visible relative">
						<span>skills</span>
					</h1>
					<ProcessBarsList
						processbars={processbars}
						visibleArr={processbarVisible}
					/>
				</div>
				<WaveSvg />
			</div>
		);
	}

	renderProjects(projects) {
		const { projectsVisible } = this.state;
		return (
			<div className="resume-section onscroll-reveal projects-wrapper">
				<div>
					<h1 className="name visible relative">
						<span>projects</span>
					</h1>
					{projectsVisible ? <Projects data={projects} /> : null}
				</div>
				<WaveSvg />
			</div>
		);
	}

	render() {
		const { translations } = this.props;
		const { processbars, career, education, projects, about } = translations;
		const { processbarVisible } = this.state;

		return (
			<div>
				<Link to="/" onClick={ev => this.back(ev)}>
					<div
						className="job-application--button-container button-right button-right--offset back-button"
						ref="back"
					>
						<Button text={translations.back} />
					</div>
				</Link>
				<div className="resume-container" ref="container">
					{this.renderSection(about, 0)}
					{this.renderSection(education, 1)}
					{this.renderSection(career, 2)}
					{this.renderProcessbarsList(processbars, processbarVisible)}
					{this.renderProjects(projects)}
				</div>
			</div>
		);
	}
}

/**
 * Maps state to components props
 *
 * @param {Object} state - Application state
 * @returns {Object}
 * @author Snær Seljan Þóroddsson
 */
function mapStateToProps(state) {
	return { common: state.common, translations: state.common.translations };
}

/**
 * Maps dispatch to components props
 *
 * @param {Object} dispatch - Redux dispatch medhod
 * @returns {Object}
 * @author Snær Seljan Þóroddsson
 */
function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actionCreators, dispatch)
	};
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Resume));
