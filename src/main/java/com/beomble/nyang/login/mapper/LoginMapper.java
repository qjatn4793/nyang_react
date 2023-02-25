package com.beomble.nyang.login.mapper;

import com.beomble.nyang.login.vo.LoginVo;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Repository
@Mapper
public interface LoginMapper {

    LoginVo loginCheck(LoginVo loginVo);

    int loginCount(LoginVo loginVo);
}
