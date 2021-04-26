/**
 * Posts block save
 *
 * @since 1.0.0
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { num } = attributes;

	return (
		<div
			{ ...useBlockProps.save( {
				'data-num': num,
			} ) }
		>
			<h2>Where's Allie</h2>
		</div>
	);
}
