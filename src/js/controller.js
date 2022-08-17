import * as model from './model.js';
import receipeView from './views/receipeView';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';

const controlRecipes = async () => {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    receipeView.renderSpiner();
    //Loading recipe
    await model.loadRecipe(id);

    receipeView.render(model.state.recipe);
  } catch (err) {
    receipeView.renderError();
  }
};

const controlSearchResults = async e => {
  try {
    //get search qurey
    const query = searchView.getQuery();

    if (!query) return;
    resultsView.renderSpiner();

    //get results from api
    await model.loadSearchResults(query);

    //render results
    resultsView.render(model.getSearchResultsPage());

    //render initial pagination
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const controlPagination = goToPage => {
  resultsView.render(model.getSearchResultsPage(goToPage));
  paginationView.render(model.state.search);
};

const init = function () {
  receipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
};
init();
