<template>
  <div class="h-full w-full text-white">
    <div class="home">
         <div class="p-5 text-center font-bold">
            <p>Visi 8 Admin</p>
        </div>
    </div>

    <div class="bg-black h-screen">
        <div class="py-5 ">
            <p class="p-3" style="background-color: #202424;">My Upcoming Events</p>
            <div v-for="item in content" :key="item.index">
                <div class="flex p-3">
                    <div class="h-16 w-16">
                        <img class="h-full w-full" :src="item.image" />
                    </div>
                    <div class="flex items-center justify-center">
                         <div class="px-3">
                            <p class="font-bold">{{item.title}}</p>
                            <p class="text-sm">{{item.place}}</p>
                            <p class="text-xs">{{item.date}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

         <div class="py-5 ">
            <p class="p-3" style="background-color: #202424;">My Past Events</p>
            <div class="text-center pt-8">
                <p>No Past Events</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import jb from '../assets/JB.png'
export default {
  name: 'Profile',
  components: {
  },
  data(){
        return {
            content: [
                {title: 'Browse by Artist', place: 'GBK Madya Stadium', date:'Thu, Nov 3, 20:00', image: jb},

            ],
        };
  },
}
</script>

<style>
  .home{
    background-color: #202424; 
  }
</style>
