<template>
  <div class="otp-container">
    <div class="otp-header">
      <button @click="goBack" class="back-button">&#8592;</button>
      <h1>OTP provjera</h1>
      <p>Molimo unesite ispravan OTP za proces provjere broja..</p>
    </div>
    <div class="otp-inputs">
      <input v-for="(digit, index) in otp" :key="index" v-model="otp[index]" maxlength="1" @input="moveToNext(index)" type="text" class="otp-box" />
    </div>
    <button :disabled="!isOtpFilled" class="confirm-button">Potvrda</button>
    <p class="resend" @click="resendOtp">Pošalji ponovno OTP</p>
  </div>
</template>

<script>
export default {
  name: "OtpVerification",
  data() {
    return {
      otp: ["", "", "", ""]
    };
  },
  computed: {
    isOtpFilled() {
      return this.otp.every(digit => digit !== "");
    }
  },
  methods: {
    goBack() {
      this.$router.push("/");
    },
    resendOtp() {
      alert("OTP poslan ponovno!");
    },
    moveToNext(index) {
      if (this.otp[index] && index < this.otp.length - 1) {
        this.$refs[`otp-${index + 1}`]?.focus();
      }
    }
  }
};
</script>

<style scoped>
.otp-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #e8faff;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.otp-header {
  background-color: #00c853;
  color: white;
  width: 100%;
  padding: 20px;
  border-radius: 15px;
  text-align: left;
}

.otp-header h1 {
  font-size: 24px;
  font-weight: bold;
}

.otp-header p {
  font-size: 16px;
  margin-top: 5px;
}

.otp-inputs {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 20px 0;
}

.otp-box {
  width: 50px;
  height: 50px;
  text-align: center;
  font-size: 20px;
  border: 2px solid #00c4b4;
  border-radius: 10px;
}

.confirm-button {
  width: 80%;
  padding: 10px;
  background-color: #b9e4c9;
  border: none;
  border-radius: 25px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.confirm-button:disabled {
  background-color: #c0e0d0;
  cursor: not-allowed;
}

.resend {
  margin-top: 15px;
  font-size: 14px;
  color: #00c4b4;
  cursor: pointer;
  text-decoration: none;
}

.resend:hover {
  text-decoration: underline;
}
</style>