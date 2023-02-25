package com.beomble.nyang.cat.controller;

import com.beomble.nyang.cat.service.CatService;
import com.beomble.nyang.cat.vo.CatVo;
import com.beomble.nyang.login.vo.LoginVo;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.ArrayList;

@AllArgsConstructor
@ResponseBody
@RestController
public class CatController {
    CatService catService;

    @PostMapping("/catLists")
    public ArrayList<CatVo> catLists(@RequestBody CatVo catVo){

        ArrayList<CatVo> catLists = new ArrayList<>();

        int catCounts = catService.catCounts(catVo.getMemberId());

        for (int i=0; i < catCounts; i++) {
            catVo.setCatSeq(i);
        }

        return catLists;
    }

    @PostMapping("/cat")
    public int createCat(@RequestBody CatVo catVo) {

        return catService.createCat(catVo);
    }

    @DeleteMapping("/cat")
    public int deleteCat(@RequestBody CatVo catVo) {

        return catService.deleteCat(catVo);
    }
}
