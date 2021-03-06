qrcode.callback = null;

function openQRCamera(node) {
  var reader = new FileReader();
  reader.onload = function () {
    node.value = "";
    qrcode.callback = function (res) {
      if (res instanceof Error) {
        alert(
          "No QR Code found. Please choose only Image files."
        );
      } else {
        node.parentNode.previousElementSibling.value = res;
      }
    };
    qrcode.decode(reader.result);
  };
  reader.readAsDataURL(node.files[0]);
}

