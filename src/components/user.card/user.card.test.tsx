import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { User } from '../../models/user.model';
import { UserCard } from './user.card';

const mockUser = {
  id: 1,
  name: 'Cova',
  email: 'cova@email.com',
  address: {
    city: 'Gijón',
    zipcode: '33202',
  },
  company: {
    name: 'Company',
  },
} as unknown as User;
describe('Given UserCard component', () => {
  describe('When it is rendered', () => {
    beforeEach(() => {
      render(
        <Router>
          <UserCard item={mockUser}></UserCard>
        </Router>
      );
    });

    test('Then the "full name" field should be in the document', () => {
      const element = screen.getByText('Full name:');
      expect(element).toBeInTheDocument();
    });
  });
});
