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
  <div class="page-container d-flex justify-content-center min-vh-100">
    <div class="content-wrapper">
      <div class="media-container bg-carpluz-light d-flex flex-column">
        <header class="header-container row">
          <div class="col-md-4 col-6 order-1 order-md-1">
            <nuxt-img 
              provider="cloudinary"
              src="https://mockup-a0p.pages.dev/images/logo/logo_white.png"
              width="379"
              height="108"
              format="webp"
              quality="auto"
              loading="eager"
              class="main-logo"
              alt="Company Logo"
            />
          </div>
          <div class="col-md-3 col-6 d-flex align-items-center justify-content-end order-2 order-md-3">
            <CallZone />
          </div>
          <div class="col-md-5 col-12 d-flex align-items-center justify-content-start order-3 order-md-2">
            <Marquee :images="randomImages" />
          </div>
        </header>
        <main class="body-container row flex-grow-1">
          <div class="col-md-6 col-12 d-flex flex-column">
            <ProviderInfo class="order-md-1 order-2" />
            <SplideSlider :images="images" class="order-md-2 order-1" />
          </div>
          <div class="col-md-6 col-12 car-zone">
            <CarBox />
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
  width: 100%;
  height: auto;
}

.bg-carpluz-light {
  background: #F1EFE7 !important;
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
    width: 220px;
  }

  .car-zone {
    padding-left: 15px;
    padding-right: 15px;
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
    width: 180px;
  }

  .car-zone {
    padding: 0;
  }
}
</style>