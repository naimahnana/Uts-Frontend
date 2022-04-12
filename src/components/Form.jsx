import { useState } from "react"
//sama seperti sebelumnya masukkan import agar terhubung ke app.jsx

const Form =()=>{
    const [gambar, setGambar] = useState('')
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const simpan = () =>{
        setGambar('')
        setTitle('')
        setContent('')
    }
//kemudian ketik sfc beri nama form seperti judul, 
//lalu buat variabel const yang berisi parameter gambar, title dan content atau teks
    return(
        <div className="container border p-4">
            <h3>Input Data Card</h3>
            <hr />
            <label htmlFor="gambar" className="mb-2 me-2">
                Gambar
                <input type="text" className="form-control" 
                       placeholder="gambar" id="gambar" value={gambar}
                       onChange={(e)=>setGambar(e.target.value)}
                />    
            </label> 
            <label htmlFor="title" className="label">
                Title
                <input type="text" className="form-control" 
                placeholder="title" id="title" value={title}
                onChange={(e)=>setTitle(e.target.value)}
            />    
            </label>
            <div className="mb-2">
            <label htmlFor="content" >Content</label>
                <textarea type="text" className="form-control" 
                    placeholder="content" id="content" value={content}
                    onChange={(e)=>setContent(e.target.value)}
                />  
            </div>
              
            
            <div className="d-flex flex-row-reverse mt-4"> 
                <button className="btn btn-primary"
                        onClick={simpan}
                >Simpan</button>
            </div>
        </div>
    )
}
//kemudian kita return lalu buat div dan di dalamnya div ada label untuk memasukkan property classname untuk 
//menampilkan isi dari kerangka dalam komponen card (didalam classname itu ukuran labelnya)
//kemudian buat div lagi untuk membuat tombol button 

//maaf tadi ada kendala saat merekam jadi kepotong vodeonya, diatas itu hasilnya
export default Form