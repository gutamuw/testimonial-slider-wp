/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

document.querySelectorAll('.testimonial-slider').forEach((slider) => {
	const slides = slider.querySelectorAll('.slide');
	let index = 0;

	const show = (i) => {
		slides.forEach((s) => {
			s.classList.remove('active');
			s.classList.remove('fade-in');
		});
		slides[i].classList.add('active');
		slides[i].classList.add('fade-in');
	};

	show(0);

	slider.querySelector('.next').addEventListener('click', () => {
		index = (index + 1) % slides.length;
		show(index);
	});

	slider.querySelector('.prev').addEventListener('click', () => {
		index = (index - 1 + slides.length) % slides.length;
		show(index);
	});

	// Autoplay functionality
	const autoplay =
		slider.getAttribute('data-autoplay') === 'true' ||
		slider.getAttribute('data-autoplay') === '1';
	const interval = parseInt(slider.getAttribute('data-interval'), 10) || 5000;
	let autoplayInterval = null;

	if (autoplay && slides.length > 1) {
		autoplayInterval = setInterval(() => {
			index = (index + 1) % slides.length;
			show(index);
		}, interval);
	}
});
