fetch("https://api.example.com/kgl-stock")  // Step 1: Order food (Request)
    .then(function(response) {               
        return response.json();              // Step 2: Wait for it (Process Response)
    })
    .then(function(data) {                   
        console.log(data);                   // Step 3: Get and eat (Use Data)
    })
    .catch(function(error) {                 
        console.log("❌ Error:", error);      // If something goes wrong
    });

<script>
    function getStock() {
        fetch("https://api.example.com/kgl-stock")
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                var stockList = document.getElementById("stockList");
                stockList.innerHTML = "";
                data.forEach(function(item) {
                    var li = document.createElement("li");
                    li.textContent = item.name + ": " + item.stock + "kg available";
                    stockList.appendChild(li);
                });
            })
            .catch(function(error) {
                console.log("❌ Error fetching stock:", error);
            })
    }
</script>