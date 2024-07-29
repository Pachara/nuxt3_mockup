<script setup>

</script>

<template>
  <div class="d-flex justify-content-center my-4">
    <div class="row d-flex justify-content-center set-max-width ">
        <div class="col-12 text-center fs-1 fw-bold">
          12,000+ Positive Customer Reviews Guarantee
        </div>
        <div class="col-md-6 col-12 d-flex align-items-center justify-content-center pt-4">
          <CustomerAnimation />
        </div>
        <div class="col-md-6 col-12 ps-2 pe-2 d-flex justify-content-center align-items-center py-4" >
          <div class="overflow-hidden w-100" style="height:300px;">
            <HeroVerticalSlider />
          </div>
          <!-- <LazyCustomerRating /> -->
        </div>
    </div>
  </div>
</template>

<style scoped>

.set-max-width {
  max-width: 1180px;
}
</style>
