package hu.BezemConversieTool;

import hu.BezemConversieTool.Domain.Cursus;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static hu.BezemConversieTool.Domain.Cursus.dummyData;

@SpringBootApplication
@RequestMapping("/hu")
@RestController
public class BezemConversieToolApplication {

	public static void main(String[] args) {
		SpringApplication.run(BezemConversieToolApplication.class, args);
	}

	@GetMapping("/bc")
	public List<Cursus> getConversieSheet () {
		return dummyData();
	}
}
