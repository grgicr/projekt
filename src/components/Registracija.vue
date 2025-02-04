<template>
  <div class="registration-page">
    <button class="back-button" @click="goBack">←</button>

    <div class="header">
      <h1>Registracija</h1>
      <p>Ispunite podatke za registraciju</p>
    </div>

    <form class="form" @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Ime</label>
        <input type="text" id="name" v-model="formData.name" placeholder="Unesite ime" required />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="formData.email" placeholder="Unesite email" required />
      </div>

      <div class="form-group">
        <label for="phone">Mobitel</label>
        <div class="input-with-icon">
          <input type="tel" id="phone" v-model="formData.phone" placeholder="Unesite broj mobitela" required />
        </div>
      </div>


      <button type="submit" class="register-button">Registracija</button>
    </form>


    <p class="login-link">
      Already have an account? <a @click="goToLogin">Login</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "RegistrationForm",
  data() {
    return {
      formData: {
        name: "",
        email: "",
        phone: "",
      },
    };
  },
  methods: {
    goBack() {
      this.$router.push("/");
    },
    goToLogin() {
      this.$router.push("/login");
    },
    handleSubmit() {
      console.log("Podaci za registraciju:", this.formData);
    setTimeout(() => {
  this.$router.push("/otp-verification"); // Nakon registracije preusmjeri na OTP
}, 1000);
      }
  },
};
</script>

<style scoped>
.registration-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  height: 100vh;
  background-color: #e8faff;
  font-family: Arial, sans-serif;
}


.back-button {
  align-self: flex-start;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  margin-bottom: 20px;
}

.header {
  text-align: center;
  margin-bottom: 20px;
}

.header h1 {
  font-size: 24px;
  color: #00c4b4;
  margin: 0;
}

.header p {
  font-size: 16px;
  color: #666;
  margin: 5px 0 0;
}

.form {
  width: 100%;
  max-width: 400px;
  background: #fff;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-size: 14px;
}


.input-with-icon {
  display: flex;
  align-items: center;
}

.input-with-icon input {
  flex-grow: 1;
}

.input-with-icon .icon-button {
  background: none;
  border: none;
  padding: 5px;
  cursor: pointer;
}

.input-with-icon img {
  width: 20px;
  height: 20px;
}

.register-button {
  width: 100%;
  padding: 10px 0;
  background-color: #00c4b4;
  border: none;
  border-radius: 25px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.register-button:hover {
  background-color: #00a193;
}


.login-link {
  margin-top: 15px;
  font-size: 14px;
  color: #666;
  text-align: center;
}

.login-link a {
  color: #00c4b4;
  cursor: pointer;
  text-decoration: none;
}

.login-link a:hover {
  text-decoration: underline;
}
</style>
>