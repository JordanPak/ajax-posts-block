/**
 * Posts block edit
 *
 * @since 1.0.0
 */

import { __ } from '@wordpress/i18n';
import { withSelect } from '@wordpress/data';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';

import TermsControl from '../../components/terms-control';
import PostTypeControl from '../../components/post-type-control';

const edit = withSelect( ( select, props ) => ( {
	// Get categories by reference in case a name/label is changed.
	categories: select( 'core' ).getEntityRecords( 'taxonomy', 'category', {
		include: props.attributes.categories,
	} ),
	// categorySuggestions: select( 'core' ).getEntityRecords(
	// 	'taxonomy',
	// 	'category'
	// ),

	// Get tags by reference in case a name/label is changed.
	tags: select( 'core' ).getEntityRecords( 'taxonomy', 'post_tag', {
		include: props.attributes.tags,
	} ),
	// tagSuggestions: select( 'core' ).getEntityRecords( 'taxonomy', 'post_tag' ),
} ) )(
	( {
		attributes,
		setAttributes,
		categories,
		// categorySuggestions,
		tags,
		// tagSuggestions,
	} ) => {
		const { num, types } = attributes;
		// console.log( "ALREADY SET CATS", categories );
		// console.log( "CAT SUGGESTIONS", categorySuggestions );
		// console.log( "ALREADY SET TAGS", tags );
		// console.log( "TAG SUGGESTIONS", tagSuggestions );

		return (
			<>
				<InspectorControls>
					<PanelBody
						title={ __(
							'Sorting and filtering',
							'full-score-events'
						) }
					>
						<RangeControl
							label={ __(
								'Number of items',
								'ajax-posts-block'
							) }
							value={ num }
							onChange={ ( value ) =>
								setAttributes( { num: value } )
							}
							min={ 1 }
							max={ 20 }
						/>
						<TermsControl
							endpoint="categories"
							terms={ categories }
							// suggestions={ categorySuggestions }
							setTerms={ ( terms ) =>
								setAttributes( { categories: terms } )
							}
							singularLabel={ __(
								'category',
								'ajax-poosts-block'
							) }
							pluralLabel={ __(
								'categories',
								'ajax-poosts-block'
							) }
						/>
						<TermsControl
							endpoint="tags"
							terms={ tags }
							// suggestions={ tagSuggestions }
							setTerms={ ( terms ) =>
								setAttributes( { tags: terms } )
							}
							singularLabel={ __( 'tag', 'ajax-poosts-block' ) }
							pluralLabel={ __( 'tags', 'ajax-poosts-block' ) }
						/>
						<PostTypeControl
							value={ types }
							onChange={ ( value ) =>
								setAttributes( { types: value } )
							}
						/>
					</PanelBody>
				</InspectorControls>

				<div
					{ ...useBlockProps( {
						'data-num': num,
					} ) }
				>
					<h2>Where's Allie</h2>
				</div>
			</>
		);
} );

export default edit;

// export default function Edit( { attributes, setAttributes } ) {

// 	// const { type, message } = attributes,
// 	// 	blockProps = useBlockProps( { className: `fse-callout-${ type }` } );
// }
