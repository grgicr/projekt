<template>
  <div class="third-page">
    <button class="skip-button" @click="goToRegistration">Skip</button>

    <div class="content">
      <img src="@/assets/illustration.png" alt="Illustration" class="image" />
      <p class="description">
        Vaš digitalni asistent je ovdje da vam olakša komunikaciju i uštedi vrijeme!
      </p>

    </div>


    <button class="get-started-button" @click="goToRegistration">Get Started</button>
  </div>
</template>

<script>
export default {
  name: "TrecaStranica",
  methods: {
    goToHome() {
      this.$router.push("/");
    },
    goToSecond() {
      this.$router.push("/second");
    },
    goToRegistration() {
      this.$router.push("/register");
    },
  },
};
</script>

<style scoped>
.third-page {
  display: flex;
  flex-direction: column;
  justify-content: center; /* Poravnava cijeli sadržaj po sredini */
  align-items: center;
  height: 100vh;
  padding: 20px;
  background-color: #e8faff;
  font-family: Arial, sans-serif;
  color: #333;
}

.skip-button {
  position: absolute; /* Postavlja gumb u kut */
  top: 20px;
  right: 20px;
  background-color: #cce7f3;
  border: none;
  border-radius: 15px;
  padding: 5px 15px;
  color: #000;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.skip-button:hover {
  background-color: #b0d6e5;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 20px; /* Dodaje razmak između teksta i gumba */
}

.image {
  max-width: 400px;
  height: auto;
}

.description {
  margin-top: 10px; /* Razmak između slike i teksta */
  font-size: 16px;
  line-height: 1.5;
  font-weight: 500;
}

.get-started-button {
  background-color: #00c4b4;
  border: none;
  border-radius: 25px;
  padding: 10px 30px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.get-started-button:hover {
  background-color: #00a193;
}


</style>