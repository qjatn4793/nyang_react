package com.beomble.nyang.login.service;

import com.beomble.nyang.config.EncryptUtil;
import com.beomble.nyang.login.mapper.LoginMapper;
import com.beomble.nyang.login.vo.LoginVo;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class LoginService {

    @Autowired
    private LoginMapper loginMapper;

    public LoginVo loginCheck(LoginVo loginVo){

        loginVo.setMemberPw(loginVo.getMemberPw());

        return loginMapper.loginCheck(loginVo);
    }

    public int loginCount(LoginVo loginVo) throws Exception{

        EncryptUtil encryptUtil = new EncryptUtil();

        loginVo.setMemberPw(encryptUtil.encrypt(loginVo.getMemberPw()));

        return loginMapper.loginCount(loginVo);
    }
}
