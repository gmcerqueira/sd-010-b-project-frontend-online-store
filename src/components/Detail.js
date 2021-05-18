import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class Detail extends React.Component {
  constructor() {
    super();

    this.state = {
      produto: {},
      loading: true,
    };

    this.recuperarProduto = this.recuperarProduto.bind(this);
  }

  componentDidMount() {
    this.recuperarProduto();
  }

  async recuperarProduto() {
    const { match: { params: { id } } } = this.props;
    const title = id.split('-')[1];
    const idProduto = id.split('-')[0];
    const search = await api.getProductsFromCategoryAndQuery(null, title);
    const produto = Object.entries(search.results);
    produto.find((resultado) => resultado[1].id === idProduto);
    this.setState({ produto: produto[1], loading: false });
  }

  render() {
    const { produto, loading } = this.state;
    return (
      <div>
        { !loading
          && <div>
            <img src={ produto[1].thumbnail } alt={ produto[1].title } />
            <span data-testid="product-detail-name">{ produto[1].title }</span>
            <span>{ produto[1].price }</span>
            <ol>
              {
                produto[1].attributes.map((atributos) => (
                  <li key={ atributos.id }>
                    { `${atributos.name}: ${atributos.value_name}` }
                  </li>
                ))
              }
            </ol>
             </div>}
      </div>
    );
  }
}

Detail.propTypes = {
  id: PropTypes.string,
}.isRequired;

export default Detail;
