// 验证需要演示登录，注册视图
if(window.location.search.indexOf('register') >= 0) {
	$('#nav-menu').find('.nav .login').removeClass('active');
	$('#nav-menu').find('.nav .register').addClass('active');
	
	$('#login-overview').css('display', 'none');
	$('#register-overview').css('display', 'block');
}

$(function() {
	$('#nav-menu .login, #nav-menu .register').on('click', function() {
		$(this).addClass('active').siblings().removeClass('active')

		var val = $(this).attr('value');
		if (val == 'register') {
			$('#register-overview').css('display', 'block');
			$('#login-overview').css('display', 'none');
		} else if (val == 'login') {
			$('#register-overview').css('display', 'none');
			$('#login-overview').css('display', 'block');
		}
	});
	
	$('.button-checkbox').each(function() {
		var $widget = $(this),
		$button = $widget.find('button'),
		$checkbox = $widget.find('input:checkbox'),
		color = $button.data('color'),
		settings = {
			on: {
				icon: 'glyphicon glyphicon-check'
			},
			off: {
				icon: 'glyphicon glyphicon-unchecked'
			}
		};

		$button.on('click', function () {
			$checkbox.prop('checked', !$checkbox.is(':checked'));
			$checkbox.triggerHandler('change');
			updateDisplay();
		});

		$checkbox.on('change', function () {
			updateDisplay();
		});

		function updateDisplay() {
			var isChecked = $checkbox.is(':checked');
			// Set the button's state
			$button.data('state', (isChecked) ? "on" : "off");
	
			// Set the button's icon
			$button.find('.state-icon').removeClass().addClass('state-icon ' + settings[$button.data('state')].icon);
	
			// Update the button's color
			if (isChecked) {
				$button.removeClass('btn-default').addClass('btn-' + color + ' active');
			} else {
				$button.removeClass('btn-' + color + ' active').addClass('btn-default');
			}
		}

		function init() {
			updateDisplay();
			// Inject the icon if applicable
			if ($button.find('.state-icon').length == 0) {
				$button.prepend('<i class="state-icon ' + settings[$button.data('state')].icon + '"></i> ');
			}
		}

		init();
	});

	var callback = "";
	$("#login").click(function() {
		var email = $("#email").val();
		if (!email) {
			$("#login-msg").css('visibility', 'visible');
			$("#login-msg").html("用户名不能为空");
			return false;
		}
		var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
		if(!reg.test(email)) {
			$("#login-msg").css('visibility', 'visible');
			$("#login-msg").html("邮件地址不合法");
			$("#email").focus();
			return false;
		}
		
		var password = $("#password").val();

//					$.ajax({
//						//type: $("#login-form").attr("method"),
//						type: 'POST',
//						url: '../services/users/check-user.php',
//						data: "email="+email+"&password="+password,
//						success: function(html) {
//							if (html == "OK") {
//								if(callback){
//									window.location=callback;
//								}else{
//									window.location="../index.php";
//								}
//				
//								$("#login-msg").css('visibility', 'hidden');
//							} else {
//								$("#login-msg").css('visibility', 'visible');
//								$("#login-msg").html(html);
//							
//								setTimeout (function () {
//									$("#login-msg").css('visibility', 'hidden');
//								}, 10000);
//							}
//						}
//					});
//		
		return false;
	});

	// 注册账号
	// 验证密码强度
	$("#password-register").keyup(function() {
		var password = $("#password-register").val();

		if (password.length >= 6) {
			$.ajax({
				type: $("#register-form").attr("method"),
				url: '../services/users/get-pwd-strength.php',
				data: "password=" + password,
		
				success: function(res) {
					$("#strength").css('display', 'block');
					if (res >= 0 && res <= 2) {
						$("#strength").attr('class', 'low');
						$("#strength").html("低：尝试用大小写混合，以及特殊字符");
						return false;
					} else if (res >= 3 && res <= 5) {
						$("#strength").attr('class', 'middle');
						$("#strength").html("中：尝试用大小写混合，以及特殊字符");
						return false;
					} else {
						$("#strength").attr('class', 'high');
						$("#strength").html("高：请牢记您的密码");
						return false;
					}
				}
			});
		} else {
			$("#strength").attr('class', 'red');
			$("#strength").html("密码长度不能少于6位");
		}
	});

	// 提交表单
	$("#register").click(function() {
		var email = $("#email-register").val();
		var password = $("#password-register").val();
		var confirmPassword = $("#confirm-password").val();
		if (!password && !email) {
			$("#register-msg").css('visibility', 'visible');
			$("#register-msg").html("邮件或密码不能为空");
			return false;
		}

		if(password.length < 6) {
			$("#register-msg").css('visibility', 'visible');
			$("#register-msg").html("密码长度不能少于6位");
			return false;
		}

		if (password != confirmPassword) {
			$("#register-msg").css('visibility', 'visible');
			$("#register-msg").html("密码不一致,请确认");
			return false;
		}

//					$.ajax({
//						type: $("#register-form").attr("method"),
//						url: '../services/users/new-user.php',
//						data: "email="+email+"&password="+password+"&confirmPassword="+confirmPassword,
//				
//						success: function(html) {
//						if (html == "OK") {
//								alert("注册成功，请登录到邮箱激活账号");
//								window.location="./login.php";
//					
//								$("#register-msg").css('visibility', 'hidden');
//							} else {
//								$("#register-msg").css('visibility', 'visible');
//								$("#register-msg").html(html);
//						
//								setTimeout (function () {
//									$("#register-msg").css('visibility', 'hidden');
//								}, 10000);
//							}
//						}
//					});

		return false;
	});

});