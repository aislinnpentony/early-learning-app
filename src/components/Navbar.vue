<template>
    <nav class="navbar">
        <router-link :to="{ name: 'home' }">
            <img class="navbar-logo" src="/earlylearning.png"  />
        </router-link>
        <ul class="navbar-menu">
            <li><router-link :to="{ name: 'home' }">Home</router-link></li>
            <li><router-link :to="{ name: 'about' }">About</router-link></li>
            <li><router-link :to="{ name: 'login' }">Login</router-link></li>
            <li><router-link :to="{ name: 'signup' }">Signup</router-link></li>
        </ul>
        <div class="mobile-menu-icon">
            <div class="mobile-menu-icon-bar"></div>
        </div>

        
    </nav>
</template>


<script>

</script>



<style scoped>

:root {
    --navbar-height: 10px;
}

.navbar {
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    height: var(--navbar-height);
    background: #87CEFA
}

.navbar-logo {
    display: block;
    height: calc(var(--navbar-height) * .6);
}

</style>