package com.beomble.nyang;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
@MapperScan(value={"com.beomble.nyang.**.mapper"})
public class NyangApplication {

	public static void main(String[] args) {
		SpringApplication.run(NyangApplication.class, args);
	}

}
