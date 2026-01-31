/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save({ attributes }) {
	const { testimonials, autoplay, interval } = attributes;

	console.log('Testimonials:', testimonials);
	console.log(testimonials[0].image);

	return (
		<div
			{...useBlockProps.save()}
			className="testimonial-slider"
			data-autoplay={autoplay}
			data-interval={interval}
		>
			<div className="slides">
				{testimonials.map((item, index) => (
					<div className="slide" key={index}>
						<blockquote>
							<RichText.Content value={item.quote} />
						</blockquote>
						<div className="author">
							{item.image && (
								<img src={item.image} alt={item.name} />
							)}
							<div>
								<strong>
									<RichText.Content value={item.name} />
								</strong>
								<span>
									<RichText.Content value={item.title} />
								</span>
							</div>
						</div>
					</div>
				))}
			</div>
			<button className="prev">‹</button>
			<button className="next">›</button>
		</div>
	);
}
