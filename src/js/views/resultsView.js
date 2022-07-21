import View from "./View";
import previewView from "./previewView";
import icons from "url:../../img/icons.svg";

class ResultsView extends View {
	_parentEl = document.querySelector(`.results`);
	_errorMessage = `couldn't find recipe, try another search`;
	_message = ``;

	_generateMarkup() {
		return this._data.map(result => previewView.render(result, false)).join(``);
	}
}

export default new ResultsView();
