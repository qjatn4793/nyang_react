package com.beomble.nyang.records.service;

import com.beomble.nyang.records.mapper.RecordsMapper;
import com.beomble.nyang.records.vo.RecordsVo;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service("RecordsService")
public class RecordsService {

    @Autowired
    private RecordsMapper recordsMapper;

    public int createRecords(RecordsVo recordsVo){

        return recordsMapper.createRecords(recordsVo);
    }

    public String recordsList(RecordsVo recordsVo) {

        return recordsMapper.recordsList(recordsVo);
    }

    public int recordsCounts(String memberId) {

        return recordsMapper.recordsCounts(memberId);
    }

    public RecordsVo viewRecords(RecordsVo recordsVo) {

        return recordsMapper.viewRecords(recordsVo);
    }

    public int deleteRecords(RecordsVo recordsVo){

        return recordsMapper.deleteRecords(recordsVo);
    }
}
