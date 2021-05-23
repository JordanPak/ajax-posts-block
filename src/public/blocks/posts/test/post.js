/**
 * Test <Post> component
 *
 * @since 1.0.0
 */
import { shallow } from 'enzyme';

import Post from '../post';

global.apbHelper = { i18n: { by: 'by' } };

describe( 'Post Compoonent', () => {
	it( 'Shows post with all features correctly', () => {
		// mock a thumbnail
		const featuredMedia = [
			{
				alt_text: 'Thumbnail alt text',
				media_details: {
					sizes: {
						medium: {
							source_url: 'thumbnail.jpg',
							width: '400',
							height: '200',
						},
					},
				},
			},
		];

		const post = shallow(
			<Post
				title={ { rendered: 'Jimbo Fisher' } }
				link="https://www.example.com"
				readTime={ 17 }
				excerpt={ {
					rendered:
						'<p>John James "Jimbo" Fisher Jr. is an American college football coach and former player.</p>',
				} }
				embeds={ {
					author: [ { name: 'Captain Jack Sparrow' } ],
					'wp:featuredmedia': featuredMedia,
				} }
				numberFormatter={ new Intl.NumberFormat( 'en-US' ) }
			/>
		).render();

		expect( post ).toMatchSnapshot();
	} );

	it( 'Shows a post without media or read time correctly', () => {
		const post = shallow(
			<Post
				title={ { rendered: 'Jimbo Fisher' } }
				link="https://www.example.com"
				excerpt={ {
					rendered:
						'<p>John James "Jimbo" Fisher Jr. is an American college football coach and former player.</p>',
				} }
				embeds={ {
					author: [ { name: 'Captain Jack Sparrow' } ],
				} }
				numberFormatter={ new Intl.NumberFormat( 'en-US' ) }
			/>
		).render();

		expect( post ).toMatchSnapshot();
	} );

	it( 'Excludes read time meta if 0', () => {
		const post = shallow(
			<Post
				title={ { rendered: 'Jimbo Fisher' } }
				link="https://www.example.com"
				embeds={ {
					author: [ { name: 'Captain Jack Sparrow' } ],
				} }
				readTime={ 0 }
				numberFormatter={ new Intl.NumberFormat( 'en-US' ) }
			/>
		).render();

		expect( post ).toMatchSnapshot();
	} );
} );
