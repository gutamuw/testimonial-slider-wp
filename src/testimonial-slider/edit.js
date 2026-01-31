/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	MediaUpload,
	RichText,
	InspectorControls,
} from '@wordpress/block-editor';

import { Button, PanelBody, TextControl } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { testimonials, autoplay, interval } = attributes;

	// add testimonial

	const addTestimonial = () => {
		setAttributes({
			testimonials: [
				...testimonials,
				{
					quote: '',
					name: '',
					title: '',
					image: '',
				},
			],
		});
	};

	const updateItem = (index, key, value) => {
		const newItems = [...testimonials];
		newItems[index][key] = value;
		setAttributes({ testimonials: newItems });
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title="Slider settings">
					<TextControl
						label="Interval (ms)"
						type="number"
						value={interval}
						onChange={(value) =>
							setAttributes({ interval: Number(value) })
						}
					/>
					<label>
						<input
							type="checkbox"
							checked={autoplay}
							onChange={(e) =>
								setAttributes({ autoplay: e.target.checked })
							}
						/>
						Autoplay
					</label>
				</PanelBody>
			</InspectorControls>

			<div {...useBlockProps()}>
				<Button onClick={addTestimonial}>+ Add testimonial</Button>

				{testimonials.map((item, index) => (
					<div key={index} className="testimonial-item">
						<div className="testimonial-image-wrap">
							{item.image && (
								<img
									src={item.image}
									alt="Testimonial"
									className="testimonial-image-preview"
								/>
							)}
							<MediaUpload
								onSelect={(media) =>
									updateItem(index, 'image', media.url)
								}
								render={({ open }) => (
									<Button
										onClick={open}
										variant="secondary"
										size="small"
									>
										{item.image
											? 'Change Image'
											: 'Upload Image'}
									</Button>
								)}
							/>
						</div>
						<div className="testimonial-fields">
							<label className="testimonial-label">Quote</label>
							<RichText
								tagName="p"
								placeholder="Add testimonial quote..."
								value={item.quote}
								onChange={(value) =>
									updateItem(index, 'quote', value)
								}
							/>
							<label className="testimonial-label">Name</label>
							<RichText
								tagName="p"
								placeholder="Name"
								value={item.name}
								onChange={(value) =>
									updateItem(index, 'name', value)
								}
							/>
							<label className="testimonial-label">
								Title or role
							</label>
							<RichText
								tagName="p"
								placeholder="Title or role"
								value={item.title}
								onChange={(value) =>
									updateItem(index, 'title', value)
								}
							/>
						</div>
						<Button
							className="remove-testimonial"
							isDestructive
							variant="secondary"
							size="small"
							onClick={() => {
								const newItems = testimonials.filter(
									(_, i) => i !== index
								);
								setAttributes({ testimonials: newItems });
							}}
						>
							Remove
						</Button>
					</div>
				))}
			</div>
		</>
	);
}
