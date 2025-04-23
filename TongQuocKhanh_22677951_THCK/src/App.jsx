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

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Thêm sản phẩm mới</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
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
        className="bg-green-500 text-white px-4 py-2 rounded mb-6"
      >
        Thêm sản phẩm
      </button>

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
          {products.map((product) => (
            <tr key={product.id}>
              <td className="border px-4 py-2">{product.name}</td>
              <td className="border px-4 py-2">{product.price.toLocaleString()}đ</td>
              <td className="border px-4 py-2">{product.category}</td>
              <td className="border px-4 py-2">{product.stock}</td>
              <td className="border px-4 py-2">
                <button className="bg-red-500 text-white px-2 py-1 rounded">Xoá</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
