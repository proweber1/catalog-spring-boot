package io.hyi.catalog.sites.domain;

import io.hyi.catalog.requests.domain.SendedForm;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

/**
 * Сущность сайта
 *
 * Это сущность сайта которой владеет определенный пользователь,
 * сайт используется для того чтобы прикреплять к нему данные
 * отправленные от этого сайта и чтобы держать apiKey для атворизации
 * этого сайта в апи для отправки запросов
 */
@Entity
@Table(name = "sites")
@Getter
@Setter
public class Site {

    /**
     * Первичный ключ сущности
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    /**
     * Название сайта, это не обязательно url, это название просто
     * для того чтобы можно было дать понятное имя сайту
     */
    private String name;

    /**
     * Ключ для авторизации клиентской библиотеки которая будет
     * отсылать данные форм с сайта клиента к нам
     */
    @Column(name = "api_key")
    private String apiKey;

    /**
     * Дата создания сайта в базе данных, по-умолчанию используется
     * функция {@literal NOW()} базы данных для указания текущей даты
     */
    @Column(name = "created_at")
    @CreationTimestamp
    private LocalDateTime createdAt;

    /**
     * Дата обновления сущности
     */
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    /**
     * Оптимистическая блокировка для конкурентного обновления
     * сущности сайта, возможно несколько людей будут работать под
     * одним аккаунтом в системе и возможны ситуации конкурентных
     * обновлений сущности
     */
    @Version
    private short version;

    /**
     * Список запросов которые были выполнены к этому сайту
     */
    @OneToMany(mappedBy = "site", targetEntity = SendedForm.class)
    @LazyCollection(LazyCollectionOption.EXTRA)
    private List<SendedForm> requests;

    /**
     * Возвращает количество запросов которое было сохранено для
     * сайта который представляет данная сущность
     *
     * @return Целое число (количество)
     */
    public int getRequestsCount() {
        return requests.size();
    }
}
