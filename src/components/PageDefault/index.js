import Footer from '../Footer'
import Header from '../Header'
import Main from '../Main'

export default function Home({ children }) {
    return (
        <>
            <Header />
            <Main>
                {children}
            </Main>
            <Footer />
        </>
    )
}