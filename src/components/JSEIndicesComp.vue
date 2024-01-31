<!-- CategoryDisplay.vue -->
<template>
    <div>
      <h1>JSE Indices</h1>
        <b-table :items="spots" class="jse">
      <thead>
        <tr>
        <th>Code</th>
        <th>FullName</th>
          <th>Price</th>
          <th>Move</th>
          <th>Percent-Move</th>
          <th>Time</th>
          
        </tr>
      </thead>

      <tbody> 
        <tr v-for="spot in filteredSpots" :key="spot.id">
          <td>{{ spot.code }}</td>
          <td>{{ spot.fullName }}</td>
          <td>{{ spot.price }}</td>
          <td>{{ spot.move }}</td>
          <td>{{ spot.pmove }}</td>
          <td>{{ spot.datetime }}</td>
          
        </tr>
        </tbody>
  </b-table>
    </div>
  </template>
  
  <script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import { BTable } from 'bootstrap-vue';

  export default {
    components: {
      BTable,
    },
    setup() {
    const store = useStore();
    const fetchData = async () => {
      await store.dispatch("getSpots");
    };
   fetchData();

    const spots = computed(() => store.state.spots);
    const categoryId = 1;

    const filteredSpots = computed(() => {
        return spots.value.filter(spot => spot.categoryId === categoryId);
    });

    return { 
     filteredSpots, categoryId, spots,
    
 };
  },
   
    methods:
        {
       
    },
  };
  </script>
  