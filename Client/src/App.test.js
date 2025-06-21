import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RouteApp from './RouteApp';
import Swal from 'sweetalert2';
import '@testing-library/jest-dom'; // Dla matcherów takich jak toBeInTheDocument
import OrderPage, { Basket } from "./Pages/Basket";
import { AppContext } from './Store/AppContext';

// Mock SweetAlert2
// Tworzymy mock dla całej biblioteki sweetalert2
jest.mock('sweetalert2', () => ({
  // Mockujemy tylko metodę 'fire' jako funkcję Jesta
  fire: jest.fn(),
}));

describe('OrderPage', () => {
  beforeEach(() => {
    Swal.fire.mockClear(); // Resetuj mock Swal.fire przed każdym testem
  });

  it('should render the Send button', () => {
    render(
      <AppContext>
        <OrderPage />
      </AppContext>);

    const sendButton = screen.getByRole('button', { name: /Place an order/i });
    expect(sendButton).toBeInTheDocument();
  });

  it('should show success alert when Send button is clicked', async () => {
    render(
      <AppContext>
        <OrderPage />
      </AppContext>
    );

    const input = screen.getByTestId('address');
    console.log('input', input);
    fireEvent.change(input, { target: { value: 'Warszawa, ul. Testowa 123' } });
console.log('input2', input);
    const sendButton = screen.getByRole('button', { name: /Place an order/i });
    await userEvent.click(sendButton);

    // sprawdzenie wywołania SweetAlert z odpowiednimi parametrami
    expect(Swal.fire).toHaveBeenCalledTimes(1);
    expect(Swal.fire).toHaveBeenCalledWith(
      expect.objectContaining({
        title: 'Good job!',
        icon: 'success'
      })
    );
  });
});

describe('BasketForm', () => {
  it('wysyła formularz z wpisanym adresem', () => {
    const mockSubmit = jest.fn();
    render(<AppContext><Basket onSubmit={mockSubmit} /></AppContext>);


    const input = screen.getByTestId('address');
    const button = screen.getByTestId('placeorder');

    fireEvent.change(input, { target: { value: 'Warszawa, ul. Testowa 123' } });
    fireEvent.click(button);

    expect(mockSubmit).toHaveBeenCalledTimes(1);
    expect(mockSubmit).toHaveBeenCalledWith('Warszawa, ul. Testowa 123');
  });

  it('nie wysyła formularza, jeśli input jest pusty', () => {
    const mockSubmit = jest.fn();
    render(<AppContext><Basket onSubmit={mockSubmit} /></AppContext>);

    fireEvent.click(screen.getByTestId('placeorder'));

    expect(mockSubmit).not.toHaveBeenCalled();
  });
});

test('renders learn react link', () => {
  render(<RouteApp />);
  const linkElement = screen.getByText(/2024 Company, Inc/i);
  expect(linkElement).toBeInTheDocument();
});


// Greeting.js
function Greeting({ name }) {
  return <h1>Witaj, {name}!</h1>;
}

// Greeting.test.js
test('powinien wyświetlić powitanie z imieniem', () => {
  render(<Greeting name="Jan" />);
  expect(screen.getByText(/Witaj, Jan!/i)).toBeInTheDocument();
});

test('powinien obsłużyć brak imienia', () => {
  render(<Greeting />);
  expect(screen.getByText(/Witaj, !/i)).toBeInTheDocument();
});

