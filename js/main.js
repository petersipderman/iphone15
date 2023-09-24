$(document).ready(function() {
	
	// Dynamic Countdown Date
	var myDate=new Date();
    myDate.setDate(myDate.getDate()+1);
	month = ("0" + (myDate.getMonth() + 1)).slice(-2);
    var dt = myDate.getFullYear() + '/' + month + '/' + myDate.getDate() ;
	// Countdown Date | Format: year/month/day | Example: '2017/12/31' or dt for dynamic.
	var $countdown_date = '2023/10/01';
	
	// Reward Name
	var $reward_1 = 'iPhone 15 Pro Max';
	
	// Reward Color Names
	var $color_1 = 'White';
	var $color_2 = 'Black';
    var $color_3 = 'Natural';
    var $color_4 = 'Blue';
	
	// Capacity Names
	var $capacity_1 = '256<span class="small">GB</span>';
	var $capacity_2 = '512<span class="small">GB</span>';
	var $capacity_3 = '1<span class="small">TB</span>';
	var $capacity_4 = '1<span class="small">TB</span>';
	
	// Console Messages
	var $console_message_1 = 'Processing Application Form...';
	var $console_message_2 = 'Checking Previous Entries...';
	var $console_message_3 = '<span class="console-msg-success">No Previous Entries Found</span>';
	var $console_message_4 = 'Applying you for';
	var $console_message_5 = '<span class="console-msg-success">Succesfully Applied</span>';
	var $console_message_6 = 'Performing Automatic Human Verification...';
	var $console_message_7 = '<span class="console-msg-error">Automatic Human Verification Failed</span>';
	var $console_message_8 = 'Manual Human Verification Required';
	
	
	// jQuery Functions
	$('#draw-countdown').countdown($countdown_date, function(event) {
		$(this).html(event.strftime('%Ih %Mm %Ss'));
	});
	$('#draw-countdown-header').countdown($countdown_date, function(event) {
		$(this).html(event.strftime('%Ih %Mm %Ss'));
	});

	$("#f-s-b").click(function() {
		$.ajax({
			type: "get",
			url: "parts/s_1.php",
			success: function(dataprocess){				
				$('#d-c').html(dataprocess).hide().fadeIn();
				$('#prop-1').html($color_1);
				$('#prop-2').html($color_2);
				if ($(window).width() < 480) {
					$('html, body').animate({
						scrollTop: $(".button").offset().top
					}, 1000);
				}	
				$('#d-c').addClass('fadeInLeft animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
					$(this).removeClass('fadeInLeft animated');
				});
				var $selected_finish = $color_1;	
				function fixfinishBox($finish_parent_class) {
					resetfinishBoxes();
					if ($finish_parent_class.hasClass('model-finish-inner-wrapper-r')) {
						$selected_finish = $color_1;
					}
					if ($finish_parent_class.hasClass('model-finish-inner-wrapper-l')) {
						$selected_finish = $color_2;
					}
					if ($finish_parent_class.hasClass('model-finish-inner-wrapper-rr')) {
						$selected_finish = $color_3;
					}
					if ($finish_parent_class.hasClass('model-finish-inner-wrapper-ll')) {
						$selected_finish = $color_4;
					}
					$finish_parent_class.addClass('model-finish-inner-wrapper-a');
				}	
				function resetfinishBoxes() {
					var $finish_list = $('.model-finish-inner-wrapper-r, .model-finish-inner-wrapper-l, .model-finish-inner-wrapper-rr, model-finish-inner-wrapper-ll');	
					if ($finish_list.hasClass('model-finish-inner-wrapper-a')) {
						$finish_list.removeClass('model-finish-inner-wrapper-a');
					}
				}
				$('.model-finish-inner-wrapper').click(function() {
					fixfinishBox($(this));	
				});
				$("#s-s-b").click(function() {
					$.ajax({
					type: "get",
					url: "parts/s_2.php",
					success: function(dataprocess){
						$('#d-c').html(dataprocess).hide().fadeIn();
						if ($(window).width() < 480) {
							$('html, body').animate({
								scrollTop: $(".button").offset().top
							}, 1000);
						}	
						$('#d-c').addClass('fadeInLeft animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
							$(this).removeClass('fadeInLeft animated');
						});
						$('#prop-3').html($capacity_1);
						$('#prop-4').html($capacity_2);
						$('#prop-5').html($capacity_3);
						var $selected_capacity = $capacity_1;	
						function fixcapacityBox($capacity_parent_class) {
							resetcapacityBoxes();
							if ($capacity_parent_class.hasClass('model-capacity-inner-wrapper-r')) {
								$selected_capacity = $capacity_1;
							}
							if ($capacity_parent_class.hasClass('model-capacity-inner-wrapper-l')) {
								$selected_capacity = $capacity_2;
							}
							if ($capacity_parent_class.hasClass('model-capacity-inner-wrapper-rr')) {
								$selected_capacity = $capacity_3;
							}
							$capacity_parent_class.addClass('model-capacity-inner-wrapper-a');
						}	
						function resetcapacityBoxes() {
							var $capacity_list = $('.model-capacity-inner-wrapper-r, .model-capacity-inner-wrapper-l, .model-capacity-inner-wrapper-rr');	
							if ($capacity_list.hasClass('model-capacity-inner-wrapper-a')) {
								$capacity_list.removeClass('model-capacity-inner-wrapper-a');
							}
						}
						$('.model-capacity-inner-wrapper').click(function() {
							fixcapacityBox($(this));	
						});
						$("#t-s-b").click(function() {
							$.ajax({
							type: "get",
							url: "parts/s_3.php",
							success: function(dataprocess){
								$('#d-c').html(dataprocess).hide().fadeIn();
								if ($(window).width() < 480) {
									$('html, body').animate({
										scrollTop: $(".button").offset().top
									}, 1000);
								}
								$('#d-c').addClass('fadeInLeft animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
									$(this).removeClass('fadeInLeft animated');
								});								
								$("#user-info-form").validator().on("submit", function (event) {
									if (event.isDefaultPrevented()) {										
										
									} else {										
										event.preventDefault();
										f_s();
									}
								});
								function f_s(){
									$.ajax({
									type: "get",
									url: "parts/s_4.php",
									success: function(dataprocess){
										$('#d-c').html(dataprocess).hide().fadeIn();
										$('#d-c').addClass('fadeInLeft animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
											$(this).removeClass('fadeInLeft animated');
										});
										function progressBar(percent, $element) {
											var progressBarWidth = percent * $element.width() / 100;
											$element.find('div').animate({ width: progressBarWidth }, 500).html(percent + "%&nbsp;");
										}	
										progressBar(0, $('#progressBarConsole'));
										$("#progressBarConsole").fadeIn();
										setTimeout(function() {
											$('.console-msg').html($console_message_1);	
											progressBar(10, $('#progressBarConsole'));
										}, 500 );
										setTimeout(function() {
											$('.console-msg').html($console_message_2);	
											progressBar(30, $('#progressBarConsole'));
										}, 1600 );
										setTimeout(function() {
											$('.console-msg').html($console_message_3);	
											progressBar(40, $('#progressBarConsole'));
										}, 3000 );
										setTimeout(function() {
											$('.console-msg').html($console_message_4 + ' ' + $reward_1 + ' ' + $selected_capacity + ' ' + $selected_finish );	
											progressBar(55, $('#progressBarConsole'));
										}, 4000 );
										setTimeout(function() {
											$('.console-msg').html($console_message_5);	
											progressBar(80, $('#progressBarConsole'));
										}, 5500 );
										setTimeout(function() {
											$('.console-msg').html($console_message_6);	
											progressBar(90, $('#progressBarConsole'));
										}, 6500 );
										setTimeout(function() {
											$('.console-msg').html($console_message_7);	
											progressBar(90, $('#progressBarConsole'));
										}, 8000 );
										setTimeout(function() {
											$('.console-msg').html($console_message_8);	
											progressBar(90, $('#progressBarConsole'));
										}, 9200 );
										setTimeout(function() {
											$('.console-msg').fadeOut(function(){
												$('.human-verification-wrapper').fadeIn();
												if ($(window).width() < 480) {
													$('html, body').animate({
														scrollTop: $(".human-verification-wrapper").offset().top
													}, 1000);
												}
											});
										}, 10500 );
									},
									error: function(){
										alert("An error occured");
									}
									});
								}
							},
							error: function(){
								alert("An error occured");
							}
							});	
						});
					},
					error: function(){
						alert("An error occured");
					}
					});	
				});					
			},								
			error: function(){
			  alert("An error occured");
			}
		});		
	});
    $(".popup-contact").click(function() {
		$.magnificPopup.open({
			items: {
				src: '#contact-us',
			},
			type: 'inline',
			preloader: false,
			modal: true,
			removalDelay: 300,
			callbacks: {
				open: function() {
					$('#contact-us-inner-wrapper').addClass('bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
						$(this).removeClass('bounceIn');
					});	
					$("#popup-contact-close").click(function() {	
						$.magnificPopup.close();
					});
				},
				beforeClose: function() {
					this.content.addClass('animated fadeOutDown');
				}, 
				close: function() {
					this.content.removeClass('animated fadeOutDown');
				}
			}
		});	
	});
	$(".popup-pp").click(function() {
		$.magnificPopup.open({
			items: {
				src: '#privacy-policy',
			},
			type: 'inline',
			preloader: false,
			modal: true,
			removalDelay: 300,
			callbacks: {
				open: function() {
					$('#privacy-policy-inner-wrapper').addClass('bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
						$(this).removeClass('bounceIn');
					});					
					$("#popup-privacy-policy-close").click(function() {
						$.magnificPopup.close();
					});
				},
				beforeClose: function() {
					this.content.addClass('animated fadeOutDown');
				}, 
				close: function() {
					this.content.removeClass('animated fadeOutDown');
				}
			}
		});	
	});
	$(".popup-tos").click(function() {
		$.magnificPopup.open({
			items: {
				src: '#terms-of-service',
			},
			type: 'inline',
			preloader: false,
			modal: true,
			removalDelay: 300,
			callbacks: {
				open: function() {
					$('#terms-of-service-inner-wrapper').addClass('bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
						$(this).removeClass('bounceIn');
					});	
					$("#popup-terms-of-service-close").click(function() {	
						$.magnificPopup.close();
					});
				},
				beforeClose: function() {
					this.content.addClass('animated fadeOutDown');
				}, 
				close: function() {
					this.content.removeClass('animated fadeOutDown');
				}
			}
		});	
	});
});
