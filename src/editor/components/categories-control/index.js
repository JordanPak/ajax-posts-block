/**
 * Dynamic dropdown for category terms
 *
 * This allows us to work with the REST API's (getEntityRecords) 100-item limit
 * in case there are more than 100 categories, as well as allowing the editor
 * to search for categories.
 *
 * @since 1.0.0
 */
import { __ } from '@wordpress/i18n';

import TermsControl from '../terms-control';

export default function CategoriesControl( { value, onChange } ) {
	return (
		<TermsControl
			taxonomy="category"
			endpoint="categories"
			value={ value }
			onChange={ onChange }
			singularLabel={ __( 'category', 'ajax-poosts-block' ) }
			pluralLabel={ __( 'categories', 'ajax-poosts-block' ) }
		/>
	);
}
