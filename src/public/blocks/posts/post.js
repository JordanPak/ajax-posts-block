/**
 * Post component
 *
 * @since 1.0.0
 */

import { __, sprintf } from '@wordpress/i18n';
import { RawHTML } from '@wordpress/element';

export default ( {
	title,
	link,
	readTime,
	excerpt,
	embeds,
	numberFormatter,
} ) => {
	let ftMedia = false,
		ftSize = false;

	if ( embeds[ 'wp:featuredmedia' ] ) {
		ftMedia = embeds[ 'wp:featuredmedia' ][ 0 ];
		const sizes = ftMedia.media_details.sizes;

		ftSize = sizes.medium ? sizes.medium : sizes.thumbnail;
	}

	return (
		<a href={ link } className="apb-post">
			{ ftSize && (
				<img
					className="apb-post-thumbnail"
					src={ ftSize.source_url }
					width={ ftSize.width }
					height={ ftSize.height }
					alt={ ftMedia.alt_text }
				/>
			) }
			<div className="apb-post-details">
				<h3 // RawHTML doesn't appear to let us choose a tag :(
					className="apb-post-title"
					dangerouslySetInnerHTML={ { __html: title.rendered } }
				/>
				<div className="apb-post-meta">
					{ embeds.author.length > 0 && (
						<>
							<span className="apb-post-author">
								by { embeds.author[ 0 ].name }
							</span>
						</>
					) }
					{ readTime > 0 && (
						<span className="apb-read-time">
							{ sprintf(
								// Translators: %s minute read time.
								__( '%s minute read time', 'ajax-posts-block' ),
								numberFormatter.format( readTime )
							) }
						</span>
					) }
				</div>
				{ excerpt.rendered && (
					<RawHTML className="apb-post-excerpt">
						{ excerpt.rendered }
					</RawHTML>
				) }
			</div>
		</a>
	);
};
