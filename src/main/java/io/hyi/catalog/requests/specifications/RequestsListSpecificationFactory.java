package io.hyi.catalog.requests.specifications;

import io.hyi.catalog.requests.domain.SendedForm;
import org.springframework.data.jpa.domain.Specification;

import java.util.Objects;

/**
 * Это фабрика спецификаций которая будет работать для поддержки
 * фильтрации списка запросов
 */
public class RequestsListSpecificationFactory {

    /**
     * Возвращает спецификацию которая может фильтровать список
     * запросов по сайту
     *
     * @return Спецификация
     */
    public static Specification<SendedForm> bySite(Long siteId) {
        return (root, query, cb) ->
                Objects.isNull(siteId) ? null : cb.equal(root.get("site").get("id"), siteId);
    }
}
