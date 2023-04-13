import {render, screen} from "@testing-library/react";
import IndexPage from "dh-marvel/pages/index.page";
import Index from "dh-marvel/pages/index.page";
import comics from "dh-marvel/test/mocks/comics";

describe('IndexPage', () => {
    describe('when rendering default', () => {
        it("should render the page with the correct title", () => {
            const { getByTitle } = render(<Index comics={[]} totalComics={0} />);
            expect(getByTitle("Marvel Comics")).toBeInTheDocument();
        })
    })
    

})