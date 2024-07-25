import { Fragment } from 'react';

// import Home components
import {
  HomeStats,
  HomeHero,
  HomeRecentPost,
  HomeFeatures,
  HomeFeatures4Columns,
} from '../../frontend/src/components/Home';
import { HeroFormLeft, HeroLeftImage, HeroRightImage } from '../../frontend/src/components/ui';

const Home = () => {
  return (
    <Fragment>
      {/* Hero Home banner section */}
      <HomeHero />

      {/* Various business statistics  */}
      <HomeStats />

      {/* Content  */}
      <HeroRightImage />

      <HeroLeftImage />

      <HomeFeatures4Columns />

      {/* Latest post  */}
      <HomeRecentPost />

      {/* Features  */}
      <HomeFeatures />

      {/* CTA newsletter */}
      <HeroFormLeft />
    </Fragment>
  );
};

export default Home;
