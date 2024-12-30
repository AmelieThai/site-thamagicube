document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
      const fileSizeMB = file.size / (1024 * 1024);
      document.getElementById('fileSize').innerText = `File Size: ${fileSizeMB.toFixed(2)} MB`;
    }
  });
  
  function calculatePrice(material, size) {
    const basePrice = 10; // Base price per cm³
    const materialMultiplier = material === 'ABS' ? 1.2 : material === 'PLA' ? 1.0 : 1.5;
    const totalPrice = basePrice * size * materialMultiplier;
    document.getElementById('price').innerText = `Estimated Price: $${totalPrice.toFixed(2)}`;
  }