<template>
  <div class="forgot container" @submit.prevent="forgetPassword">
    <form class="card-panel">
      <h2 class="center">Forgotten Password?</h2>
      <h3 class="center">Please enter your email address:</h3>
      <div class="field">
        <label for="email">Email</label>
        <input type="email" class="" v-model="user.email" />
      </div>
     <button type="submit" class="btn todo-btn btn-secondary">Reset password</button>
    <div id="snackbar">Check email for a link to reset your password 👌</div>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      user: {
        email: ''
      }
    };
  },
   methods: {
    forgetPassword() {
        firebase
        .auth()
        .sendPasswordResetEmail(this.user.email)
        .then(() => {
           var x = document.getElementById("snackbar");
                x.className = "show";
                setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000)
           this.user = {
              email: ''
            }
        }).catch((error) => {
          alert(error)
        })
    }
  },
};
</script>
<style>

/* The snackbar - position it at the bottom and in the middle of the screen */
#snackbar {
  visibility: hidden; /* Hidden by default. Visible on click */
  min-width: 250px; /* Set a default minimum width */
  margin-left: -125px; /* Divide value of min-width by 2 */
  background-color: #333; /* Black background color */
  color: #fff; /* White text color */
  text-align: center; /* Centered text */
  border-radius: 2px; /* Rounded borders */
  padding: 16px; /* Padding */
  position: fixed; /* Sit on top of the screen */
  z-index: 1; /* Add a z-index if needed */
  left: 50%; /* Center the snackbar */
  bottom: 30px; /* 30px from the bottom */
}

/* Show the snackbar when clicking on a button (class added with JavaScript) */
#snackbar.show {
  visibility: visible; /* Show the snackbar */
  /* Add animation: Take 0.5 seconds to fade in and out the snackbar.
  However, delay the fade out process for 2.5 seconds */
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

/* Animations to fade the snackbar in and out */
@-webkit-keyframes fadein {
  from {bottom: 0; opacity: 0;}
  to {bottom: 30px; opacity: 1;}
}

@keyframes fadein {
  from {bottom: 0; opacity: 0;}
  to {bottom: 30px; opacity: 1;}
}

@-webkit-keyframes fadeout {
  from {bottom: 30px; opacity: 1;}
  to {bottom: 0; opacity: 0;}
}

@keyframes fadeout {
  from {bottom: 30px; opacity: 1;}
  to {bottom: 0; opacity: 0;}
}
.todo-btn{
  color: #2D3047;
  background: #1B998B;
  margin: 0px 6px !important;
  outline: none !important;
  border: none;
  font-family: "Quicksand", sans-serif;
  font-weight: bold;
}

.todo-btn:focus{
  outline: none !important;
  box-shadow: none !important;
  color: #2D3047 !important;
  background: #60ecff!important;
}
.todo-btn:hover {background-color: #0af05e}

.todo-btn:active{
  background: #60ecff!important;
  transform: translateY(4px);
  box-shadow: none !important;
}
</style>