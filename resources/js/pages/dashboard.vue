<script setup>
import Navbar from "./layouts/navbar.vue";
</script>

<template>
    <!-- Start Navbar -->
    <Navbar/>
    <!-- End Navbar -->


    <!-- Start Hero -->
    <section class="relative table w-full py-36 lg:py-52 bg-[url('../../assets/images/hosting/bg-hosting.jpg')] bg-center bg-no-repeat bg-cover">
        <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black"></div>
        <div class="container relative">
            <div class="grid grid-cols-1 pb-8 text-center mt-10">
                <h5 class="text-lg text-white font-medium mb-3">Bring your ideas to life</h5>
                <h3 class="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-white">Powerful Web Hosting Services</h3>

                <p class="text-slate-300 text-lg max-w-xl mx-auto">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>

                <div class="mt-8">
                    <a href="" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Get Started</a>
                </div>
            </div><!--end grid-->
        </div><!--end container-->
    </section><!--end section-->
    <!-- End Hero -->
</template>

<style scoped>

</style>
