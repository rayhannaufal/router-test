<template>
    <div class="beranda common-layout">
        <el-container>
            <el-main>
                <el-carousel :interval="4000" indicator-position="none" height="500px">
                    <el-carousel-item>
                        <div class="item">
                            <img class="item_image" src="../assets/1.png" alt="">
                        </div>
                    </el-carousel-item>
                    <el-carousel-item>
                        <div class="item">
                            <img class="item_image" src="../assets/2.png" alt="">
                        </div>
                    </el-carousel-item>
                    <el-carousel-item >
                        <div class="item">
                            <img class="item_image" src="../assets/3.png" alt="">
                        </div>
                    </el-carousel-item>
                    <el-carousel-item>
                        <div class="item">
                            <img class="item_image" src="../assets/4.png" alt="">
                        </div>
                    </el-carousel-item>
                    <el-carousel-item>
                        <div class="item">
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
            </el-main>
            <el-footer class="footer">
                <el-row :gutter="40" justify="center">
                    <el-col :span="8">
                        <img src="../assets/logo.png" width="180px" alt="">
                        <p>
                            Sertifikasi dan Kelas Bahasa Inggris Online. Mengembangkan kelas bahasa Inggris inklusif untuk semua orang, serta kelas pengembangan diri lainnya.
                        </p>
                        <p>
                            Lembaga Pelatihan YEC CO ID juga tergabung dalam program Kartu Prakerja dan berafiliasi dengan Digital Platform seperti Karier.mu, Tokopedia, Pintar, Pijar Mahir, dan Bukalapak.
                        </p>

                    </el-col>
                    <el-col :span="5">
                        <h3 style="text-align: start;">Alamat</h3>
                        <p>
                            Jl. Nogotirto no.14 Modinan Banyuraden Gamping Sleman Yogyakarta 55293
                        </p>
                    </el-col>
                    <el-col :span="4">
                        <h3 style="text-align: start;">Customer Service</h3>
                        <p>
                            Email : prakerja@yec.co.id 
                            CS: +62 853-3584-9962 (WhatsApp Chat)   
                        </p>
                    </el-col>
                </el-row>
            </el-footer>
        </el-container>
    </div>
</template>

<script lang="ts">
export default {
    name: 'BerandaView'
}
</script>

<style scoped>
    p {
        text-align: justify;
        text-justify: inter-word;
    }
    .footer {
        height: auto;
        padding-top: 30px;
        padding-bottom: 30px;
        background-color: white;
    }
    .flex-container{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
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

    .image {
    width: 100%;
    display: block;
    }

    .desc{
        line-height: normal;
    }
</style>