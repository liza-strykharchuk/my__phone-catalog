import { NavLink } from 'react-router-dom';
import { isActiveTab } from '../../helpers/utils';
import './HeaderMenu.scss';

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const HeaderMenu: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  return (
    <nav className={`menu__nav ${isOpen ? 'open' : ''}`}>
      <ul className="menu__nav--list">
        <li className="nav__item">
          <NavLink
            to="/"
            className={isActiveTab}
            onClick={() => setIsOpen(!isOpen)}
          >
            Home
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/phones"
            className={isActiveTab}
            onClick={() => setIsOpen(!isOpen)}
          >
            Phones
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/tablets"
            className={isActiveTab}
            onClick={() => setIsOpen(!isOpen)}
          >
            Tablets
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/accessories"
            className={isActiveTab}
            onClick={() => setIsOpen(!isOpen)}
          >
            Accessories
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="favourites"
            className={isActiveTab}
            onClick={() => setIsOpen(!isOpen)}
          >
            Favourites
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="addPage"
            className={isActiveTab}
            onClick={() => setIsOpen(!isOpen)}
          >
            Cart
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
