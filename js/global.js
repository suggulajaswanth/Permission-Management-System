$(document).ready(function(){
	
    $( "#datepicker" ).datepicker({
    	changeMonth: true,
    	changeYear: true,    	
        dateFormat: 'yy-mm-dd' 
    });

    /*
    	Upload Empolyee Photo
    */
    $(".passport_photo").change(function(){
    	if($(this).val() != ""){
    		var newfile = $(this).val();
    		if (newfile.substring(3,11) == 'fakepath') {

	            newfile = newfile.substring(12);

    			$(".passportPhoto_file").html(newfile);

	        } // Remove c:\fake at beginning from localhost chrome

    	} else {
    		$(".passportPhoto_file").html("Upload Employee Photo");
    	}
    })

	var aa = 0;
	var max_filess = 1;

	$(".passport-btn").click(function(e){ //on add input button click

	    e.preventDefault();
	    e.stopImmediatePropagation();

	                
	    var myFormData = new FormData();
	    myFormData.append('employee_photo', $(".passport_photo").prop('files')[0]);

	    var  sel_files = $('.passport_photo').val();

	   if(sel_files != ""){


	        var file_size = $('.passport_photo')[0].files[0].size;

	        var ext = $('.passport_photo').val().split('.').pop().toLowerCase();

	        if ($.inArray(ext, ['png','jpg','jpeg']) != -1){

	            if(file_size < 2242880) {                  

	                if (sel_files.substring(3,11) == 'fakepath') {

	                    sel_files = sel_files.substring(12);
	                } // Remove c:\fake at beginning from localhost chrome
	             
	                    var selected_filename;
	                    var upload_filename;

	                    $(".photoerror").html("");

	                    if(aa < max_filess){

	                    	$(".passport-btn").html("uploading...");

		                    $.ajax({
		                        url: 'uploadimage.php',
		                        type: 'POST',
		                        processData: false, // important
		                        contentType: false, // important
		                        dataType: 'JSON',
		                        data: myFormData,
		                        success: function(data){
		                            upload_filename = (data.upload_filename);
		                            selected_filename = (data.selected_filename);

		                            $(".passport_file").append('<div class="imagefile"><span class="imageicon"><i class="fa fa-file-image-o"></i></span><p>'+selected_filename+'</p><input type="hidden" name="passport_photo_name" value="'+upload_filename+'"><span class="del_imagefile del-passport_file"><i class="fa fa-times"></i></span></div>');

		                            $(".passport_photo").val("");
		                            $(".passportPhoto_file").html("");
			                    	$(".passport-btn").html("upload");

			                    	aa++;

		                            if(aa == max_filess){
			                            $('.passport-btn').css("display","none");
			                            $('.passport-disbtn').css("display","block");
			                        }

		                                
		                            $(".del-passport_file").click(function(e){ //user click on remove text
		                                e.preventDefault(); $(this).parent('div').remove();aa--;
		                                if(aa < max_filess){
				                            $('.passport-btn').css("display","block");
				                            $('.passport-disbtn').css("display","none");
				                            $(".passportPhoto_file").html("Upload Employee Photo");
				                        }
		                            })
		                        }
		                    });
		                }    
	            } else {
					$(".photoerror").html("File size should not exceed 2MB");
				}
	        } else {
				$(".photoerror").html("Unsupported file type. Files should be either .jpeg, .jpg, .png");
	        }
	    } else {
			$(".photoerror").html("Please select a file and click upload");
	    }            
	});

	/*
    	Upload Empolyee Photo
    */
    $(".nationalID").change(function(){
    	if($(this).val() != ""){
    		var newfile = $(this).val();
    		if (newfile.substring(3,11) == 'fakepath') {

	            newfile = newfile.substring(12);

    			$(".nationalID_file").html(newfile);

	        } // Remove c:\fake at beginning from localhost chrome

    	} else {
    		$(".nationalID_file").html("Upload Employee Photo");
    	}
    })

	var a = 0;
	var max_files = 1;

	$(".nationID-btn").click(function(e){ //on add input button click

	    e.preventDefault();
	    e.stopImmediatePropagation();

	                
	    var myFormData = new FormData();
	    myFormData.append('employee_ID', $(".nationalID").prop('files')[0]);

	    var  sel_files = $('.nationalID').val();

	   if(sel_files != ""){


	        var file_size = $('.nationalID')[0].files[0].size;

	        var ext = $('.nationalID').val().split('.').pop().toLowerCase();

	        if ($.inArray(ext, ['png','jpg','jpeg']) != -1){

	            if(file_size < 2242880) {                  

	                if (sel_files.substring(3,11) == 'fakepath') {

	                    sel_files = sel_files.substring(12);
	                } // Remove c:\fake at beginning from localhost chrome
	             
	                    var selected_filename;
	                    var upload_filename;

	                    $(".nationalIDerror").html("");

	                    if(a < max_files){

	                    	$(".nationID-btn").html("uploading...");

		                    $.ajax({
		                        url: 'uploadID.php',
		                        type: 'POST',
		                        processData: false, // important
		                        contentType: false, // important
		                        dataType: 'JSON',
		                        data: myFormData,
		                        success: function(data){
		                            upload_filename = (data.upload_filename);
		                            selected_filename = (data.selected_filename);

		                            $(".selected_nationalID_file").append('<div class="imagefile"><span class="imageicon"><i class="fa fa-file-image-o"></i></span><p>'+selected_filename+'</p><input type="hidden" name="nationalID_name" value="'+upload_filename+'"><span class="del_imagefile del-nationalID_file"><i class="fa fa-times"></i></span></div>');

		                            $(".nationalID").val("");
		                            $(".nationalID_file").html("");
			                    	$(".nationID-btn").html("upload");

			                    	a++;

		                            if(a == max_files){
			                            $('.nationID-btn').css("display","none");
			                            $('.nationID-disbtn').css("display","block");
			                        }
		                                
		                            $(".del-nationalID_file").click(function(e){ //user click on remove text
		                                e.preventDefault(); $(this).parent('div').remove();a--;
		                                if(a < max_files){
				                            $('.nationID-btn').css("display","block");
				                            $('.nationID-disbtn').css("display","none");
				                            $(".nationalID_file").html("Upload selected ID type");
				                        }
		                            })
		                        }
		                    });
		                }    
	            } else {
					$(".nationalIDerror").html("File size should not exceed 2MB");
				}
	        } else {
				$(".nationalIDerror").html("Unsupported file type. Files should be either .jpeg, .jpg, .png");
	        }
	    } else {
			$(".nationalIDerror").html("Please select a file and click upload");
	    }            
	});


    /*
    	Add Empolyee Form
    */
    $("#addemployee").submit(function(e){
    	e.preventDefault();

    	var empiderror,
    		firstnameerror,
    		middlenameerror,
    		lastnameerror,
    		phoneerror,
    		jobtypeerror,
    		dateemployederror,
    		resaddresserror,
    		reslocationerror,
    		gpsreslocationerror,
    		resdirectionerror,
    		photoerror,
    		IDnumbererror,
    		idtypeerror,
    		nationalIDerror,
    		fullnameerror,
    		relationshiperror,
    		kinphoneerror,
    		kinresaddresserror,
    		empstatuserror,
    		kinresdirectionerror;

    	if($(".firstname").val() == ""){
    		firstnameerror = "Please enter employee's first name";
    	} else if($.isNumeric($(".firstname").val()) && $(".firstname").val() != ""){
    		firstnameerror = "this field cannot contain numbers";
    	} else {
    		firstnameerror = "";
    	}

    	if($.isNumeric($(".middlename").val()) && $(".middlename").val() != ""){
    		middlenameerror = "this field cannot contain numbers";
    	} else {
    		middlenameerror = "";
    	}

    	if($(".lastname").val() == ""){
    		lastnameerror = "Please enter employee's last name";
    	} else if($.isNumeric($(".lastname").val()) && $(".lastname").val() != ""){
    		lastnameerror = "this field cannot contain numbers";
    	} else {
    		lastnameerror = "";
    	}

    	if($(".phone").val() == ""){
    		phoneerror = "Please enter phone number";
    	} else if(!($.isNumeric($(".phone").val())) && $(".phone").val() != ""){
    		phoneerror = "this field cannot contain letters";
    	} else {
    		phoneerror = "";
    	}

    	if($(".jobtype").val() == ""){
    		jobtypeerror = "Please enter Job type";
    	} else {
    		jobtypeerror = "";
    	}

    	if($(".dateemployed").val() == ""){
    		dateemployederror = "Please enter employment date";
    	} else {
    		dateemployederror = "";
    	}

    	if($(".empstatus").val() == ""){
    		empstatuserror = "Please select status of employee";
    	} else {
    		empstatuserror = "";
    	}

    	if($(".resaddress").val() == ""){
    		resaddresserror = "Please enter residential address";
    	} else {
    		resaddresserror = "";
    	}

    	if($(".reslocation").val() == ""){
    		reslocationerror = "Please enter location of residence";
    	} else {
    		reslocationerror = "";
    	}

    	if($(".gpsreslocation").val() == ""){
    		gpsreslocationerror = "Please enter residence gps location";
    	} else {
    		gpsreslocationerror = "";
    	}

    	if($(".resdirection").val() == ""){
    		resdirectionerror = "Please enter direction to employee's residence";
    	} else {
    		resdirectionerror = "";
    	}

    	if($(".passport_file").html() == ""){
    		photoerror = "select a file and click upload";
    	} else {
    		photoerror = "";
    	}

    	if($(".idnumber").val() == ""){
    		IDnumbererror = "Please enter national ID number";
    	} else {
    		IDnumbererror = "";
    	}

    	if($(".idtype").val() == ""){
    		idtypeerror = "Select ID type associated with ID number";
    	} else {
    		idtypeerror = "";
    	}

    	if($(".selected_nationalID_file").html() == ""){
    		nationalIDerror = "select a file and click upload";
    	} else {
    		nationalIDerror = "";
    	}

    	if($(".fullname").val() == ""){
    		fullnameerror = "Please enter full name of next of kin";
    	} else {
    		fullnameerror = "";
    	}

    	if($(".relationship").val() == ""){
    		relationshiperror = "Please enter relationship to next of kin";
    	} else {
    		relationshiperror = "";
    	}

    	if($(".kinphone").val() == ""){
    		kinphoneerror = "Please enter phone number of next of kin";
    	} else if(!($.isNumeric($(".kinphone").val())) && $(".kinphone").val() != ""){
    		kinphoneerror = "this field cannot contain letters";
    	} else {
    		kinphoneerror = "";
    	}

    	if($(".kinresaddress").val() == ""){
    		kinresaddresserror = "Please enter Residential Address of next of kin";
    	} else {
    		kinresaddresserror = "";
    	}

    	if($(".kinresdirection").val() == ""){
    		kinresdirectionerror = "Please enter phone number of next of kin";
    	} else {
    		kinresdirectionerror = "";
    	}

    	$(".firstnameerror").html(firstnameerror);
    	$(".middlenameerror").html(middlenameerror);
    	$(".lastnameerror").html(lastnameerror);
    	$(".phoneerror").html(phoneerror);
    	$(".jobtypeerror").html(jobtypeerror);
    	$(".dateemployederror").html(dateemployederror);
    	$(".empstatuserror").html(empstatuserror);
    	$(".resaddresserror").html(resaddresserror);
    	$(".reslocationerror").html(reslocationerror);
    	$(".gpsreslocationerror").html(gpsreslocationerror);
    	$(".resdirectionerror").html(resdirectionerror);
    	$(".photoerror").html(photoerror);
    	$(".IDnumbererror").html(IDnumbererror);
    	$(".fullnameerror").html(fullnameerror);
    	$(".idtypeerror").html(idtypeerror);
    	$(".nationalIDerror").html(nationalIDerror);
    	$(".relationshiperror").html(relationshiperror);
    	$(".kinphoneerror").html(kinphoneerror);
    	$(".kinresaddresserror").html(kinresaddresserror);
    	$(".kinresdirectionerror").html(kinresdirectionerror);


    	if(firstnameerror == "" && middlenameerror == "" && lastnameerror == "" && phoneerror == "" && jobtypeerror == "" && dateemployederror == "" && resaddresserror == "" && reslocationerror == "" && gpsreslocationerror == "" && resdirectionerror == "" && photoerror == "" && IDnumbererror == "" && fullnameerror == "" && idtypeerror == "" && nationalIDerror == "" && relationshiperror == "" && kinphoneerror == "" && kinresaddresserror == "" && kinresdirectionerror == "" && empstatuserror == "") {

    		$(".displaySuccess").css({
    			"margin-top":"0px",
    			"opacity":"1"
    		})
			$(".displaySuccess").html('<span class="spinicon"><i class="fa fa-spinner fa-spin fa-1x fa-fw"></i></span> Adding new employee record');

    		$.ajax({
		     	url: 'addemployee.php',
		     	type: 'POST',
		    	dataType: 'JSON',
		        data: $("#addemployee").serialize(),
		    	success: function(data){
					var status = (data.status);

					if(status == "Success"){
						$(".displaySuccess").html('<span class="spinicon"><i class="fa fa-check fa-1x"></i></span> Record added successfully')
						setTimeout(function(){
							$(".displaySuccess").css({
				    			"margin-top":"",
				    			"opacity":""
				    		})
						$(".displaySuccess").html('');

						}, 5000)
					} else if(status == "failed"){
						$(".displaySuccess").css("background","#ff0000");
						$(".displaySuccess").html('<span class="spinicon"><i class="fa fa-exclamation-circle fa-1x"></i></span> Error adding new record')
						setTimeout(function(){
							$(".displaySuccess").css({
				    			"margin-top":"",
				    			"opacity":"",
				    			"background":""
				    		})
						$(".displaySuccess").html('');

						}, 5000)
					} else if(status == "exists"){
						$(".displaySuccess").css("background","#ff0000");
						$(".displaySuccess").html('<span class="spinicon"><i class="fa fa-exclamation-circle fa-1x"></i></span> Employee ID already exists')
						setTimeout(function(){
							$(".displaySuccess").css({
				    			"margin-top":"",
				    			"opacity":"",
				    			"background":""
				    		})
						$(".displaySuccess").html('');

						}, 5000)
					}
		    	}
    		})
    	}

    })

   /*
    	Add Empolyee Form
    */
    $("#editemployee").submit(function(e){
    	e.preventDefault();

    	var empiderror,
    		firstnameerror,
    		middlenameerror,
    		lastnameerror,
    		phoneerror,
    		jobtypeerror,
    		dateemployederror,
    		resaddresserror,
    		reslocationerror,
    		gpsreslocationerror,
    		resdirectionerror,
    		photoerror,
    		IDnumbererror,
    		idtypeerror,
    		nationalIDerror,
    		fullnameerror,
    		relationshiperror,
    		kinphoneerror,
    		kinresaddresserror,
    		empstatuserror,
    		kinresdirectionerror;

    	if($(".firstname").val() == ""){
    		firstnameerror = "Please enter employee's first name";
    	} else if($.isNumeric($(".firstname").val()) && $(".firstname").val() != ""){
    		firstnameerror = "this field cannot contain numbers";
    	} else {
    		firstnameerror = "";
    	}

    	if($.isNumeric($(".middlename").val()) && $(".middlename").val() != ""){
    		middlenameerror = "this field cannot contain numbers";
    	} else {
    		middlenameerror = "";
    	}

    	if($(".lastname").val() == ""){
    		lastnameerror = "Please enter employee's last name";
    	} else if($.isNumeric($(".lastname").val()) && $(".lastname").val() != ""){
    		lastnameerror = "this field cannot contain numbers";
    	} else {
    		lastnameerror = "";
    	}

    	if($(".phone").val() == ""){
    		phoneerror = "Please enter phone number";
    	} else if(!($.isNumeric($(".phone").val())) && $(".phone").val() != ""){
    		phoneerror = "this field cannot contain letters";
    	} else {
    		phoneerror = "";
    	}

    	if($(".jobtype").val() == ""){
    		jobtypeerror = "Please enter Job type";
    	} else {
    		jobtypeerror = "";
    	}

    	if($(".dateemployed").val() == ""){
    		dateemployederror = "Please enter employment date";
    	} else {
    		dateemployederror = "";
    	}

    	if($(".empstatus").val() == ""){
    		empstatuserror = "Please select status of employee";
    	} else {
    		empstatuserror = "";
    	}

    	if($(".resaddress").val() == ""){
    		resaddresserror = "Please enter residential address";
    	} else {
    		resaddresserror = "";
    	}

    	if($(".reslocation").val() == ""){
    		reslocationerror = "Please enter location of residence";
    	} else {
    		reslocationerror = "";
    	}

    	if($(".gpsreslocation").val() == ""){
    		gpsreslocationerror = "Please enter residence gps location";
    	} else {
    		gpsreslocationerror = "";
    	}

    	if($(".resdirection").val() == ""){
    		resdirectionerror = "Please enter direction to employee's residence";
    	} else {
    		resdirectionerror = "";
    	}


    	if($(".idnumber").val() == ""){
    		IDnumbererror = "Please enter national ID number";
    	} else {
    		IDnumbererror = "";
    	}

    	if($(".idtype").val() == ""){
    		idtypeerror = "Select ID type associated with ID number";
    	} else {
    		idtypeerror = "";
    	}


    	if($(".fullname").val() == ""){
    		fullnameerror = "Please enter full name of next of kin";
    	} else {
    		fullnameerror = "";
    	}

    	if($(".relationship").val() == ""){
    		relationshiperror = "Please enter relationship to next of kin";
    	} else {
    		relationshiperror = "";
    	}

    	if($(".kinphone").val() == ""){
    		kinphoneerror = "Please enter phone number of next of kin";
    	} else if(!($.isNumeric($(".kinphone").val())) && $(".kinphone").val() != ""){
    		kinphoneerror = "this field cannot contain letters";
    	} else {
    		kinphoneerror = "";
    	}

    	if($(".kinresaddress").val() == ""){
    		kinresaddresserror = "Please enter Residential Address of next of kin";
    	} else {
    		kinresaddresserror = "";
    	}

    	if($(".kinresdirection").val() == ""){
    		kinresdirectionerror = "Please enter phone number of next of kin";
    	} else {
    		kinresdirectionerror = "";
    	}

    	$(".firstnameerror").html(firstnameerror);
    	$(".middlenameerror").html(middlenameerror);
    	$(".lastnameerror").html(lastnameerror);
    	$(".phoneerror").html(phoneerror);
    	$(".jobtypeerror").html(jobtypeerror);
    	$(".dateemployederror").html(dateemployederror);
    	$(".empstatuserror").html(empstatuserror);
    	$(".resaddresserror").html(resaddresserror);
    	$(".reslocationerror").html(reslocationerror);
    	$(".gpsreslocationerror").html(gpsreslocationerror);
    	$(".resdirectionerror").html(resdirectionerror);
    	$(".photoerror").html(photoerror);
    	$(".IDnumbererror").html(IDnumbererror);
    	$(".fullnameerror").html(fullnameerror);
    	$(".idtypeerror").html(idtypeerror);
    	$(".nationalIDerror").html(nationalIDerror);
    	$(".relationshiperror").html(relationshiperror);
    	$(".kinphoneerror").html(kinphoneerror);
    	$(".kinresaddresserror").html(kinresaddresserror);
    	$(".kinresdirectionerror").html(kinresdirectionerror);


    	if(firstnameerror == "" && middlenameerror == "" && lastnameerror == "" && phoneerror == "" && jobtypeerror == "" && dateemployederror == "" && resaddresserror == "" && reslocationerror == "" && gpsreslocationerror == "" && resdirectionerror == "" && IDnumbererror == "" && fullnameerror == "" && idtypeerror == "" &&  relationshiperror == "" && kinphoneerror == "" && kinresaddresserror == "" && kinresdirectionerror == "" && empstatuserror == "") {

    		$(".displaySuccess").css({
    			"margin-top":"0px",
    			"opacity":"1"
    		})
			$(".displaySuccess").html('<span class="spinicon"><i class="fa fa-spinner fa-spin fa-1x fa-fw"></i></span> Adding new employee record');

    		$.ajax({
		     	url: 'editemployee.php',
		     	type: 'POST',
		    	dataType: 'JSON',
		        data: $("#editemployee").serialize(),
		    	success: function(data){
					var status = (data.status);

					if(status == "Success"){
						$(".displaySuccess").html('<span class="spinicon"><i class="fa fa-check fa-1x"></i></span> Record updated successfully')
						setTimeout(function(){
							$(".displaySuccess").css({
				    			"margin-top":"",
				    			"opacity":""
				    		})
						$(".displaySuccess").html('');

						}, 5000)
					} else if(status == "failed"){
						$(".displaySuccess").css("background","#ff0000");
						$(".displaySuccess").html('<span class="spinicon"><i class="fa fa-exclamation-circle fa-1x"></i></span> Error adding new record')
						setTimeout(function(){
							$(".displaySuccess").css({
				    			"margin-top":"",
				    			"opacity":"",
				    			"background":""
				    		})
						$(".displaySuccess").html('');

						}, 5000)
					} else if(status == "exists"){
						$(".displaySuccess").css("background","#ff0000");
						$(".displaySuccess").html('<span class="spinicon"><i class="fa fa-exclamation-circle fa-1x"></i></span> Employee ID already exists')
						setTimeout(function(){
							$(".displaySuccess").css({
				    			"margin-top":"",
				    			"opacity":"",
				    			"background":""
				    		})
						$(".displaySuccess").html('');

						}, 5000)
					}
		    	}
    		})
    	}

    })

	$("#adduser").submit(function(event){
		event.preventDefault();

		var firstnameerror;
		var lastnameerror;
		var usernameerror;
		var passworderror;
		var confirmpassworderror;
		var usertypeerror;

		if($(".firstname").val() == ""){
			firstnameerror = "Please enter first name";
		} else {
			firstnameerror = "";
		}

		if($.isNumeric($(".firstname").val())){
			firstnameerror = "This Field cannot contain Numbers";
		}

		if($(".lastname").val() == ""){
			lastnameerror = "Please enter last name";
		} else {
			lastnameerror = "";
		}

		if($.isNumeric($(".lastname").val())){
			lastnameerror = "This Field cannot contain Numbers";
		}

		if($(".username").val() == ""){
			usernameerror = "Please enter username";
		} else {
			usernameerror = "";
		}

		if($(".username").val() != "" && $(".username").val().length < 6){
			usernameerror = "Username should at least be 6 characters";
		}

		var passreg = /^[0-9a-zA-Z]+$/;
		var passreg2 = /^[0-9]+$/;
		var passreg3 = /^[a-zA-Z]+$/;


		if($(".password").val().match(passreg2) ){
			passworderror = "Password must contain at least a number or letter";
		} else if($(".password").val().match(passreg3) ){
			passworderror = "Password must contain at least a number or letter";
		} else if($(".password").val() == ""){
			passworderror ="Please enter password";
		} else {
			passworderror = "";
		}

		
		if($(".password").val() != "" && $(".password").val().length < 8){
			passworderror = "Password should at least be 8 characters";
		}

		if($(".password").val() != $(".confirmpassword").val() ){
			confirmpassworderror = "Passwords don't match";
		} else {
			confirmpassworderror = "";
		}

		if($(".usertype").val() == ""){
			usertypeerror = "Please select the user role";
		} else {
			usertypeerror = "";
		}

		$(".firstnameerror").html(firstnameerror);
		$(".lastnameerror").html(lastnameerror);
		$(".usernameerror").html(usernameerror);
		$(".usernameerror").html(usernameerror);
		$(".passworderror").html(passworderror);
		$(".confirmpassworderror").html(confirmpassworderror);
		$(".usertypeerror").html(usertypeerror);

		if(firstnameerror == "" && lastnameerror == "" && usernameerror == "" && passworderror =="" && confirmpassworderror =="" && usertypeerror == ""){

			$(".displaySuccess").css({
    			"margin-top":"0px",
    			"opacity":"1"
    		})
			$(".displaySuccess").html('<span class="spinicon"><i class="fa fa-spinner fa-spin fa-1x fa-fw"></i></span> Adding new user');

		$.ajax({
				type: 'post',
				url: 'adduser.php',
				dataType: 'json',
				data:{
					firstname:$(".firstname").val(),
					lastname: $(".lastname").val(),
					username: $(".username").val(),
					password: $(".password").val(),
					usertype: $(".usertype").val(),
					submit: 'submit'
				},
				success: function(data){
					var status = (data.status);

					if(status == "Success"){
						$(".displaySuccess").html('<span class="spinicon"><i class="fa fa-check fa-1x"></i></span> User added successfully')
						setTimeout(function(){
							$(".displaySuccess").css({
				    			"margin-top":"",
				    			"opacity":""
				    		})
						$(".displaySuccess").html('');

						}, 5000)
					} else if(status == "failed"){
						$(".displaySuccess").css("background","#ff0000");
						$(".displaySuccess").html('<span class="spinicon"><i class="fa fa-exclamation-circle fa-1x"></i></span> Error adding new user')
						setTimeout(function(){
							$(".displaySuccess").css({
				    			"margin-top":"",
				    			"opacity":"",
				    			"background":""
				    		})
						$(".displaySuccess").html('');

						}, 5000)
					} else if(status == "exists"){
						$(".displaySuccess").css("background","#ff0000");
						$(".displaySuccess").html('<span class="spinicon"><i class="fa fa-exclamation-circle fa-1x"></i></span> Username already exists')
						setTimeout(function(){
							$(".displaySuccess").css({
				    			"margin-top":"",
				    			"opacity":"",
				    			"background":""
				    		})
						$(".displaySuccess").html('');

						}, 5000)
					}
				}
			})
		}
	})
    	
})


