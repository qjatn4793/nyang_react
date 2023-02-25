package com.beomble.nyang.records.vo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RecordsVo {
    private int recordsSeq;
    private String memberId;
    private String records;
    private String catName;
    private String purpose;
    private String choiceDate;
}
