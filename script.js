$(function(){
			
// Input name char typing validation
			$(".form-group").find("#InputName").bind("input propertychange", function(event){
				
				var letter= $(this).val();
				checkLetter(letter)
			});			
// Input email typing valdiation
	$(".form-group").find("#InputEmail").bind("input propertychange", function(event){
				var letter=$(this).val();
				console.log(letter);
				
			});	
// Input submit validation;
			$(".modal-footer").find(".btn-primary").on("click", function(event){					
				var name=$("#InputName").val();			
				var email=$("#InputEmail").val();			
				isNameValid(name,event);
				checkEmail(email,event)
				var checkbox= $("#checkbox").is(":checked");
				validateCheckboxField(checkbox,event)
			})
function isNameValid(name,event){
	if(!validName(name)){

		$(".form-group").find(".inputNameValidation").text(`Your name is not valid. You need ${4-name.length} more letters `).css("color", "red")
		event.preventDefault();
		
	}else
	{
		$(".form-group").find(".inputNameValidation").text("")
		console.log("valid");
	}
}

function validName(name){
		return name.length>4

}
// function checkEmail
	function validEmail(email){
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
   		return regex.test(email);
	}

		function checkEmail (email,event ){
			if(!validEmail(email)){
				$(".form-group").find(".inputEmailValidation").text("Your email is not valid").css("color", "red")
				event.preventDefault();
				
			}
			else return $(".form-group").find(".inputEmailValidation").text("Your email is valid").css("color", "red")

		}

function checkLetter(letter){
	var upperCase= new RegExp('[A-Z]');
	var lowerCase= new RegExp('[a-z]');
	var numbers = new RegExp('[0-9]');
	var firstChar = $(".form-group").find("#InputName").val().charAt(0)
	var nameLength=name.length;

	if(firstChar.match(lowerCase)){		 
		return 	$(".form-group").find(".inputNameValidation").text("Your first letter must be capital").css("color", "red"); 		 
	} else if(!letter.match(numbers)){
return 	$(".form-group").find(".inputNameValidation").text(""); 	}
		else 	 return	 $(".form-group").find(".inputNameValidation").text("You cant have number in the name").css("color", "red");
	}








// File <_______________________>




$(".form-group").find(".form-control-file").bind('change', function(event) {
  		

  		if(this.files[0].size/1000 > 90 ){
  			alert(`The size of the image is ${this.files[0].size/1000} KB`)
  			
  		}
  			else
  			{
  				$(".form-group").find(".fileValidation").text(`Your File Size is ${this.files[0].size/1000} KB`).css("color", "red");
  			}


});


// Check box
function validateCheckboxField(isChecked,event){
	if(!isChecked){
		
		$(".formcheckvalidation").text("Your have to accept my Terms And Conditions!").css("color", "red");
		event.preventDefault();

	}
	else{
		$(".formcheckvalidation").text("");
	}
}






})