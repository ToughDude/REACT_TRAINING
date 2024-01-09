import {fireEvent, render, screen} from '@testing-library/react'
import ProductList from '../components/ProductList'

// test spec
it("renders <ProductList />", () => {
    render(<ProductList />);

    let elem = screen.getByText(/iPhone 14/i);
    expect(elem).toBeInTheDocument();
})

it("delete a Product <ProductList />", () => {
    render(<ProductList />);

    let btns = screen.getAllByRole('button');

    fireEvent.click(btns[3]);

    btns = screen.getAllByRole('button');

    expect(btns.length).toBe(4);

})


it("filter Products <ProductList />", () => {
    let {container} = render(<ProductList />);

    let txtBox = screen.getByPlaceholderText("search by name");

    fireEvent.change(txtBox, {"target":{"value": "Mac"}});
    screen.debug();
    
    let cards = container.querySelectorAll(".card");

    expect(cards.length).toBe(1);

})