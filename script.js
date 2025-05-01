document.addEventListener("DOMContentLoaded", function () {
  const ekleBtn = document.getElementById("ekle");
  const hedefDiv = document.getElementById("ders-ekle");
  const maxLimit = 5;

  ekleBtn.addEventListener("click", function () {
    const mevcutDersler = hedefDiv.querySelectorAll(".eklenen-ders");

    if (mevcutDersler.length >= maxLimit) {
      alert("Maksimum 5 ders eklenebilir!");
      return;
    }

    // Yeni div oluştur
    const yeniDersDiv = document.createElement("div");
    yeniDersDiv.className = "eklenen-ders flex border border-textColor rounded-lg mt-4 items-center h-10 bg-white";

    // İçeriğini belirle
    yeniDersDiv.innerHTML = `
      <div class="ders-kodu-input flex items-center border-r border-textColor h-full basis-[30%] px-2">
          <input type="text" placeholder="0000000" maxlength="7" class="w-full placeholder-textColor outline-0">
      </div>
      <div class="ders-adi-input flex items-center basis-[60%] px-2 h-full">
          <input type="text" placeholder="Ders Adı" maxlength="40" class="w-full placeholder-textColor outline-0">
      </div>
      <button class="ders-cikar cursor-pointer p-2">
          <img src="assets/icon/Vector.png" alt="">
      </button>
    `;

    // Yeni div'i "ekle" butonundan önce ekle
    hedefDiv.insertBefore(yeniDersDiv, ekleBtn);

    // Çıkar butonunu tanımla
    const cikarBtn = yeniDersDiv.querySelector(".ders-cikar");

    cikarBtn.addEventListener("click", function () {
      yeniDersDiv.remove();
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const cakisanEkleBtn = document.getElementById("cakisan-ders-ekle");
  const cakisanContainer = document.querySelector(".ders-sil");
  const cakisanMax = 5;

  cakisanEkleBtn.addEventListener("click", function () {
    const mevcutDersler = cakisanContainer.querySelectorAll(".cakisan-ders");

    if (mevcutDersler.length >= cakisanMax) {
      alert("Maksimum 5 çakışan ders eklenebilir!");
      return;
    }

    const yeniDers = document.createElement("div");
    yeniDers.className = "cakisan-ders flex w-full border border-textColor relative h-10 items-center bg-white mt-4 rounded-lg";

    yeniDers.innerHTML = `
      <div class="ders-kodu w-3/10 border-r border-textColor flex items-center h-full px-2">
          <input type="text" placeholder="0000000" class="w-full placeholder-textColor outline-0">
      </div>
      <div class="ders-adi w-3/5 px-2 h-full flex border-r border-textColor items-center">
          <input type="text" placeholder="Ders Adı" class="w-full placeholder-textColor outline-0">
      </div>
      <div class="grup w-3/10 px-2 h-full flex items-center">
          <input type="text" placeholder="Grup" maxlength="3" class="w-full placeholder-textColor outline-0">
      </div>
      <button class="cakisan-ders-cikar absolute right-2 p-2 cursor-pointer">
          <img src="assets/icon/Vector.png" alt="">
      </button>
    `;

    cakisanContainer.insertBefore(yeniDers, cakisanEkleBtn);

    const cikarBtn = yeniDers.querySelector(".cakisan-ders-cikar");
    cikarBtn.addEventListener("click", function () {
      yeniDers.remove();
    });
  });
});
