$('a[data-toggle="tab"]').on('hide.bs.tab', function (e) {
		var $old_tab = $($(e.target).attr("href"));
		var $new_tab = $($(e.relatedTarget).attr("href"));

		if($new_tab.index() < $old_tab.index()){
			$old_tab.css('position', 'relative').css("right", "0").show();
			$old_tab.animate({"right":"-100%"}, 300, function () {
				$old_tab.css("right", 0).removeAttr("style");
			});
		}
		else {
			$old_tab.css('position', 'relative').css("left", "0").show();
			$old_tab.animate({"left":"-100%"}, 300, function () {
				$old_tab.css("left", 0).removeAttr("style");
			});
		}
	});

	// 
	// cart animation
	// $(document).ready(function(){
	// 	$('#addtocart').on('click',function(){
			
	// 		var button = $(this);
	// 		var cart = $('#cart');
	// 		var cartTotal = cart.attr('data-totalitems');
	// 		var newCartTotal = parseInt(cartTotal) + 1;
			
	// 		button.addClass('sendtocart');
	// 		setTimeout(function(){
	// 		button.removeClass('sendtocart');
	// 		cart.addClass('shake').attr('data-totalitems', newCartTotal);
	// 		setTimeout(function(){
	// 			cart.removeClass('shake');
	// 		},500)
	// 		}, 1000)
	// 		console.log(newCartTotal)
	// 	})
	// })

