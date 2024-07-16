// import node module libraries
import { Fragment } from 'react'
import { Container } from 'react-bootstrap'

// import widget/custom components
import { HermenautasSEO } from '../widgets'

// import sub components
import {
  JustifiedGallery,
  AboutFeaturesList,
  HeroContent,
  CTAButton,
  Stat,
} from '../components/about-us'

const About = () => {
  return (
    <Fragment>
      {/* Geeks SEO settings  */}
      <HermenautasSEO title="About us | Geeks Nextjs Template" />

      <section className="py-10 bg-white">
        <Container>
          {/* Hero Title */}
          <HeroContent />

          {/* Justified Gallery Section */}
          <JustifiedGallery />

          {/* 4 Columns Stat */}
          <Stat />
        </Container>
      </section>

      {/* Three Columns Features Section */}
      <AboutFeaturesList />

      {/* Hero Call to Action */}
      <CTAButton />
    </Fragment>
  )
}

export default About
