'use client'

import React, { useState, useEffect } from 'react';
import Header from './header';
import Full from './full';
import Hom from './home';
import Setting from './setting';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Dexie from 'dexie';
import { useLiveQuery } from 'dexie-react-hooks';

export const db = new Dexie('myDatabase');
db.version(1).stores({ swipe: '++id, loc' });

export default function page() {
  const [firstSwiper, swiper] = useState(null);

  useEffect(() => {
    async function getPage(swiper) {
      const swipecount = await db.swipe.toArray();
      const Page = swipecount[0].value;
      console.log(Page);
      if (Page > 0) swiper.slideTo(Page, 0);
    }
    getPage(firstSwiper);
  }, [firstSwiper]);

  async function onChange(page) {
    try {
      await db.swipe.put({ key: '1', value: page });
    } catch (err) {
      console.log(err);
    }
  }

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      const slide = document.querySelectorAll('.swiper-slide')[index];
      const dataName = slide.getAttribute('data-name');
      return '<button class="' + className + '">' + dataName + '</button>';
    },
  };

  return (
    <main>
      <Header />
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
        loop={true}
        keyboard={{ enabled: true }}
        onSwiper={swiper => {
          swiper && swiper.on('slideChange', () => onChange(swiper.activeIndex));
          swiper && swiper.on('init', () => getPage(swiper));
        }}
        hashNavigation={{ watchState: true }}
      >
        <SwiperSlide data-name="Home" className="Home">
          <Hom />
        </SwiperSlide>
        <SwiperSlide data-name="Full">
          <Full />
        </SwiperSlide>
        <SwiperSlide data-name="Setting" className="Setting">
          <Setting />
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
