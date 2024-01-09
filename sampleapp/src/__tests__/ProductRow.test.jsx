import { fireEvent, render, screen } from '@testing-library/react'
import ProductRow from '../components/ProductRow';

// Test Suite
describe("testing <ProductRow />", () => {
    let mockProduct = {};
    let callback = null;

    beforeEach(() => {
        mockProduct = {
            id: 123,
            name: 'Samsung Monitor',
            price: 8900.00,
            category: 'computer'
        }

        callback = jest.fn(); // mock function
    });
    it("testing Render <ProductRow />", () => {
        render(<ProductRow
            delEvent={(id) => callback(id)}
            key={mockProduct.id}
            product={mockProduct} />);

        let elem = screen.getByText(/Samsung/i);
        expect(elem).toBeInTheDocument();
    })

    it("test delete <ProductRow />", () => {
        render(<ProductRow
            delEvent={(id) => callback(id)}
            key={mockProduct.id}
            product={mockProduct} />);

        let elem = screen.getByRole('button');
        fireEvent.click(elem);

        expect(callback).toBeCalledTimes(1);
        expect(callback).toBeCalledWith(123);
    })
});