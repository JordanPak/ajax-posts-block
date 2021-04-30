/**
 * Posts block save
 *
 * @since 1.0.0
 */
import { useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { num, types, categories, tags } = attributes;

	return (
		<div
			{ ...useBlockProps.save( {
				'data-num': num,
				'data-types': types.join( ',' ),
				'data-categories': categories.join( ',' ),
				'data-tags': tags.join( ',' ),
			} ) }
		>
			<h2>Where's Allie</h2>
		</div>
	);
}
