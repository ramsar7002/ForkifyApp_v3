import icons from 'url:../../img/icons.svg';
import previewView from './previewView';
import View from './view';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errMessage = 'No Recipes found for your query! Please try again';
  _message = '';

  _generateMarkup() {
    return this._data.map(item => previewView.render(item, false)).join('');
  }
}

export default new ResultsView();
