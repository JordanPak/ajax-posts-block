/**
 * Dynamic dropdown for post tag terms
 *
 * This allows us to work with the rest API's (getEntityRecords) 100-item limit
 * in case there are more than 100 tags, as well as allowing the editor to
 * search for tags.
 *
 * @since 1.0.0
 */
import { __ } from '@wordpress/i18n';

import TermsControl from '../terms-control';

export default function TagsControl( { value, onChange } ) {
	return (
		<TermsControl
			taxonomy="post_tag"
			endpoint="tags"
			value={ value }
			onChange={ onChange }
			singularLabel={ __( 'tag', 'ajax-poosts-block' ) }
			pluralLabel={ __( 'tags', 'ajax-poosts-block' ) }
		/>
	);
}
