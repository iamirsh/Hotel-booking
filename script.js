$(document).ready(function() {
	var cart = [];

	$('.add-to-cart').click(function() {
		var name = $(this).data('name');
		var price = Number($(this).data('price'));
		addItemToCart(name, price, 1);
		displayCart();
	});

	function addItemToCart(name, price, quantity) {
		for (var i in cart) {
			if (cart[i].name === name) {
				cart[i].quantity += quantity;
				return;
			}
		}
		var item = {
			name: name,
			price: price,
			quantity: quantity
		};
		cart.push(item);
	}

	function displayCart() {
		var cartItems = $('.cart-items');
		cartItems.empty();
		var totalPrice = 0;
		for (var i in cart) {
			var item = cart[i];
			var itemPrice = item.price * item.quantity;
			totalPrice += itemPrice;
			var li = $('<li>').text(item.name + ' x ' + item.quantity + ' = ₹' + itemPrice);
			cartItems.append(li);
		}
		$('.total').text('Total: ₹' + totalPrice);
	}

	$('.checkout').click(function() {
		$('.overlay').show();
	});

	$('.close-popup').click(function() {
		$('.overlay').hide();
	});

	$('.submit').click(function() {
		var name = $('#name').val();
		var email = $('#email').val();
		var phone = $('#phone').val();
		var address = $('#address').val();
		if (name && email && phone && address) {
			$('.popup').html('<h2>Booking Successful</h2><p>Thank you for booking with us. You will receive a confirmation email shortly.</p><button class="close-popup">Close</button>');
			cart = [];
			displayCart();
		} else {
			alert('Please fill in all the details');
		}
	});
});