/*
	User Login
*/
	$("#loginForm").submit(function(event){
		
		event.preventDefault();

		var usernameerror;
		var passworderror;

		if($(".username").val() == ""){
			usernameerror = "Please enter your username";
		} else {
			usernameerror = "";
		}

		if($(".username").val() != "" && $(".username").val().length < 6){
			usernameerror = "Username must at least be 6 characters";
		}

		if($(".password").val() == ""){
			passworderror ="Please enter your password";
		} else {
			passworderror = "";
		}

		
		if($(".password").val() != "" && $(".password").val().length < 8){
			passworderror = "Password must at least be 6 characters";
		}


		$(".usernameerror").html(usernameerror);
		$(".passworderror").html(passworderror);

		if( usernameerror == "" && passworderror ==""){
			var response;

			$(".sign_in").html('<span class="sign-icon"><i class="fa fa-spinner fa-spin fa-1x fa-fw"></i></span> Loading');

		$.ajax({
				type: 'post',
				url: 'index.php',
				dataType: 'json',
				data:{
					username: $(".username").val(),
					password: $(".password").val(),
					submit: 'submit'
				},
				success: function(data){
					response = (data.response);

					if(response == "Success"){
						$(".LogResponse").fadeIn();
						$(".LogResponse").html("Success");
						$(".LogResponse").css("background","#02fb8a");
						$(".LogResponse").css("color","#29820d");
						$(".sign_in").html('<span class="sign-icon"><i class="fa fa-lock"></i></span> Sign in');

						setTimeout(function() {
							window.location.replace("dashboard");;
						}, 3000);

					} else if(response == "password"){
						$(".LogResponse").fadeIn();
						$(".LogResponse").css("background","#900404");
						$(".LogResponse").css("color","#ff6666");
						$(".LogResponse").html("Invalid password");
						$(".sign_in").html('<span class="sign-icon"><i class="fa fa-lock"></i></span> Sign in');

						setTimeout(function(){
							$(".LogResponse").fadeOut();
						}, 3000)

					} else if(response == "username"){
						$(".LogResponse").fadeIn();
						$(".LogResponse").css("background","#900404");
						$(".LogResponse").css("color","#ff6666");
						$(".LogResponse").html("Invalid username");
						$(".sign_in").html('<span class="sign-icon"><i class="fa fa-lock"></i></span> Sign in')

						setTimeout(function(){
							$(".LogResponse").fadeOut();
						}, 3000)
					}
				}
			})
		}
	})

