package com.beomble.nyang.config.interceptor;

import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@Component
public class LoginCheckInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        boolean loginCheck =false;

        HttpSession session = request.getSession();

        if(!StringUtils.isEmpty(session.getAttribute("loginCheck"))){
            if(session.getAttribute("loginCheck").equals("success")){
                loginCheck = true;

            }else{
                response.sendRedirect("/");
                session.invalidate();
            }
        }else{
            response.sendRedirect("/");
            session.invalidate();
        }

        return loginCheck;
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {

    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object object, Exception arg3) throws Exception {

    }

}