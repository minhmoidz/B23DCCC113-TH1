import React, { useState } from 'react';
import axios from 'axios';

function SearchImage() {
  const [query, setQuery] = useState(''); 
  const [images, setImages] = useState([]); 


  const searchImages = async (e) => {
    e.preventDefault();
    const url = `https://pixabay.com/api/?key=46166847-40e887f0f1cbd269c98d3b401&q=${query.trim()}&image_type=photo`;

    try {
      const response = await axios.get(url); 
      setImages(response.data.hits); 
    } catch (error) {
      console.error("Có lỗi xảy ra khi lấy dữ liệu ảnh", error);
    }
  };

  return (
    <div className="app-container">
      <div className="content-box">
        <h1>Tìm kiếm hình ảnh</h1>
        <form onSubmit={searchImages}>
          <input
            type="text"
            placeholder="Nhập từ khóa"
            className="form-control"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">Tìm</button>
        </form>

        {}
        <div className="row mt-4">
          {images.length > 0 && images.map((image) => (
            <div key={image.id} className="col-md-4 mb-4">
              <div className="card">
                <img
                  src={image.webformatURL}
                  alt={image.tags}
                  className="card-img-top"
                />
                <div className="card-body">
                  <p className="card-text">{image.tags}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchImage;