/*
	Change username
*/
$("#changeusernameForm").submit(function(e){
	e.preventDefault()

	var usernameerror;
	var passworderror;

	var username = $(".username").val();
	var password = $(".password").val();

	if($(".username").val() == ""){
		usernameerror = "Please enter your username";
	} else {
				usernameerror = "";
	}

	if($(".username").val() != "" && $(".username").val().length < 6){
		usernameerror = "Username must at least be 6 characters";
	}

	if($(".password").val() == ""){
		passworderror ="Please enter your password";
	} else {
				passworderror = "";
	}

			
	if($(".password").val() != "" && $(".password").val().length < 8){
		passworderror = "Password must at least be 6 characters";
	}

	$(".usernameerror").html(usernameerror);
	$(".passworderror").html(passworderror);

	if(usernameerror == "" && passworderror == ""){


		$(".displaySuccess").css({
    		"margin-top":"0px",
    		"opacity":"1"
    	})
		$(".displaySuccess").html('<span class="spinicon"><i class="fa fa-spinner fa-spin fa-1x fa-fw"></i></span> Saving');

	 	$.ajax({
			type: 'post',
			url: 'settings.php',
			dataType: 'json',
			data:{
				username: username,
				password: password,
				changeusername: 'changeusername'
			},
			success: function(data){
				var status = (data.status);

				if(status == "success"){
					$(".displaySuccess").html('<span class="spinicon"><i class="fa fa-check fa-1x"></i></span> Username changed successfully')
					setTimeout(function(){
						$(".displaySuccess").css({
				    			"margin-top":"",
				    			"opacity":""
				    	})
					$(".displaySuccess").html('');

					}, 5000)
				} else if(status == "failed"){
					$(".displaySuccess").css("background","#ff0000");
					$(".displaySuccess").html('<span class="spinicon"><i class="fa fa-exclamation-circle fa-1x"></i></span> Oops! An error has occurred')
					setTimeout(function(){
						$(".displaySuccess").css({
				    			"margin-top":"",
				    			"opacity":"",
				    			"background":""
				    	})
					$(".displaySuccess").html('');

					}, 5000)
				} else if(status == "userfailed"){
					$(".displaySuccess").css("background","#ff0000");
					$(".displaySuccess").html('<span class="spinicon"><i class="fa fa-exclamation-circle fa-1x"></i></span> Username already exists')
					setTimeout(function(){
						$(".displaySuccess").css({
				    			"margin-top":"",
				    			"opacity":"",
				    			"background":""
				    		})
						$(".displaySuccess").html('');

					}, 5000)
				} else if(status == "passfailed"){
					$(".displaySuccess").css("background","#ff0000");
					$(".displaySuccess").html('<span class="spinicon"><i class="fa fa-exclamation-circle fa-1x"></i></span> Current Password is invalid')
					setTimeout(function(){
						$(".displaySuccess").css({
				    			"margin-top":"",
				    			"opacity":"",
				    			"background":""
				    		})
						$(".displaySuccess").html('');

					}, 5000)
				}
			}
		})
	}
})

