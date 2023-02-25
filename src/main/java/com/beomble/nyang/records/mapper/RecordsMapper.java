package com.beomble.nyang.records.mapper;

import com.beomble.nyang.records.vo.RecordsVo;
import org.springframework.stereotype.Repository;

@Repository
public interface RecordsMapper {

    int createRecords(RecordsVo recordsVo);

    String recordsList(RecordsVo recordsVo);

    int recordsCounts(String memberId);

    RecordsVo viewRecords(RecordsVo recordsVo);

    int deleteRecords(RecordsVo recordsVo);
}
