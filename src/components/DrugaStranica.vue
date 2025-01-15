<template>
  <div class="container">
    <button class="skip-button" @click="goToRegistration">Skip</button>
    <img src="@/assets/illustration.png" alt="Illustration" class="illustration" />
    <p class="description">
      Automatizirajte slanje poruka, upravljajte razgovorima i ostanite povezani na pametniji način.
    </p>
    <router-link to="/third" class="next-button">Next</router-link>
  </div>
</template>

<script>
export default {
  name: "SecondPage",
  methods: {
    skip() {
      this.$router.push("/");
    },
    goToRegistration() {
      this.$router.push("/register");
    },
  },
};
</script>


<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #e0f7fa;
  text-align: center;
}

.skip-button {
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: #b2dfdb;
  color: #004d40;
  border: none;
  padding: 5px 15px;
  border-radius: 20px;
  cursor: pointer;
}

.skip-button:hover {
  background-color: #004d40;
  color: white;
}

.illustration {
  width: 400px;
  height: auto;
  margin-bottom: 20px;
}

.description {
  font-size: 16px;
  color: #004d40;
  margin-bottom: 20px;
}

.next-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #00796b;
  color: white;
  text-decoration: none;
  border-radius: 20px;
}

.next-button:hover {
  background-color: #004d40;
}
</style>
