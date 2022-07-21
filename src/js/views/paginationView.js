import View from "./View";
import icons from "url:../../img/icons.svg";

class paginationView extends View {
	_parentEl = document.querySelector(`.pagination`);

	addHandlerClick(handler) {
		this._parentEl.addEventListener(`click`, function (e) {
			const btn = e.target.closest(`.btn--inline`);
			if (!btn) return;

			const goToPage = +btn.dataset.goto;
			handler(goToPage);
		});
	}
	_generateMarkup() {
		const curPage = this._data.page;
		const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);

		const prevButton = `
    <button data-goto="${curPage - 1}" class="btn--inline pagination__btn--prev">
    <svg class="search__icon">
    <use href="${icons}#icon-arrow-left"></use>
    </svg>
    <span>Page ${curPage - 1}</span>
    </button>`;

		const nextButton = `
    <button data-goto="${curPage + 1}" class="btn--inline pagination__btn--next">
    <span>Page ${curPage + 1}</span>
    <svg class="search__icon">
    <use href="${icons}#icon-arrow-right"></use>
    </svg>
    </button>`;

		// page 1 + others
		if (curPage === 1 && numPages > 1) {
			return nextButton;
		}
		// last page
		if (curPage === numPages && numPages > 1) {
			return prevButton;
		}
		// other page
		if (curPage < numPages) {
			return nextButton + prevButton;
		}
		// page 1 no others
		return ``;
	}
}

export default new paginationView();
