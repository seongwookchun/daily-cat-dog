import React from 'react';


let APP_NAME = '멍냥이의 하루';
let PLACEHOLDER_ID = '';//📧이메일을 입력해주세요.';
let LABEL_EMAIL = '이메일';
let LABEL_PW = '비밀번호';
let BTN_LOGIN = '로그인';
let LABEL_FIND_IDPW = '아이디 / 비밀번호 찾기';

const Login = () => {
	return (
		<div class="Page-login">
			<h1>login</h1>
			<div class="card-area app-logo">
				<dl>
					<dt class="card-title">{APP_NAME}</dt>
					<dd></dd>
				</dl>
			</div>
			<form action="">
				<div class="input-area">
					<label for="id">{LABEL_EMAIL}</label>
					<input type="text" placeholder={PLACEHOLDER_ID}></input>
				</div>
				<div class="input-area">
					<label for="pw">{LABEL_PW}</label>
					<input type="password"></input>
				</div>
				<div class="btn-area">
					<button type="submit" class="btn-normal-medium">{BTN_LOGIN}</button>
				</div>
				<div class="article-area">
					{LABEL_FIND_IDPW}
				</div>
				
			</form>
		</div>
	)
}
export default Login;