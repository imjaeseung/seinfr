// JavaScript Documentfunction buyGrapes() {
  var quantity = document.getElementById("quantity").value;
  var resultDiv = document.getElementById("result");

  // 여기에 실제로 포도를 구매하는 코드를 작성합니다.
  // 구매 처리를 완료한 후 결과를 resultDiv에 표시하면 됩니다.
  var totalPrice = 10 * quantity;

  resultDiv.innerHTML = "구매가 완료되었습니다! 총 가격은 " + totalPrice + "원입니다.";
}
