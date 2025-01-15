<template>
  <div class="login-container">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="email">Email:</label>
        <input
            type="email"
            id="email"
            v-model="email"
            placeholder="Unesite svoj email"
            required
        />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Unesite svoju lozinku"
            required
        />
      </div>
      <button type="submit" class="login-button">Login</button>
    </form>
    <p class="redirect">
        Nemate račun?Napravite ga.
      <router-link to="/registracija">Register here</router-link>.
    </p>
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
        alert("Login successful!");
        this.$router.push("/dashboard"); // Zamijenite '/dashboard' s vašom glavnom stranicom
      } else {
        alert("Molimo ispunite sva polja.");
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

h1 {
  text-align: center;
}

.form-group {
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
  border-radius: 4px;
}

.login-button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.login-button:hover {
  background-color: #0056b3;
}

.redirect {
  text-align: center;
  margin-top: 15px;
}

.redirect a {
  color: #007bff;
  text-decoration: none;
}

.redirect a:hover {
  text-decoration: underline;
}
</style>
