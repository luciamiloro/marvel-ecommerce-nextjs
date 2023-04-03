import {render, screen} from "@testing-library/react";
import IndexPage from "dh-marvel/pages/index.page";
import Index from "dh-marvel/pages/index.page";

describe('IndexPage', () => {
    describe('when rendering default', () => {
        it('should render the title', () => {
            render(<Index data={{
                count: 0,
                limit: 0,
                offset: 0,
                results: [],
                total: 0
            }}/>)
            const title = screen.getByText('Marvel Comics')
            expect(title).toBeInTheDocument()
        })
    })

})