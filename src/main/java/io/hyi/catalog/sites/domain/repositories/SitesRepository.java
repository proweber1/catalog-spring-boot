package io.hyi.catalog.sites.domain.repositories;

import io.hyi.catalog.sites.domain.Site;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Этот репозиторий отвечает за работу с сайтами пользователей
 */
public interface SitesRepository
        extends JpaRepository<Site, Long> {
}
