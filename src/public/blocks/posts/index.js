/**
 * AJAX posts block handling
 *
 * @since 1.0.0
 */

import { render, Component } from '@wordpress/element';
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
	 * Display the loading UI
	 *
	 * @since 1.0.0
	 *
	 * @return {Object} Loader react element.
	 */
	renderLoader() {
		return (
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
		apiFetch( { path: '/wp/v2/posts' } ).then( ( posts ) => {
			console.log( 'DONE', posts );

			this.setState( {
				posts,
				hasLoaded: true,
			} );
		} );
	}

	/**
	 * Page posts forward or back
	 *
	 * @since 1.0.0
	 *
	 * @param {string} direction Direction to page (prev or next).
	 */
	doPage( direction ) {
		console.log( `Paging ${ direction }` );

		this.setState( {
			posts: [],
			hasLoaded: false,
		} );

		this.getPosts();
	}

	/**
	 * Page to older posts
	 *
	 * @since 1.0.0
	 */
	doPreviousPage() {
		this.doPage( 'PREV' );
	}

	/**
	 * Page to newer posts
	 *
	 * @since 1.0.0
	 */
	doNextPage() {
		this.doPage( 'NEXT' );
	}

	/**
	 * Render out posts with navigation or "none found" message.
	 *
	 * @return {Object} Posts + pagination or "none" message react element.
	 */
	renderPosts() {
		if ( this.state.posts.length > 0 ) {
			return (
				<>
					<h4>Here are posts</h4>
					{ this.state.posts.map( ( post, index ) => {
						return (
							<p key={ index }>Post: { post.title.rendered }</p>
						);
					} ) }
					<button onClick={ this.doPreviousPage.bind( this ) }>
						Previous
					</button>
					<button onClick={ this.doNextPage.bind( this ) }>
						Next
					</button>
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
			postTypes={ types.split( ',' ) }
			categories={ categories.split( ',' ) }
			tags={ tags.split( ',' ) }
			loadingEl={ block.querySelector( '.apb-loading' ) }
		/>,
		block
	);
}
