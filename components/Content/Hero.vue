<script setup>
const { data: randomImages } = await useAsyncData('randomImages', async () => {
  const response = await fetch('https://randomuser.me/api/?results=15');
  const data = await response.json();
  return data.results.map(user => user.picture.thumbnail);
});

const images = ref([
  'https://mockup-a0p.pages.dev/images/slideshow/1.JPG',
  'https://mockup-a0p.pages.dev/images/slideshow/2.JPG',
  'https://mockup-a0p.pages.dev/images/slideshow/3.JPG',
  'https://mockup-a0p.pages.dev/images/slideshow/4.JPG',
  'https://mockup-a0p.pages.dev/images/slideshow/5.JPG',
  'https://mockup-a0p.pages.dev/images/slideshow/6.JPG',
  'https://mockup-a0p.pages.dev/images/slideshow/7.JPG',
  'https://mockup-a0p.pages.dev/images/slideshow/8.JPG',
  'https://mockup-a0p.pages.dev/images/slideshow/9.JPG'
]);
</script>

<template>
  <div class="page-container d-flex justify-content-center min-vh-100 ">
    <div class="content-wrapper">
      <div class="media-container bg-carpluz-light d-flex flex-column">
        <header class="header-container row">
          <div class="col-md-3 col-6 order-1 order-md-1 ">
            <nuxt-img 
              provider="cloudinary"
              src="https://mockup-a0p.pages.dev/images/logo/logo_white.png"
              format="webp"
              width="auto"
              height="80"
              quality="auto"
              loading="eager"
              class="main-logo"
              alt="Company Logo"
            />
          </div>
          <div class="col-md-4 col-6 d-flex align-items-center justify-content-end order-2 order-md-3 pe-2">
            <HeroCallZone />
          </div>
          <div class="col-md-5 col-12 d-flex align-items-center justify-content-start order-3 order-md-2">
            <HeroMarqueeUsers :images="randomImages" />
          </div>
        </header>
        <main class="body-container row flex-grow-1">
          <div class="col-md-6 col-12 d-flex flex-column">
            <HeroProviderInfo class="provider-info order-md-1 order-2" />
            <HeroSplideSlider :images="images" class="splide-slider order-md-2 order-1" />
          </div>
          <div class="col-md-6 col-12 car-zone">
            <HeroCarBox />
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<style scoped>
.provider-info{
    padding:20px;
}
.splide-slider{
    padding-left:20px !important;
    padding-right:20px !important;
}
.page-container {
  align-items: center;
}

.content-wrapper {
  max-width: 1240px;
  width: 100%;
  height: 100%;
  max-height: 697px;
}

.media-container {
  border: 2px solid #555;
  border-radius: 15px;
}

.header-container,
.body-container {
  padding: 10px;
}

.main-logo {
  height: 80px;
}



.car-zone {
  padding-left: 30px;
  padding-right: 30px;
}

@media (max-width: 1200px) {
  .page-container {
    align-items: flex-start;
  }

  .content-wrapper {
    height: auto;
    min-height: 100vh;
    max-height: none;
  }

  .media-container {
    border: none;
    border-radius: 0;
  }

  .main-logo {
    height: 60px;
  }

  .car-zone {
    padding-left: 15px;
    padding-right: 15px;
  }
  .splide-slider{
    padding:0;
    padding-top:5px;
   }

}

@media (max-width: 480px) {
  .header-container {
    padding: 5px;
  }

  .body-container {
    padding: 0;
  }

  .main-logo {
    height: 60px;
  }

  .car-zone {
    padding: 0;
  }
  .splide-slider{
    padding:0 !important;
    padding-top:5px;
   }

}
</style>