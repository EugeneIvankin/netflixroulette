import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../src/components/NotFound';

describe('<NotFound />', () => {

    it('should render NotFound', () => {
        const renderedComponent = shallow(
            <NotFound />
        );
        expect(renderedComponent).toMatchSnapshot();
    });

});