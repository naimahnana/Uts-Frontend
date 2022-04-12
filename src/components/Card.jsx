import Rect from "react"; //ketik import untuk menghubungkan ke app.jsx

const Card = ({gambar, title, content}) => { //ketik sfc, beri nama card sama seperti judul yang telah dibuat
  //lalu masukkan parameter gambar, title, konten
  return (
    <div>
      <div className="card"> 
        <img src={gambar} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {content} 
          </p>
          <a href="#" className="btn btn-primary">
            BUY NOW
          </a>
        </div>
      </div>
    </div>
  );
};
//buat div untuk memasukkan property classname untuk membuat kerangka tampilan 

export default Card;