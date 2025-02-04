<template>
  <div class="register-container">
    <h2>Registracija</h2>
    <p>Ispunite podatke za registraciju</p>

    <form @submit.prevent="registerUser">
      <label>Ime</label>
      <input type="text" v-model="name" placeholder="Unesite ime" required>

      <label>Email</label>
      <input type="email" v-model="email" placeholder="Unesite email" required>

      <label>Mobitel</label>
      <input type="text" v-model="phone" placeholder="Unesite broj mobitela" required>

      <button type="submit">Registracija</button>
    </form>

    <p>Already have an account? <router-link to="/">Login</router-link></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      phone: ''
    };
  },
  methods: {
    async registerUser() {
      const userData = {
        name: this.name,
        email: this.email,
        phone: this.phone
      };

      try {
        const response = await fetch('http://localhost:5000/api/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(userData)
        });

        if (response.ok) {
          alert('Registracija uspješna!');
          this.$router.push('/');
        } else {
          alert('Došlo je do greške!');
        }
      } catch (error) {
        console.error('Greška:', error);
      }
    }
  }
};
</script>

<style scoped>
.register-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

input, button {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
}

button {
  background: #00c2c2;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background: #009999;
}
</style>
