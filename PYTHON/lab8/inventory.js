$(document).ready(function(){
    let inventory = JSON.parse(localStorage.getItem('inventory')) || [];

    function displayInventory(filter = "") {
        let items = [];
        let filteredInventory = inventory.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));
        $.each(filteredInventory, function(key, val){
            items.push("<tr><td>" + val.name + "</td><td>" + val.quantity + "</td><td><button class='update' data-id='" + key + "'>Update</button> <button class='delete' data-id='" + key + "'>Delete</button></td></tr>");
        });
        $("#table_body").html(items.join(""));
    }

    function addItem(name, quantity) {
        if (quantity < 0) {
            $("#feedback").text("Error: Quantity cannot be negative.").css("color", "red");
            return;
        }
        
        let existing = inventory.find(item => item.name === name);
        if(existing) {
            existing.quantity += quantity;
        } else {
            inventory.push({name: name, quantity: quantity});
        }
        localStorage.setItem('inventory', JSON.stringify(inventory));
        $("#feedback").text("Item successfully added.").css("color", "green");
        displayInventory();
    }
    function updateItem(id, name, quantity) {
        inventory[id].name = name;
        inventory[id].quantity = quantity;
        localStorage.setItem('inventory', JSON.stringify(inventory));
        displayInventory();
    }

    function removeItem(id) {
        inventory = inventory.filter((item, index) => index !== id);
        localStorage.setItem('inventory', JSON.stringify(inventory));
        displayInventory();
    }

    $("#itemform").on("submit", function(e){
        e.preventDefault();
        let name = $("#item_name").val();
        let quantity = parseInt($("#item_quantity").val(), 10);
        addItem(name, quantity);
        $("#item_name").val("");
        $("#item_quantity").val("");
    });

    $("#search_item").on("keyup", function() {
        let filter = $(this).val();
        displayInventory(filter);
    });

    $("#sort_inventory").on("change", function() {
        let sortOrder = $(this).val().split('-');
        let property = sortOrder[0];
        let order = sortOrder[1];
        inventory.sort((a, b) => {
            if (order === 'asc') {
                return a[property] > b[property] ? 1 : -1;
            } else {
                return a[property] < b[property] ? 1 : -1;
            }
        });
        displayInventory();
    });

    $("#table_body").on("click", ".delete", function(){
        let id = $(this).data("id");
        removeItem(id);
    });

    $("#table_body").on("click", ".update", function(){
        let id = $(this).data("id");
        let name = inventory[id].name;
        let quantity = parseInt(prompt("Enter new quantity:"), 10);
        if (!isNaN(quantity)) {
            updateItem(id, name, quantity);
        } else {
            $("#feedback").text("Invalid quantity entered.").css("color", "red");
        }
    });

    displayInventory();
});
