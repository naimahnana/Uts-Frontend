import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";


import Card from "./components/Card";
import Nav from "./components/Nav";
import ReactState from "./components/ReactState";
import Form from "./components/Form";

//Untuk komponen app.jsx kita masukkan seluruh data yang sudah kita import dari komponen seblumnya
//sekarang kita keapp.jsx nya. dimana saya sudah menyediakan terlebih dahulu agar tidak ada kendala lemotuntuk search. bisa dilihan dibawah sudah adalink gambar,nama produk, dan keterangan. gambar tersebuat saya ambil dari google Terimakasih.

const listHijab = [
  {
    gambar: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tokopedia.com%2Fefkaofficial%2Fbergo-hanin-simple-jilbab-instan-jumbo-anti-tembem-hijab-instan-jersey-maroon&psig=AOvVaw32B4K9LfkFqe4QGTudO4lj&ust=1649746704530000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCOiPh9C3i_cCFQAAAAAdAAAAABAD",
    title: "Hijab instan",
    content:
      "Bingung Mencari Model Hijab Yang Sesuai Dengan Bentuk Wajahmu? Simak Artikel Berikut Ini! Cari Tahu Pilihan Model Hijab Yang Sesuai Dengan Bentuk Wajahmu Selengkapnya Di Sini! Berbagai Perawatan. Inspirasi Rambut. Tutorial Rambut. Gaya Rambut Terkini.",
  },
  {
    gambar: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bukalapak.com%2Fp%2Ffashion-wanita%2Fjilbab-2571%2Fpashmina%2Fg44pli-jual-jilbab-instan-pashmina-instan-hijab-instan-kerudung-instan-polos%3Ffrom%3D%26keyword%3D%26product_owner%3Dnormal_seller&psig=AOvVaw1kNppeOuIvjgzwHIjgCUJW&ust=1649746951530000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCOiWiL64i_cCFQAAAAAdAAAAABAD",
    title: "Hijab Pashmina",
    content:
      "Tampil cantik serta modis sesuai keinginan.pashmina solusinya.",
  },
  {
    gambar: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fshopee.co.id%2Fjilbab-Rabbani-Asli-Innova-LX-Kerudung-Sekolah-size-S-M-L-i.181181589.7262792067&psig=AOvVaw3VDkF6B-xy5MlTyLFVPEIl&ust=1649747427617000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCMDjn6C6i_cCFQAAAAAdAAAAABAD",
    title: "Rabani",
    content:
      "Kerudung Rabbani terbaru terbuat dari bahan kualitas tinggi. Banyak produk busana muslim lainnya termasuk kerudung instan.",
  },
  {
    gambar: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fshopee.co.id%2FSEGIEMPAT-PARIS-POLOS-PREMIUM-AZARA-ANTI-LETOY-PARIS-VOAL-KERUDUNG-MIRACLE-MURAH-HIJAB-JILBAB-SQUARE-JILBAB-SEMI-PREMIUM-SEKOLAH-i.293694213.13702292612&psig=AOvVaw1wouT0xVwUiUISV4GQO63t&ust=1649747583880000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCIDg1Om6i_cCFQAAAAAdAAAAABAD",
    title: "Hijab Paris Segiempat",
    content:
      "Bahan voal memang lagi naik daun banget nih! Seringkali, bahan ini disebut sebagai bahan paris premium. Katun tipis yang sangat adem, mudah diatur, dan tidak mudah kusut membuat hijab voal disukai oleh banyak orang! Kini, bahan voal tersedia dalam berbagai motif juga.",
  },
  
  //buat const yang berisi file gambar,title dan content yang akan dimasukkan ke dalam kerangka komponen card
];

function App() {
  return (
    <div>
      <Nav />
      <div className="container mb-4 mt-4">
        
      </div>
      <div className="container">
        <div className="row">
          {listHijab.map((agt, indeks) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <Card
                gambar={agt.gambar}
                title={agt.title}
                content={agt.content}
              />
            </div>
          ))}
        </div>
      </div>
      <hr />

      <div className="container">
        <h2>State</h2>
        <ReactState />
      </div>
    </div>
  );
}
// ketik function untuk memasukkan element jsx dengan input nav , card
// kemudian buat div classname yang berisi element jsx reactState
export default App;
