/**
 * Posts block edit
 *
 * @since 1.0.0
 */

import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';

import icons from '../../../icons';

import PostTypesControl from '../../components/post-types-control';
import CategoriesControl from '../../components/categories-control';
import TagsControl from '../../components/tags-control';

export default function Edit( { attributes, setAttributes } ) {
	const { num, types, categories, tags } = attributes;

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
					<PostTypesControl
						value={ types }
						onChange={ ( value ) =>
							setAttributes( { types: value } )
						}
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
				</PanelBody>
			</InspectorControls>

			<div
				{ ...useBlockProps( {
					'data-num': num,
					'data-types': types.join( ',' ),
					'data-categories': categories.join( ',' ),
					'data-tags': tags.join( ',' ),
				} ) }
			>
				<p className="apb-loading">
					{ __( 'Loading', 'ajax-posts-block' ) }
					{ icons.loading() }
				</p>
			</div>
		</>
	);
}
