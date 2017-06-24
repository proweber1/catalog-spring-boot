package io.hyi.catalog.requests.domain;

import io.hyi.catalog.sites.domain.Site;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

/**
 * Сущность отравленной формы с сайта
 *
 * Эта сущность хранит запрос к апи который отсылал клиентский
 * сайт, это формы отправленные пользователями, типа заявки и
 * прочие формы
 */
@Entity
@Table(name = "sended_forms")
@Getter
@Setter
public class SendedForm {

    /**
     * Первичный ключ сущности
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    /**
     * Связь к которому привязан этот запрос
     */
    @ManyToOne
    private Site site;

    /**
     * Данные которые были отправлены внутри формы
     */
    private String request;

    /**
     * Имя формы, может быть не указано
     */
    @Column(name = "form_name")
    private String formName;

    /**
     * Откуда был сделан запрос
     */
    private String location;

    /**
     * IP пользователя который послал запрос
     */
    @Column(name = "user_ip")
    private String userIp;

    /**
     * Дата сохранения этого запроса
     */
    @Column(name = "created_at")
    @CreationTimestamp
    private LocalDateTime createdAt;
}