$("#changepasswordForm").submit(function(e){
	e.preventDefault()

	var oldpasserror;
	var newpasserror;
	var cpasserror;

	var oldpass = $(".oldpass").val();
	var newpass = $(".newpass").val();
	var connewpassword = $(".cpassword").val();

	var passreg = /^[0-9a-zA-Z]+$/;
	var passreg2 = /^[0-9]+$/;
	var passreg3 = /^[a-zA-Z]+$/;


	if(oldpass.match(passreg2) ){
		oldpasserror = "Password must contain at least a number or letter";
	} else if(oldpass.match(passreg3) ){
		oldpasserror = "Password must contain at least a number or letter";
	} else if(oldpass == ""){
		oldpasserror ="Please enter your password";
	} else {
		oldpasserror = "";
	}

			
	if(oldpass != "" && oldpass.length < 8){
		oldpasserror = "Password should at least be 8 characters";
	}

	if(newpass.match(passreg2) ){
		newpasserror = "Password must contain at least a number or letter";
	} else if(newpass.match(passreg3) ){
		newpasserror = "Password must contain at least a number or letter";
	} else if(newpass == ""){
		newpasserror ="Please enter your password";
	} else {
		newpasserror = "";
	}

			
	if(newpass != "" && newpass.length < 8){
		newpasserror = "Password should at least be 8 characters";
	}

	if(newpass != "" && newpass != connewpassword ){
		cpasserror = "Passwords don't match";
	} else {
		cpasserror = "";
	}

	$(".oldpasserror").html(oldpasserror);
	$(".newpasserror").html(newpasserror);
	$(".cpasserror").html(cpasserror);

	if(oldpasserror == "" && newpasserror == "" && cpasserror == ""){

		$(".displaySuccess").css({
    		"margin-top":"0px",
    		"opacity":"1"
    	})
		$(".displaySuccess").html('<span class="spinicon"><i class="fa fa-spinner fa-spin fa-1x fa-fw"></i></span> Saving');

	   	$.ajax({
			type: 'post',
			url: 'settings.php',
			dataType: 'json',
			data:{
				oldpass: oldpass,
				newpass: newpass,
				changepassword: 'changepassword'
			},
					success: function(data){
						var status = (data.status);

						if(status == "success"){
							$(".displaySuccess").html('<span class="spinicon"><i class="fa fa-check fa-1x"></i></span> Password changed successfully')
							setTimeout(function(){
								$(".displaySuccess").css({
						    			"margin-top":"",
						    			"opacity":""
						    	})
								$(".displaySuccess").html('');

							}, 5000)
						} else if(status == "failed"){
							$(".displaySuccess").css("background","#ff0000");
							$(".displaySuccess").html('<span class="spinicon"><i class="fa fa-exclamation-circle fa-1x"></i></span> Oops! An error has occurred')
							setTimeout(function(){
								$(".displaySuccess").css({
						    			"margin-top":"",
						    			"opacity":"",
						    			"background":""
						    	})
								$(".displaySuccess").html('');

							}, 5000)
						} else if(status == "incorrect"){
							$(".displaySuccess").css("background","#ff0000");
							$(".displaySuccess").html('<span class="spinicon"><i class="fa fa-exclamation-circle fa-1x"></i></span> Current password is invalid')
							setTimeout(function(){
								$(".displaySuccess").css({
						    			"margin-top":"",
						    			"opacity":"",
						    			"background":""
						    		})
								$(".displaySuccess").html('');

							}, 5000)
						}
					}
				})
	   		}
	   })
