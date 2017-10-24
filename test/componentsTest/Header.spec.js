import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../src/components/Header/Header'


describe('<Header/>', () => {

    it ('should render Header', () => {
        const renderedComponent = shallow(
            <Header/>
        );
       expect(renderedComponent).toMatchSnapshot();
    });

    it ('should call handleChange on input changes', () => {
        const history = {
            push: jest.fn()
        };

        const renderedComponent = shallow(
            <Header history={history}/>);

        renderedComponent.find('input').simulate('change', { target: { value: 'Test' }});
        renderedComponent.find('.searchDiv').simulate('submit', {preventDefault:jest.fn()});
        expect(history.push).toBeCalledWith('/search/Test');
    })

});
