import React from 'react';
import ReactDOM from 'react-dom';

import Breadcrumbs from './breadcrumbs.js';


ReactDOM.render(
	<div className="split-wrapper">
		<div className="split au-body">
			<h2>breadcrumbs</h2>
			<Breadcrumbs label="Breadcrumb for this page" items={[
				{
					link: '#options',
					text: 'Options',
				},
				{
					link: '#help',
					text: 'Help',
				},
				{
					text: 'Sign Out',
				},
			]} />

			<hr />
			<h2>breadcrumbs with onClick</h2>

			<Breadcrumbs label="Breadcrumb for the other page" items={[
				{
					link: '#link',
					text: 'with link',
					onClick: event => { event.preventDefault(); console.log('This function is called when the first item is clicked') },
				},
				{
					text: 'without link',
					onClick: event => { event.preventDefault(); console.log('This function is called when the second item is clicked') },
				},
			]} />
		</div>
		<div className="split au-body au-body--dark">
			<h2>breadcrumbs <code>--dark</code></h2>

			<Breadcrumbs dark label="Breadcrumb for the other page" items={[
				{
					link: '#options',
					text: 'Options2',
				},
				{
					link: '#help',
					text: 'Help2',
				},
				{
					text: 'Sign Out2',
				},
			]} />

		</div>
	</div>,

	document.getElementById('root'),
);
