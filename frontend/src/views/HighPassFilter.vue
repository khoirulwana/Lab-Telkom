<template>
  <div>
    <h1>High Pass Filter</h1>
    <form @submit.prevent="submitForm">
      <input v-model.number="R" placeholder="Resistance (Ohms)" />
      <input v-model.number="C" placeholder="Capacitance (Farads)" />
      <input
        v-model="frequenciesInput"
        placeholder="Frequencies (comma-separated)"
      />
      <button type="submit">Calculate</button>
    </form>
    <div v-if="results.length">
      <h2>Results:</h2>
      <ul>
        <li v-for="result in results" :key="result.frequency">
          Frequency: {{ result.frequency }} Hz, Gain:
          {{ result.gain.toFixed(4) }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      R: 1000,
      C: 0.000001,
      frequenciesInput: "100,1000,10000",
      results: [],
    };
  },
  methods: {
    async submitForm() {
      const frequencies = this.frequenciesInput
        .split(",")
        .map((f) => parseFloat(f.trim()));
      const response = await axios.post(
        "http://localhost:5000/api/filter/highpass",
        {
          R: this.R,
          C: this.C,
          frequencies,
        }
      );
      this.results = response.data;
    },
  },
};
</script>
