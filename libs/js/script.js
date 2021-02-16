	$('#btnRun').click(function() {
		
		$.ajax({
			url: "libs/php/getWeatherInfo.php",
			type: 'POST',
			dataType: 'json',
			data: {
				city: $('#selCity').val()				
			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {

					// $('#txtContinent').html(result['name']);
					$('#txtmax').html(result['data']['main']['temp_max']);					
					$('#txtmin').html(result['data']['main']['temp_min']);
					$('#wind').html(result['data']['wind']['speed']);
					$('#humidity').html(result['data']['main']['humidity']);
					$('#des').html(result['data']['weather'][0]['description']);
					$('#cname').html(result['data']['name']);

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
				 $('#err').html('Please Enter valid City!');	
			}
		}); 
	

	});