/*
	All Employee Filter
*/
function searchFilter(page_num) {
	page_num = page_num?page_num:0;
	var keywords = $('.filterVal').val();
	var sortBy = $('.sortVal').val();
	$.ajax({
	    type: 'POST',
	    url: 'getData.php',
	    //data:'page='+page_num+'&keywords='+keywords+'&sortBy='+sortBy,
	    data:{
	      page: page_num,
	      keywords: keywords,
	      sortBy: sortBy,
	      action: 'allemployee'
	    },
	    beforeSend: function () {
	        //$('body, html').animate({scrollTop:$('.freelancer-flow').offset().top}, 'slow');
	        $("#displayempList").css("opacity","0.3");
	    },
	    success: function (data) {
	        $('#displayempList').html(data);
	        $("#displayempList").css("opacity","1");
	    }
	})
}

/*
	Current Employee Filter
*/
function currsearchFilter(page_num) {
	page_num = page_num?page_num:0;
	var keywords = $('.filterVal').val();
	var sortBy = $('.sortVal').val();
	$.ajax({
	    type: 'POST',
	    url: 'getData.php',
	    //data:'page='+page_num+'&keywords='+keywords+'&sortBy='+sortBy,
	    data:{
	      page: page_num,
	      keywords: keywords,
	      sortBy: sortBy,
	      action: 'currentemployees'
	    },
	    beforeSend: function () {
	        //$('body, html').animate({scrollTop:$('.freelancer-flow').offset().top}, 'slow');
	        $("#displayempList").css("opacity","0.3");
	    },
	    success: function (data) {
	        $('#displayempList').html(data);
	        $("#displayempList").css("opacity","1");
	    }
	})
}

