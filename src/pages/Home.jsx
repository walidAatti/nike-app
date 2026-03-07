import '../index.css'
import {Nav, PopularProducts, QualityProducts, Services, SpecialOffer, CustomersReviews, NewsLetter, Footer, Hero} from '../sections/export';
import NavSearch from '../components/NavSearch';
import ScrollTopButton from '../components/ScrollTopButton';

function Home() {

  const isHome = true

  return (
    <main className='2xl:container mx-auto'>

      <ScrollTopButton />
      
      <NavSearch isHome={isHome} />

      <section className='padding-b' id='home'> {/* xl:padding-l wide:padding-r */}
        <Hero />
      </section>

      <section className='padding ' id="products">
        <PopularProducts />
      </section>

      <section className='padding '>
        <QualityProducts />
      </section>

      <section className='padding '>
        <Services />
      </section>
    
      <section className='padding '>
        <SpecialOffer />
      </section>

      <section className='padding bg-pale-blue ' id='about-us'>
        <CustomersReviews />
      </section>


      <section className='padding-x py-16 sm:py-32 '>
        <NewsLetter />
      </section>

      <section className='bg-black pb-8 padding-t padding-x ' id='contact-us'>
        <Footer />
      </section>
    

    </main>
  )
}

export default Home
