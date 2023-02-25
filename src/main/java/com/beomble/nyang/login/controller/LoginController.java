package com.beomble.nyang.login.controller;

import com.beomble.nyang.login.service.LoginService;
import com.beomble.nyang.login.vo.LoginVo;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@AllArgsConstructor
@ResponseBody
@RestController
public class LoginController {
    LoginService loginService;

    @GetMapping("/oauth/kakao/callback")
    public int viewRecords(@RequestParam String code){

        System.out.println("======================================");
        System.out.println(code);
        System.out.println("======================================");

        return 0;
    }

    @PostMapping("/login")
    public LoginVo loginLogic(@RequestBody LoginVo loginVo, HttpServletRequest request) {

        int loginCount = 0;
        LoginVo loginCheck = new LoginVo();

        try {
            loginCount = loginService.loginCount(loginVo);
        }catch (Exception e) {
            System.out.println(e);
        }

        HttpSession session = request.getSession();
        if(loginCount==1){
            try {
                loginCheck = loginService.loginCheck(loginVo);
            }catch (Exception e) {
                System.out.println(e);
            }

            //권한 체크하여 저장
            session.setAttribute("loginCheck","success");
            session.setAttribute("loginVo",loginCheck);

            loginCheck.setMemberPw("");


            // VO를 JSON 형식으로 변환하여 반환
            ObjectMapper mapper = new ObjectMapper();
            LoginVo returnLoginVo = mapper.convertValue(loginCheck, LoginVo.class);

            return returnLoginVo;
        }else {
            return null;
        }
    }



    @PutMapping("/login")
    public int updateRecords(){

        return 0;
    }

    @DeleteMapping("/login")
    public int logoutLogic(HttpServletRequest request) {
        HttpSession session = request.getSession();
        session.removeAttribute("loginCheck");
        session.removeAttribute("loginVo");
        session.invalidate();
        return 1;
    }
}
