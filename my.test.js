// import React from 'react';
// import Enzyme from 'enzyme';
// import { configure } from 'enzyme';
// import { shallow, mount, render } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

// // const wrapper = shallow(<Foo />);

// configure({ adapter: new Adapter() });

test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});

// example of a STATIC RENDER MARKUP

// import Foo from './Foo';

// describe('<Foo />', () => {
//   it('renders three `.foo-bar`s', () => {
//     const wrapper = render(<Foo />);
//     expect(wrapper.find('.foo-bar')).to.have.lengthOf(3);
//   });

//   it('renders the title', () => {
//     const wrapper = render(<Foo title="unique" />);
//     expect(wrapper.text()).to.contain('unique');
//   });
// });
