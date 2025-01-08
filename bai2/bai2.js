//hàm tính điểm trung bình
function tinhTrungBinh(diem1, diem2, diem3) {
    return (diem1 + diem2 + diem3) / 3;
  }
  
  let diemDolphins = tinhTrungBinh(96, 108, 89);
  let diemKoalas = tinhTrungBinh(88, 91, 110);
  console.log("Dolphins score: ", diemDolphins.toFixed(2));
  console.log("Koalas score: ", diemKoalas.toFixed(2));
  
  //người chiến thắng
  if (diemDolphins > diemKoalas && diemDolphins >= 100) {
    console.log("Dolphins win");
  } else if (diemDolphins < diemKoalas && diemKoalas >= 100) {
    console.log("Koalas win");
  } else if (
    diemDolphins >= 100 &&
    diemKoalas >= 100 &&
    diemDolphins === diemKoalas
  ) {
    console.log("two teams draw");
  } else {
    console.log("no team wins the trophy");
  }
  