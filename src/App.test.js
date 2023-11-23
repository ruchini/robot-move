import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NavigatorButtons', () => {
  render(<App />);
  const navigatorButtonsElement = screen.getByTestId('navigator-buttons');
  expect(navigatorButtonsElement).toBeInTheDocument();
});
