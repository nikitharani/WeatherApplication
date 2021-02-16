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
					console.log(result.data);

					$('#cname').html(result['data']['name']);
					$('#des').html(result['data']['weather'][0]['description']);
					$('#currentTemp').html(result['data']['main']['temp']);	
					$('#realTemp').html(result.data.main.feels_like);
					$('#humidity').html(result['data']['main']['humidity']);
					$('#txtmax').html(result['data']['main']['temp_max']);					
					$('#txtmin').html(result['data']['main']['temp_min']);
					$('#wind').html(result['data']['wind']['speed']);
					
				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
				 $('#err').html('Please Enter valid City!');	
			}
		}); 
	

	});