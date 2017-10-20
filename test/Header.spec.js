import React from 'react';
import { shallow } from 'enzyme';
import Header from '../src/components/Header'

describe('<Header/>', () => {



    it ('should render Header', () => {
        const renderedComponent = shallow(
            <Header/>
        );
       expect(renderedComponent).toMatchSnapshot();
    });

    /*it ('test onSubmit', () => {
        const onSubmit = jest.fn();
        const value = 'submit';
        const history = { push: jest.fn(value)};
        const renderedCompanent = shallow(
          <Header history={history}/>
        );
        renderedCompanent.find('form').simulate('submit');
        expect(history).toBeCalledWith();
    });
*/


});
