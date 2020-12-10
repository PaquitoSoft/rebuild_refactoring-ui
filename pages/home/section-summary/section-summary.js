import React from 'react';

function ResourceSummary({ className, resource }) {
	return (
		<summary className={`${className}`}>
			<div className="shadow-lg rounded-lg">
				<img className="w-full rounded-t-lg" src={resource.imageUrl} alt={resource.title}/>
				<div className="bg-white p-6 flex-1 flex flex-col justify-between rounded-b-lg">
					<h3 className="font-bold tracking-wide text-lg mb-6">{resource.title}</h3>
					<a className="flex items-center" href={resource.link.url} target="_blank">
						<span className="text-sm text-gray-500 mr-3">{resource.link.name}</span>
						<svg className="h-4 w-4 text-gray-400 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
							<path d="M14 3.41l-7.3 7.3a1 1 0 0 1-1.4-1.42L12.58 2H9a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V3.41zM12 11a1 1 0 0 1 2 0v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h3a1 1 0 1 1 0 2H2v10h10v-3z"></path>
						</svg>
					</a>
				</div>
			</div>
		</summary>
	);
}

function SectionSummary({ name, resources }) {
	return (
		<section className="container mx-auto max-w-screen-lg mb-14">
			<header className="flex justify-between items-baseline border-b-2 border-gray-light mb-10">
				<div 
					className="text-base font-display font-bold tracking-wide py-4 border-b-2 border-indigo-700"
					style={{ marginBottom: '-2px' }}
				>{name}</div>
				<a className="text-indigo-700 font-semibold" href="#">View All</a>
			</header>
			<div className="flex flex-wrap -mx-3">
				{resources.map(resource => 
					<ResourceSummary 
						key={resource.title} 
						className="w-1/3 px-3"
						resource={resource} 
					/>)
				}
			</div>
		</section>
	);
}

/*
	{
		imageUrl: 'https://refactoring-ui.nyc3.cdn.digitaloceanspaces.com/homepage/tip-labels.png',
		title: 'Think Outside the Database',
		link: {
			name: 'twitter.com',
			url: 'https://twitter.com/steveschoger/status/997125312411570176'
		}
	}
*/

export default SectionSummary;
