<!-- CategoryDisplay.vue -->
<template>
    <div>
        <h1>SA Bonds</h1>
        <b-table striped hover :items="spots" class="commodities">
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
        <tr v-for="spot in filteredSpots" :key="spot.id">{{ spot.code }}>
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

  export default {
    setup() {
    const store = useStore();
    store.dispatch("getSpots");
    const spots = computed(() => store.state.spots);
    const categoryId = 6;

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
  