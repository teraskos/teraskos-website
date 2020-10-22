import React, { Fragment } from 'react'

import Marketing from './../../../../Assets/Images/marketing/marketing.png'
import MarketingShape from './../../../../Assets/Images/marketing/marketing-shape.png'

function Header() {
    return (
        <Fragment>

            <section class="bg-marketing d-table w-100" style={{
                background: `url(${MarketingShape})`
            }} id="home">
                <div class="container">
                    <div class="row justify-content-center mt-5">
                        <div>
                            <div class="text-center">
                                <img src={Marketing} class="img-fluid" style={{
                                    maxHeight: 400
                                }} alt="" />
                            </div>

                            <div class="title-heading mt-0 mt-md-5 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <h1 class="heading mb-3 text-center">Sejarah Teraskos</h1>
                                <p class="text-muted text-indent">
                                    Perjalanan Teraskos bermula pada tanggal 13 Maret 2020. Kala itu kedua pendiri teraskos memiliki masalah yang sama, sama-sama memiliki pengalaman tidak baik ketika menjadi anak kos saat mereka menjalani proses Kuliah S1 dan S2nya. Sampai akhirnya mereka memutuskan untuk menciptakan Teraskos, agar tidak ada lagi anak-anak kos di Indonesia merasakan pengalaman tidak baik seperti yang mereka rasakan dulu.
                                </p>
                                <p class="text-muted text-indent">
                                    Sejak saat itu Teraskos telah memiliki beberapa layanan: Konten Positif & Inspiratif di Instagram, Terascare, TerasTalks, dan layanan cari dan sewa kos-kosan dibeberapa kota di Indonesia. Pada peluncuran 2 hari pertama layanan pencarian kos-kosan tanpa menggunakan Apps, Teraskos berhasil meraih 100% occupancy rate dari 1 mitra kami yang memiliki 20 kamar kos di Jember. Teraskos juga telah menjadi solusi bagi para mahasiswa yang membutuhkan layanan titip barang selama mereka menjalani kuliah online saat pandemi COVID-19 melalui layanan Terascare. Lebih dari itu, Teraskos tidak hanya berorientasi pada business impact saja, melainkan kami juga memiliki misi social impact melalui TerasTalks dimana kami telah menghadirkan para influencers di indonesia untuk berbagi pengalaman serta melakukan mentoring kepada masyarakat indonesia secara gratis.
                                </p>
                                <p class="text-muted text-indent">
                                    Teraskos bertekat menjadi platform yang dapat menciptakan social dan business impact bagi para mahasiswa, pekerja kantoran, travellers, pemilik kos & apartemen, dan UMKM di seluruh Indonesia.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Header;