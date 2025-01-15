<template>
  <div class="welcome-container">
    <div class="logo">
      <img src="@/assets/chat-icon.png" alt="Chat Logo" />
    </div>
    <h1>Dobrodošli!</h1>
    <button class="next-button" @click="goToNextPage">Next</button>
  </div>
</template>

<script>
export default {
  name: "WelcomeScreen",
  methods: {
    goToNextPage() {
      this.$router.push("/second");
    },
  },
};
</script>

<style scoped>
.welcome-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #34c759;
  background-image: url("@/assets/background-pattern.png");
  background-repeat: repeat;
  color: white;
  font-family: Arial, sans-serif;
  text-align: center;
}

.logo img {
  width: 500px;
  margin-bottom: 20px;
}

h1 {
  font-size: 2rem;
  font-weight: bold;
}

.next-button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  color: #34c759;
  background-color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.next-button:hover {
  background-color: #e5e5e5;
}
</style>
