/**
 * Post read time sidebar plugin
 *
 * @since 1.0.0
 */

import { __ } from '@wordpress/i18n';
import { compose } from '@wordpress/compose';
import { withSelect, withDispatch } from '@wordpress/data';
import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
import { registerPlugin } from '@wordpress/plugins';
import { TextControl } from '@wordpress/components';

const render = compose(
	/*
	 * withDispatch allows us to save meta values
	 */
	withDispatch( ( dispatch ) => ( {
		setReadTime: ( value ) => {
			dispatch( 'core/editor' ).editPost( {
				meta: { apb_read_time: Number( value ) },
			} );
		},
	} ) ),

	/*
	 * withSelect allows us to get existing meta values
	 */
	withSelect( ( select ) => {
		const meta = Object.assign(
			{},
			select( 'core/editor' ).getEditedPostAttribute( 'meta' )
		);

		return {
			readTime: meta.apb_read_time,
		};
	} )
)( ( { readTime, setReadTime } ) => {
	return (
		<PluginDocumentSettingPanel
			className="apb-read-time"
			title={ __( 'Read time', 'ajax-posts-block' ) }
		>
			<TextControl
				label={ __(
					'Estimated read time (minutes)',
					'ajax-posts-block'
				) }
				type="number"
				min={ 0 }
				value={ readTime }
				onChange={ setReadTime }
			/>
		</PluginDocumentSettingPanel>
	);
} );

// register the sidebar plugin
registerPlugin( 'apb-read-time', { render, icon: 'clock' } );
