import { NavLink } from 'react-router-dom';
import { isActiveTab } from '../../helpers/utils';
import './HeaderMenu.scss';

export const HeaderMenu = () => {
  return (
    <nav className="menu__nav">
      <ul className="menu__nav--list">
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
  );
};
