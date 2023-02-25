package com.beomble.nyang.cat.mapper;

import com.beomble.nyang.cat.vo.CatVo;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Repository
@Mapper
public interface CatMapper {

    int createCat(CatVo catVo);

    CatVo catLists(CatVo catVo);

    int catCounts(String memberId);

    int deleteCat(CatVo catVo);

}
