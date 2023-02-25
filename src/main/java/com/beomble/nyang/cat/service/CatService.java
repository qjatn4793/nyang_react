package com.beomble.nyang.cat.service;

import com.beomble.nyang.cat.mapper.CatMapper;
import com.beomble.nyang.cat.vo.CatVo;
import com.beomble.nyang.config.EncryptUtil;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class CatService {

    @Autowired
    private CatMapper catMapper;

    public int createCat(CatVo catVo) {

        return catMapper.createCat(catVo);
    }

    public CatVo catLists(CatVo catVo) {

        return catMapper.catLists(catVo);
    }

    public int catCounts(String memberId) {

        return catMapper.catCounts(memberId);
    }

    public int deleteCat(CatVo catVo) {

        return catMapper.deleteCat(catVo);
    }

}
