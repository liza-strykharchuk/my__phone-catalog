import React, { useState, useMemo, useEffect } from 'react';

import cn from 'classnames';

import { Product } from '../../helpers/Product';
import { Phone } from '../Phone/Phone';
import { filterPr } from '../../helpers/utils';

import './ProductSlider.scss';

type Props = {
  products: Product[];
  filterBy: string;
  title: string;
  onLikeClick: (product: Product) => void;
  likeProduct: Product[];
  addProduct: Product[];
  onAddtoChart: (product: Product) => void;
};

export const ProductSlider: React.FC<Props> = ({
  products,
  filterBy,
  title,
  onLikeClick,
  likeProduct,
  addProduct,
  onAddtoChart,
}) => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCardCount, setVisibleCardCount] = useState(4);

  const handlePrevClick = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNextClick = () => {
    setStartIndex((prev) => Math.min(
      prev + 1, products.length - visibleCardCount,
    ));
  };

  const updateVisibleCardCount = () => {
    const newVisibleCardCount = window.innerWidth <= 1024 ? 1 : 4;

    setVisibleCardCount(newVisibleCardCount);
  };

  useEffect(() => {
    updateVisibleCardCount();
    window.addEventListener('resize', updateVisibleCardCount);

    return () => {
      window.removeEventListener('resize', updateVisibleCardCount);
    };
  }, []);

  const visibleCards = useMemo(() => {
    const newPr = filterPr(products, filterBy);

    return newPr.slice(startIndex, startIndex + visibleCardCount);
  }, [products, startIndex, filterBy, visibleCardCount]);

  const prevDisables = startIndex === 0;
  const nextDisables = startIndex === products.length - visibleCardCount;

  return (
    <div className="products">
      <div className="products__container--header">
        <h1 className="products__header">{title}</h1>

        <div>
          <button
            type="button"
            onClick={handlePrevClick}
            disabled={prevDisables}
            className={cn('sliderButton sliderButton--prev', {
              disabled: prevDisables,
            })}
          >
            {' '}
          </button>
          <button
            type="button"
            onClick={handleNextClick}
            disabled={nextDisables}
            className={cn('sliderButton sliderButton--next', {
              disabled: nextDisables,
            })}
          >
            {' '}
          </button>
        </div>
      </div>

      <ul className="products__container">
        {visibleCards.map((phone) => (
          <Phone
            product={phone}
            key={phone.id}
            onLikeClick={onLikeClick}
            likeProduct={likeProduct}
            addProduct={addProduct}
            onAddtoChart={onAddtoChart}
          />
        ))}
      </ul>
    </div>
  );
};
