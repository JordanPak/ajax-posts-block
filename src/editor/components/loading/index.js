/**
 * "Loading" component with spinner icon
 *
 * @since 1.0.0
 */

import { __ } from '@wordpress/i18n';

import icons from '../../../icons';

import './style.scss';

const loading = (
	<p className="apb-loading">
		{ __( 'Loading', 'ajax-posts-block' ) }
		{ icons.loading() }
	</p>
);

export default loading;
