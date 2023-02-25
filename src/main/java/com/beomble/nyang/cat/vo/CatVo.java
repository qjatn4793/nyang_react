package com.beomble.nyang.cat.vo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CatVo {
    private int catSeq;
    private String catImg;
    private String catName;
    private String memberId;
}
