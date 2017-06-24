package io.hyi.catalog.requests.domain.repositories;

import io.hyi.catalog.requests.domain.SendedForm;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

/**
 * Репозиторий который работает с данными которые были отправлены
 * с клиентский сайтов через api
 */
public interface SendedFormsRepository
        extends JpaRepository<SendedForm, Long>, JpaSpecificationExecutor<SendedForm> {
}
