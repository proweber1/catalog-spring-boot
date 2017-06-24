package io.hyi.catalog.dashboard;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 *
 */
@Controller
public class DashboardController {

    /**
     *
     * @return Template name
     */
    @GetMapping("/")
    public String index() {
        return "index";
    }
}
