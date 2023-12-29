<template>
    <div class="beranda">
        <el-carousel :interval="4000" indicator-position="none" height="auto">
            <el-carousel-item>
                <div class="item">
                    <img class="item_image" src="../assets/1.png" alt="">
                </div>
            </el-carousel-item>
            <el-carousel-item style="height: 500px;">
                <div class="item">
                    <img class="item_image" src="../assets/2.png" alt="">
                </div>
            </el-carousel-item>
            <el-carousel-item>
                <div class="item" style="height: 500px;">
                    <img class="item_image" src="../assets/3.png" alt="">
                </div>
            </el-carousel-item>
            <el-carousel-item>
                <div class="item" style="height: 500px;">
                    <img class="item_image" src="../assets/4.png" alt="">
                </div>
            </el-carousel-item>
            <el-carousel-item>
                <div class="item" style="height: 500px;">
                    <img class="item_image" src="../assets/5.png" alt="">
                </div>
            </el-carousel-item>
        </el-carousel>
        <h2>Kelas Prakerja 2023 yang Tersedia</h2>
        <el-row class="flex-container">
            <el-col v-for="(o, index) in 4" :key="o" :span="4" :offset="index > 0 ? 1 : 0">
                <el-card :body-style="{ padding: '0px' }">
                    <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image" />
                    <div style="padding: 14px">
                        <div class="bottom">
                            <p class="desc">Menggunakan Bahasa Inggris Bagi Calon Sekretaris</p>
                        </div>
                        <div class="bottom">
                            <p class="price">Rp 1.500.000</p>
                        </div>
                        <div class="bottom">
                            <el-button type="danger button" plain round>Beli Kelas Online</el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts">
export default {
    name: 'BerandaView'
}
</script>

<style scoped>
.flex-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.el-carousel__item h3 {
    display: flex;
    color: #475669;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
}

.el-carousel {
    margin-top: 50px;
    height: 500px;
}
.price {
  font-size: 16px;
  color: #999;
}

.bottom {
  margin-top: 5px;
  line-height: 12px;
  display: flex;
  justify-content: space;
  align-items: center;
}

.button {
  padding: 10px;
  min-height: 40px;
}

.image {
  width: 100%;
  display: block;
}

.desc{
    line-height: normal;
}
</style>