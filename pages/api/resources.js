
export default function (request, response) {

	response.status = 200;
	response.json({
		tips: [
			{
				imageUrl: 'https://refactoring-ui.nyc3.cdn.digitaloceanspaces.com/homepage/tip-labels.png',
				title: 'Think Outside the Database',
				link: {
					name: 'twitter.com',
					url: 'https://twitter.com/steveschoger/status/997125312411570176'
				}
			},
			{
				imageUrl: 'https://refactoring-ui.nyc3.cdn.digitaloceanspaces.com/homepage/tip-borders.png',
				title: 'Use Fewer Borders',
				link: {
					name: 'twitter.com',
					url: 'https://twitter.com/steveschoger/status/897849211110273024'
				}
			},
			{
				imageUrl: 'https://refactoring-ui.nyc3.cdn.digitaloceanspaces.com/homepage/tip-overlap.png',
				title: 'Overlap Images to Add Depth',
				link: {
					name: 'twitter.com',
					url: 'https://twitter.com/steveschoger/status/981606881255976961'
				}
			}
		],
		articles: [
			{
				imageUrl: 'https://refactoring-ui.nyc3.cdn.digitaloceanspaces.com/homepage/article-tips.png',
				title: '7 Practical Tips for Cheating at Design',
				link: {
					name: 'medium.com',
					url: 'https://medium.com/refactoring-ui/7-practical-tips-for-cheating-at-design-40c736799886'
				}
			},
			{
				imageUrl: 'https://refactoring-ui.nyc3.cdn.digitaloceanspaces.com/homepage/article-laravel-io.png',
				title: 'Redesigning Laravel.io',
				link: {
					name: 'medium.com',
					url: 'https://medium.com/refactoring-ui/redesigning-laravel-io-c47ac495dff0'
				}
			}
		],
		screencasts: [
			{
				imageUrl: 'https://refactoring-ui.nyc3.cdn.digitaloceanspaces.com/homepage/sc-wp-pusher.png',
				title: 'Redesigning WP Pusher\'s Checkout Page',
				link: {
					name: 'youtube.com',
					url: 'https://www.youtube.com/watch?v=5gdYHlYAKDY'
				}
			},
			{
				imageUrl: 'https://refactoring-ui.nyc3.cdn.digitaloceanspaces.com/homepage/sc-bad-about.png',
				title: 'Redesigning Bad About\'s Product Page',
				link: {
					name: 'youtube.com',
					url: 'https://www.youtube.com/watch?v=S6-q5BheEYU'
				}
			},
			{
				imageUrl: 'https://refactoring-ui.nyc3.cdn.digitaloceanspaces.com/homepage/sc-resolute.png',
				title: 'Redesigning Resolute\'s Internal App',
				link: {
					name: 'youtube.com',
					url: 'https://www.youtube.com/watch?v=BMHUKij1yUE'
				}
			}
		]
	});
}
