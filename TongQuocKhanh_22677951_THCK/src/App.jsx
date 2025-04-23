import { useState } from "react";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Áo thun", price: 150000, category: "Thời trang", stock: 10 },
    { id: 2, name: "Tai nghe", price: 500000, category: "Công nghệ", stock: 5 },
    { id: 3, name: "Máy xay sinh tố", price: 800000, category: "Gia dụng", stock: 3 }
  ]);

  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    stock: ""
  });

  const [searchTerm, setSearchTerm] = useState("");

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
    const confirmDelete = confirm("Bạn có chắc muốn xoá sản phẩm này?");
    if (confirmDelete) {
      setProducts(products.filter(product => product.id !== id));
    }
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

        {/* Ô tìm kiếm */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Tìm kiếm theo tên..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border p-2 w-full rounded"
          />
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
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
