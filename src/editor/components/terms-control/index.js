/**
 * Select dropdown for taxonomy terms
 *
 * This allows us to work with the rest API's (getEntityRecords) 100-item limit
 * in case there are more than 100 categories, tags, etc.
 *
 * @since 1.0.0
 */

import AsyncSelect from 'react-select/async';

import { __, sprintf } from '@wordpress/i18n';
import { withSelect } from '@wordpress/data';
import { BaseControl } from '@wordpress/components';

import getApiOptions from '../../util/get-api-options';

// Get objects for already-selected term IDs
const TermsControl = withSelect( ( select, { taxonomy, value } ) => ( {
	selectedTerms: select( 'core' ).getEntityRecords( 'taxonomy', taxonomy, {
		include: value,
	} ),
} ) )(
	( { endpoint, onChange, singularLabel, pluralLabel, selectedTerms } ) => {
		// set default arrays in case things aren't available yet
		selectedTerms = selectedTerms || [];

		return (
			<BaseControl
				className="abp-terms-control"
				id="abp-terms-select"
				label={ sprintf(
					// Translators: Filter to %s
					__( 'Filter to %s', 'ajax-posts-block' ),
					pluralLabel
				) }
			>
				<AsyncSelect
					name="abp-terms-select"
					isMulti
					placeholder={ sprintf(
						// Translators: Start typing %s name
						__( 'Start typing %s name', 'ajax-posts-block' ),
						singularLabel
					) }
					value={ selectedTerms.map( ( { name, id } ) => ( {
						label: name,
						value: id,
					} ) ) }
					loadOptions={ ( inputValue, callback ) =>
						getApiOptions( endpoint, inputValue, callback )
					}
					noOptionsMessage={ () =>
						sprintf(
							// Translators: No options. Start typing %s name.
							__(
								'No options. Start typing %s name.',
								'ajax-posts-block'
							),
							singularLabel
						)
					}
					onChange={ ( values ) => {
						// Make sure we have an array and just send back the values
						values = values || [];
						values = values.map( ( option ) => option.value );
						onChange( values );
					} }
				/>
			</BaseControl>
		);
	}
);

export default TermsControl;
