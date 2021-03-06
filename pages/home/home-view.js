import React, { Fragment } from 'react';
import Head from 'next/head'

import SectionSummary from './section-summary/section-summary';

function HomeView({ tips, articles, screencasts }) {
	return (
		<Fragment>
			<Head>
				<title>Refactoring UI</title>
				<link rel="icon" href="/favicon-32x32.png" />
			</Head>
	
			<main>

				<section className="bg-indigo mb-12">
					<div className="container mx-auto max-w-screen-lg">
						<div className="text-white py-4 font-semibold text-xl">We just released a book! <a href="#" className="font-bold underline">Learn more about it here →</a></div>
					</div>
					<div className="text-white" style={{ 'backgroundImage': `url('/hero-pattern.svg')` }}>
						<div className="container mx-auto max-w-screen-lg py-24">
							<div className="max-w-screen-md">
								<svg className="h-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212 60"><defs><linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stopColor="#3DACEC"></stop><stop offset="100%" stopColor="#5A77F3"></stop></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" fill-rule="nonzero" d="M159.18 49.47c.77-.95 1.37-2.07 1.8-3.34a26.5 26.5 0 1 0-4.45-23.46h-3.63a30.01 30.01 0 1 1 6.28 26.8z"></path><path fill="#FFFFFF" d="M10.06 32.22l6.79 9.28H12.3l-6.2-8.8H4.02v8.8H.24V19.68h6.6c5.85 0 7.93 3.2 7.93 6.56 0 3.1-2.15 5.34-4.7 5.98zm.8-5.89c0-2.2-1.34-3.49-3.77-3.49H4.02v6.88h3.1c2.4 0 3.74-1.44 3.74-3.39zm13.58-.67c5.28.03 7.71 4.13 7.71 8.03 0 .32 0 .74-.06 1.06H20.25c0 2.4 2.11 4.48 4.57 4.48 1.57 0 2.63-.64 3.43-1.73h3.68a7.37 7.37 0 0 1-7.1 4.54c-4.71 0-8.17-3.45-8.17-8.35 0-4.32 2.95-8.03 7.78-8.03zm0 2.69a4.1 4.1 0 0 0-4.16 3.8h8.29a4.13 4.13 0 0 0-4.13-3.8zm8.9.83v-3h2.18v-2.54c0-3.45 1.82-5.34 5.22-5.34.86 0 1.7.1 2.33.29v2.94a6.46 6.46 0 0 0-1.73-.25c-1.6 0-2.24.96-2.24 2.43v2.46h3.43v3.01H39.1V41.5h-3.58V29.18h-2.18zm25.77-3V41.5h-3.49v-1.95h-.1a6.48 6.48 0 0 1-5.24 2.5c-3.46 0-7.36-2.76-7.36-8.23 0-4.86 3.46-8.13 7.62-8.13 2.56 0 4.1 1.35 5.02 2.56h.06v-2.08h3.5zM46.6 33.81c0 2.56 1.47 5.09 4.64 5.09 2.37 0 4.54-2.05 4.54-5 0-3.1-2.01-5.15-4.5-5.15-3.18 0-4.68 2.56-4.68 5.06zm23.2-8.16c4.4 0 6.6 2.88 7.08 5.12H73.2c-.48-1.22-1.63-2.08-3.42-2.08-2.6 0-4.45 1.89-4.45 5.12 0 2.91 1.79 5.15 4.57 5.15 1.99 0 3.01-1.12 3.52-2.3h3.72a7.17 7.17 0 0 1-7.3 5.37c-4.6 0-8.2-3.3-8.2-8.25 0-4.48 3.14-8.13 8.17-8.13zm8.05 3.52v-3h1.92v-4.9h3.58v4.9h3.81v3h-3.8v6.85c0 2.08.63 2.65 2.1 2.65.61 0 1.32-.12 1.86-.25v2.91c-.8.22-1.82.35-2.72.35-3.8 0-4.83-2.3-4.83-5.44v-7.07h-1.92zm10.34 4.64a7.96 7.96 0 0 1 8.2-8.16c4.8 0 8.19 3.52 8.19 8.16a8.07 8.07 0 0 1-8.2 8.22 8.06 8.06 0 0 1-8.19-8.22zm3.65 0c0 2.94 2.08 5.02 4.54 5.02 2.72 0 4.58-2.17 4.58-5.02 0-2.72-1.73-5-4.58-5-2.75 0-4.54 2.15-4.54 5zm24.52-8.03v3.33c-.45-.07-1-.16-1.8-.16-2.42 0-3.86 1.6-3.86 4.8v7.74h-3.59V26.17h3.52v2.18h.1a4.98 4.98 0 0 1 4.29-2.66c.57 0 .96.03 1.34.1zm1.96 15.71V26.17h3.58V41.5h-3.58zm-.2-18.72v-3.65h3.98v3.65h-3.97zm7.34 18.72V26.17h3.56v1.92h.06a5.59 5.59 0 0 1 4.67-2.43c3.17 0 5.95 2.08 5.95 7v8.84h-3.58v-8.64c0-2.62-1.25-4.03-3.3-4.03-2.24 0-3.77 1.57-3.77 4.54v8.13h-3.59zm32.78-15.33v14.85c0 5.63-2.56 8.7-8.1 8.7-4.28 0-7.04-2.36-7.64-6.01h3.58c.42 1.7 1.63 3.04 4.22 3.04 2.95 0 4.52-1.89 4.52-5.28v-1.92h-.07a6.68 6.68 0 0 1-5.21 2.37c-4.04 0-7.5-3.14-7.5-8.13 0-4.67 3.24-8.1 7.62-8.1 2.63 0 4.2 1.35 5.06 2.47h.1v-1.99h3.42zM145.7 33.8c0 2.46 1.5 4.99 4.6 4.99 2.5 0 4.58-2.02 4.58-4.93 0-3.07-1.98-5.09-4.51-5.09-3.1 0-4.67 2.56-4.67 5.03zm31.53 8.41c-4.32 0-8.19-2.43-8.19-9.37V19.68h3.78v13.5c0 3.49 1.63 5.76 4.41 5.76 3.23 0 4.39-2.46 4.39-5.76v-13.5h3.74v13.08c0 6.85-3.52 9.44-8.13 9.44zm11.72-.7V19.68h3.78V41.5h-3.78z"></path></g></svg>
								<h1 className="mt-8 text-5xl font-semibold">Tired of relaying on Bootstrap?</h1>
								<p className="mt-6 text-2xl font-bold"><span className="text-blue-300 font-normal">Learn how to</span> design awesome UIs by yourself <span className="text-blue-300 font-normal">using</span> specific tactics <span className="text-blue-300 font-normal">explained from a</span> developer's point of view.</p>
							</div>
							<div className="mt-14">
								<h2 className="font-semibold text-lg">Get notified whenever we publish something new <span className="text-blue-300">→</span></h2>
								<form action="" className="mt-4 flex items-center">
									<input className="px-6 h-14 rounded-l-md text-xl text-gray-800 w-2/5" type="email" placeholder="Enter your email" />
									<button className="bg-indigo h-14 px-6 rounded-r-md font-bold tracking-wide" type="submit">SUBSCRIBE</button>
								</form>
							</div>
						</div>
					</div>
				</section>

				<SectionSummary name="DESIGN TIPS" resources={tips}/>
				<SectionSummary name="ARTICLES" resources={articles}/>
				<SectionSummary name="SCREENCASTS" resources={screencasts}/>
			</main>
	
			<footer></footer>
		</Fragment>
	);
}

export default HomeView;

export async function getStaticProps() {
	const response = await fetch('http://localhost:3000/api/resources');
	const data = await response.json();

	if (!data) {
		return { notFound: true };
	}

	return { props: data };
}
