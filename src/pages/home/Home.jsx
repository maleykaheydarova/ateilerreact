import React from 'react'
import HomeSwiper from './HomeSwiper'
import ContentArea from './ContentArea'
import TrendingArea from './TrendingArea'
import WavyArea from './WavyArea'
import BriefArea from './BriefArea'
import FeatureArea from './FeatureArea'
import NewsArea from './NewsArea'
import BannerArea from './BannerArea'


const Home = () => {
  return (
    <>
      <HomeSwiper />
      <ContentArea />
      <TrendingArea />
      <WavyArea />
      <BriefArea />
      <FeatureArea />
      <NewsArea />
      <BannerArea />
    </>
  )
}

export default Home