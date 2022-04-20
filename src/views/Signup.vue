<template>
  <div class="signup container">
    <form class="card-panel" @submit.prevent="signup">
      <h2 class="center">Sign up here!</h2>

      <div class="field">
        <label for="name">Name</label>
        <input id="name" type="text" v-model="name">
      </div>
      <div class="field">
        <label for="email">Email</label>
        <input id="email" type="email" v-model="email">
      </div>

      <div class="field">
        <label for="emaik">Re-enter Email</label>
        <input id="email" type="email" v-model="alias">
      </div>

       <div class="field">
        <label for="password">Password</label>
        <input id="password" type="password" v-model="password">
      </div>

      <p v-if="feedback" class="red-text center">{{ feedback }}</p>
      <div class="field center">
        <button class="btn todo-btn btn-secondary">Signup</button>
      </div>
    </form>

  </div>
</template>

<script>
export default {
  name: 'Signup',
  data(){
    return{
      name: null,
      email: null,
      password: null,
      alias: null,
      feedback: null,
      slug: null
    }
  },
  methods: {
 signup() {
    if (this.alias && this.email && this.password) {
        this.feedback = null;
        this.slug = slugify(this.alias, {
            replacement: '-',
          //  remove: /[$*_+~()'"!\-:]/g,
            lower: true
            });
        //    let ref = db.collection('users').doc(this.slug)
            ref.get().then(doc => {
            if (doc.exists) {
                this.feedback = 'This username already exists'
            } else {
                ref.set({
                    name: this.name,
                    email: this.email,
                    alias: this.alias,
                    password: this.password,
//****** allow user to sign up and create field in the users table on firebase */
                }).then(() => {
                 return firebase.auth().createUserWithEmailAndPassword(this.email, this.password);
                }).then(cred => {
                 return ref.update({
                        user_id: cred.user.uid
                    });
                }).then(() => {
                   this.$router.push({
                         name: 'Home'
                   })
                }).catch(err => {
                    this.feedback = err.message
                })
            }
        });
        //validation to ensure all fields are complete
    } else {
        this.feedback = 'Please fill in all fields'
    }
    console.log(this.name);
}
}
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');
.quiz-btn{
  color: #22577a;
  background: #b8f2e6;
  margin: 0px 6px !important;
  outline: none !important;
  border: none;
  font-family: "Quicksand", sans-serif;
}
.quiz-btn:focus{
  outline: none !important;
  box-shadow: none !important;
  color: #22577a !important;
  background: #7FFF00 !important;
}
.btn-secondary {
  color: blue;
  background: #87CEFA;
  margin-top: 10px;
  padding: 10px 25px;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
  outline: none !important;
  border: none;
  font-family: "Quicksand", sans-serif;
  font-weight: bold;
}
.btn-secondary:focus{
  outline: none !important;
  box-shadow: none !important;
  color: #87CEFA!important;
  background: #87CEFA!important;
}
.btn-secondary:hover {background-color: white}

.btn-secondary:active{
  background: #60ecff!important;
  transform: translateY(4px);
  box-shadow: none !important;
}
.signup{
  max-width: 400px;
  margin-top: 60px;

}
.signup h2{
  font-size: 2.4em;
}
.signup .field{
  margin-bottom: 16px;
}
</style>