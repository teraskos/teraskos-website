import React, { Fragment } from "react";
import Header from "./Components/Header";

function FAQ() {
    return (
        <Fragment>
            <Header />

            <section class="section">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-4 col-md-5 col-12 d-none d-md-block">
                            <div class="rounded shadow p-4 sticky-bar">
                                <ul class="list-unstyled mb-0">
                                    <li>
                                        <a
                                            href="#tech"
                                            class="mouse-down h6 text-dark"
                                        >
                                            Teraskos
                                        </a>
                                    </li>
                                    <li class="mt-4">
                                        <a
                                            href="#general"
                                            class="mouse-down h6 text-dark"
                                        >
                                            Terascare
                                        </a>
                                    </li>
                                    <li class="mt-4">
                                        <a
                                            href="#payment"
                                            class="mouse-down h6 text-dark"
                                        >
                                            Terastalks
                                        </a>
                                    </li>
                                    {/* <li class="mt-4">
                                        <a
                                            href="#support"
                                            class="mouse-down h6 text-dark"
                                        >
                                            Support Questions
                                        </a>
                                    </li> */}
                                </ul>
                            </div>
                        </div>

                        <div class="col-lg-8 col-md-7 col-12">
                            <div class="section-title" id="tech">
                                <h4>Teraskos</h4>
                            </div>
                            <div class="faq-content mt-4 pt-2">
                                <div class="accordion" id="accordionExampleone">
                                    <div class="card border-0 rounded mb-2">
                                        <a
                                            data-toggle="collapse"
                                            href="#collapseone"
                                            class="faq position-relative"
                                            aria-expanded="true"
                                            aria-controls="collapseone"
                                        >
                                            <div
                                                class="card-header border-0 bg-light p-3 pr-5"
                                                id="headingfifone"
                                            >
                                                <h6 class="title mb-0">
                                                    {" "}
                                                    Apa sih layanan {" "}
                                                    <span class="text-primary">
                                                        Teraskos 
                                                    </span>{" "}
                                                    itu{" "}
                                                    ?{" "}
                                                </h6>
                                            </div>
                                        </a>
                                        <div
                                            id="collapseone"
                                            class="collapse show"
                                            aria-labelledby="headingfifone"
                                            data-parent="#accordionExampleone"
                                        >
                                            <div class="card-body px-2 py-4">
                                                <p class="text-muted mb-0 faq-ans">
                                                Hi kak! Selamat datang. Teraskos adalah 
                                                layanan penyediaan kos-kosan terstandarisasi 
                                                dengan tawaran harga yang terjangkau dan 
                                                fasilitas yang lengkap. Kami yakin, 
                                                kamu pasti gak akan rugi menggunakan 
                                                layanan kami ketimbang menggunakan layanan 
                                                kos lainnya di luar sana. Karena kami berusaha 
                                                untuk mengerti masalah dan kekhawatiranmu 
                                                ketika ngekos!
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card border-0 rounded mb-2">
                                        <a
                                            data-toggle="collapse"
                                            href="#collapsetwo"
                                            class="faq position-relative collapsed"
                                            aria-expanded="false"
                                            aria-controls="collapsetwo"
                                        >
                                            <div
                                                class="card-header border-0 bg-light p-3 pr-5"
                                                id="headingtwo"
                                            >
                                                <h6 class="title mb-0">
                                                    {" "}
                                                    Berapa jarak mitra {" "}
                                                    <span class="text-primary">
                                                    Teraskos  
                                                    </span>{" "}
                                                     ke universitas saya{" "}
                                                    ?{" "}
                                                </h6>
                                            </div>
                                        </a>
                                        <div
                                            id="collapsetwo"
                                            class="collapse"
                                            aria-labelledby="headingtwo"
                                            data-parent="#accordionExampleone"
                                        >
                                            <div class="card-body px-2 py-4">
                                                <p class="text-muted mb-0 faq-ans">
                                                    Kami memastikan bahwa jarak setiap 
                                                    mitra kos yang kami miliki berada 
                                                    di tempat yang strategis. Oleh 
                                                    karena itu, yang harus kamu lakukan 
                                                    adalah melihat katalog kami maupun 
                                                    cari di instagram kami: 
                                                    @teraskos.info sesuai dengan 
                                                    domisili kamu ya.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card border-0 rounded mb-2">
                                        <a
                                            data-toggle="collapse"
                                            href="#collapsethree"
                                            class="faq position-relative collapsed"
                                            aria-expanded="false"
                                            aria-controls="collapsethree"
                                        >
                                            <div
                                                class="card-header border-0 bg-light p-3 pr-5"
                                                id="headingthree"
                                            >
                                                <h6 class="title mb-0">
                                                    {" "}
                                                    Apa saja fasilitas yang saya dapatkan ketika 
                                                    menggunakan layanan {" "}
                                                    <span class="text-primary">
                                                        Teraskos 
                                                    </span>{" "}
                                                    ?{" "}
                                                </h6>
                                            </div>
                                        </a>
                                        <div
                                            id="collapsethree"
                                            class="collapse"
                                            aria-labelledby="headingthree"
                                            data-parent="#accordionExampleone"
                                        >
                                            <div class="card-body px-2 py-4">
                                                <p class="text-muted mb-0 faq-ans">
                                                Untuk memahami dan memberikan pengalaman yang nyaman, 
                                                cozy, dan menyenangkan ketika ngekos. Kami sudah 
                                                melakukan riset yang mendalam loh kak. Oleh karena itu, 
                                                kami menawarkan fasilitas-fasilitas yang kamu butuhkan. 
                                                Bukan fasilitas yang hanya nice to have, tapi sebenarnya 
                                                kamu tidak membutuhkan fasilitas tersebut. So, daftar 
                                                fasilitas setiap kos bisa kamu lihat di katalog 
                                                teraskos dan dapat di lihat juga di instagram kami: 
                                                @teraskos.info
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card border-0 rounded mb-2">
                                        <a
                                            data-toggle="collapse"
                                            href="#collapsefour"
                                            class="faq position-relative collapsed"
                                            aria-expanded="false"
                                            aria-controls="collapsefour"
                                        >
                                            <div
                                                class="card-header border-0 bg-light p-3 pr-5"
                                                id="headingfour"
                                            >
                                                <h6 class="title mb-0">
                                                    {" "}
                                                    Berapa sih kak harga harian, 
                                                    mingguan dan bulanan setiap 
                                                    kos yang dimiliki {" "}
                                                    <span class="text-primary">
                                                        Teraskos
                                                    </span>{" "}
                                                    ?{" "}
                                                </h6>
                                            </div>
                                        </a>
                                        <div
                                            id="collapsefour"
                                            class="collapse"
                                            aria-labelledby="headingfour"
                                            data-parent="#accordionExampleone"
                                        >
                                            <div class="card-body px-2 py-4">
                                                <p class="text-muted mb-0 faq-ans">
                                                Untuk biaya, yakin deh harganya terjangkau. 
                                                Kok bisa? karena kami adalah startup. Bukan 
                                                makelar apalagi calo pelayanan kos-kosan. 
                                                Hehehe. Jadi, setiap biaya yang kamu keluarkan 
                                                pastinya sudah kami kalkulasi secara efektif dan 
                                                efisien. Sebagai contoh, ada loh mitra kos kami 
                                                yang menawarkan harga kos mulai dari Rp.55.000,-/hari, 
                                                Rp.140.000,-/3 hari, Rp.180.000,-/minggu. Nah, kalo 
                                                kamu penasaran tentang detail harganya, maka langsung 
                                                aja lihat di katalog teraskos atau cek di instagram 
                                                kami: @teraskos.info ya kak.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card border-0 rounded">
                                        <a
                                            data-toggle="collapse"
                                            href="#collapsefive2"
                                            class="faq position-relative collapsed"
                                            aria-expanded="false"
                                            aria-controls="collapsefive2"
                                        >
                                            <div
                                                class="card-header border-0 bg-light p-3 pr-5"
                                                id="headingfive2"
                                            >
                                                <h6 class="title mb-0">
                                                    {" "}
                                                    Bagaimana prosedur jika 
                                                    saya ingin membayar kos{" "}
                                                    ?{" "}
                                                </h6>
                                            </div>
                                        </a>
                                        <div
                                            id="collapsefive2"
                                            class="collapse"
                                            aria-labelledby="headingfive2"
                                            data-parent="#accordionExampleone"
                                        >
                                            <div class="card-body px-2 py-4">
                                                <p class="text-muted mb-0 faq-ans">
                                                    Karena kami menyediakan pelayanan kos harian, 
                                                    mingguan, dan bulanan. Maka untuk harian dan 
                                                    mingguan harus dibayarkan di awal transaksi ya kak. 
                                                    Untuk kos bulanan, kamu harus bayar rutin setiap 
                                                    awal bulan dari tanggal 1 s/d 5. Jika pembayaran 
                                                    terlambat atau dibayarkan antara tanggal 5 s/d 10, 
                                                    maka kamu akan dikenakan denda sebesar 20% nih. 
                                                    Lebih dari itu, jika kamu tidak memberikan kabar 
                                                    pembayaran setelah tanggal 10 setiap bulan, maka 
                                                    tim teraskos dapat menyewakan kamar kamu kepada 
                                                    orang lain yang lebih membutuhkan. Makanya, 
                                                    jangan sampai gak ada kabar ketika kamu 
                                                    mendapatkan masalah ataupun kesulitan 
                                                    dalam melakukan pembayaran ya kak. 
                                                    Teraskos bisa jadi tempat curhat-mu 
                                                    juga kok. Siapa tahu kami bisa kasih 
                                                    solusi atas masalah yang kamu hadapi.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card border-0 rounded">
                                        <a
                                            data-toggle="collapse"
                                            href="#collapsesix2"
                                            class="faq position-relative collapsed"
                                            aria-expanded="false"
                                            aria-controls="collapsesix2"
                                        >
                                            <div
                                                class="card-header border-0 bg-light p-3 pr-5"
                                                id="headingsix2"
                                            >
                                                <h6 class="title mb-0">
                                                    {" "}
                                                    Apakah saya bisa mengajak teman saya tidur 
                                                    didalam kamar atau kamar kos terisi 2 orang{" "}
                                                    ?{" "}
                                                </h6>
                                            </div>
                                        </a>
                                        <div
                                            id="collapsesix2"
                                            class="collapse"
                                            aria-labelledby="headingsix2"
                                            data-parent="#accordionExampleone"
                                        >
                                            <div class="card-body px-2 py-4">
                                                <p class="text-muted mb-0 faq-ans">
                                                Jangan khawatir, kami memiliki beberapa mitra 
                                                yang melayani dan menyediakan satu kamar kos 
                                                yang dapat diisi oleh 2 orang dengan ukuran 
                                                double bed. Jadi kamu bisa tuh lebih hemat 
                                                dalam membayar kos tiap bulan. Apalagi kalo 
                                                kamu tidurnya bareng sahabat dekat kan. Jadi 
                                                tiap malam bisa curhat-curhatan atau berbagi 
                                                ide untuk masa depan kalian.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            

                            <div class="section-title mt-5" id="general">
                                <h4>Terascare</h4>
                            </div>

                            <div class="faq-content mt-4 pt-3">
                                <div class="accordion" id="accordionExampletwo">
                                    <div class="card border-0 rounded mb-2">
                                        <a
                                            data-toggle="collapse"
                                            href="#collapsefive"
                                            class="faq position-relative"
                                            aria-expanded="true"
                                            aria-controls="collapsefive"
                                        >
                                            <div
                                                class="card-header border-0 bg-light p-3 pr-5"
                                                id="headingfive"
                                            >
                                                <h6 class="title mb-0">
                                                    {" "}
                                                    Apa sih itu {" "}
                                                    <span class="text-primary">
                                                        Terascare
                                                    </span>{" "}
                                                    ?{" "}
                                                </h6>
                                            </div>
                                        </a>
                                        <div
                                            id="collapsefive"
                                            class="collapse show"
                                            aria-labelledby="headingfive"
                                            data-parent="#accordionExampletwo"
                                        >
                                            <div class="card-body px-2 py-4">
                                                <p class="text-muted mb-0 faq-ans">
                                                    Terascare adalah salah satu unit 
                                                    bisnis dari Teraskos dimana kamu 
                                                    bisa titip kirim atau simpan barang 
                                                    kamu di tempat yang aman. Jika kamu 
                                                    mau pergi KKN, atau pulang kampung 
                                                    dan tidak stay di kosmu dalam 
                                                    beberapa bulan. Daripada kamu 
                                                    bayar biaya kos terus tiap bulan, 
                                                    mending pakai Terascare aja kak. 
                                                    Karena dengan menggunakan Terascare 
                                                    kamu bisa menghemat pengeluaran 
                                                    bulananmu sampai 10X lebih murah 
                                                    daripada bayar kos. Terus, kalo 
                                                    kamu lagi diluar kota, terus kamu 
                                                    memiliki barang penting yang mau 
                                                    kamu kirim ke tempatmu. Kamu juga 
                                                    bisa loh pakai layanan Terascare. 
                                                    Karena kami akan memastikan bahwa 
                                                    barang berhargamu itu akan sampai 
                                                    ke tujuanmu dengan aman, cepat, dan terpercaya.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card border-0 rounded mb-2">
                                        <a
                                            data-toggle="collapse"
                                            href="#collapsesix"
                                            class="faq position-relative collapsed"
                                            aria-expanded="false"
                                            aria-controls="collapsesix"
                                        >
                                            <div
                                                class="card-header border-0 bg-light p-3 pr-5"
                                                id="headingsix"
                                            >
                                                <h6 class="title mb-0">
                                                    {" "}
                                                    Berapa sih jarak kos saya ke 
                                                    lokasi penitipan barang saya kak?{" "}
                                                </h6>
                                            </div>
                                        </a>
                                        <div
                                            id="collapsesix"
                                            class="collapse"
                                            aria-labelledby="headingsix"
                                            data-parent="#accordionExampletwo"
                                        >
                                            <div class="card-body px-2 py-4">
                                                <p class="text-muted mb-0 faq-ans">
                                                Sebelum kamu memastikan berapa jarak antara 
                                                kos dan lokasi mitra kamu. Pastikan dulu 
                                                bahwa kamu sudah yakin memahami prosedur 
                                                penggunaan layanan terascare ya kak. 
                                                Kalo untuk jarak lokasi penitipan barangnya sih, 
                                                kamu bisa lihat pada Mitra Address di setiap kota 
                                                yang ada di layanan Terascare.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card border-0 rounded mb-2">
                                        <a
                                            data-toggle="collapse"
                                            href="#collapseseven"
                                            class="faq position-relative collapsed"
                                            aria-expanded="false"
                                            aria-controls="collapseseven"
                                        >
                                            <div
                                                class="card-header border-0 bg-light p-3 pr-5"
                                                id="headingseven"
                                            >
                                                <h6 class="title mb-0">
                                                    {" "}
                                                    Jika volume barang kos saya lebih dari 
                                                    450.000 cm3 berapa ya biaya 
                                                    perbulan untuk layanan {" "}
                                                    <span class="text-primary">
                                                        Terascare
                                                    </span>{" "}
                                                    ?{" "}
                                                </h6>
                                            </div>
                                        </a>
                                        <div
                                            id="collapseseven"
                                            class="collapse"
                                            aria-labelledby="headingseven"
                                            data-parent="#accordionExampletwo"
                                        >
                                            <div class="card-body px-2 py-4">
                                                <p class="text-muted mb-0 faq-ans">
                                                Kami sudah melakukan perhitungan dengan 
                                                matang tentang biaya titip barang kos 
                                                nih kak. Untuk harga maksimal dalam 
                                                volume barang kos, kami menetapkan harga 
                                                sebesar Rp. 150.000,-. Nah jadi jika volume 
                                                barang kamu sangat banyak, biaya maksimalnya 
                                                hanya 150rb itu kak. Namun, untuk barang-barang 
                                                berat lain seperti kulkas, dipan, dan sejenisnya, 
                                                maka kami akan memberikan biaya tambahan. Karena 
                                                repot juga loh kak ngangkut barang sebesar itu dan 
                                                besar barangnya juga makan tempat banget. So, jangan 
                                                khawatir. Apapun barangmu asalkan barang-barang yang 
                                                legal dan tidak berbahaya bisa dititipkan kok. Untuk 
                                                masalah harga bisa dinegosiasikan kalo memang barang 
                                                tersebut termasuk barang yang besar atau spesial.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card border-0 rounded mb-2">
                                        <a
                                            data-toggle="collapse"
                                            href="#collapseeight"
                                            class="faq position-relative collapsed"
                                            aria-expanded="false"
                                            aria-controls="collapseeight"
                                        >
                                            <div
                                                class="card-header border-0 bg-light p-3 pr-5"
                                                id="headingeight"
                                            >
                                                <h6 class="title mb-0">
                                                    {" "}
                                                    Berapa biaya transportasi untuk 
                                                    memindahkan barang dari kos saya 
                                                    ke lokasi penitipan mitra {" "}
                                                    <span class="text-primary">
                                                        Terascare
                                                    </span>{" "}
                                                     ?{" "}
                                                </h6>
                                            </div>
                                        </a>
                                        <div
                                            id="collapseeight"
                                            class="collapse"
                                            aria-labelledby="headingeight"
                                            data-parent="#accordionExampletwo"
                                        >
                                            <div class="card-body px-2 py-4">
                                                <p class="text-muted mb-0 faq-ans">
                                                    Tenang kak, biaya pemindahan 
                                                    barang sangat terjangkau kok. 
                                                    Jika jarak kos kamu kurang dari 5 km, 
                                                    kamu hanya perlu membayar 
                                                    Rp. 100.000,-. Jika lebih 
                                                    jauh lagi, yaitu antara 5 s/d 10 km 
                                                    kamu hanya perlu menambah Rp. 25.000,- saja.  
                                                    Namun jika kos kamu sangat jauh nih, 
                                                    maka kamu hanya perlu membayar Rp.150.000,-.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card border-0 rounded">
                                        <a
                                            data-toggle="collapse"
                                            href="#collapsenine"
                                            class="faq position-relative collapsed"
                                            aria-expanded="false"
                                            aria-controls="collapsenine"
                                        >
                                            <div
                                                class="card-header border-0 bg-light p-3 pr-5"
                                                id="headingnine"
                                            >
                                                <h6 class="title mb-0">
                                                    {" "}
                                                    Biasanya biaya packing berapa kak?{" "}
                                                </h6>
                                            </div>
                                        </a>
                                        <div
                                            id="collapsenine"
                                            class="collapse"
                                            aria-labelledby="headingnine"
                                            data-parent="#accordionExampletwo"
                                        >
                                            <div class="card-body px-2 py-4">
                                                <p class="text-muted mb-0 faq-ans">
                                                Biaya packing hanya sebesar Rp. 35.000,- 
                                                per box, dengan ukuran box 60x50x45 cm3. 
                                                Jadi jika barang kamu banyak banget nih, 
                                                maka kamu tinggal bayar maksimal harga Rp. 
                                                140.000,- saja kak.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card border-0 rounded mb-2">
                                        <a
                                            data-toggle="collapse"
                                            href="#collapseten2"
                                            class="faq position-relative collapsed"
                                            aria-expanded="false"
                                            aria-controls="collapseten2"
                                        >
                                            <div
                                                class="card-header border-0 bg-light p-3 pr-5"
                                                id="headingten2"
                                            >
                                                <h6 class="title mb-0">
                                                    {" "}
                                                    Bagaimana untuk cara pembayarannya? 
                                                    {" "}
                                                </h6>
                                            </div>
                                        </a>
                                        <div
                                            id="collapseten2"
                                            class="collapse"
                                            aria-labelledby="headingten2"
                                            data-parent="#accordionExampletwo"
                                        >
                                            <div class="card-body px-2 py-4">
                                                <p class="text-muted mb-0 faq-ans">
                                                Begini prosedurnya. Setelah barang dititipkan 
                                                di lokasi mitra kami, kami akan membuatkan MoU 
                                                (Perjanjian Kerjasama) kak. Jumlah biaya yang 
                                                harus dibayarkan sudah tertera disitu kok. Di 
                                                dalam MoU tersebut, kami juga menyertakan No. 
                                                Rekening teraskos. Sehingga kamu hanya perlu 
                                                mengikuti langkah-langkah yang tertulis di MoU. 
                                                Dibaca dengan cermat ya kak MoU-nya supaya tidak 
                                                ada informasi yang terlewat. Terkait transaksi ke 
                                                rekening Bank, jangan khawatir biaya admin kalau 
                                                beda bank kak. Kamu bisa pakai flip, dana, atau 
                                                aplikasi tanpa biaya admin lainnya. Selain itu 
                                                kamu bisa bayar kos di teraskos pakai Gopay juga loh. 
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="section-title mt-5" id="payment">
                                <h4>Terastalks</h4>
                            </div>

                            <div class="faq-content mt-4 pt-3">
                                <div
                                    class="accordion"
                                    id="accordionExamplethree"
                                >
                                    <div class="card border-0 rounded mb-2">
                                        <a
                                            data-toggle="collapse"
                                            href="#collapseten"
                                            class="faq position-relative"
                                            aria-expanded="true"
                                            aria-controls="collapseten"
                                        >
                                            <div
                                                class="card-header border-0 bg-light p-3 pr-5"
                                                id="headingten"
                                            >
                                                <h6 class="title mb-0">
                                                    {" "}
                                                    How our{" "}
                                                    <span class="text-primary">
                                                        Landrick
                                                    </span>{" "}
                                                    work ?{" "}
                                                </h6>
                                            </div>
                                        </a>
                                        <div
                                            id="collapseten"
                                            class="collapse show"
                                            aria-labelledby="headingten"
                                            data-parent="#accordionExamplethree"
                                        >
                                            <div class="card-body px-2 py-4">
                                                <p class="text-muted mb-0 faq-ans">
                                                    There are many variations of
                                                    passages of Lorem Ipsum
                                                    available, but the majority
                                                    have suffered alteration in
                                                    some form.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card border-0 rounded mb-2">
                                        <a
                                            data-toggle="collapse"
                                            href="#collapseeleven"
                                            class="faq position-relative collapsed"
                                            aria-expanded="false"
                                            aria-controls="collapseeleven"
                                        >
                                            <div
                                                class="card-header border-0 bg-light p-3 pr-5"
                                                id="headingeleven"
                                            >
                                                <h6 class="title mb-0">
                                                    {" "}
                                                    What is the main process
                                                    open account ?{" "}
                                                </h6>
                                            </div>
                                        </a>
                                        <div
                                            id="collapseeleven"
                                            class="collapse"
                                            aria-labelledby="headingeleven"
                                            data-parent="#accordionExamplethree"
                                        >
                                            <div class="card-body px-2 py-4">
                                                <p class="text-muted mb-0 faq-ans">
                                                    There are many variations of
                                                    passages of Lorem Ipsum
                                                    available, but the majority
                                                    have suffered alteration in
                                                    some form.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card border-0 rounded mb-2">
                                        <a
                                            data-toggle="collapse"
                                            href="#collapsetwelve"
                                            class="faq position-relative collapsed"
                                            aria-expanded="false"
                                            aria-controls="collapsetwelve"
                                        >
                                            <div
                                                class="card-header border-0 bg-light p-3 pr-5"
                                                id="headingtwelve"
                                            >
                                                <h6 class="title mb-0">
                                                    {" "}
                                                    How to make unlimited data
                                                    entry ?{" "}
                                                </h6>
                                            </div>
                                        </a>
                                        <div
                                            id="collapsetwelve"
                                            class="collapse"
                                            aria-labelledby="headingtwelve"
                                            data-parent="#accordionExamplethree"
                                        >
                                            <div class="card-body px-2 py-4">
                                                <p class="text-muted mb-0 faq-ans">
                                                    There are many variations of
                                                    passages of Lorem Ipsum
                                                    available, but the majority
                                                    have suffered alteration in
                                                    some form.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card border-0 rounded mb-2">
                                        <a
                                            data-toggle="collapse"
                                            href="#collapsethirteen"
                                            class="faq position-relative collapsed"
                                            aria-expanded="false"
                                            aria-controls="collapsethirteen"
                                        >
                                            <div
                                                class="card-header border-0 bg-light p-3 pr-5"
                                                id="headingthirteen"
                                            >
                                                <h6 class="title mb-0">
                                                    {" "}
                                                    Is{" "}
                                                    <span class="text-primary">
                                                        Landrick
                                                    </span>{" "}
                                                    safer to use with my account
                                                    ?{" "}
                                                </h6>
                                            </div>
                                        </a>
                                        <div
                                            id="collapsethirteen"
                                            class="collapse"
                                            aria-labelledby="headingthirteen"
                                            data-parent="#accordionExamplethree"
                                        >
                                            <div class="card-body px-2 py-4">
                                                <p class="text-muted mb-0 faq-ans">
                                                    There are many variations of
                                                    passages of Lorem Ipsum
                                                    available, but the majority
                                                    have suffered alteration in
                                                    some form.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card border-0 rounded">
                                        <a
                                            data-toggle="collapse"
                                            href="#collapsefourteen"
                                            class="faq position-relative collapsed"
                                            aria-expanded="false"
                                            aria-controls="collapsefourteen"
                                        >
                                            <div
                                                class="card-header border-0 bg-light p-3 pr-5"
                                                id="headingfourteen"
                                            >
                                                <h6 class="title mb-0">
                                                    {" "}
                                                    How can i contact your
                                                    technical team ?{" "}
                                                </h6>
                                            </div>
                                        </a>
                                        <div
                                            id="collapsefourteen"
                                            class="collapse"
                                            aria-labelledby="headingfourteen"
                                            data-parent="#accordionExamplethree"
                                        >
                                            <div class="card-body px-2 py-4">
                                                <p class="text-muted mb-0 faq-ans">
                                                    There are many variations of
                                                    passages of Lorem Ipsum
                                                    available, but the majority
                                                    have suffered alteration in
                                                    some form.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="section-title mt-5" id="support">
                                <h4>Support Questions</h4>
                            </div>

                            <div class="faq-content mt-4 pt-3">
                                <div
                                    class="accordion"
                                    id="accordionExamplefour"
                                >
                                    <div class="card border-0 rounded mb-2">
                                        <a
                                            data-toggle="collapse"
                                            href="#collapsefifthenn"
                                            class="faq position-relative"
                                            aria-expanded="true"
                                            aria-controls="collapsefifthenn"
                                        >
                                            <div
                                                class="card-header border-0 bg-light p-3 pr-5"
                                                id="headingfiftheen"
                                            >
                                                <h6 class="title mb-0">
                                                    {" "}
                                                    How our{" "}
                                                    <span class="text-primary">
                                                        Landrick
                                                    </span>{" "}
                                                    work ?{" "}
                                                </h6>
                                            </div>
                                        </a>
                                        <div
                                            id="collapsefifthenn"
                                            class="collapse show"
                                            aria-labelledby="headingfiftheen"
                                            data-parent="#accordionExamplefour"
                                        >
                                            <div class="card-body px-2 py-4">
                                                <p class="text-muted mb-0 faq-ans">
                                                    There are many variations of
                                                    passages of Lorem Ipsum
                                                    available, but the majority
                                                    have suffered alteration in
                                                    some form.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card border-0 rounded mb-2">
                                        <a
                                            data-toggle="collapse"
                                            href="#collapsesixteen"
                                            class="faq position-relative collapsed"
                                            aria-expanded="false"
                                            aria-controls="collapsesixteen"
                                        >
                                            <div
                                                class="card-header border-0 bg-light p-3 pr-5"
                                                id="headingsixteen"
                                            >
                                                <h6 class="title mb-0">
                                                    {" "}
                                                    What is the main process
                                                    open account ?{" "}
                                                </h6>
                                            </div>
                                        </a>
                                        <div
                                            id="collapsesixteen"
                                            class="collapse"
                                            aria-labelledby="headingsixteen"
                                            data-parent="#accordionExamplefour"
                                        >
                                            <div class="card-body px-2 py-4">
                                                <p class="text-muted mb-0 faq-ans">
                                                    There are many variations of
                                                    passages of Lorem Ipsum
                                                    available, but the majority
                                                    have suffered alteration in
                                                    some form.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card border-0 rounded mb-2">
                                        <a
                                            data-toggle="collapse"
                                            href="#collapseseventeen"
                                            class="faq position-relative collapsed"
                                            aria-expanded="false"
                                            aria-controls="collapseseventeen"
                                        >
                                            <div
                                                class="card-header border-0 bg-light p-3 pr-5"
                                                id="headingseventeen"
                                            >
                                                <h6 class="title mb-0">
                                                    {" "}
                                                    How to make unlimited data
                                                    entry ?{" "}
                                                </h6>
                                            </div>
                                        </a>
                                        <div
                                            id="collapseseventeen"
                                            class="collapse"
                                            aria-labelledby="headingseventeen"
                                            data-parent="#accordionExamplefour"
                                        >
                                            <div class="card-body px-2 py-4">
                                                <p class="text-muted mb-0 faq-ans">
                                                    There are many variations of
                                                    passages of Lorem Ipsum
                                                    available, but the majority
                                                    have suffered alteration in
                                                    some form.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card border-0 rounded mb-2">
                                        <a
                                            data-toggle="collapse"
                                            href="#collapseeigheteen"
                                            class="faq position-relative collapsed"
                                            aria-expanded="false"
                                            aria-controls="collapseeigheteen"
                                        >
                                            <div
                                                class="card-header border-0 bg-light p-3 pr-5"
                                                id="headingeighteen"
                                            >
                                                <h6 class="title mb-0">
                                                    {" "}
                                                    Is{" "}
                                                    <span class="text-primary">
                                                        Landrick
                                                    </span>{" "}
                                                    safer to use with my account
                                                    ?{" "}
                                                </h6>
                                            </div>
                                        </a>
                                        <div
                                            id="collapseeigheteen"
                                            class="collapse"
                                            aria-labelledby="headingeighteen"
                                            data-parent="#accordionExamplefour"
                                        >
                                            <div class="card-body px-2 py-4">
                                                <p class="text-muted mb-0 faq-ans">
                                                    There are many variations of
                                                    passages of Lorem Ipsum
                                                    available, but the majority
                                                    have suffered alteration in
                                                    some form.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card border-0 rounded">
                                        <a
                                            data-toggle="collapse"
                                            href="#collapsenineteen"
                                            class="faq position-relative collapsed"
                                            aria-expanded="false"
                                            aria-controls="collapsenineteen"
                                        >
                                            <div
                                                class="card-header border-0 bg-light p-3 pr-5"
                                                id="headingnineteen"
                                            >
                                                <h6 class="title mb-0">
                                                    {" "}
                                                    How can i contact your
                                                    technical team ?{" "}
                                                </h6>
                                            </div>
                                        </a>
                                        <div
                                            id="collapsenineteen"
                                            class="collapse"
                                            aria-labelledby="headingnineteen"
                                            data-parent="#accordionExamplefour"
                                        >
                                            <div class="card-body px-2 py-4">
                                                <p class="text-muted mb-0 faq-ans">
                                                    There are many variations of
                                                    passages of Lorem Ipsum
                                                    available, but the majority
                                                    have suffered alteration in
                                                    some form.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container mt-100 mt-60">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-12">
                            <div class="media align-items-center shadow rounded p-4 features">
                                <div class="icons m-0 rounded h2 text-primary text-center px-3">
                                    <i class="uil uil-envelope-check"></i>
                                </div>
                                <div class="content ml-4">
                                    <h5 class="mb-1">
                                        <a
                                            href="javascript:void(0)"
                                            class="text-dark"
                                        >
                                            Get in Touch !
                                        </a>
                                    </h5>
                                    <p class="text-muted mb-0">
                                        This is required when, for text is not
                                        yet available.
                                    </p>
                                    <div class="mt-2">
                                        <a
                                            href="javascript:void(0)"
                                            class="btn btn-sm btn-soft-primary"
                                        >
                                            Submit a Request
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div class="media align-items-center shadow rounded p-4 features">
                                <div class="icons m-0 rounded h2 text-primary text-center px-3">
                                    <i class="uil uil-webcam"></i>
                                </div>
                                <div class="content ml-4">
                                    <h5 class="mb-1">
                                        <a
                                            href="javascript:void(0)"
                                            class="text-dark"
                                        >
                                            Start a Meeting
                                        </a>
                                    </h5>
                                    <p class="text-muted mb-0">
                                        This is required when, for text is not
                                        yet available.
                                    </p>
                                    <div class="mt-2">
                                        <a
                                            href="javascript:void(0)"
                                            class="btn btn-sm btn-soft-primary"
                                        >
                                            Start Video Chat
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default FAQ;
