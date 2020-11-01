import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import './home.component.scss';

const Home = ({ user, fetchUser }) => {
  const { t, i18n } = useTranslation('home');

  const changeLanguage = (language) => i18n.changeLanguage(language);

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className='home'>
      <div className='home__language-picker'>
        <span
          className={
            i18n.language === 'en'
              ? 'home__language-picker__language-btn home__language-picker__language-btn--selected'
              : 'home__language-picker__language-btn'
          }
          onClick={() => changeLanguage('en')}
        >
          EN
        </span>
        <span
          className={
            i18n.language === 'fr'
              ? 'home__language-picker__language-btn home__language-picker__language-btn--selected'
              : 'home__language-picker__language-btn'
          }
          onClick={() => changeLanguage('fr')}
        >
          FR
        </span>
      </div>
      {user && (
        <div className='home__profile'>
          <img className='home__profile__avatar' src={user.picture.large} alt='avatar' />
          <h1>{t('greeting', { name: `${user.name.last.toUpperCase()}, ${user.name.first}` })}</h1>
          <p>
            <span className='home__profile__label'>
              {t('email')}
              :
            </span>
            {' '}
            {user.email}
          </p>
          <p>
            <span className='home__profile__label'>
              {t('phone')}
              :
            </span>
            {' '}
            {user.phone}
          </p>
        </div>
      )}
    </div>
  );
};

Home.propTypes = {
  user: PropTypes.shape({
    picture: PropTypes.shape({ large: PropTypes.string }),
    name: PropTypes.shape({ first: PropTypes.string, last: PropTypes.string }),
    email: PropTypes.string,
    phone: PropTypes.string,
  }),
  fetchUser: PropTypes.func,
};

Home.defaultProps = {
  user: null,
  fetchUser: () => {},
};

export default Home;
