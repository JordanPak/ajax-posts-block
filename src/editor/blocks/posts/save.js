/**
 * Posts block save
 *
 * @since 1.0.0
 */
import { useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { num, categories, tags, types } = attributes;

	return (
		<div
			{ ...useBlockProps.save( {
				'data-num': num,
				'data-categories': categories.join( ',' ),
				'data-tags': tags.join( ',' ),
				'data-types': types.join( ',' ),
			} ) }
		>
			<h2>Where's Allie</h2>
		</div>
	);
}
