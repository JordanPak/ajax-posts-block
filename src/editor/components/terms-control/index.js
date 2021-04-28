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
import { BaseControl } from '@wordpress/components';

import getApiOptions from '../../util/get-api-options';

const TermsControl = ( {
	endpoint,
	terms,
	// suggestions,
	setTerms,
	singularLabel,
	pluralLabel,
} ) => {
	// set default arrays in case there aren't any available yet
	// suggestions = suggestions || [];
	terms = terms || [];

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
				value={ terms.map( ( term ) => ( {
					label: term.name,
					value: term.id,
				} ) ) }
				// defaultOptions={ suggestions.map( ( term ) => ( {
				// 	label: term.name,
				// 	value: term.id,
				// } ) ) }
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
				onChange={ ( options ) => {
					options = options || [];
					options = options.map( ( option ) => option.value );
					setTerms( options );
				} }
			/>
		</BaseControl>
	);
};

export default TermsControl;
