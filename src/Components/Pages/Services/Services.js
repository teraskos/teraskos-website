import React, { Fragment, useEffect } from 'react'
import Header from './Components/Header'
import Classic02 from './../../../Assets/Images/app/classic02.png'
import Classic04 from './../../../Assets/Images/app/classic04.png'
import Classic03 from './../../../Assets/Images/app/classic03.png'

function Services() {
    useEffect(() => {
        window.feather.replace()
    }, [])

    return (
        <Fragment>
            <Header />

            <section class="section">

                <div class="container mt-100 mt-60">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-md-5">
                            <div class="app-feature-shape-left position-relative">
                                <div class="text-center text-md-left">
                                    <img src={Classic02} class="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-7 mt-5 mt-sm-0">
                            <div class="section-title">
                                <h1 class="title mb-3">Teraskos</h1>
                                <p class="para-desc text-muted">Kenyamananmu mencari kos-kosan yang sesuai dengan budget kami jamin. Kualitas? kami memiliki mitra-mitra (pemilik kos) yang siap diajak kerjasama untuk menghadirkan layanan kos-kosan yang lebih elegan dan memberikan pengalaman yang bisa bikin kamu baper dan susah move on. Pastinya dengan harga yang terjangkau!</p>
                                <p class="para-desc text-muted">Kualitas layanan Teraskos hampir setara dengan pelayanan hotel. Kamarmu kotor dan tak terawat? Gak sempet dan repot nyuci pakaianmu? Bingung dan gak pengen ribet fotokopi dan print dokumen? Kamu merasa tinggal dikos gak senyaman tinggal di rumah? Teraskos siap mengatasi masalah-masalahmu tersebut.</p>
                                <p class="para-desc text-muted">Sering komplain ke pemilik kos tapi tidak pernah ditanggapi dengan cepat? Tenang Teraskos hadir untuk mengatasi masalah ini. Mungkin pemilik kosmu sedang sibuk, sehingga mereka tidak sempat mengatasi masalahmu. Namun, Teraskos akan selalu hadir ketika kamu butuh. Kamu tinggal fokus aja dengan aktivitasmu yang lebih penting. Urusan kos-kosan, serahin aja ke Teraskos. Kuy, tinggal kontak CP kami aja sob.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container mt-100 mt-60">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-md-7 order-2 order-md-1 mt-5 mt-sm-0">
                            <div class="section-title">
                                <h1 class="title mb-3">Terascare</h1>
                                <p class="para-desc text-muted">Di masa pandemi ini, tentu kami paham bahwa kamu terpaksa bayar kos-kosan. Padahal kamu kan lagi menjalani kuliah online nih. Makanya, untuk urusan barang-barangmu di kosan, serahin aja ke Terascare. Cukup bayar dengan harga yang 10X lebih murah daripada bayar kosan, kamu bisa dengan tenang menjalani kuliah online selama masa pandemi ini.</p>
                                <p class="para-desc text-muted">Kamu pekerja kantoran, dan harus Work From Home? Wah, mending serahin aja barang-barangmu di Terascare. Kamu mau kerja dimanapun gak perlu khawatir lagi jika kamu nanti diminta untuk kembali bekerja di tempat asal.</p>
                                <p class="para-desc text-muted">Terascare juga bisa menjadi solusi bagi para mahasiswa, pekerja kantoran, pengusaha, dan traveler yang sering meninggalkan tempat tinggalnya. Untuk urusan packing, pengecekan, dan pengiriman barang-barang. Kuy di Terascare aja. Kami bisa mengatasi masalah-masalah logistik mu dengan hanya kontak mitra-mitra andalan kami di kotamu!</p>
                                
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-5 order-1 order-md-2">
                            <div class="app-feature-shape-right position-relative">
                                <div class="text-center text-md-right">
                                    <img src={Classic03} class="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container mt-100 mt-60">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-md-5">
                            <div class="app-feature-shape-left position-relative">
                                <div class="text-center text-md-left">
                                    <img src={Classic04} class="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-7 mt-5 mt-sm-0">
                            <div class="section-title">
                                <h1 class="title mb-3">Terastalk</h1>
                                <p class="para-desc text-muted">Kami memiliki misi: Menciptakan dampak sosial dalam mengoperasikan Teraskos. Kami paham bahwa banyak sekali anak-anak kos di Indonesia saat ini menghadapi Quarter Life Crisis dan bingung menentukan jalan hidup kedepannya. TerasTalks mencoba menjadi jalan pembuka untuk mereka yang sedang galau. Para peserta TerasTalks akan diberikan kesempatan berinteraksi dengan para influencer di indonesia, agar kelak mereka bisa mendapatkan pencapaian yang melebihi influencer tersebut.</p>
                                <p class="para-desc text-muted">Selain memiliki core business di layanan manajemen properti dan kos-kosan. Teraskos juga berupaya untuk mendidik anak-anak kos seluruh indonesia agar bisa mendapatkan masa depan yang cemerlang melalui TerasTalks. Lebih dari sekedar webinar dan Talks, kami juga memberikan kesempatan kepada peserta TerasTalks untuk mengikuti intimate career-coaching dan mentoring langsung dengan pakarnya.</p>
                                <p class="para-desc text-muted">Selain itu, kami juga menghadirkan konten-konten positif di Instagram kami @teraskosid setiap harinya. Sehingga, anak-anak kos di seluruh indonesia bisa lebih semangat dan mendapatkan energi positif untuk menjalani kehidupan sehari-harinya.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>
        </Fragment>
    )
}

export default Services;