/**
 * Posts block edit
 *
 * @since 1.0.0
 */

import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';

import CategoriesControl from '../../components/categories-control';
import TagsControl from '../../components/tags-control';
import PostTypesControl from '../../components/post-types-control';

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
					<CategoriesControl
						value={ categories }
						onChange={ ( value ) =>
							setAttributes( { categories: value } )
						}
					/>
					<TagsControl
						value={ tags }
						onChange={ ( value ) =>
							setAttributes( { tags: value } )
						}
					/>
					<PostTypesControl
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
