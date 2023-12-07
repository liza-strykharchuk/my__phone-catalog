import React, { useEffect, useState } from 'react';

import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import { Product } from '../../helpers/Product';
import './HeaderStyles.scss';
import { Search } from '../Search/Search';

import { isActiveTab, isActiveAdd, isActiveLike } from '../../helpers/utils';
import { HeaderMenu } from '../HeaderMenu/HeaderMenu';

type Props = {
  likeProduct: Product[],
  addProduct: Product[],
};

export const HeaderOnPage: React.FC<Props> = ({ likeProduct, addProduct }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1024);
  const [isOpen, setIsOpen] = useState(false);

  const { pathname } = useLocation();

  const path = ['/phones', '/tablets', '/accessories'];

  const showSearch = path.includes(pathname);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1024);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const mainBody = document.body;

  mainBody.style.overflow = isOpen ? 'hidden' : 'auto';

  return (
    <>
      <header className="header">
        <div className="container">
          <NavLink
            to="/"
            className="header__img"
          />

          {!isSmallScreen && (
            <nav className="nav">
              <ul className="nav__list">
                <li className="nav__item">
                  <NavLink to="/" className={isActiveTab}>
                    Home
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink to="/phones" className={isActiveTab}>
                    Phones
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink to="/tablets" className={isActiveTab}>
                    Tablets
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink to="/accessories" className={isActiveTab}>
                    Accessories
                  </NavLink>
                </li>
              </ul>
            </nav>
          )}
        </div>

        <div className="header__buttons">
          {showSearch && !isOpen ? <Search /> : null}

          {isSmallScreen ? (
          //  eslint-disable-next-line
            <button
              type="button"
              onClick={() => handleMenuToggle()}
              className="header__chose nav__burger"
            />
          )
            : (
              <>
                <NavLink to="favourites" className={isActiveLike}>
                  {likeProduct.length !== 0 && (
                    <div className="header__amount">
                      {likeProduct.length}
                    </div>
                  )}
                </NavLink>

                <NavLink to="addPage" className={isActiveAdd}>
                  {addProduct.length !== 0 && (
                    <div className="header__amount">
                      {addProduct.length}
                    </div>
                  )}
                </NavLink>
              </>
            )}
        </div>
      </header>

      <HeaderMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};
