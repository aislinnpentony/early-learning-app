<template>
  <nav>
    <ul class="nav-links">
      <li v-for="list in navLinks" :key="list.key">
        <a v-if="list.dropdown === false" :href="list.link">{{ list.name }}</a>
        <div class="dropdown-link" v-else>
          <a :href="list.link"
            >{{ list.name }}
            <span>&raquo;</span>
          </a>
          <ul class="dropdown-menu">
            <li v-for="item in list.dropdownLinks" :key="item.key">
              <a :href="item.link">{{ item.name }}</a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
    <div v-on:click="openMobileNav()" id="burger">
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
    </div>
    <a class="navbar-brand" href="/">
      <div class="logo-image">
        <img src="@/assets/Mathslive.png" class="img-fluid" />
      </div>
    </a>
    <ul class="right">
      <li v-if="!user">
        <router-link :to="{ name: 'Signup' }">Signup</router-link>
      </li>
      <li v-if="!user">
        <router-link :to="{ name: 'Login' }">Login</router-link>
      </li>
      <li v-if="user && $user.get().role !== 'tutor'">
        <router-link :to="{ name: 'Dashboard' }"
          ><a>{{ user.email }}</a></router-link>
      </li>
      <li v-if="user && $user.get().role === 'tutor'">
        <router-link :to="{ name: 'TutorDashboard' }"
          ><a>{{ user.email }}</a></router-link
        >
      </li>
      <li v-if="user"><a @click="logout">Logout</a></li>
    </ul>
  </nav>
</template>

<script>
import db from "@/firebase/init";
import firebase from "firebase";

export default {
  name: "Navbar",
  props: ["name", "logo", "navLinks"],
  data() {
    return {
      user: null,
      check: null,
      tutorCheck: false,
    };
  },
  created() {
    let user = firebase.auth().currentUser;
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
        console.log(this.user);
        this.isTutor(this.user);
        console.log("Navbar tutor: ", this.isTutor(this.user));
        console.log("Navbar role: ", this.$user.get().role);
      } else {
        this.user = null;
      }
    });
  },

  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "Login" });
        });
    },

    openMobileNav() {
      const burger = document.getElementById("burger");
      const nav = document.querySelector(".nav-links");
      const navLinks = document.querySelectorAll(".nav-links li");
      nav.classList.toggle("nav-active");
      // Burger toggler
      burger.classList.toggle("toggle");

      // Animate navigation links
      navLinks.forEach((link, index) => {
        if (link.style.animation || link.style.webkitAnimation) {
          link.style.animation = "";
          link.style.webkitAnimation = "";
        } else {
          link.style.webkitAnimation = `navLinkFade 0.5s ease forwards ${
            index / 7
          }s`;
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`;
        }
      });
    },
    isTutor(user) {
      console.log("User is: ", user);
      console.log("Check user email: ", this.user.email);
      let ref = db.collection("tutors").where("Email", "==", this.user.email);
      ref
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            this.check = doc.data();
            console.log("Document: ", doc.data(), doc.id);
            if (doc.data()) {
              console.log("Is a tutor: ", doc.id);
              this.$user.set(Object.assign(user, { role: "tutor" }));
              console.log("navabar tutor role: ", this.$user.get().role);
              this.tutorCheck = true;
              console.log("is true/false? ", this.tutorCheck);
              return this.tutorCheck;
            }
          });
        })
        .catch((e) => {
          console.log(e);
        });
      let ruser = db.collection("users").where("email", "==", this.user.email);
      ruser
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            this.check = doc.data();
            console.log("Document: ", doc.data(), doc.id);
            if (doc.data()) {
              console.log("Is a user: ", doc.id);
              this.$user.set(Object.assign(user, { role: "user" }));
              console.log("navabar tutor role: ", this.$user.get().role);
              this.tutorCheck = false;
              console.log("is true/false? ", this.tutorCheck);
              return this.tutorCheck;
            }
          });
        })
        .catch((e) => {
          console.log(e);
        });
    },
    openDropdownNav() {
      const dropdownLink = document.querySelectorAll(".dropdown-link");
      dropdownLink.forEach((dropdown) => {
        dropdown.addEventListener("mouseover", () => {
          dropdown.children[1].style.display = "block";
        });
        dropdown.addEventListener("mouseleave", () => {
          dropdown.children[1].style.display = "none";
        });
      });
    },

    countClicksOnMobileDropdown() {
      const dropdownLink = document.querySelectorAll(".dropdown-link");
      dropdownLink.forEach((dropdown) => {
        let counts = dropdown.clicks || 0;
        dropdown.addEventListener("click", () => {
          counts++;
          if (counts % 2 == 0) {
            window.location.href = dropdown.children[0].getAttribute("href");
          } else {
            event.preventDefault();
            dropdown.children[1].style.display = "block";
            setTimeout(() => {
              dropdown.children[1].style.display = "none";
            }, 5000);
          }
        });
        setTimeout(() => {
          counts = 0;
        }, 8000);
      });
    },
  },
  mounted() {
    this.openDropdownNav();
    if (window.innerWidth < 768) {
      this.countClicksOnMobileDropdown();
    }
  },
};
</script>

<style>
.logo-image {
  width: 195px;
  height: 195px;
  margin-top: 9%;
  margin-left: 50%;
  margin-right: 35%;
}

ul.right {
  margin-left: 22%;
  width: 55%;
  line-height: 22px;
  color: #e5f9e0;
}

@import url("https://fonts.googleapis.com/css2?family=Quicksand&display=swap");
nav {
  display: flex;
  justify-content: normal;
  align-items: center;
  background-color: #1b998b;
  min-height: 12vh;
  font-family: "Quicksand", sans-serif;
  font-weight: bold;
}

ul.nav-links {
  display: left;
  justify-content: left;
  width: 40%;
  line-height: 70px;
}

ul.nav-links a {
  text-decoration: none;
  color: #e5f9e0;
  font-size: 1.2rem;
  font-weight: 500;
  display: block;
  font-weight: bold;
}
#burger {
  display: block;
  cursor: pointer;
  float: left !important;
  text-align: left !important;
  width: 70%;
  padding: 5%;
}
#burger div {
  width: 25px;
  height: 3px;
  background: #e5f9e0;
  margin: 5px;
  border-radius: 3px;
  transition: all 0.3s ease;
}
ul.dropdown-menu {
  position: relative;
  top: 8vh;
  background-color: #23bba9;
  min-width: 100px;
  cursor: pointer;
  display: none;
  font-weight: normal;
}

ul.dropdown-menu a {
  line-height: 4vh;
  padding: 20px 12px;
  background-color: #23bba9;
  line-height: 15px;
  font-weight: normal;
}

@media screen and (max-device-width: 1366px), screen and (max-width: 784px) {
  ul.nav-links {
    position: absolute;
    flex-direction: column;
    width: 14.1%;
    height: 90vh;
    top: 12vh;
    left: 0%;
    justify-content: flex-start;
    background-color: #23bba9;
    opacity: 0.8;
    transform: translateX(-100%);
    transition: transform 0.5s ease-in;
    z-index: 1;
    font-weight: bold;
    color: #e5f9e0;
  }

  div#burger {
    display: block;
  }

  ul.dropdown-menu {
    position: relative;
    top: 0;
  }
}
.nav-active {
  transform: translateX(0) !important;
}
.toggle .line1 {
  transform: rotate(-45deg) translate(-7px, 6px);
}
.toggle .line2 {
  opacity: 0;
}
.toggle .line3 {
  transform: rotate(45deg) translate(-5px, -5px);
}
</style>