import { useState, useEffect } from "react";
import ProductItem from "./component/ProductItem";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [products, setProducts] = useState(() => {
    const storedProducts = localStorage.getItem("products");
    return storedProducts ? JSON.parse(storedProducts) : [
      { id: 1, name: "Áo thun", price: 150000, category: "Thời trang", stock: 10 },
      { id: 2, name: "Tai nghe", price: 500000, category: "Công nghệ", stock: 5 },
      { id: 3, name: "Máy xay sinh tố", price: 800000, category: "Gia dụng", stock: 3 },
      { id: 4, name: "Laptop", price: 15000000, category: "Công nghệ", stock: 2 },
      { id: 5, name: "Quạt máy", price: 400000, category: "Gia dụng", stock: 8 },
    ];
  });

  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    stock: ""
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddProduct = () => {
    if (!form.name || !form.price || !form.category || !form.stock) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    const newProduct = {
      id: Date.now(),
      name: form.name,
      price: Number(form.price),
      category: form.category,
      stock: Number(form.stock)
    };

    setProducts([...products, newProduct]);
    setForm({ name: "", price: "", category: "", stock: "" });
  };

  const handleDelete = (id) => {
    if (confirm("Bạn có chắc muốn xoá sản phẩm này?")) {
      setProducts(products.filter(product => product.id !== id));
    }
  };

  const filteredProducts = products
    .filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(product =>
      selectedCategory === "Tất cả" || product.category === selectedCategory
    );

  const totalProducts = filteredProducts.length;
  const totalStock = filteredProducts.reduce((acc, product) => acc + product.stock, 0);

  const uniqueCategories = ["Tất cả", ...new Set(products.map(p => p.category))];

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Quản lý sản phẩm</h1>

      {/* Form thêm sản phẩm */}
      <div className="row mb-4">
        <div className="col-md-3">
          <input
            type="text"
            name="name"
            placeholder="Tên sản phẩm"
            value={form.name}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="col-md-3">
          <input
            type="number"
            name="price"
            placeholder="Giá"
            value={form.price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            name="category"
            placeholder="Danh mục"
            value={form.category}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="col-md-3">
          <input
            type="number"
            name="stock"
            placeholder="Tồn kho"
            value={form.stock}
            onChange={handleChange}
            className="form-control"
          />
        </div>
      </div>

      <button
        onClick={handleAddProduct}
        className="btn btn-success w-100 mb-4"
      >
        Thêm sản phẩm
      </button>

      {/* Bộ lọc và tìm kiếm */}
      <div className="row mb-4">
        <div className="col-md-6">
          <input
            type="text"
            placeholder="Tìm kiếm theo tên..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="col-md-6">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="form-control"
          >
            {uniqueCategories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Danh sách sản phẩm */}
      <h2 className="text-center mb-3">Danh sách sản phẩm</h2>
      <table className="table table-bordered table-striped">
        <thead>
          <tr className="table-dark">
            <th>Tên</th>
            <th>Giá</th>
            <th>Danh mục</th>
            <th>Tồn kho</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <ProductItem key={product.id} product={product} onDelete={handleDelete} />
          ))}
          {filteredProducts.length === 0 && (
            <tr>
              <td colSpan="5" className="text-center">
                Không tìm thấy sản phẩm phù hợp.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Hiển thị tổng số sản phẩm và tổng tồn kho dưới danh sách sản phẩm */}
      <div className="d-flex justify-content-between mt-4">
        <span className="font-weight-bold">Tổng số sản phẩm: {totalProducts}</span>
        <span className="font-weight-bold">Tổng tồn kho: {totalStock}</span>
      </div>
    </div>
  );
}

export default App;
