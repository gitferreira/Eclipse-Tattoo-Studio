"use client"

import React from "react";
import ReactDOM from 'react-dom/client'
import EmblaCarousel from './EmblaCarousel'
import './embla.css'


const OPTIONS = { dragFree: true, loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Carousel() {
  return (
    <EmblaCarousel slides={SLIDES} options={OPTIONS} />
  );
}
