/**
 * Post component
 *
 * @since 1.0.0
 */

import { __, sprintf } from '@wordpress/i18n';

export default ( { title, link, date, embeds } ) => {
	date = new Date( date );

	let ftMedia = false,
		ftSize = false;

	if ( embeds[ 'wp:featuredmedia' ] ) {
		ftMedia = embeds[ 'wp:featuredmedia' ][ 0 ];
		const sizes = ftMedia.media_details.sizes;

		ftSize = sizes.medium ? sizes.medium : sizes.thumbnail;
	}

	return (
		<a href={ link }>
			{ ftSize && (
				<img
					src={ ftSize.source_url }
					width={ ftSize.width }
					height={ ftSize.height }
					alt={ ftMedia.alt_text }
				/>
			) }
			<div className="apb-post-details">
				<h3 className="apb-post-title">{ title.rendered }</h3>
				<div className="apb-post-meta">
					{ embeds.author.length > 0 && (
						<>
							<span className="apb-post-author">
								by { embeds.author[ 0 ].name }
							</span>{ ' ' }
						</>
					) }
					<span className="apb-post-date">
						{ sprintf(
							// Translators: on %s (date).
							__( 'on %s', 'ajax-posts-block' ),
							date.toLocaleDateString( 'en-US', {
								month: 'long',
								day: 'numeric',
								year: 'numeric',
							} )
						) }
					</span>
				</div>
			</div>
		</a>
	);
};