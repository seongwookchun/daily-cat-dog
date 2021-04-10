import React from 'react';
import './Login.css';

let APP_NAME = '멍냥이의 하루';
let PLACEHOLDER_ID = '';//📧이메일을 입력해주세요.';
let LABEL_EMAIL = '이메일';
let LABEL_PW = '비밀번호';
let BTN_LOGIN = '로그인';
let LABEL_FIND_IDPW = '아이디 / 비밀번호 찾기';
let TOOLTIP_FIND_IDPW = '아이디 / 비밀번호 찾기';

const Login = () => {
	return (
		<section class="Page-login">
			<div class="large-logo-area app-logo">
				<dl>
					<dt class="card-title">{APP_NAME}</dt>					
					<dd></dd>
				</dl>
			</div>
			<div class="login-area">
				<form action="">
					<div class="input-area">
						<input 
							type="text" 
							name="id" 
							id="id" 
							autocomplete="off" 
							placeholder={PLACEHOLDER_ID} 
							required>
						</input>
						<label for="id" data-tool-tip="로그인 아이디로 이메일 주소를 입력해주세요.">{LABEL_EMAIL}</label>
					</div>
					<div class="input-area">
						<input 
							type="password" 
							name="id" 
							id="id" 
							autocomplete="off" 
							placeholder={PLACEHOLDER_ID} 
							required>
						</input>
						<label for="pw">{LABEL_PW}</label>
					</div>
					<div class="widget-area">
						<p>
							<input class="ckbx-remember" type="checkbox"></input>
							<span>자동 로그인하기</span>
						</p>
						<p>
							<button class="btn-normal-medium" type="submit" >{BTN_LOGIN}</button>
						</p>
						<p>
							<a data-tool-tip={TOOLTIP_FIND_IDPW} href="#">{LABEL_FIND_IDPW}</a>
						</p>
					</div>
				</form>
			</div>
			<p>
				Lorem ipsum <a href="#" data-tool-tip="tool tip test">mouse over on it!.</a>
				great.
			</p>
		</section>
	)
}
export default Login;