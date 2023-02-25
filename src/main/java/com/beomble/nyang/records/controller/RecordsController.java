package com.beomble.nyang.records.controller;

import com.beomble.nyang.records.service.RecordsService;
import com.beomble.nyang.records.vo.RecordsVo;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@AllArgsConstructor
@ResponseBody
@RestController
public class RecordsController {
    RecordsService recordsService;

    @GetMapping("/records")
    public RecordsVo viewRecords(@RequestParam String memberId,@RequestParam String choiceDate){
        RecordsVo recordsVo = new RecordsVo();

        recordsVo.setMemberId(memberId);
        recordsVo.setChoiceDate(choiceDate);

        return recordsService.viewRecords(recordsVo);
    }

    @PostMapping("/recordsList")
    public ArrayList<String> recordsList(@RequestBody RecordsVo recordsVo){
        ArrayList<String> recordsList = new ArrayList<>();
        int recordsCounts = recordsService.recordsCounts(recordsVo.getMemberId());

        for (int i=0; i < recordsCounts; i++) {
            recordsVo.setRecordsSeq(i);
            recordsList.add(recordsService.recordsList(recordsVo));
        }

        return recordsList;
    }

    @PostMapping("/records")
    public int createRecords(@RequestBody RecordsVo recordsVo){

        return recordsService.createRecords(recordsVo);
    }

    @PutMapping("/records")
    public int updateRecords(@RequestBody RecordsVo recordsVo){

        System.out.println("putstart");
        System.out.println(recordsVo);
        System.out.println("putstart");

        return 0;
    }

    @DeleteMapping("/records")
    public int deleteRecords(@RequestParam String memberId, @RequestParam String choiceDate){

        RecordsVo recordsVo = new RecordsVo();
        recordsVo.setMemberId(memberId);
        recordsVo.setChoiceDate(choiceDate);

        return recordsService.deleteRecords(recordsVo);
    }
}