/*
	Current Employee Filter
*/
function pastsearchFilter(page_num) {
	page_num = page_num?page_num:0;
	var keywords = $('.filterVal').val();
	var sortBy = $('.sortVal').val();
	$.ajax({
	    type: 'POST',
	    url: 'getData.php',
	    //data:'page='+page_num+'&keywords='+keywords+'&sortBy='+sortBy,
	    data:{
	      page: page_num,
	      keywords: keywords,
	      sortBy: sortBy,
	      action: 'pastemployees'
	    },
	    beforeSend: function () {
	        //$('body, html').animate({scrollTop:$('.freelancer-flow').offset().top}, 'slow');
	        $("#displayempList").css("opacity","0.3");
	    },
	    success: function (data) {
	        $('#displayempList').html(data);
	        $("#displayempList").css("opacity","1");
	    }
	})
}
/*
	Get Employee data
*/
$("#displayempList").on('click', '.action_view', function(){
	var id = $(this).attr("data-id");

	$.ajax({
		type: "POST",
		url: "retrievedata.php",
		data:{
			record_id: id,
			action: "retrieve"
		},
		beforeSend: function(){
		$("#table").html('<span class="loading_content"><i class="fa fa-spinner fa-spin fa-2x fa-fw"></i><br>Retriving Records</span>');
			$(".loading_content").css("display","block");
			$(".modal").css("display","block");
		},
		success: function(data){
			setTimeout(function(){
				$("#table").html(data);
			}, 1000)			
		}
	})
})
/*
	Close Modal
*/
$(".close-modal").click(function(){
	$(".modal").fadeOut();
})

