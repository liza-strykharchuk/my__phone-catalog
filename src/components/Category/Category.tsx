import React from 'react';

import { Link } from 'react-router-dom';

import { Product } from '../../helpers/Product';

import './Category.scss';

type Props = {
  product: Product[]
};

export const Category: React.FC<Props> = ({ product }) => {
  const getLengthByCategory = (arr: Product[], category: string) => {
    return arr.filter(pr => pr.category === category).length;
  };

  return (
    <div className="category">

      <div className="category__header">
        Shop by category
      </div>

      <div className="category__container">
        <Link to="/phones" className="category__phone">
          <div className="category__img--phone category__img" />
          <div className="category__title">
            Mobile phones
          </div>
          <div className="category__name">
            {getLengthByCategory(product, 'phones') }
            {' '}
            models
          </div>
        </Link>

        <Link to="/tablets" className="category__tablets">
          <div className="category__img--tablets category__img" />
          <div className="category__title">
            Tablets
          </div>
          <div className="category__name">
            {getLengthByCategory(product, 'tablets') }
            {' '}
            models
          </div>
        </Link>

        <Link to="/accessories" className="category__accessories">
          <div className="category__img--accessories category__img" />
          <div className="category__title">
            Accessories
          </div>
          <div className="category__name">
            {getLengthByCategory(product, 'accessories') }
            {' '}
            models
          </div>
        </Link>
      </div>
    </div>

  );
};
