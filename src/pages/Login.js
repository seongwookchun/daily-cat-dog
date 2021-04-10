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
					<label for="id" data-tool-tip="로그인 아이디로 이메일 주소를 입력해주세요.">{LABEL_EMAIL}</label>
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
					<a data-tool-tip={TOOLTIP_FIND_IDPW} href="#">{LABEL_FIND_IDPW}</a>
				</div>
				
			</form>
			<p>
				Lorem ipsum <a href="#" data-tool-tip="tool tip test">mouse over on it!.</a>
				great.
			</p>
		</div>
	)
}
export default Login;