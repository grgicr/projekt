<template>
  <div class="login-page">
    <div class="login-container">
      <h2 class="title">Login</h2>
      <p class="subtitle">Unesite svoje podatke za prijavu</p>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" placeholder="Unesite email" required />
        </div>
        <div class="form-group">
          <label for="password">Lozinka</label>
          <input type="password" id="password" v-model="password" placeholder="Unesite lozinku" required />
        </div>
        <button type="submit" class="login-button">Prijava</button>
      </form>
      <p class="redirect">
        Nemate račun? <router-link to="/register">Registrirajte se</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      if (this.email && this.password) {
        alert("Prijava uspješna!");
        this.$router.push("/dashboard");
      } else {
        alert("Molimo ispunite sva polja.");
      }
    },
  },
};
</script>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #dff6ff;
}

.login-container {
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 350px;
}

.title {
  font-size: 24px;
  font-weight: bold;
  color: #008080;
}

.subtitle {
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
}

.form-group {
  text-align: left;
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

.login-button {
  width: 100%;
  padding: 10px;
  background-color: #00bfa6;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s;
}

.login-button:hover {
  background-color: #008080;
}

.redirect {
  margin-top: 15px;
  font-size: 14px;
}

.redirect a {
  color: #00bfa6;
  text-decoration: none;
}

.redirect a:hover {
  text-decoration: underline;
}
</style>