/**
 * AJAX posts block handling
 *
 * @since 1.0.0
 */

import _ from 'lodash';

import { render, Component } from '@wordpress/element';
import { addQueryArgs } from '@wordpress/url';
import apiFetch from '@wordpress/api-fetch';

import Post from './post';
import PrevNext from './prev-next';

class AJAXPostsBlock extends Component {
	/**
	 * Spin up component
	 *
	 * @since 1.0.0
	 *
	 * @param {Object} props Component properties
	 */
	constructor( props ) {
		super( props );

		this.state = {
			hasLoaded: false,
			currentPage: 1,
			posts: [],
			height: 0,
		};
	}

	/**
	 * Grab initial posts on load
	 *
	 * @since 1.0.0
	 */
	componentDidMount() {
		this.getPosts();
	}

	/**
	 * Check height sensor for an update
	 *
	 * @since 1.0.0
	 */
	doHeightCheck() {
		// sanity-check height sensor and skip minimum height on small screens
		if ( ! this.heightSensor || window.innerWidth < 850 ) {
			return;
		}

		// Set initial minimum height so paging is less jarring.
		const sensorHeight = this.heightSensor.clientHeight;

		if ( this.state.height === 0 || this.state.height < sensorHeight ) {
			this.setState( { height: sensorHeight } );
		}
	}

	/**
	 * Check if new posts need to be fetched
	 *
	 * @param {Object} prevProps Props before state was changed.
	 * @param {*} prevState State before state was changed.
	 */
	componentDidUpdate( prevProps, prevState ) {
		// Grab new posts if the page or other props changed.
		if (
			prevState.currentPage !== this.state.currentPage ||
			prevProps.num !== this.props.num ||
			prevProps.postTypes !== this.props.postTypes ||
			prevProps.categories !== this.props.categories ||
			prevProps.tags !== this.props.tags
		) {
			this.getPosts();
		}

		this.doHeightCheck();
	}

	/**
	 * Display the loading UI
	 *
	 * @since 1.0.0
	 *
	 * @return {Object} Loader react element.
	 */
	renderLoader() {
		// If the loading element property has its own properties, it's the
		// element from the editor view and can be rendered out as-is.
		return this.props.loadingEl.props ? (
			this.props.loadingEl
		) : (
			<p
				className={ this.props.loadingEl.className }
				dangerouslySetInnerHTML={ {
					__html: this.props.loadingEl.innerHTML,
				} }
			/>
		);
	}

	/**
	 * Grab posts from the site's REST API
	 *
	 * @since 1.0.0
	 */
	getPosts() {
		const { num, postTypes, categories, tags } = this.props;
		const { currentPage } = this.state;

		let headers = null;

		// Build out args array, removing those that are empty
		const args = _.omitBy(
			{
				apb_query: true,
				page: currentPage,
				per_page: num,
				type: postTypes || null,
				categories: categories || null,
				tags: tags || null,
				_embed: true,
			},
			_.isNil
		);

		apiFetch( {
			path: addQueryArgs( '/wp/v2/posts', args ),
			parse: false,
		} )
			.then( ( response ) => {
				headers = response.headers;
				return response.json();
			} )
			.then( ( posts ) => {
				// to get total posts: Number( headers.get( 'x-wp-total' ) )
				const totalPages = Number( headers.get( 'x-wp-totalpages' ) );

				this.setState( {
					posts: posts.length > 0 ? posts : false,
					hasLoaded: true,
					hasPages: totalPages > 1,
					totalPages,
				} );
			} );
	}

	/**
	 * Page posts forward or back
	 *
	 * @since 1.0.0
	 *
	 * @param {string} page Page to page to #roight
	 */
	doPage( page ) {
		this.setState( {
			hasLoaded: false,
			currentPage: page,
		} );
	}

	/**
	 * Page to older posts
	 *
	 * +1 is kinda counter-intuive but our posts are ordered from newest to
	 * oldest.
	 *
	 * @since 1.0.0
	 */
	doPreviousPage() {
		this.doPage( this.state.currentPage + 1 );
	}

	/**
	 * Page to newer posts
	 *
	 * -1 is kinda counter-intuive but our posts are ordered from newest to
	 * oldest.
	 *
	 * @since 1.0.0
	 */
	doNextPage() {
		this.doPage( this.state.currentPage - 1 );
	}

	/**
	 * Render out posts with navigation or "none found" message.
	 *
	 * @return {Object} Posts + pagination or "none" message react element.
	 */
	renderPosts() {
		const { posts, currentPage, totalPages } = this.state;

		if ( posts.length > 0 ) {
			// So we don't have to make it a bunch of times
			const numberFormatter = new Intl.NumberFormat( 'en-US' );

			return (
				<>
					<ul className="apb-posts-list">
						{ posts.map( ( post, index ) => {
							return (
								<li key={ index }>
									<Post
										title={ post.title }
										link={ post.link }
										readTime={ post.meta.apb_read_time }
										excerpt={ post.excerpt }
										embeds={ post._embedded }
										numberFormatter={ numberFormatter }
									/>
								</li>
							);
						} ) }
					</ul>
					<PrevNext
						pages={ totalPages }
						currentPage={ currentPage }
						onPrevious={ this.doPreviousPage.bind( this ) }
						onNext={ this.doNextPage.bind( this ) }
					/>
				</>
			);
		}

		return <p className="apb-no-results">{ apbHelper.i18n.noResults }</p>;
	}

	/**
	 * Output main block contents
	 *
	 * @since 1.0.0
	 *
	 * @return {Object} Main block contents.
	 */
	render() {
		const { hasLoaded, height } = this.state;

		return (
			<div
				className={ `apb-posts-block-wrap ${
					hasLoaded ? '' : 'apb-is-loading'
				}` }
				style={ {
					// prettier vs stylelint
					minHeight: height ? height : 'none', // stylelint-disable-line
				} }
			>
				<div
					className="apb-height-sensor"
					ref={ ( heightSensor ) => {
						if ( heightSensor ) {
							this.heightSensor = heightSensor;
						}
					} }
				/>
				{ this.renderPosts() }
				{ ! hasLoaded && this.renderLoader() }
			</div>
		);
	}
}

// Process each block
const blocks = document.getElementsByClassName(
	'wp-block-ajax-posts-block-posts'
);

for ( const block of blocks ) {
	const { num, types, categories, tags } = block.dataset;

	render(
		<AJAXPostsBlock
			num={ Number( num ) }
			postTypes={ types }
			categories={ categories }
			tags={ tags }
			loadingEl={ block.querySelector( '.apb-loading' ) }
		/>,
		block
	);
}

export default AJAXPostsBlock;
