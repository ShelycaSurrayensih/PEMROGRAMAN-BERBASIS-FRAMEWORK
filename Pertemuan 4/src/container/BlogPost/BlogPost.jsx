import React, { Component } from "react";
import './BlogPost.css';
import Post from "../../component/BlogPost/Post";

class BlogPost extends Component {
   state = {           // komponen state dari React untuk statefull component
        listArtikel: [] // variabel array yang digunakan untuk menyimpan data API
    }

    ambilDataDariServerAPI = () => {		// fungsi untuk mengambil data dari API dengan penambahan sort dan order
        fetch('http://localhost:3001/posts')	// alamat URL API yang ingin kita ambil datanya
            .then(response => response.json())	// ubah response data dari URL API menjadi sebuah data json
            .then(jsonHasilAmbilDariAPI => {	// data json hasil ambil dari API kita masukkan ke dalam listArtikel pada state
                this.setState({
                    listArtikel: jsonHasilAmbilDariAPI
                })
            })
    }

    componentDidMount() {	// komponen untuk mengecek ketika component telah dimounting, maka panggil API
        this.ambilDataDariServerAPI()	// ambil data dari server API lokal    
    }
    
    handleHapusArtikel = (data) => {
        fetch(`http://localhost:3001/posts/${data}`, {method: 'DELETE'})	// alamat URL API yang ingin kita HAPUS datanya
            .then(res => {	// ketika proses hapus berhasil, maka ambil data dari server API lokal
                this.ambilDataDariServerAPI()
            })
    }

    render() {
        return(
            <div className="post-artikel">
                <h2>Daftar Artikel</h2>
                {
                    this.state.listArtikel.map(artikel => {	// looping dan masukkan untuk setiap data yang ada di listArtikel ke variabel artikel
                        return <Post key={artikel.id} judul={artikel.title} isi={artikel.body} idArtikel={artikel.id} hapusArtikel={this.handleHapusArtikel}/>	// mappingkan data json dari API sesuai dengan kategorinya
                    })
                }
            </div>
        )
    }
}

export default BlogPost;