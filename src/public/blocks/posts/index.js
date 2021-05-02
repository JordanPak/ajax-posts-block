/**
 * AJAX posts block handling
 *
 * @since 1.0.0
 */

import { render, Component } from '@wordpress/element';
import { addQueryArgs } from '@wordpress/url';
import apiFetch from '@wordpress/api-fetch';

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
	 * Check if new posts need to be fetched
	 *
	 * @param {Object} prevProps Props before state was changed.
	 * @param {*} prevState State before state was changed.
	 */
	componentDidUpdate( prevProps, prevState ) {
		// Grab new posts if the page changed.
		if ( prevState.currentPage !== this.state.currentPage ) {
			this.getPosts();
		}
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

		console.log(
			`FETCHING PAGE ${ currentPage } | `,
			`${ this.props.num } PER PAGE`
		);

		const args = {
			page: currentPage,
			per_page: num,
		};

		if ( postTypes ) {
			args.type = postTypes;
		}

		console.log( 'ARGS', args );

		apiFetch( {
			path: addQueryArgs( '/wp/v2/posts', args ),
			parse: false,
		} )
			.then( ( response ) => {
				headers = response.headers;
				return response.json();
			} )
			.then( ( posts ) => {
				const totalPosts = Number( headers.get( 'x-wp-total' ) ),
					totalPages = Number( headers.get( 'x-wp-totalpages' ) );

				console.log( 'total pages', totalPages );

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
			posts: [],
			hasLoaded: false,
			currentPage: page,
		} );
	}

	/**
	 * Page to older posts
	 *
	 * @since 1.0.0
	 */
	doPreviousPage() {
		this.doPage( this.state.currentPage + 1 );
	}

	/**
	 * Page to newer posts
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
			return (
				<>
					<h4>Here are posts</h4>
					{ posts.map( ( post, index ) => {
						return (
							<p key={ index }>
								{ post.type }: { post.title.rendered }
							</p>
						);
					} ) }
					{ totalPages > 1 && (
						<>
							<button
								disabled={ currentPage === totalPages }
								onClick={ this.doPreviousPage.bind( this ) }
							>
								{ apbHelper.previous }
							</button>
							<button
								disabled={ currentPage === 1 }
								onClick={ this.doNextPage.bind( this ) }
							>
								{ apbHelper.next }
							</button>
						</>
					) }
				</>
			);
		}

		return <p>NOTHING BRO</p>;
	}

	/**
	 * Output main block contents
	 *
	 * @since 1.0.0
	 *
	 * @return {Object} Main block contents.
	 */
	render() {
		const { hasLoaded } = this.state;

		return (
			<>
				<h2>LOOK AT THIS BRICK</h2>
				{ hasLoaded ? this.renderPosts() : this.renderLoader() }
			</>
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
			categories={ categories.split( ',' ) }
			tags={ tags.split( ',' ) }
			loadingEl={ block.querySelector( '.apb-loading' ) }
		/>,
		block
	);
}
