import { render, screen } from '@testing-library/react';
import CardHome from './card-home';


const mockComic = {
  id: 1,
  title: 'Test Comic',
  thumbnail: {
    path: 'path/to/image',
    extension: 'jpg',
  },
};

describe('CardHome', () => {
  it('should render the comic title', () => {
    render(<CardHome description={''} oldPrice={0} price={0} stock={0} characters={{
        items: []
    }} {...mockComic} />);
    const titleElement = screen.getByText('Test Comic');
    expect(titleElement).toBeInTheDocument();
  });

  it('should render the "BUY" button', () => {
    render(<CardHome description={''} oldPrice={0} price={0} stock={0} characters={{
        items: []
    }} {...mockComic} />);
    const buyButton = screen.getByText('BUY');
    expect(buyButton).toBeInTheDocument();
  });

  it('should render the "VIEW DETAIL" button with a link to the comic detail page', () => {
    render(<CardHome description={''} oldPrice={0} price={0} stock={0} characters={{
        items: []
    }} {...mockComic} />);
    const viewDetailButton = screen.getByText('VIEW DETAIL');
    expect(viewDetailButton).toBeInTheDocument();

  });
});