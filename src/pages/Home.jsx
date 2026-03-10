import '../index.css'
import NavSearch from '../components/NavSearch';
import ScrollTopButton from '../components/ScrollTopButton';
import { Hero, Footer, Categories, PopularProducts, CardPhoto, Brands, NikeBrand, TravisScott  } from '../sections/export';
import photoCard from '../assets/new images/photo_card.webp'
import photoCard2 from '../assets/new images/photo_card2.webp'
import lakersMobile from '../assets/new images/lakers_mobile.webp'
import airmax95Mobile from '../assets/new images/airmax95_mobile.webp'


function Home({sneakers}) {

  const isHome = true

  return (
    <main className='2xl:container mx-auto'>

      <ScrollTopButton />
      
      <NavSearch isHome={isHome} />

      <section className='py-15'>
        <Hero />
      </section>

      <section className='padding-x'>
        <PopularProducts sneakers={sneakers}/>
      </section>

      <section className='padding-x py-15'>
        <Categories />
      </section>

      <section>
        <CardPhoto photo={photoCard2} photoMobile={airmax95Mobile} />
      </section>
    
      <section className='py-15 padding-x'>
        <Brands />
      </section>

      <section className='padding-x'>
          <TravisScott sneakers={sneakers}/>
      </section>

      <section className='py-15'>
          <CardPhoto photo={photoCard} photoMobile={lakersMobile} />
      </section>

      <section className='padding-x pb-15'>
          <NikeBrand sneakers={sneakers}/>
      </section>    

      <section className='padding bg-black'>
        <Footer />
      </section>

    </main>
  )
}

export default Home
