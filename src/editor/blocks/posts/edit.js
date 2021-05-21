/**
 * Posts block edit
 *
 * @since 1.0.0
 */

import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';

import loading from '../../components/loading';
import PostTypesControl from '../../components/post-types-control';
import CategoriesControl from '../../components/categories-control';
import TagsControl from '../../components/tags-control';

import AJAXPostsBlock from '../../../public/blocks/posts';

export default function Edit( { attributes, setAttributes } ) {
	const { num, types, categories, tags } = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __( 'Sorting and filtering', 'ajax-posts-block' ) }
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

			<div { ...useBlockProps() }>
				<AJAXPostsBlock
					key={ [ num, types, categories, tags ] } // update the component on change
					num={ Number( num ) }
					postTypes={ types.join( ',' ) }
					categories={ categories.join( ',' ) }
					tags={ tags.join( ',' ) }
					loadingEl={ loading }
				>
					{ loading }
				</AJAXPostsBlock>
			</div>
		</>
	);
}
