import 'jest-styled-components';
import Main from '../components/Main/Main';
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
//import { MyButton } from '../Reusables/buttons';
//import Main from '../components/Main/Main';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

// it('calls "onClick" prop on button click', () => {
//     render(<App/>);
//     const onClick = jest.fn();
//     const { getByText } = render(<MyButton onClick={removeHandler} />);
  
//     fireEvent.click(getByText(i));
//     expect(onClick).toHaveBeenCalled();
//   });

describe('Main test', () => {
  const movieSearchHandler = jest.fn();
  let movieSearch = '';

  beforeEach(() => {
    movieSearchHandler.mockClear();
    movieSearch = '';
  });

  test('Main input should render', async () => {
    const { getByRole } = render(
      <Main movieSearch={movieSearch} movieSearchHandler={movieSearchHandler} />
    );

    const searchBarInput = await getByRole('textbox', { name: '' });

    expect(searchBarInput).toBeInTheDocument();
  });
});