/*
	Deleting Record Section
*/
$("#displayempList").on('click', '.action_delete', function(){
	var id = $(this).attr("data-id");
	$(".del_warning").html("Are you sure you want to delete this record?");
	$(".del_modal").fadeIn();
	$(".yesbtn").attr("data-id", id);
})

$("#displayempList").on('click', '.action_edit', function(){
	var id = $(this).attr("data-id");
	window.location.href = "edit_employee.php?id="+id;
})

$(".nobtn").click(function(){	
	$(".del_modal").fadeOut();
	$(".del_warning").html("");
	$(".yesbtn").attr("data-id", "");
})

function afterDelete(){
	$(".del_modal").fadeOut();
	$(".del_warning").html("");
	$(".yesbtn").attr("data-id", "");

	window.location.reload();	
}

$(".yesbtn").click(function(){
	var id = $(this).attr("data-id");

	$(".del_warning").html("Deleting record...");

	$.ajax({
		type: "POST",
		url: "retrievedata.php",
		dataType: "JSON",
		data:{
			record_id: id,
			action: "delete"
		},
		success: function(data){
			var status = (data.status);

			if(status == "success"){
				$(".del_warning").html("Record Deleted");
				setTimeout(function(){
					afterDelete();
				}, 1000)
			} else if(status == "failed"){				
				$(".del_warning").html("An error has occured. Record could not be deleted");
			}
		}
	})
})