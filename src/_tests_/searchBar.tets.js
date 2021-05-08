// import 'jest-styled-components';

// import * as React from 'react';

// import Main from '../components/Main/Main';
// import { render } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";

// describe('Main test for component', () => {
//   const movieSearchHandler = jest.fn();
//   let movieSearch = '';

//   beforeEach(() => {
//     movieSearchHandler.mockClear();
//     movieSearch = '';
//   });

//   test('Main input should render', async () => {
//     const { getByRole } = render(
//       <Main movieSearch={movieSearch} movieSearchHandler={movieSearchHandler} />
//     );

//     const searchBarInput = await getByRole("search", { name: "Search bar" });

//     expect(searchBarInput).toBeInTheDocument();
//   });

//   test('Main search bar should display text', async () => {
//     const { getByRole } = render(
//       <Main movieSearch={movieSearch} movieSearchHandler={movieSearchHandler} />
//     );

//     const inputSearch = await getByRole('main', { name: 'main' });

//     userEvent.type(inputSearch, 'cats');

//     expect(movieSearchHandler).toHaveBeenCalledTimes(4)
//   });
// });
