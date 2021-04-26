/**
 * Posts block edit
 *
 * @since 1.0.0
 */

import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';

export default function Edit( { attributes, setAttributes } ) {
	const { num } = attributes;

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

	// const { type, message } = attributes,
	// 	blockProps = useBlockProps( { className: `fse-callout-${ type }` } );
}
