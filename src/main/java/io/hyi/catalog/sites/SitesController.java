package io.hyi.catalog.sites;

import io.hyi.catalog.sites.domain.Site;
import io.hyi.catalog.sites.domain.repositories.SitesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

/**
 * Контроллер для управления сайтами пользователей
 */
@Controller
public class SitesController {

    /**
     * Репозиторий для работы с сайтами пользователя
     */
    private final SitesRepository sitesRepository;

    /**
     * Конструктор для внедрения зависимостей
     *
     * @param sitesRepository Репозиторий для работы с сайтами
     */
    @Autowired
    public SitesController(final SitesRepository sitesRepository) {
        this.sitesRepository = sitesRepository;
    }

    /**
     * Загружает список сайтов пользователя и отображает его
     * в браузере
     *
     * @param ui Spring ui model
     * @return Название шаблона для отображения списка сайтов
     */
    @GetMapping("/sites")
    public String index(final Model ui) {
        ui.addAttribute("sites", sitesRepository.findAll());

        return "sites/list";
    }
}
