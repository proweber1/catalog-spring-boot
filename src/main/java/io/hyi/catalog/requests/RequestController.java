package io.hyi.catalog.requests;

import io.hyi.catalog.requests.domain.SendedForm;
import io.hyi.catalog.requests.domain.repositories.SendedFormsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

import static io.hyi.catalog.requests.specifications.RequestsListSpecificationFactory.*;

/**
 * Контроллер который работает с пользовательскими реквестами (принятыми
 * по api), это отправленные формы и все такое
 */
@Controller
public class RequestController {

    /**
     * Репозиторий для работы с запросами пользователей
     */
    private final SendedFormsRepository sendedFormsRepository;

    @Autowired
    public RequestController(final SendedFormsRepository sendedFormsRepository) {
        this.sendedFormsRepository = sendedFormsRepository;
    }

    /**
     * Эта страница загружает список запросов которые относятся к
     * сайтам текущего авторизированного пользователя
     *
     * @return Название страницы для отображения списка запросов
     */
    @GetMapping("/requests")
    public String index(
            @RequestParam(value = "siteId", required = false) final Long siteId,
            final Model ui
    ) {
        ui.addAttribute("requests", sendedFormsRepository.findAll(bySite(siteId)));

        return "requests/list";
    }
}
