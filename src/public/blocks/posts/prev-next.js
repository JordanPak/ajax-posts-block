/**
 * Previous/next posts paging component
 *
 * @since 1.0.0
 */

import icons from '../../../icons';

export default ( { pages, currentPage, onPrevious, onNext } ) => {
	return pages > 1 ? (
		<nav className="apb-prev-next wp-block-buttons">
			<div className="wp-block-button is-style-outline">
				<button
					className="wp-block-button__link apb-prev-next-button"
					disabled={ currentPage === pages }
					onClick={ onPrevious }
				>
					{ icons.angleLeft() }
					<span>{ apbHelper.previous }</span>
				</button>
			</div>

			<div className="wp-block-button is-style-outline">
				<button
					className="wp-block-button__link apb-prev-next-button"
					disabled={ currentPage === 1 }
					onClick={ onNext }
				>
					<span>{ apbHelper.next }</span>
					{ icons.angleRight() }
				</button>
			</div>
		</nav>
	) : null;
};
