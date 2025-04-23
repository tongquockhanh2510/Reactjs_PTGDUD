import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState(() => {
    // Tải danh sách sản phẩm từ localStorage nếu có
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
    // Lưu danh sách sản phẩm vào localStorage mỗi khi có sự thay đổi
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

  // Tổng số sản phẩm và tồn kho
  const totalProducts = filteredProducts.length;  // Tổng số sản phẩm trong danh sách
  const totalStock = filteredProducts.reduce((acc, product) => acc + product.stock, 0);  // Tổng tồn kho của các sản phẩm

  const uniqueCategories = ["Tất cả", ...new Set(products.map(p => p.category))];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-6 w-full max-w-5xl bg-white rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Quản lý sản phẩm</h1>

        {/* Form thêm sản phẩm */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <input
            type="text"
            name="name"
            placeholder="Tên sản phẩm"
            value={form.name}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="number"
            name="price"
            placeholder="Giá"
            value={form.price}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="category"
            placeholder="Danh mục"
            value={form.category}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="number"
            name="stock"
            placeholder="Tồn kho"
            value={form.stock}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>

        <button
          onClick={handleAddProduct}
          className="bg-green-500 text-white px-4 py-2 rounded mb-6 hover:bg-green-600"
        >
          Thêm sản phẩm
        </button>

        {/* Bộ lọc và tìm kiếm */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="Tìm kiếm theo tên..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border p-2 rounded"
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border p-2 rounded"
          >
            {uniqueCategories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Danh sách sản phẩm */}
        <h2 className="text-xl font-semibold mb-2">Danh sách sản phẩm</h2>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Tên</th>
              <th className="border px-4 py-2">Giá</th>
              <th className="border px-4 py-2">Danh mục</th>
              <th className="border px-4 py-2">Tồn kho</th>
              <th className="border px-4 py-2">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id}>
                <td className="border px-4 py-2">{product.name}</td>
                <td className="border px-4 py-2">{product.price.toLocaleString()}đ</td>
                <td className="border px-4 py-2">{product.category}</td>
                <td className="border px-4 py-2">{product.stock}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  >
                    Xoá
                  </button>
                </td>
              </tr>
            ))}
            {filteredProducts.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center p-4">
                  Không tìm thấy sản phẩm phù hợp.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Hiển thị tổng số sản phẩm và tổng tồn kho dưới danh sách sản phẩm */}
        <div className="flex justify-between mt-4">
          <span className="font-semibold">Tổng số sản phẩm: {totalProducts}</span>
          <span className="font-semibold">Tổng tồn kho: {totalStock}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
