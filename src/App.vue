<template>
  <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        router=true
    >
        <el-menu-item index="0">
            <img 
                style="width: 230px"
                src="./assets/logo.png"
                alt="logo"
            />
        </el-menu-item>
        <el-menu-item style="width: 60vw">
        </el-menu-item>
        <el-menu-item index="/">Beranda</el-menu-item>
        <el-menu-item index="/about">About</el-menu-item>
        <el-menu-item index="3">Privacy</el-menu-item>
        <el-menu-item index="4">Kelas Saya</el-menu-item>
    </el-menu>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/beranda">Beranda</router-link>
  </nav>
  <router-view/>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const activeIndex = ref('1')
  const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
