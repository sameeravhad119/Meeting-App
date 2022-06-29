// import { screen } from '@testing-library/react';
import render, { screen } from '../src/utils/test.utils';
import App from './App';
import OverviewPage from './pages/OverviewPage';

test('renders learn react link', () => {
  render(<OverviewPage />);
  let total= screen.getAllByText('Total',{exact:false});
  screen.debug();
});
