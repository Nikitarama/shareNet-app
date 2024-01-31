<template>
  <div class="home">
    <img alt="logo" src="../assets/logo.png">
    <h1>ShareNet</h1>
    <JSEIndicesComp /> 
    
    <CurrenciesComp />
    <CommoditiesComp />
    <WorldIndicesComp />
    <SABondsComp /> 
    
    
     <div class="mt-3">
      <b-button-group>
        <b-button variant="primary">Success</b-button>
        <b-button variant="secondary">Success</b-button>
        <b-button variant="success">Success</b-button>
        <b-button variant="info">Info</b-button>
        <b-button variant="warning">Warning</b-button>
      </b-button-group>
    </div> 

  </div>
</template>

<script>

import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import JSEIndicesComp from "../components/JSEIndicesComp.vue";
import CurrenciesComp from "../components/CurrenciesComp.vue";
import CommoditiesComp from "../components/CommoditiesComp.vue";
import WorldIndicesComp from "../components/WorldIndicesComp.vue";
import SABondsComp from "../components/SABondsComp.vue";


export default {

  components: {
    JSEIndicesComp,
    CurrenciesComp,
    CommoditiesComp,
    WorldIndicesComp,
    SABondsComp,
  },

  setup() {
    const store = useStore();
    store.dispatch("getSpots");
    const spots = computed(() => store.state.spots);
   return {
      spots, 
    };
  
  },
  
}
</script>
