/**
 * Multi-select dropdown for "viewable" post types
 *
 * @since 1.0.0
 */

import _ from 'lodash';
import Select from 'react-select';

import { __ } from '@wordpress/i18n';
import { withSelect } from '@wordpress/data';
import { BaseControl } from '@wordpress/components';

const PostTypesControl = withSelect( ( select ) => ( {
	types: select( 'core' ).getPostTypes(),
} ) )( ( { types, value, onChange } ) => {
	// Build "viewable" options
	const options = _.filter( types, 'viewable' ).map(
		( { labels, slug } ) => ( {
			label: labels.singular_name,
			value: slug,
		} )
	);

	// Build options from post type slug values
	const valueObjects = _.filter( types, ( type ) => {
		return value.includes( type.slug );
	} ).map( ( { labels, slug } ) => ( {
		label: labels.singular_name,
		value: slug,
	} ) );

	return (
		<BaseControl
			className="apb-post-type-control"
			id="apb-post-type-select"
			label={ __( 'Filter to post types', 'ajax-posts-block' ) }
		>
			<Select
				name="apb-post-type-select"
				isMulti
				value={ valueObjects }
				options={ options }
				onChange={ ( values ) => {
					// Make sure we have an array and just send back the values
					values = values || [];
					values = values.map( ( option ) => option.value );
					onChange( values );
				} }
				placeholder={ __(
					'Leave empty to show all',
					'ajax-posts-block'
				) }
			/>
		</BaseControl>
	);
} );

export default PostTypesControl;
