/**
 * Posts block edit
 *
 * @since 1.0.0
 */

import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';

import TermsControl from '../../components/terms-control';
import PostTypeControl from '../../components/post-type-control';

export default function Edit( { attributes, setAttributes } ) {
	const { num, categories, tags, types } = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __( 'Sorting and filtering', 'full-score-events' ) }
				>
					<RangeControl
						label={ __( 'Number of items', 'ajax-posts-block' ) }
						value={ num }
						onChange={ ( value ) =>
							setAttributes( { num: value } )
						}
						min={ 1 }
						max={ 20 }
					/>
					<TermsControl
						taxonomy="category"
						endpoint="categories"
						value={ categories }
						onChange={ ( value ) =>
							setAttributes( { categories: value } )
						}
						singularLabel={ __( 'category', 'ajax-poosts-block' ) }
						pluralLabel={ __( 'categories', 'ajax-poosts-block' ) }
					/>
					<TermsControl
						taxonomy="post_tag"
						endpoint="tags"
						value={ tags }
						onChange={ ( value ) =>
							setAttributes( { tags: value } )
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
}
