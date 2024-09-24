import {BrowserRouter as Router } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {DogDetails} from './routesList';
import { render } from '@testing-library/react'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

test('renders DogDetails component', () => {
  useParams.mockReturnValue({ name: 'duke' });

  render(
    <Router>
      <DogDetails />
    </Router>
  );
});