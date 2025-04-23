function App() {
  const sampleProducts = [
    { id: 1, name: "Áo thun", price: 150000, category: "Thời trang", stock: 10 },
    { id: 2, name: "Tai nghe", price: 500000, category: "Công nghệ", stock: 5 },
    { id: 3, name: "Máy xay sinh tố", price: 800000, category: "Gia dụng", stock: 3 }
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Danh sách sản phẩm</h1>
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
          {sampleProducts.map((product) => (
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
