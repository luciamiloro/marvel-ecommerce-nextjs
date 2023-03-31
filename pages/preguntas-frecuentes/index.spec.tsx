import {render, screen} from "@testing-library/react";

import Faqs from "dh-marvel/pages/preguntas-frecuentes/index.page";


describe('FaqsPage', () => {
    describe('when rendering default', () => {
        it('should render the title', () => {
            render(<Faqs faqs={[]} /> )
            const title = screen.getByText('Preguntas Frecuentes')
            expect(title).toBeInTheDocument()
        })
        it('should render the question', () => {
            render(<Faqs faqs={[ 
                {id: 1,
                question: "¿Cuántos comics tienen?",
                answer: "Actualmente disponemos de toda la colección de Marvel. Algunos ejemplares pueden contar con poca o nula disponibilidad por el momento. Para mas información puede acceder a https://marvel.com"}
                  ]} />)
            const quest = screen.getByText('¿Cuántos comics tienen?')
            expect(quest).toBeInTheDocument()
        })
        it('should render the question', () => {
            render(<Faqs faqs={[ 
                {id: 2,
                question: "¿Se puede reservar nuevos lanzamientos?",
                answer: "Lamentablemente nuestro sitio todavía no acepta reservas anticipadas. Pero nos encontramos trabajando en esa funcionalidad. Seguí nuestro twitter para estar al tanto de las ultimas novedades."}
                  ]} />)
            const quest = screen.getByText('¿Se puede reservar nuevos lanzamientos?')
            expect(quest).toBeInTheDocument()
        })
        it('should render the question', () => {
            render(<Faqs faqs={[ 
                {id: 3,
                question: "¿Cuanto demoran las entregas?",
                answer: "Todas nuestras entregas son enviadas a través de DH-Express, que alcanza a todo el país en 24hs."}
                  ]} />)
            const quest = screen.getByText('¿Cuanto demoran las entregas?')
            expect(quest).toBeInTheDocument()
        })
        it('should render the question', () => {
            render(<Faqs faqs={[ 
                {id: 4,
                question: "¿Qué métodos de pago están disponibles?",
                answer: "Solo se aceptan tarjetas de crédito Visa y Mastercard. De momento no aceptamos pagos en efectivo u otros medios."}
                  ]} />)
            const quest = screen.getByText('¿Qué métodos de pago están disponibles?')
            expect(quest).toBeInTheDocument()
        })
        it('should render the question', () => {
            render(<Faqs faqs={[ 
                {id: 5,
                question: "¿Se aceptan devoluciones?",
                answer: "Nuestras compras aceptan devoluciones siempre y cuando el comic se encuentre en su envoltorio original, ya que de otra forma pierden el valor de reventa. Si desea devolverlo y se encuentra en las mismas condiciones en las que fue enviado, comuníquese con el 11-5555-0001 para resolver la devolución."}
                  ]} />)
            const quest = screen.getByText('¿Se aceptan devoluciones?')
            expect(quest).toBeInTheDocument()
        })
    })

})