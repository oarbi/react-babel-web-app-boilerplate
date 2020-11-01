import React from 'react';
import { shallow } from 'enzyme';
import Home from './home.component';

describe('Home Component', () => {
  it('should render correctly', () => {
    const user = {
      name: {
        first: 'Brad',
        last: 'Gibson',
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/75.jpg',
      },
      email: 'brad.gibson@example.com',
      phone: '011-962-7516',
    };
    const component = shallow(<Home user={user} />);

    expect(component).toMatchSnapshot();
  });
});
