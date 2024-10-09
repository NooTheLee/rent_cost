document.getElementById("houseRentForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Các khoản cố định
    const netPerPerson = 70000;
    const waterPerPerson = 80000;
    const roomPerPerson = 1300000;
  
    // Lấy giá trị tổng tiền nhà từ input và chuyển thành số nguyên
    let totalRent = document.getElementById("totalRent").value.replace(/\./g, ""); // Bỏ dấu chấm
    totalRent = parseFloat(totalRent);
  
    if (isNaN(totalRent) || totalRent <= 0) {
      alert("Vui lòng nhập một số hợp lệ!");
      return;
    }
  
    // Tổng chi phí cố định cho cả hai người
    const fixedCosts = (netPerPerson + waterPerPerson + roomPerPerson) * 2;
  
    // Tính tổng tiền điện
    const electricityTotal = totalRent - fixedCosts;
  
    // Chia tiền điện theo tỉ lệ 6:4
    const person1Electricity = (electricityTotal * 6) / 10;
    const person2Electricity = (electricityTotal * 4) / 10;
  
    // Tính tổng tiền mỗi người phải trả
    const totalPerson1 = person1Electricity + netPerPerson + waterPerPerson + roomPerPerson;
    const totalPerson2 = person2Electricity + netPerPerson + waterPerPerson + roomPerPerson;
  
    // Hàm định dạng số tiền VNĐ
    function formatCurrency(value) {
      return value.toLocaleString('vi-VN');
    }
  
    // Hiển thị kết quả
    document.getElementById("totalPerson1").textContent = formatCurrency(totalPerson1);
    document.getElementById("person1Electricity").textContent = formatCurrency(person1Electricity);
    document.getElementById("waterCost").textContent = formatCurrency(waterPerPerson);
    document.getElementById("roomCost").textContent = formatCurrency(roomPerPerson);
    document.getElementById("netCost").textContent = formatCurrency(netPerPerson);
  
    document.getElementById("totalPerson2").textContent = formatCurrency(totalPerson2);
    document.getElementById("person2Electricity").textContent = formatCurrency(person2Electricity);
    document.getElementById("waterCost2").textContent = formatCurrency(waterPerPerson);
    document.getElementById("roomCost2").textContent = formatCurrency(roomPerPerson);
    document.getElementById("netCost2").textContent = formatCurrency(netPerPerson);
  
    document.getElementById("result").classList.remove("hidden");
  });
  
  // Định dạng giá trị nhập thành số tiền (VD: 1.000)
  document.getElementById("totalRent").addEventListener("input", function(event) {
    let value = this.value.replace(/\./g, ""); // Bỏ dấu chấm trước khi định dạng
    value = parseInt(value) || 0;
  
    // Định dạng lại số tiền theo kiểu 1.000.000
    this.value = value.toLocaleString('vi-VN');
  });
  