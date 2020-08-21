/**
 * @file modules/dbcontext.js
 * @project mobnius-kes-node
 * @author Александр
 * @todo автоматически сгенеренный код
 */
var provider = require('mobnius-pg-dbcontext');
var filter = require('./rpc/modules/access-filter');
var utils = require('./utils');
provider.initPool(utils.getConnectionString(), global.schemas);

/**
 * Специальный компонент для создания ручных запросов
 * @example
 * // https://node-postgres.com/
 * db.provider.db().query(queryText:string, params:any[], function(err, rows, time, options) {
 *      // , где queryText - строка запроса, params - параметры
 *      if(!err) {
 *          // rows - результат выполнения, time - время запроса в милисекундах, options - дополнительные данные
 *      } else {
 *          console.log(err);
 *      }
 * }); 
 */
exports.provider = provider;

/**
 * Действия пользователя
 * @example
 * Тип: BASE TABLE
 * Первичный ключ: id
 * Схема: core
 * Поля:
 *      id:bigint - Идентификатор
 *      fn_user:integer (core.pd_users.id) - Пользователь
 *      d_date:timestamp with time zone - Дата события
 *      c_data:text - Дополнительные параметры
 *      c_type:text - Тип события
 *      c_app_name:text - Имя приложение
 *      dx_created:timestamp with time zone - Создан в БД
 * // примеры выборки
 * db.ad_audits().Query({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры выборки через функцию
 * db.cf_ad_audits().Select({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры добавления
 * db.ad_audits().Add({...}|[{...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры обновления
 * db.ad_audits().Update({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры создания или обновления
 * db.ad_audits().AddOrUpdate({id:any ...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры удаления
 * db.ad_audits().Delete({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры получения количества записей
 * db.ad_audits().Count({...}, function(data) {
 *      if(data.meta.success) {
 *          // results.result.total
 *      }   
 * });
 */
exports.ad_audits = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.select('core', 'ad_audits', query_param, filter.security(session), callback);
        },
        Select: function (query_param, callback) {
            provider.select('core', 'cf_mui_ad_audits()', query_param, filter.security(session), callback);
        },
        Add: function (data, callback) {
            provider.insert('core', 'ad_audits', data, callback);
        },
        AddOrUpdate: function (data, callback) {
            provider.insertOrUpdate('core', 'ad_audits', 'id', data, callback);
        },
        Update: function (data, callback) {
            provider.update('core', 'ad_audits', 'id', data, callback);
        },
        Delete: function (data, callback) {
            provider.delete('core', 'ad_audits', 'id', data, callback);
        },
        Count: function (query_param, callback) {
            provider.count('core', 'ad_audits', query_param, callback);
        }
    }
}

/**
 * Информация о мобильных устройствах
 * @example
 * Тип: BASE TABLE
 * Первичный ключ: id
 * Схема: core
 * Поля:
 *      id:uuid - Идентификатор
 *      fn_user:integer (core.pd_users.id) - Пользователь
 *      d_date:timestamp with time zone - Дата возникновения событий
 *      b_debug:boolean - Режим отладки
 *      c_architecture:text - Архитектура устройства
 *      c_phone_model:text - Модель телефона
 *      c_sdk:text - Версия sdk
 *      c_os:text - Версия ОС
 *      c_imei:text - IMEI
 *      c_application_version:text - Версия приложения
 *      dx_created:timestamp with time zone - Создан в БД
 * // примеры выборки
 * db.ad_mobile_devices().Query({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры выборки через функцию
 * db.cf_ad_mobile_devices().Select({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры добавления
 * db.ad_mobile_devices().Add({...}|[{...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры обновления
 * db.ad_mobile_devices().Update({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры создания или обновления
 * db.ad_mobile_devices().AddOrUpdate({id:any ...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры удаления
 * db.ad_mobile_devices().Delete({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры получения количества записей
 * db.ad_mobile_devices().Count({...}, function(data) {
 *      if(data.meta.success) {
 *          // results.result.total
 *      }   
 * });
 */
exports.ad_mobile_devices = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.select('core', 'ad_mobile_devices', query_param, filter.security(session), callback);
        },
        Select: function (query_param, callback) {
            provider.select('core', 'cf_mui_ad_mobile_devices()', query_param, filter.security(session), callback);
        },
        Add: function (data, callback) {
            provider.insert('core', 'ad_mobile_devices', data, callback);
        },
        AddOrUpdate: function (data, callback) {
            provider.insertOrUpdate('core', 'ad_mobile_devices', 'id', data, callback);
        },
        Update: function (data, callback) {
            provider.update('core', 'ad_mobile_devices', 'id', data, callback);
        },
        Delete: function (data, callback) {
            provider.delete('core', 'ad_mobile_devices', 'id', data, callback);
        },
        Count: function (query_param, callback) {
            provider.count('core', 'ad_mobile_devices', query_param, callback);
        }
    }
}

/**
 * Показатели мобильного устройства
 * @example
 * Тип: BASE TABLE
 * Первичный ключ: id
 * Схема: core
 * Поля:
 *      id:uuid - Идентификатор
 *      fn_user:integer (core.pd_users.id) - Пользователь
 *      d_date:timestamp with time zone - Дата события
 *      c_network_type:text - Тип сети
 *      b_isonline:boolean - Состояние подключения к сети интернет
 *      n_ram:bigint - Размер ОЗУ
 *      n_used_ram:bigint - Размер используемого ОЗУ
 *      n_phone_memory:bigint - Размер внутренней памяти
 *      n_used_phone_memory:bigint - Размер используемой внутренней памяти
 *      n_sd_card_memory:bigint - Размер внешней памяти
 *      n_used_sd_card_memory:bigint - Размер используемой внешей памяти
 *      n_battery_level:integer - Уровень заряда батареи
 *      n_time:integer - Смещение времени
 *      dx_created:timestamp with time zone - Создан в БД
 * // примеры выборки
 * db.ad_mobile_indicators().Query({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры выборки через функцию
 * db.cf_ad_mobile_indicators().Select({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры добавления
 * db.ad_mobile_indicators().Add({...}|[{...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры обновления
 * db.ad_mobile_indicators().Update({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры создания или обновления
 * db.ad_mobile_indicators().AddOrUpdate({id:any ...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры удаления
 * db.ad_mobile_indicators().Delete({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры получения количества записей
 * db.ad_mobile_indicators().Count({...}, function(data) {
 *      if(data.meta.success) {
 *          // results.result.total
 *      }   
 * });
 */
exports.ad_mobile_indicators = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.select('core', 'ad_mobile_indicators', query_param, filter.security(session), callback);
        },
        Select: function (query_param, callback) {
            provider.select('core', 'cf_mui_ad_mobile_indicators()', query_param, filter.security(session), callback);
        },
        Add: function (data, callback) {
            provider.insert('core', 'ad_mobile_indicators', data, callback);
        },
        AddOrUpdate: function (data, callback) {
            provider.insertOrUpdate('core', 'ad_mobile_indicators', 'id', data, callback);
        },
        Update: function (data, callback) {
            provider.update('core', 'ad_mobile_indicators', 'id', data, callback);
        },
        Delete: function (data, callback) {
            provider.delete('core', 'ad_mobile_indicators', 'id', data, callback);
        },
        Count: function (query_param, callback) {
            provider.count('core', 'ad_mobile_indicators', query_param, callback);
        }
    }
}

/**
 * Перемещение исполнителя
 * @example
 * Тип: BASE TABLE
 * Первичный ключ: id
 * Схема: core
 * Поля:
 *      id:uuid - Идентификатор
 *      fn_user:integer (core.pd_users.id) - Исполнитель
 *      d_date:timestamp with time zone - Дата
 *      n_longitude:numeric - Долгота
 *      n_latitude:numeric - Широта
 *      c_network_status:text - Тип сети
 *      gx_geodata:USER-DEFINED - Географические координаты
 *      dx_created:timestamp with time zone - Создан в БД
 * // примеры выборки
 * db.ad_tracking().Query({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры выборки через функцию
 * db.cf_ad_tracking().Select({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры добавления
 * db.ad_tracking().Add({...}|[{...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры обновления
 * db.ad_tracking().Update({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры создания или обновления
 * db.ad_tracking().AddOrUpdate({id:any ...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры удаления
 * db.ad_tracking().Delete({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры получения количества записей
 * db.ad_tracking().Count({...}, function(data) {
 *      if(data.meta.success) {
 *          // results.result.total
 *      }   
 * });
 */
exports.ad_tracking = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.select('core', 'ad_tracking', query_param, filter.security(session), callback);
        },
        Select: function (query_param, callback) {
            provider.select('core', 'cf_mui_ad_tracking()', query_param, filter.security(session), callback);
        },
        Add: function (data, callback) {
            provider.insert('core', 'ad_tracking', data, callback);
        },
        AddOrUpdate: function (data, callback) {
            provider.insertOrUpdate('core', 'ad_tracking', 'id', data, callback);
        },
        Update: function (data, callback) {
            provider.update('core', 'ad_tracking', 'id', data, callback);
        },
        Delete: function (data, callback) {
            provider.delete('core', 'ad_tracking', 'id', data, callback);
        },
        Count: function (query_param, callback) {
            provider.count('core', 'ad_tracking', query_param, callback);
        }
    }
}

/**
 * Контакты
 * @example
 * Тип: BASE TABLE
 * Первичный ключ: id
 * Схема: dbo
 * Поля:
 *      b_disabled:boolean - b_disabled
 *      c_appartament:text - c_appartament
 *      c_description:text - c_description
 *      c_first_name:text - c_first_name
 *      c_house_build:text - c_house_build
 *      c_house_num:text - c_house_num
 *      c_last_name:text - c_last_name
 *      c_patronymic:text - c_patronymic
 *      c_phone:text - c_phone
 *      d_date:timestamp with time zone - d_date
 *      dx_created:timestamp with time zone - dx_created
 *      fn_street:uuid - fn_street
 *      fn_user:integer - fn_user
 *      id:uuid - id
 *      jb_data:jsonb - jb_data
 *      n_order:bigint - n_order
 *      n_rating:integer - n_rating
 * // примеры выборки
 * db.cd_contacts().Query({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры выборки через функцию
 * db.cf_cd_contacts().Select({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры добавления
 * db.cd_contacts().Add({...}|[{...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры обновления
 * db.cd_contacts().Update({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры создания или обновления
 * db.cd_contacts().AddOrUpdate({id:any ...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры удаления
 * db.cd_contacts().Delete({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры получения количества записей
 * db.cd_contacts().Count({...}, function(data) {
 *      if(data.meta.success) {
 *          // results.result.total
 *      }   
 * });
 */
exports.cd_contacts = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.select('dbo', 'cd_contacts', query_param, filter.security(session), callback);
        },
        Select: function (query_param, callback) {
            provider.select('dbo', 'cf_mui_cd_contacts()', query_param, filter.security(session), callback);
        },
        Add: function (data, callback) {
            provider.insert('dbo', 'cd_contacts', data, callback);
        },
        AddOrUpdate: function (data, callback) {
            provider.insertOrUpdate('dbo', 'cd_contacts', 'id', data, callback);
        },
        Update: function (data, callback) {
            provider.update('dbo', 'cd_contacts', 'id', data, callback);
        },
        Delete: function (data, callback) {
            provider.delete('dbo', 'cd_contacts', 'id', data, callback);
        },
        Count: function (query_param, callback) {
            provider.count('dbo', 'cd_contacts', query_param, callback);
        }
    }
}

/**
 * Обратная связь
 * @example
 * Тип: BASE TABLE
 * Первичный ключ: id
 * Схема: core
 * Поля:
 *      c_answer:text - Ответ
 *      c_imei:text - IMEI, либо номер устройства
 *      c_question:text - Текст обращения
 *      d_date_answer:timestamp with time zone - Дата ответ
 *      d_date_question:timestamp with time zone - Дата обращения
 *      dx_created:timestamp with time zone - Дата создания в БД
 *      fn_type:integer (core.cs_feedback_types.id) - Тип обращения
 *      fn_user:integer (core.pd_users.id) - Пользователь
 *      id:uuid - Идентификатор
 *      jb_data:jsonb - Дополнительные данные
 * // примеры выборки
 * db.cd_feedbacks().Query({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры выборки через функцию
 * db.cf_cd_feedbacks().Select({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры добавления
 * db.cd_feedbacks().Add({...}|[{...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры обновления
 * db.cd_feedbacks().Update({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры создания или обновления
 * db.cd_feedbacks().AddOrUpdate({id:any ...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры удаления
 * db.cd_feedbacks().Delete({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры получения количества записей
 * db.cd_feedbacks().Count({...}, function(data) {
 *      if(data.meta.success) {
 *          // results.result.total
 *      }   
 * });
 */
exports.cd_feedbacks = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.select('core', 'cd_feedbacks', query_param, filter.security(session), callback);
        },
        Select: function (query_param, callback) {
            provider.select('core', 'cf_mui_cd_feedbacks()', query_param, filter.security(session), callback);
        },
        Add: function (data, callback) {
            provider.insert('core', 'cd_feedbacks', data, callback);
        },
        AddOrUpdate: function (data, callback) {
            provider.insertOrUpdate('core', 'cd_feedbacks', 'id', data, callback);
        },
        Update: function (data, callback) {
            provider.update('core', 'cd_feedbacks', 'id', data, callback);
        },
        Delete: function (data, callback) {
            provider.delete('core', 'cd_feedbacks', 'id', data, callback);
        },
        Count: function (query_param, callback) {
            provider.count('core', 'cd_feedbacks', query_param, callback);
        }
    }
}

/**
 * Лояльное население
 * @example
 * Тип: BASE TABLE
 * Первичный ключ: id
 * Схема: dbo
 * Поля:
 *      c_first_name:text - Имя
 *      c_last_name:text - Фамилия
 *      c_org:text - Наименование организации
 *      c_patronymic:text - Отчество
 *      c_phone:text - Номер телефона
 *      dx_created:timestamp with time zone - dx_created
 *      f_appartament:uuid (dbo.cs_appartament.id) - Помещение, Квартира
 *      f_house:uuid (dbo.cs_house.id) - Дом
 *      f_street:uuid (dbo.cs_street.id) - Улица
 *      f_type:integer (dbo.cs_people_types.id) - Тип записи
 *      f_user:integer (core.pd_users.id) - Пользователь
 *      id:uuid - id
 *      n_birth_year:integer - Год рождения
 * // примеры выборки
 * db.cd_people().Query({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры выборки через функцию
 * db.cf_cd_people().Select({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры добавления
 * db.cd_people().Add({...}|[{...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры обновления
 * db.cd_people().Update({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры создания или обновления
 * db.cd_people().AddOrUpdate({id:any ...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры удаления
 * db.cd_people().Delete({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры получения количества записей
 * db.cd_people().Count({...}, function(data) {
 *      if(data.meta.success) {
 *          // results.result.total
 *      }   
 * });
 */
exports.cd_people = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.select('dbo', 'cd_people', query_param, filter.security(session), callback);
        },
        Select: function (query_param, callback) {
            provider.select('dbo', 'cf_mui_cd_people()', query_param, filter.security(session), callback);
        },
        Add: function (data, callback) {
            provider.insert('dbo', 'cd_people', data, callback);
        },
        AddOrUpdate: function (data, callback) {
            provider.insertOrUpdate('dbo', 'cd_people', 'id', data, callback);
        },
        Update: function (data, callback) {
            provider.update('dbo', 'cd_people', 'id', data, callback);
        },
        Delete: function (data, callback) {
            provider.delete('dbo', 'cd_people', 'id', data, callback);
        },
        Count: function (query_param, callback) {
            provider.count('dbo', 'cd_people', query_param, callback);
        }
    }
}

/**
 * Точки
 * @example
 * Тип: BASE TABLE
 * Первичный ключ: id
 * Схема: core
 * Поля:
 *      id:uuid - Идентификатор
 *      f_route:uuid (core.cd_routes.id) - Маршрут
 *      c_notice:text - Примечание
 *      c_info:text - Информация
 *      jb_data:jsonb - JSON данные
 *      dx_created:timestamp with time zone - Дата создания в БД
 *      n_order:integer - Сортировка
 *      f_appartament:uuid (dbo.cs_appartament.id) - Квартира
 *      n_priority:integer - Приоритет задания
 * // примеры выборки
 * db.cd_points().Query({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры выборки через функцию
 * db.cf_cd_points().Select({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры добавления
 * db.cd_points().Add({...}|[{...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры обновления
 * db.cd_points().Update({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры создания или обновления
 * db.cd_points().AddOrUpdate({id:any ...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры удаления
 * db.cd_points().Delete({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры получения количества записей
 * db.cd_points().Count({...}, function(data) {
 *      if(data.meta.success) {
 *          // results.result.total
 *      }   
 * });
 */
exports.cd_points = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.select('core', 'cd_points', query_param, filter.security(session), callback);
        },
        Select: function (query_param, callback) {
            provider.select('core', 'cf_mui_cd_points()', query_param, filter.security(session), callback);
        },
        Add: function (data, callback) {
            provider.insert('core', 'cd_points', data, callback);
        },
        AddOrUpdate: function (data, callback) {
            provider.insertOrUpdate('core', 'cd_points', 'id', data, callback);
        },
        Update: function (data, callback) {
            provider.update('core', 'cd_points', 'id', data, callback);
        },
        Delete: function (data, callback) {
            provider.delete('core', 'cd_points', 'id', data, callback);
        },
        Count: function (query_param, callback) {
            provider.count('core', 'cd_points', query_param, callback);
        }
    }
}

/**
 * Результат выполнения
 * @example
 * Тип: BASE TABLE
 * Первичный ключ: id
 * Схема: core
 * Поля:
 *      id:uuid - Идентификатор
 *      fn_user_point:uuid (core.cd_user_points.id) - Пользовательская точка
 *      fn_point:uuid - Точка маршрута
 *      fn_type:integer (core.cs_result_types.id) - Тип результат
 *      fn_user:integer (core.pd_users.id) - Пользователь
 *      fn_route:uuid - Маршрут
 *      d_date:timestamp with time zone - Дата создания
 *      c_notice:text - Примечание
 *      b_warning:boolean - Предупреждение
 *      fn_answer:integer - Ответ
 *      fn_question:integer - Вопрос
 *      jb_data:jsonb - JSON данные
 *      dx_created:timestamp with time zone - Дата создания в БД
 *      b_disabled:boolean - b_disabled
 *      n_order:integer - n_order
 *      n_rating:integer - Оценка
 * // примеры выборки
 * db.cd_results().Query({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры выборки через функцию
 * db.cf_cd_results().Select({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры добавления
 * db.cd_results().Add({...}|[{...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры обновления
 * db.cd_results().Update({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры создания или обновления
 * db.cd_results().AddOrUpdate({id:any ...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры удаления
 * db.cd_results().Delete({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры получения количества записей
 * db.cd_results().Count({...}, function(data) {
 *      if(data.meta.success) {
 *          // results.result.total
 *      }   
 * });
 */
exports.cd_results = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.select('core', 'cd_results', query_param, filter.security(session), callback);
        },
        Select: function (query_param, callback) {
            provider.select('core', 'cf_mui_cd_results()', query_param, filter.security(session), callback);
        },
        Add: function (data, callback) {
            provider.insert('core', 'cd_results', data, callback);
        },
        AddOrUpdate: function (data, callback) {
            provider.insertOrUpdate('core', 'cd_results', 'id', data, callback);
        },
        Update: function (data, callback) {
            provider.update('core', 'cd_results', 'id', data, callback);
        },
        Delete: function (data, callback) {
            provider.delete('core', 'cd_results', 'id', data, callback);
        },
        Count: function (query_param, callback) {
            provider.count('core', 'cd_results', query_param, callback);
        }
    }
}

/**
 * Маршруты
 * @example
 * Тип: BASE TABLE
 * Первичный ключ: id
 * Схема: core
 * Поля:
 *      id:uuid - Идентификатор
 *      f_type:integer (core.cs_route_types.id) - Тип маршрута
 *      c_number:text - Номер маршрута
 *      d_date:timestamp with time zone - Дата создания
 *      d_date_start:date - Дата начала выполнения
 *      d_date_end:date - Дата завершения выполнения
 *      c_notice:text - Примечание
 *      b_extended:boolean - Продлен
 *      d_extended:date - Продлен до
 *      jb_data:jsonb - JSON данные
 *      dx_created:timestamp with time zone - Дата создания в БД
 *      n_order:integer - Сортировка
 *      f_house:uuid (dbo.cs_house.id) - Ссылка на дом
 * // примеры выборки
 * db.cd_routes().Query({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры выборки через функцию
 * db.cf_cd_routes().Select({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры добавления
 * db.cd_routes().Add({...}|[{...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры обновления
 * db.cd_routes().Update({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры создания или обновления
 * db.cd_routes().AddOrUpdate({id:any ...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры удаления
 * db.cd_routes().Delete({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры получения количества записей
 * db.cd_routes().Count({...}, function(data) {
 *      if(data.meta.success) {
 *          // results.result.total
 *      }   
 * });
 */
exports.cd_routes = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.select('core', 'cd_routes', query_param, filter.security(session), callback);
        },
        Select: function (query_param, callback) {
            provider.select('core', 'cf_mui_cd_routes()', query_param, filter.security(session), callback);
        },
        Add: function (data, callback) {
            provider.insert('core', 'cd_routes', data, callback);
        },
        AddOrUpdate: function (data, callback) {
            provider.insertOrUpdate('core', 'cd_routes', 'id', data, callback);
        },
        Update: function (data, callback) {
            provider.update('core', 'cd_routes', 'id', data, callback);
        },
        Delete: function (data, callback) {
            provider.delete('core', 'cd_routes', 'id', data, callback);
        },
        Count: function (query_param, callback) {
            provider.count('core', 'cd_routes', query_param, callback);
        }
    }
}

/**
 * История изменения статусов заданий
 * @example
 * Тип: BASE TABLE
 * Первичный ключ: id
 * Схема: core
 * Поля:
 *      id:uuid - Идентификатор
 *      fn_route:uuid (core.cd_routes.id) - Задание
 *      fn_status:integer (core.cs_route_statuses.id) - Статус
 *      fn_user:integer (core.pd_users.id) - Пользователь
 *      d_date:timestamp with time zone - Дата изменения
 *      c_notice:text - Примечание
 *      dx_created:timestamp with time zone - Дата создания в БД
 * // примеры выборки
 * db.cd_route_history().Query({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры выборки через функцию
 * db.cf_cd_route_history().Select({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры добавления
 * db.cd_route_history().Add({...}|[{...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры обновления
 * db.cd_route_history().Update({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры создания или обновления
 * db.cd_route_history().AddOrUpdate({id:any ...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры удаления
 * db.cd_route_history().Delete({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры получения количества записей
 * db.cd_route_history().Count({...}, function(data) {
 *      if(data.meta.success) {
 *          // results.result.total
 *      }   
 * });
 */
exports.cd_route_history = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.select('core', 'cd_route_history', query_param, filter.security(session), callback);
        },
        Select: function (query_param, callback) {
            provider.select('core', 'cf_mui_cd_route_history()', query_param, filter.security(session), callback);
        },
        Add: function (data, callback) {
            provider.insert('core', 'cd_route_history', data, callback);
        },
        AddOrUpdate: function (data, callback) {
            provider.insertOrUpdate('core', 'cd_route_history', 'id', data, callback);
        },
        Update: function (data, callback) {
            provider.update('core', 'cd_route_history', 'id', data, callback);
        },
        Delete: function (data, callback) {
            provider.delete('core', 'cd_route_history', 'id', data, callback);
        },
        Count: function (query_param, callback) {
            provider.count('core', 'cd_route_history', query_param, callback);
        }
    }
}

/**
 * Настройки
 * @example
 * Тип: BASE TABLE
 * Первичный ключ: id
 * Схема: core
 * Поля:
 *      id:integer - Идентификатор
 *      c_key:text - Ключ
 *      c_value:text - Значение
 *      f_type:integer (core.cs_setting_types.id) - Тип
 *      c_label:text - Заголовок
 *      c_summary:text - Краткое описание
 *      f_division:integer (core.sd_divisions.id) - Регион
 *      f_user:integer (core.pd_users.id) - Пользователь
 *      sn_delete:boolean - Удален
 * // примеры выборки
 * db.cd_settings().Query({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры выборки через функцию
 * db.cf_cd_settings().Select({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры добавления
 * db.cd_settings().Add({...}|[{...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры обновления
 * db.cd_settings().Update({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры создания или обновления
 * db.cd_settings().AddOrUpdate({id:any ...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры удаления
 * db.cd_settings().Delete({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры получения количества записей
 * db.cd_settings().Count({...}, function(data) {
 *      if(data.meta.success) {
 *          // results.result.total
 *      }   
 * });
 */
exports.cd_settings = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.select('core', 'cd_settings', query_param, filter.security(session), callback);
        },
        Select: function (query_param, callback) {
            provider.select('core', 'cf_mui_cd_settings()', query_param, filter.security(session), callback);
        },
        Add: function (data, callback) {
            provider.insert('core', 'cd_settings', data, callback);
        },
        AddOrUpdate: function (data, callback) {
            provider.insertOrUpdate('core', 'cd_settings', 'id', data, callback);
        },
        Update: function (data, callback) {
            provider.update('core', 'cd_settings', 'id', data, callback);
        },
        Delete: function (data, callback) {
            provider.delete('core', 'cd_settings', 'id', data, callback);
        },
        Count: function (query_param, callback) {
            provider.count('core', 'cd_settings', query_param, callback);
        }
    }
}

/**
 *  Логирование job
 * @example
 * Тип: BASE TABLE
 * Первичный ключ: id
 * Схема: core
 * Поля:
 *      c_descr:text - c_descr
 *      d_timestamp:timestamp with time zone - d_timestamp
 *      id:uuid - id
 *      n_level_msg:integer - 0 - сообщение1 - предупрежденние2 - ошибка
 * // примеры выборки
 * db.cd_sys_log().Query({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры выборки через функцию
 * db.cf_cd_sys_log().Select({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры добавления
 * db.cd_sys_log().Add({...}|[{...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры обновления
 * db.cd_sys_log().Update({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры создания или обновления
 * db.cd_sys_log().AddOrUpdate({id:any ...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры удаления
 * db.cd_sys_log().Delete({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры получения количества записей
 * db.cd_sys_log().Count({...}, function(data) {
 *      if(data.meta.success) {
 *          // results.result.total
 *      }   
 * });
 */
exports.cd_sys_log = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.select('core', 'cd_sys_log', query_param, filter.security(session), callback);
        },
        Select: function (query_param, callback) {
            provider.select('core', 'cf_mui_cd_sys_log()', query_param, filter.security(session), callback);
        },
        Add: function (data, callback) {
            provider.insert('core', 'cd_sys_log', data, callback);
        },
        AddOrUpdate: function (data, callback) {
            provider.insertOrUpdate('core', 'cd_sys_log', 'id', data, callback);
        },
        Update: function (data, callback) {
            provider.update('core', 'cd_sys_log', 'id', data, callback);
        },
        Delete: function (data, callback) {
            provider.delete('core', 'cd_sys_log', 'id', data, callback);
        },
        Count: function (query_param, callback) {
            provider.count('core', 'cd_sys_log', query_param, callback);
        }
    }
}

/**
 * УИК
 * @example
 * Тип: BASE TABLE
 * Первичный ключ: id
 * Схема: dbo
 * Поля:
 *      c_email:text - Email
 *      c_fio:text - ФИО
 *      c_job:text - c_job
 *      c_phone:text - c_phone
 *      c_work_place:text - c_work_place
 *      id:integer - Идентификатор
 * // примеры выборки
 * db.cd_uik().Query({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры выборки через функцию
 * db.cf_cd_uik().Select({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры добавления
 * db.cd_uik().Add({...}|[{...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры обновления
 * db.cd_uik().Update({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры создания или обновления
 * db.cd_uik().AddOrUpdate({id:any ...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры удаления
 * db.cd_uik().Delete({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры получения количества записей
 * db.cd_uik().Count({...}, function(data) {
 *      if(data.meta.success) {
 *          // results.result.total
 *      }   
 * });
 */
exports.cd_uik = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.select('dbo', 'cd_uik', query_param, filter.security(session), callback);
        },
        Select: function (query_param, callback) {
            provider.select('dbo', 'cf_mui_cd_uik()', query_param, filter.security(session), callback);
        },
        Add: function (data, callback) {
            provider.insert('dbo', 'cd_uik', data, callback);
        },
        AddOrUpdate: function (data, callback) {
            provider.insertOrUpdate('dbo', 'cd_uik', 'id', data, callback);
        },
        Update: function (data, callback) {
            provider.update('dbo', 'cd_uik', 'id', data, callback);
        },
        Delete: function (data, callback) {
            provider.delete('dbo', 'cd_uik', 'id', data, callback);
        },
        Count: function (query_param, callback) {
            provider.count('dbo', 'cd_uik', query_param, callback);
        }
    }
}

/**
 * Исполнители задания
 * @example
 * Тип: BASE TABLE
 * Первичный ключ: id
 * Схема: core
 * Поля:
 *      id:uuid - Идентифиактор
 *      f_route:uuid (core.cd_routes.id) - Маршрут
 *      f_user:integer (core.pd_users.id) - Пользователь
 *      b_main:boolean - Является главным
 *      dx_created:timestamp with time zone - Дата создания в БД
 * // примеры выборки
 * db.cd_userinroutes().Query({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры выборки через функцию
 * db.cf_cd_userinroutes().Select({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры добавления
 * db.cd_userinroutes().Add({...}|[{...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры обновления
 * db.cd_userinroutes().Update({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры создания или обновления
 * db.cd_userinroutes().AddOrUpdate({id:any ...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры удаления
 * db.cd_userinroutes().Delete({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры получения количества записей
 * db.cd_userinroutes().Count({...}, function(data) {
 *      if(data.meta.success) {
 *          // results.result.total
 *      }   
 * });
 */
exports.cd_userinroutes = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.select('core', 'cd_userinroutes', query_param, filter.security(session), callback);
        },
        Select: function (query_param, callback) {
            provider.select('core', 'cf_mui_cd_userinroutes()', query_param, filter.security(session), callback);
        },
        Add: function (data, callback) {
            provider.insert('core', 'cd_userinroutes', data, callback);
        },
        AddOrUpdate: function (data, callback) {
            provider.insertOrUpdate('core', 'cd_userinroutes', 'id', data, callback);
        },
        Update: function (data, callback) {
            provider.update('core', 'cd_userinroutes', 'id', data, callback);
        },
        Delete: function (data, callback) {
            provider.delete('core', 'cd_userinroutes', 'id', data, callback);
        },
        Count: function (query_param, callback) {
            provider.count('core', 'cd_userinroutes', query_param, callback);
        }
    }
}

/**
 * Точки
 * @example
 * Тип: BASE TABLE
 * Первичный ключ: id
 * Схема: core
 * Поля:
 *      id:uuid - Идентификатор
 *      fn_point:uuid (core.cd_points.id) - Точка
 *      fn_user:integer (core.pd_users.id) - Пользователь
 *      fn_route:uuid (core.cd_routes.id) - Маршрут
 *      fn_type:integer (core.cs_point_types.id) - Тип
 *      jb_tel:jsonb - Номер телефона
 *      jb_email:jsonb - Эл. почта
 *      n_longitude:numeric - Долгота
 *      n_latitude:numeric - Широта
 *      gx_geodata:USER-DEFINED - Вычисляемое поле
 *      c_notice:text - Примечание
 *      b_check:boolean - Подтверждено
 *      jb_data:jsonb - JSON данные
 *      d_date_check:timestamp with time zone - Дата подтверждения
 *      dx_created:timestamp with time zone - Дата записи в БД
 *      d_date:timestamp with time zone - Дата создания
 *      b_disabled:boolean - b_disabled
 * // примеры выборки
 * db.cd_user_points().Query({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры выборки через функцию
 * db.cf_cd_user_points().Select({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры добавления
 * db.cd_user_points().Add({...}|[{...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры обновления
 * db.cd_user_points().Update({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры создания или обновления
 * db.cd_user_points().AddOrUpdate({id:any ...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры удаления
 * db.cd_user_points().Delete({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры получения количества записей
 * db.cd_user_points().Count({...}, function(data) {
 *      if(data.meta.success) {
 *          // results.result.total
 *      }   
 * });
 */
exports.cd_user_points = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.select('core', 'cd_user_points', query_param, filter.security(session), callback);
        },
        Select: function (query_param, callback) {
            provider.select('core', 'cf_mui_cd_user_points()', query_param, filter.security(session), callback);
        },
        Add: function (data, callback) {
            provider.insert('core', 'cd_user_points', data, callback);
        },
        AddOrUpdate: function (data, callback) {
            provider.insertOrUpdate('core', 'cd_user_points', 'id', data, callback);
        },
        Update: function (data, callback) {
            provider.update('core', 'cd_user_points', 'id', data, callback);
        },
        Delete: function (data, callback) {
            provider.delete('core', 'cd_user_points', 'id', data, callback);
        },
        Count: function (query_param, callback) {
            provider.count('core', 'cd_user_points', query_param, callback);
        }
    }
}

/**
 * 
 * @example
 * Тип: FUNCTION
 * Схема: core
 * // примеры выборки
 * db.cftiu_coordinates_trigger().Query({params:{...}}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 */
exports.cftiu_coordinates_trigger = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('core', 'cftiu_coordinates_trigger', query_param.params, callback);
        },
        Select: function (query_param, callback) {
            provider.select('core', 'cftiu_coordinates_trigger()', query_param, filter.security(session), callback);
        }
    }
}

/**
 * Процедура логирования действия пользователя
 * @example
 * Тип: FUNCTION
 * Схема: core
 * // примеры выборки
 * db.cft_0_log_action().Query({params:{...}}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 */
exports.cft_0_log_action = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('core', 'cft_0_log_action', query_param.params, callback);
        },
        Select: function (query_param, callback) {
            provider.select('core', 'cft_0_log_action()', query_param, filter.security(session), callback);
        }
    }
}

/**
 * 
 * @example
 * Тип: FUNCTION
 * Схема: core
 * // примеры выборки
 * db.cft_cd_results_trigger().Query({params:{...}}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 */
exports.cft_cd_results_trigger = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('core', 'cft_cd_results_trigger', query_param.params, callback);
        },
        Select: function (query_param, callback) {
            provider.select('core', 'cft_cd_results_trigger()', query_param, filter.security(session), callback);
        }
    }
}

/**
 * 
 * @example
 * Тип: FUNCTION
 * Схема: core
 * // примеры выборки
 * db.cft_cd_user_points_trigger().Query({params:{...}}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 */
exports.cft_cd_user_points_trigger = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('core', 'cft_cd_user_points_trigger', query_param.params, callback);
        },
        Select: function (query_param, callback) {
            provider.select('core', 'cft_cd_user_points_trigger()', query_param, filter.security(session), callback);
        }
    }
}

/**
 * Привязка обходчиков к квартирам
 * @example
 * Тип: FUNCTION
 * Схема: dbo
 * // примеры выборки
 * db.cf_bind_appartament().Query({params:{...}}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 */
exports.cf_bind_appartament = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('dbo', 'cf_bind_appartament', query_param.params, callback);
        },
        Select: function (query_param, callback) {
            provider.select('dbo', 'cf_bind_appartament()', query_param, filter.security(session), callback);
        }
    }
}

/**
 * График сгорания
 * @example
 * Тип: FUNCTION
 * Схема: dbo
 * // примеры выборки
 * db.cf_burndown().Query({params:{...}}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 */
exports.cf_burndown = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('dbo', 'cf_burndown', query_param.params, callback);
        },
        Select: function (query_param, callback) {
            provider.select('dbo', 'cf_burndown()', query_param, filter.security(session), callback);
        }
    }
}

/**
 * Список домов которые привязаны к кандидату
 * @example
 * Тип: FUNCTION
 * Схема: dbo
 * // примеры выборки
 * db.cf_candidate_bind().Query({params:{...}}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 */
exports.cf_candidate_bind = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('dbo', 'cf_candidate_bind', query_param.params, callback);
        },
        Select: function (query_param, callback) {
            provider.select('dbo', 'cf_candidate_bind()', query_param, filter.security(session), callback);
        }
    }
}

/**
 * Очистка маршрута
 * @example
 * Тип: FUNCTION
 * Схема: dbo
 * // примеры выборки
 * db.cf_clearroute().Query({params:{...}}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 */
exports.cf_clearroute = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('dbo', 'cf_clearroute', query_param.params, callback);
        },
        Select: function (query_param, callback) {
            provider.select('dbo', 'cf_clearroute()', query_param, filter.security(session), callback);
        }
    }
}

/**
 * Создание квартир
 * @example
 * Тип: FUNCTION
 * Схема: dbo
 * // примеры выборки
 * db.cf_create_appartament().Query({params:{...}}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 */
exports.cf_create_appartament = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('dbo', 'cf_create_appartament', query_param.params, callback);
        },
        Select: function (query_param, callback) {
            provider.select('dbo', 'cf_create_appartament()', query_param, filter.security(session), callback);
        }
    }
}

/**
 * Создание пользователя для работы с food_kit
 * @example
 * Тип: FUNCTION
 * Схема: dbo
 * // примеры выборки
 * db.cf_create_food_kit_user().Query({params:{...}}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 */
exports.cf_create_food_kit_user = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('dbo', 'cf_create_food_kit_user', query_param.params, callback);
        },
        Select: function (query_param, callback) {
            provider.select('dbo', 'cf_create_food_kit_user()', query_param, filter.security(session), callback);
        }
    }
}

/**
 * Создание пользователя для работы с cd_manual_edit_info
 * @example
 * Тип: FUNCTION
 * Схема: dbo
 * // примеры выборки
 * db.cf_create_manual_user().Query({params:{...}}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 */
exports.cf_create_manual_user = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('dbo', 'cf_create_manual_user', query_param.params, callback);
        },
        Select: function (query_param, callback) {
            provider.select('dbo', 'cf_create_manual_user()', query_param, filter.security(session), callback);
        }
    }
}

/**
 * Создание маршрута
 * @example
 * Тип: FUNCTION
 * Схема: dbo
 * // примеры выборки
 * db.cf_create_route().Query({params:{...}}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 */
exports.cf_create_route = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('dbo', 'cf_create_route', query_param.params, callback);
        },
        Select: function (query_param, callback) {
            provider.select('dbo', 'cf_create_route()', query_param, filter.security(session), callback);
        }
    }
}

/**
 * Создание пользователя с определенными ролями
 * @example
 * Тип: FUNCTION
 * Схема: dbo
 * // примеры выборки
 * db.cf_create_user().Query({params:{...}}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 */
exports.cf_create_user = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('dbo', 'cf_create_user', query_param.params, callback);
        },
        Select: function (query_param, callback) {
            provider.select('dbo', 'cf_create_user()', query_param, filter.security(session), callback);
        }
    }
}

/**
 * Удаление маршрута
 * @example
 * Тип: FUNCTION
 * Схема: dbo
 * // примеры выборки
 * db.cf_delroute().Query({params:{...}}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 */
exports.cf_delroute = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('dbo', 'cf_delroute', query_param.params, callback);
        },
        Select: function (query_param, callback) {
            provider.select('dbo', 'cf_delroute()', query_param, filter.security(session), callback);
        }
    }
}

/**
 * Удаление пользователя
 * @example
 * Тип: FUNCTION
 * Схема: dbo
 * // примеры выборки
 * db.cf_deluser().Query({params:{...}}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 */
exports.cf_deluser = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('dbo', 'cf_deluser', query_param.params, callback);
        },
        Select: function (query_param, callback) {
            provider.select('dbo', 'cf_deluser()', query_param, filter.security(session), callback);
        }
    }
}

/**
 * Список домов которые привязан агитатор
 * @example
 * Тип: FUNCTION
 * Схема: dbo
 * // примеры выборки
 * db.cf_house_bind().Query({params:{...}}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 */
exports.cf_house_bind = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('dbo', 'cf_house_bind', query_param.params, callback);
        },
        Select: function (query_param, callback) {
            provider.select('dbo', 'cf_house_bind()', query_param, filter.security(session), callback);
        }
    }
}

/**
 * Список домов которые привязан агитатор
 * @example
 * Тип: FUNCTION
 * Схема: dbo
 * // примеры выборки
 * db.cf_house_bind_by_subdivision().Query({params:{...}}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 */
exports.cf_house_bind_by_subdivision = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('dbo', 'cf_house_bind_by_subdivision', query_param.params, callback);
        },
        Select: function (query_param, callback) {
            provider.select('dbo', 'cf_house_bind_by_subdivision()', query_param, filter.security(session), callback);
        }
    }
}

/**
 * Импорт данных для пользователя-кандидат
 * @example
 * Тип: FUNCTION
 * Схема: dbo
 * // примеры выборки
 * db.cf_imp_by_candidate_user().Query({params:{...}}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 */
exports.cf_imp_by_candidate_user = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('dbo', 'cf_imp_by_candidate_user', query_param.params, callback);
        },
        Select: function (query_param, callback) {
            provider.select('dbo', 'cf_imp_by_candidate_user()', query_param, filter.security(session), callback);
        }
    }
}

/**
 * Импорт данных для пользователя
 * @example
 * Тип: FUNCTION
 * Схема: dbo
 * // примеры выборки
 * db.cf_imp_by_user().Query({params:{...}}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 */
exports.cf_imp_by_user = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('dbo', 'cf_imp_by_user', query_param.params, callback);
        },
        Select: function (query_param, callback) {
            provider.select('dbo', 'cf_imp_by_user()', query_param, filter.security(session), callback);
        }
    }
}

/**
 * Генерация маршрутов для пользователей-кандидат
 * @example
 * Тип: FUNCTION
 * Схема: dbo
 * // примеры выборки
 * db.cf_imp_candidate_generate_routes().Query({params:{...}}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 */
exports.cf_imp_candidate_generate_routes = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('dbo', 'cf_imp_candidate_generate_routes', query_param.params, callback);
        },
        Select: function (query_param, callback) {
            provider.select('dbo', 'cf_imp_candidate_generate_routes()', query_param, filter.security(session), callback);
        }
    }
}

/**
 * Импорт точек маршрута для кандидата
 * @example
 * Тип: FUNCTION
 * Схема: dbo
 * // примеры выборки
 * db.cf_imp_candidate_points().Query({params:{...}}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 */
exports.cf_imp_candidate_points = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('dbo', 'cf_imp_candidate_points', query_param.params, callback);
        },
        Select: function (query_param, callback) {
            provider.select('dbo', 'cf_imp_candidate_points()', query_param, filter.security(session), callback);
        }
    }
}

/**
 * Генерация маршрутов для пользователей
 * @example
 * Тип: FUNCTION
 * Схема: dbo
 * // примеры выборки
 * db.cf_imp_generate_routes().Query({params:{...}}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 */
exports.cf_imp_generate_routes = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('dbo', 'cf_imp_generate_routes', query_param.params, callback);
        },
        Select: function (query_param, callback) {
            provider.select('dbo', 'cf_imp_generate_routes()', query_param, filter.security(session), callback);
        }
    }
}

/**
 * Генерация маршрутов для округов
 * @example
 * Тип: FUNCTION
 * Схема: dbo
 * // примеры выборки
 * db.cf_imp_generate_subdivision_routes().Query({params:{...}}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 */
exports.cf_imp_generate_subdivision_routes = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('dbo', 'cf_imp_generate_subdivision_routes', query_param.params, callback);
        },
        Select: function (query_param, callback) {
            provider.select('dbo', 'cf_imp_generate_subdivision_routes()', query_param, filter.security(session), callback);
        }
    }
}

/**
 * Импорт точек маршрута
 * @example
 * Тип: FUNCTION
 * Схема: dbo
 * // примеры выборки
 * db.cf_imp_points().Query({params:{...}}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 */
exports.cf_imp_points = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('dbo', 'cf_imp_points', query_param.params, callback);
        },
        Select: function (query_param, callback) {
            provider.select('dbo', 'cf_imp_points()', query_param, filter.security(session), callback);
        }
    }
}

/**
 * Импорт пользователя
 * @example
 * Тип: FUNCTION
 * Схема: dbo
 * // примеры выборки
 * db.cf_imp_user().Query({params:{...}}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 */
exports.cf_imp_user = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('dbo', 'cf_imp_user', query_param.params, callback);
        },
        Select: function (query_param, callback) {
            provider.select('dbo', 'cf_imp_user()', query_param, filter.security(session), callback);
        }
    }
}

/**
 * 
 * @example
 * Тип: FUNCTION
 * Схема: dbo
 * // примеры выборки
 * db.cf_mui_cd_contacts().Query({params:{...}}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 */
exports.cf_mui_cd_contacts = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('dbo', 'cf_mui_cd_contacts', query_param.params, callback);
        },
        Select: function (query_param, callback) {
            provider.select('dbo', 'cf_mui_cd_contacts()', query_param, filter.security(session), callback);
        }
    }
}

/**
 * 
 * @example
 * Тип: FUNCTION
 * Схема: core
 * // примеры выборки
 * db.cf_mui_cd_feedbacks().Query({params:{...}}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 */
exports.cf_mui_cd_feedbacks = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('core', 'cf_mui_cd_feedbacks', query_param.params, callback);
        },
        Select: function (query_param, callback) {
            provider.select('core', 'cf_mui_cd_feedbacks()', query_param, filter.security(session), callback);
        }
    }
}

/**
 * 
 * @example
 * Тип: FUNCTION
 * Схема: core
 * // примеры выборки
 * db.cf_mui_cd_points().Query({params:{...}}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 */
exports.cf_mui_cd_points = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('core', 'cf_mui_cd_points', query_param.params, callback);
        },
        Select: function (query_param, callback) {
            provider.select('core', 'cf_mui_cd_points()', query_param, filter.security(session), callback);
        }
    }
}

/**
 * 
 * @example
 * Тип: FUNCTION
 * Схема: core
 * // примеры выборки
 * db.cf_mui_cd_points_count().Query({params:{...}}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 */
exports.cf_mui_cd_points_count = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('core', 'cf_mui_cd_points_count', query_param.params, callback);
        },
        Select: function (query_param, callback) {
            provider.select('core', 'cf_mui_cd_points_count()', query_param, filter.security(session), callback);
        }
    }
}

/**
 * 
 * @example
 * Тип: FUNCTION
 * Схема: core
 * // примеры выборки
 * db.cf_mui_cd_results().Query({params:{...}}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 */
exports.cf_mui_cd_results = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('core', 'cf_mui_cd_results', query_param.params, callback);
        },
        Select: function (query_param, callback) {
            provider.select('core', 'cf_mui_cd_results()', query_param, filter.security(session), callback);
        }
    }
}

/**
 * 
 * @example
 * Тип: FUNCTION
 * Схема: core
 * // примеры выборки
 * db.cf_mui_cd_results_count().Query({params:{...}}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 */
exports.cf_mui_cd_results_count = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('core', 'cf_mui_cd_results_count', query_param.params, callback);
        },
        Select: function (query_param, callback) {
            provider.select('core', 'cf_mui_cd_results_count()', query_param, filter.security(session), callback);
        }
    }
}

/**
 * 
 * @example
 * Тип: FUNCTION
 * Схема: core
 * // примеры выборки
 * db.cf_mui_cd_routes().Query({params:{...}}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 */
exports.cf_mui_cd_routes = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('core', 'cf_mui_cd_routes', query_param.params, callback);
        },
        Select: function (query_param, callback) {
            provider.select('core', 'cf_mui_cd_routes()', query_param, filter.security(session), callback);
        }
    }
}

/**
 * 
 * @example
 * Тип: FUNCTION
 * Схема: core
 * // примеры выборки
 * db.cf_mui_cd_route_history().Query({params:{...}}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 */
exports.cf_mui_cd_route_history = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('core', 'cf_mui_cd_route_history', query_param.params, callback);
        },
        Select: function (query_param, callback) {
            provider.select('core', 'cf_mui_cd_route_history()', query_param, filter.security(session), callback);
        }
    }
}

/**
 * 
 * @example
 * Тип: FUNCTION
 * Схема: core
 * // примеры выборки
 * db.cf_mui_cd_userinroutes().Query({params:{...}}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 */
exports.cf_mui_cd_userinroutes = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('core', 'cf_mui_cd_userinroutes', query_param.params, callback);
        },
        Select: function (query_param, callback) {
            provider.select('core', 'cf_mui_cd_userinroutes()', query_param, filter.security(session), callback);
        }
    }
}

/**
 * 
 * @example
 * Тип: FUNCTION
 * Схема: core
 * // примеры выборки
 * db.cf_mui_cd_user_points().Query({params:{...}}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 */
exports.cf_mui_cd_user_points = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('core', 'cf_mui_cd_user_points', query_param.params, callback);
        },
        Select: function (query_param, callback) {
            provider.select('core', 'cf_mui_cd_user_points()', query_param, filter.security(session), callback);
        }
    }
}

/**
 * 
 * @example
 * Тип: FUNCTION
 * Схема: dbo
 * // примеры выборки
 * db.cf_mui_cs_answer().Query({params:{...}}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 */
exports.cf_mui_cs_answer = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('dbo', 'cf_mui_cs_answer', query_param.params, callback);
        },
        Select: function (query_param, callback) {
            provider.select('dbo', 'cf_mui_cs_answer()', query_param, filter.security(session), callback);
        }
    }
}

/**
 * 
 * @example
 * Тип: FUNCTION
 * Схема: dbo
 * // примеры выборки
 * db.cf_mui_cs_question().Query({params:{...}}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 */
exports.cf_mui_cs_question = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('dbo', 'cf_mui_cs_question', query_param.params, callback);
        },
        Select: function (query_param, callback) {
            provider.select('dbo', 'cf_mui_cs_question()', query_param, filter.security(session), callback);
        }
    }
}

/**
 * 
 * @example
 * Тип: FUNCTION
 * Схема: dbo
 * // примеры выборки
 * db.cf_mui_cs_street().Query({params:{...}}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 */
exports.cf_mui_cs_street = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('dbo', 'cf_mui_cs_street', query_param.params, callback);
        },
        Select: function (query_param, callback) {
            provider.select('dbo', 'cf_mui_cs_street()', query_param, filter.security(session), callback);
        }
    }
}

/**
 * 
 * @example
 * Тип: FUNCTION
 * Схема: core
 * // примеры выборки
 * db.cf_mui_pd_users().Query({params:{...}}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 */
exports.cf_mui_pd_users = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('core', 'cf_mui_pd_users', query_param.params, callback);
        },
        Select: function (query_param, callback) {
            provider.select('core', 'cf_mui_pd_users()', query_param, filter.security(session), callback);
        }
    }
}

/**
 * Проверка даты
 * @example
 * Тип: FUNCTION
 * Схема: core
 * // примеры выборки
 * db.cf_old_date().Query({params:{...}}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 */
exports.cf_old_date = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('core', 'cf_old_date', query_param.params, callback);
        },
        Select: function (query_param, callback) {
            provider.select('core', 'cf_old_date()', query_param, filter.security(session), callback);
        }
    }
}

/**
 * Рейтинг агитаторов
 * @example
 * Тип: FUNCTION
 * Схема: dbo
 * // примеры выборки
 * db.cf_rating().Query({params:{...}}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 */
exports.cf_rating = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('dbo', 'cf_rating', query_param.params, callback);
        },
        Select: function (query_param, callback) {
            provider.select('dbo', 'cf_rating()', query_param, filter.security(session), callback);
        }
    }
}

/**
 * Рейтинг кандидатов
 * @example
 * Тип: FUNCTION
 * Схема: dbo
 * // примеры выборки
 * db.cf_rating_candidate().Query({params:{...}}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 */
exports.cf_rating_candidate = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('dbo', 'cf_rating_candidate', query_param.params, callback);
        },
        Select: function (query_param, callback) {
            provider.select('dbo', 'cf_rating_candidate()', query_param, filter.security(session), callback);
        }
    }
}

/**
 * 
 * @example
 * Тип: FUNCTION
 * Схема: dbo
 * // примеры выборки
 * db.cf_tmp_del_double_house().Query({params:{...}}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 */
exports.cf_tmp_del_double_house = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('dbo', 'cf_tmp_del_double_house', query_param.params, callback);
        },
        Select: function (query_param, callback) {
            provider.select('dbo', 'cf_tmp_del_double_house()', query_param, filter.security(session), callback);
        }
    }
}

/**
 * 
 * @example
 * Тип: FUNCTION
 * Схема: dbo
 * // примеры выборки
 * db.cf_tmp_del_double_street().Query({params:{...}}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 */
exports.cf_tmp_del_double_street = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('dbo', 'cf_tmp_del_double_street', query_param.params, callback);
        },
        Select: function (query_param, callback) {
            provider.select('dbo', 'cf_tmp_del_double_street()', query_param, filter.security(session), callback);
        }
    }
}

/**
 * Список домов которые обошел агитатор
 * @example
 * Тип: FUNCTION
 * Схема: dbo
 * // примеры выборки
 * db.cf_tracking_house().Query({params:{...}}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 */
exports.cf_tracking_house = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('dbo', 'cf_tracking_house', query_param.params, callback);
        },
        Select: function (query_param, callback) {
            provider.select('dbo', 'cf_tracking_house()', query_param, filter.security(session), callback);
        }
    }
}

/**
 * Список точек в маршрутах пользователя
 * @example
 * Тип: FUNCTION
 * Схема: dbo
 * // примеры выборки
 * db.cf_ui_points().Query({params:{...}}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 */
exports.cf_ui_points = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('dbo', 'cf_ui_points', query_param.params, callback);
        },
        Select: function (query_param, callback) {
            provider.select('dbo', 'cf_ui_points()', query_param, filter.security(session), callback);
        }
    }
}

/**
 * Отвязать обходчика от квартиры
 * @example
 * Тип: FUNCTION
 * Схема: dbo
 * // примеры выборки
 * db.cf_unbind_appartament().Query({params:{...}}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 */
exports.cf_unbind_appartament = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('dbo', 'cf_unbind_appartament', query_param.params, callback);
        },
        Select: function (query_param, callback) {
            provider.select('dbo', 'cf_unbind_appartament()', query_param, filter.security(session), callback);
        }
    }
}

/**
 * Отвязка маршрута и заданий
 * @example
 * Тип: FUNCTION
 * Схема: dbo
 * // примеры выборки
 * db.cf_unpoints().Query({params:{...}}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 */
exports.cf_unpoints = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('dbo', 'cf_unpoints', query_param.params, callback);
        },
        Select: function (query_param, callback) {
            provider.select('dbo', 'cf_unpoints()', query_param, filter.security(session), callback);
        }
    }
}

/**
 * Обновление информации в точке маршрута
 * @example
 * Тип: FUNCTION
 * Схема: dbo
 * // примеры выборки
 * db.cf_update_point_info().Query({params:{...}}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 */
exports.cf_update_point_info = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('dbo', 'cf_update_point_info', query_param.params, callback);
        },
        Select: function (query_param, callback) {
            provider.select('dbo', 'cf_update_point_info()', query_param, filter.security(session), callback);
        }
    }
}

/**
 * Обновление ролей у пользователя
 * @example
 * Тип: FUNCTION
 * Схема: dbo
 * // примеры выборки
 * db.cf_update_user_roles().Query({params:{...}}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 */
exports.cf_update_user_roles = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('dbo', 'cf_update_user_roles', query_param.params, callback);
        },
        Select: function (query_param, callback) {
            provider.select('dbo', 'cf_update_user_roles()', query_param, filter.security(session), callback);
        }
    }
}

/**
 * Процедура очистки устаревших данных
 * @example
 * Тип: FUNCTION
 * Схема: core
 * // примеры выборки
 * db.cp_remove_outdated().Query({params:{...}}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 */
exports.cp_remove_outdated = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('core', 'cp_remove_outdated', query_param.params, callback);
        },
        Select: function (query_param, callback) {
            provider.select('core', 'cp_remove_outdated()', query_param, filter.security(session), callback);
        }
    }
}

/**
 * Речевой модуль
 * @example
 * Тип: BASE TABLE
 * Первичный ключ: id
 * Схема: dbo
 * Поля:
 *      id:bigint - Идентификатор
 *      c_text:text - Текст
 *      f_question:integer (dbo.cs_question.id) - Вопрос
 *      f_next_question:integer (dbo.cs_question.id) - Следующий вопрос
 *      c_action:text - Действие
 *      n_order:integer - Сортировка
 *      b_disabled:boolean - Отключить
 *      dx_created:timestamp with time zone - Дата создания
 *      sn_delete:boolean - Признак удаленной записи
 *      c_color:text - Цвет
 *      f_role:integer (core.pd_roles.id) - Конкретно для указанной роли
 * // примеры выборки
 * db.cs_answer().Query({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры выборки через функцию
 * db.cf_cs_answer().Select({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры добавления
 * db.cs_answer().Add({...}|[{...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры обновления
 * db.cs_answer().Update({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры создания или обновления
 * db.cs_answer().AddOrUpdate({id:any ...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры удаления
 * db.cs_answer().Delete({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры получения количества записей
 * db.cs_answer().Count({...}, function(data) {
 *      if(data.meta.success) {
 *          // results.result.total
 *      }   
 * });
 */
exports.cs_answer = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.select('dbo', 'cs_answer', query_param, filter.security(session), callback);
        },
        Select: function (query_param, callback) {
            provider.select('dbo', 'cf_mui_cs_answer()', query_param, filter.security(session), callback);
        },
        Add: function (data, callback) {
            provider.insert('dbo', 'cs_answer', data, callback);
        },
        AddOrUpdate: function (data, callback) {
            provider.insertOrUpdate('dbo', 'cs_answer', 'id', data, callback);
        },
        Update: function (data, callback) {
            provider.update('dbo', 'cs_answer', 'id', data, callback);
        },
        Delete: function (data, callback) {
            provider.delete('dbo', 'cs_answer', 'id', data, callback);
        },
        Count: function (query_param, callback) {
            provider.count('dbo', 'cs_answer', query_param, callback);
        }
    }
}

/**
 * Квартиры
 * @example
 * Тип: BASE TABLE
 * Первичный ключ: id
 * Схема: dbo
 * Поля:
 *      b_disabled:boolean - b_disabled
 *      c_number:text - Строковый номер
 *      dx_date:timestamp with time zone - dx_date
 *      f_house:uuid (dbo.cs_house.id) - Дом
 *      f_main_user:integer (core.pd_users.id) - Ответственный
 *      f_user:integer (core.pd_users.id) - Агитатор
 *      id:uuid - Идентификатор
 *      n_number:integer - Номер
 *      n_signature_2018:integer - Подписи в 2018
 * // примеры выборки
 * db.cs_appartament().Query({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры выборки через функцию
 * db.cf_cs_appartament().Select({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры добавления
 * db.cs_appartament().Add({...}|[{...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры обновления
 * db.cs_appartament().Update({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры создания или обновления
 * db.cs_appartament().AddOrUpdate({id:any ...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры удаления
 * db.cs_appartament().Delete({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры получения количества записей
 * db.cs_appartament().Count({...}, function(data) {
 *      if(data.meta.success) {
 *          // results.result.total
 *      }   
 * });
 */
exports.cs_appartament = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.select('dbo', 'cs_appartament', query_param, filter.security(session), callback);
        },
        Select: function (query_param, callback) {
            provider.select('dbo', 'cf_mui_cs_appartament()', query_param, filter.security(session), callback);
        },
        Add: function (data, callback) {
            provider.insert('dbo', 'cs_appartament', data, callback);
        },
        AddOrUpdate: function (data, callback) {
            provider.insertOrUpdate('dbo', 'cs_appartament', 'id', data, callback);
        },
        Update: function (data, callback) {
            provider.update('dbo', 'cs_appartament', 'id', data, callback);
        },
        Delete: function (data, callback) {
            provider.delete('dbo', 'cs_appartament', 'id', data, callback);
        },
        Count: function (query_param, callback) {
            provider.count('dbo', 'cs_appartament', query_param, callback);
        }
    }
}

/**
 * Тип обращения
 * @example
 * Тип: BASE TABLE
 * Первичный ключ: id
 * Схема: core
 * Поля:
 *      b_default:boolean - По умолчанию
 *      b_disabled:boolean - Отключено
 *      c_const:text - Константа
 *      c_name:text - Наименование
 *      c_short_name:text - Краткое наименование
 *      id:integer - Идентификатор
 *      n_code:integer - Код
 *      n_order:integer - Сортировка
 * // примеры выборки
 * db.cs_feedback_types().Query({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры выборки через функцию
 * db.cf_cs_feedback_types().Select({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры добавления
 * db.cs_feedback_types().Add({...}|[{...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры обновления
 * db.cs_feedback_types().Update({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры создания или обновления
 * db.cs_feedback_types().AddOrUpdate({id:any ...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры удаления
 * db.cs_feedback_types().Delete({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры получения количества записей
 * db.cs_feedback_types().Count({...}, function(data) {
 *      if(data.meta.success) {
 *          // results.result.total
 *      }   
 * });
 */
exports.cs_feedback_types = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.select('core', 'cs_feedback_types', query_param, filter.security(session), callback);
        },
        Select: function (query_param, callback) {
            provider.select('core', 'cf_mui_cs_feedback_types()', query_param, filter.security(session), callback);
        },
        Add: function (data, callback) {
            provider.insert('core', 'cs_feedback_types', data, callback);
        },
        AddOrUpdate: function (data, callback) {
            provider.insertOrUpdate('core', 'cs_feedback_types', 'id', data, callback);
        },
        Update: function (data, callback) {
            provider.update('core', 'cs_feedback_types', 'id', data, callback);
        },
        Delete: function (data, callback) {
            provider.delete('core', 'cs_feedback_types', 'id', data, callback);
        },
        Count: function (query_param, callback) {
            provider.count('core', 'cs_feedback_types', query_param, callback);
        }
    }
}

/**
 * Улицы
 * @example
 * Тип: BASE TABLE
 * Первичный ключ: id
 * Схема: dbo
 * Поля:
 *      b_correct_uik:boolean - Проводилась проверка на корректность УИК
 *      b_disabled:boolean - b_disabled
 *      b_yandex:boolean - b_yandex
 *      b_yandex_fail:boolean - b_yandex_fail
 *      c_build_num:text - Корпус
 *      c_floor:text - Кол-во этажей
 *      c_house_num:text - Номер дома
 *      c_porch:text - Кол-во подъездов в доме
 *      c_yandex_description:text - c_yandex_description
 *      c_yandex_name:text - c_yandex_name
 *      dx_date:timestamp with time zone - dx_date
 *      f_candidate_users:jsonb - Кандидаты
 *      f_street:uuid (dbo.cs_street.id) - Улица
 *      f_subdivision:integer (core.sd_subdivisions.id) - f_subdivision
 *      f_user:integer (core.pd_users.id) - f_user
 *      id:uuid - Идентификатор
 *      jb_yandex_res:jsonb - jb_yandex_res
 *      n_latitude:numeric - широта
 *      n_longitude:numeric - долгота
 *      n_uik:integer - n_uik
 *      n_uik_correct:integer - Скорректированный УИК
 * // примеры выборки
 * db.cs_house().Query({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры выборки через функцию
 * db.cf_cs_house().Select({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры добавления
 * db.cs_house().Add({...}|[{...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры обновления
 * db.cs_house().Update({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры создания или обновления
 * db.cs_house().AddOrUpdate({id:any ...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры удаления
 * db.cs_house().Delete({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры получения количества записей
 * db.cs_house().Count({...}, function(data) {
 *      if(data.meta.success) {
 *          // results.result.total
 *      }   
 * });
 */
exports.cs_house = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.select('dbo', 'cs_house', query_param, filter.security(session), callback);
        },
        Select: function (query_param, callback) {
            provider.select('dbo', 'cf_mui_cs_house()', query_param, filter.security(session), callback);
        },
        Add: function (data, callback) {
            provider.insert('dbo', 'cs_house', data, callback);
        },
        AddOrUpdate: function (data, callback) {
            provider.insertOrUpdate('dbo', 'cs_house', 'id', data, callback);
        },
        Update: function (data, callback) {
            provider.update('dbo', 'cs_house', 'id', data, callback);
        },
        Delete: function (data, callback) {
            provider.delete('dbo', 'cs_house', 'id', data, callback);
        },
        Count: function (query_param, callback) {
            provider.count('dbo', 'cs_house', query_param, callback);
        }
    }
}

/**
 * Тип маршрута
 * @example
 * Тип: BASE TABLE
 * Первичный ключ: id
 * Схема: dbo
 * Поля:
 *      id:integer - Идентификатор
 *      n_code:integer - Код
 *      c_name:text - Наименование
 *      c_short_name:text - Краткое наименование
 *      c_const:text - Константа
 *      n_order:integer - Сортировка
 *      b_default:boolean - По умолчанию
 *      b_disabled:boolean - Отключено
 * // примеры выборки
 * db.cs_people_types().Query({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры выборки через функцию
 * db.cf_cs_people_types().Select({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры добавления
 * db.cs_people_types().Add({...}|[{...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры обновления
 * db.cs_people_types().Update({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры создания или обновления
 * db.cs_people_types().AddOrUpdate({id:any ...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры удаления
 * db.cs_people_types().Delete({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры получения количества записей
 * db.cs_people_types().Count({...}, function(data) {
 *      if(data.meta.success) {
 *          // results.result.total
 *      }   
 * });
 */
exports.cs_people_types = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.select('dbo', 'cs_people_types', query_param, filter.security(session), callback);
        },
        Select: function (query_param, callback) {
            provider.select('dbo', 'cf_mui_cs_people_types()', query_param, filter.security(session), callback);
        },
        Add: function (data, callback) {
            provider.insert('dbo', 'cs_people_types', data, callback);
        },
        AddOrUpdate: function (data, callback) {
            provider.insertOrUpdate('dbo', 'cs_people_types', 'id', data, callback);
        },
        Update: function (data, callback) {
            provider.update('dbo', 'cs_people_types', 'id', data, callback);
        },
        Delete: function (data, callback) {
            provider.delete('dbo', 'cs_people_types', 'id', data, callback);
        },
        Count: function (query_param, callback) {
            provider.count('dbo', 'cs_people_types', query_param, callback);
        }
    }
}

/**
 * Тип точки
 * @example
 * Тип: BASE TABLE
 * Первичный ключ: id
 * Схема: core
 * Поля:
 *      id:integer - Идентификатор
 *      n_code:integer - Код
 *      c_name:text - Наименование
 *      c_short_name:text - Краткое наименование
 *      c_const:text - Константа
 *      n_order:integer - Сортировка
 *      b_default:boolean - Отключено
 *      b_disabled:boolean - Отключено
 * // примеры выборки
 * db.cs_point_types().Query({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры выборки через функцию
 * db.cf_cs_point_types().Select({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры добавления
 * db.cs_point_types().Add({...}|[{...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры обновления
 * db.cs_point_types().Update({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры создания или обновления
 * db.cs_point_types().AddOrUpdate({id:any ...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры удаления
 * db.cs_point_types().Delete({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры получения количества записей
 * db.cs_point_types().Count({...}, function(data) {
 *      if(data.meta.success) {
 *          // results.result.total
 *      }   
 * });
 */
exports.cs_point_types = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.select('core', 'cs_point_types', query_param, filter.security(session), callback);
        },
        Select: function (query_param, callback) {
            provider.select('core', 'cf_mui_cs_point_types()', query_param, filter.security(session), callback);
        },
        Add: function (data, callback) {
            provider.insert('core', 'cs_point_types', data, callback);
        },
        AddOrUpdate: function (data, callback) {
            provider.insertOrUpdate('core', 'cs_point_types', 'id', data, callback);
        },
        Update: function (data, callback) {
            provider.update('core', 'cs_point_types', 'id', data, callback);
        },
        Delete: function (data, callback) {
            provider.delete('core', 'cs_point_types', 'id', data, callback);
        },
        Count: function (query_param, callback) {
            provider.count('core', 'cs_point_types', query_param, callback);
        }
    }
}

/**
 * Речевой модуль
 * @example
 * Тип: BASE TABLE
 * Первичный ключ: id
 * Схема: dbo
 * Поля:
 *      id:bigint - Идентификатор
 *      c_title:text - Заголовок
 *      c_description:text - Описание
 *      c_text:text - Текст
 *      n_order:integer - Сортировка
 *      b_disabled:boolean - Отключить
 *      dx_created:timestamp with time zone - Дата создания
 *      sn_delete:boolean - Признак удаленной записи
 *      f_role:integer (core.pd_roles.id) - Конкретно для указанной роли
 *      n_priority:integer - n_priority
 * // примеры выборки
 * db.cs_question().Query({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры выборки через функцию
 * db.cf_cs_question().Select({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры добавления
 * db.cs_question().Add({...}|[{...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры обновления
 * db.cs_question().Update({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры создания или обновления
 * db.cs_question().AddOrUpdate({id:any ...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры удаления
 * db.cs_question().Delete({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры получения количества записей
 * db.cs_question().Count({...}, function(data) {
 *      if(data.meta.success) {
 *          // results.result.total
 *      }   
 * });
 */
exports.cs_question = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.select('dbo', 'cs_question', query_param, filter.security(session), callback);
        },
        Select: function (query_param, callback) {
            provider.select('dbo', 'cf_mui_cs_question()', query_param, filter.security(session), callback);
        },
        Add: function (data, callback) {
            provider.insert('dbo', 'cs_question', data, callback);
        },
        AddOrUpdate: function (data, callback) {
            provider.insertOrUpdate('dbo', 'cs_question', 'id', data, callback);
        },
        Update: function (data, callback) {
            provider.update('dbo', 'cs_question', 'id', data, callback);
        },
        Delete: function (data, callback) {
            provider.delete('dbo', 'cs_question', 'id', data, callback);
        },
        Count: function (query_param, callback) {
            provider.count('dbo', 'cs_question', query_param, callback);
        }
    }
}

/**
 * Тип результат
 * @example
 * Тип: BASE TABLE
 * Первичный ключ: id
 * Схема: core
 * Поля:
 *      id:integer - Идентификатор
 *      n_code:integer - Код
 *      c_name:text - Наименование
 *      c_short_name:text - Краткое наименование
 *      c_const:text - Константа
 *      n_order:integer - Отключено
 *      b_default:boolean - По умолчанию
 *      b_disabled:boolean - Отключено
 * // примеры выборки
 * db.cs_result_types().Query({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры выборки через функцию
 * db.cf_cs_result_types().Select({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры добавления
 * db.cs_result_types().Add({...}|[{...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры обновления
 * db.cs_result_types().Update({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры создания или обновления
 * db.cs_result_types().AddOrUpdate({id:any ...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры удаления
 * db.cs_result_types().Delete({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры получения количества записей
 * db.cs_result_types().Count({...}, function(data) {
 *      if(data.meta.success) {
 *          // results.result.total
 *      }   
 * });
 */
exports.cs_result_types = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.select('core', 'cs_result_types', query_param, filter.security(session), callback);
        },
        Select: function (query_param, callback) {
            provider.select('core', 'cf_mui_cs_result_types()', query_param, filter.security(session), callback);
        },
        Add: function (data, callback) {
            provider.insert('core', 'cs_result_types', data, callback);
        },
        AddOrUpdate: function (data, callback) {
            provider.insertOrUpdate('core', 'cs_result_types', 'id', data, callback);
        },
        Update: function (data, callback) {
            provider.update('core', 'cs_result_types', 'id', data, callback);
        },
        Delete: function (data, callback) {
            provider.delete('core', 'cs_result_types', 'id', data, callback);
        },
        Count: function (query_param, callback) {
            provider.count('core', 'cs_result_types', query_param, callback);
        }
    }
}

/**
 * Тип результат
 * @example
 * Тип: BASE TABLE
 * Первичный ключ: id
 * Схема: core
 * Поля:
 *      id:integer - Идентификатор
 *      n_code:integer - Код
 *      c_name:text - Наименование
 *      c_short_name:text - Краткое наименование
 *      c_const:text - Константа
 *      n_order:integer - Приоритет статуса(чем больше число тем выше статус)
 *      b_disabled:boolean - Отключено
 * // примеры выборки
 * db.cs_route_statuses().Query({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры выборки через функцию
 * db.cf_cs_route_statuses().Select({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры добавления
 * db.cs_route_statuses().Add({...}|[{...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры обновления
 * db.cs_route_statuses().Update({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры создания или обновления
 * db.cs_route_statuses().AddOrUpdate({id:any ...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры удаления
 * db.cs_route_statuses().Delete({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры получения количества записей
 * db.cs_route_statuses().Count({...}, function(data) {
 *      if(data.meta.success) {
 *          // results.result.total
 *      }   
 * });
 */
exports.cs_route_statuses = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.select('core', 'cs_route_statuses', query_param, filter.security(session), callback);
        },
        Select: function (query_param, callback) {
            provider.select('core', 'cf_mui_cs_route_statuses()', query_param, filter.security(session), callback);
        },
        Add: function (data, callback) {
            provider.insert('core', 'cs_route_statuses', data, callback);
        },
        AddOrUpdate: function (data, callback) {
            provider.insertOrUpdate('core', 'cs_route_statuses', 'id', data, callback);
        },
        Update: function (data, callback) {
            provider.update('core', 'cs_route_statuses', 'id', data, callback);
        },
        Delete: function (data, callback) {
            provider.delete('core', 'cs_route_statuses', 'id', data, callback);
        },
        Count: function (query_param, callback) {
            provider.count('core', 'cs_route_statuses', query_param, callback);
        }
    }
}

/**
 * Тип маршрута
 * @example
 * Тип: BASE TABLE
 * Первичный ключ: id
 * Схема: core
 * Поля:
 *      id:integer - Идентификатор
 *      n_code:integer - Код
 *      c_name:text - Наименование
 *      c_short_name:text - Краткое наименование
 *      c_const:text - Константа
 *      n_order:integer - Сортировка
 *      b_default:boolean - По умолчанию
 *      b_disabled:boolean - Отключено
 * // примеры выборки
 * db.cs_route_types().Query({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры выборки через функцию
 * db.cf_cs_route_types().Select({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры добавления
 * db.cs_route_types().Add({...}|[{...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры обновления
 * db.cs_route_types().Update({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры создания или обновления
 * db.cs_route_types().AddOrUpdate({id:any ...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры удаления
 * db.cs_route_types().Delete({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры получения количества записей
 * db.cs_route_types().Count({...}, function(data) {
 *      if(data.meta.success) {
 *          // results.result.total
 *      }   
 * });
 */
exports.cs_route_types = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.select('core', 'cs_route_types', query_param, filter.security(session), callback);
        },
        Select: function (query_param, callback) {
            provider.select('core', 'cf_mui_cs_route_types()', query_param, filter.security(session), callback);
        },
        Add: function (data, callback) {
            provider.insert('core', 'cs_route_types', data, callback);
        },
        AddOrUpdate: function (data, callback) {
            provider.insertOrUpdate('core', 'cs_route_types', 'id', data, callback);
        },
        Update: function (data, callback) {
            provider.update('core', 'cs_route_types', 'id', data, callback);
        },
        Delete: function (data, callback) {
            provider.delete('core', 'cs_route_types', 'id', data, callback);
        },
        Count: function (query_param, callback) {
            provider.count('core', 'cs_route_types', query_param, callback);
        }
    }
}

/**
 * Тип настройки
 * @example
 * Тип: BASE TABLE
 * Первичный ключ: id
 * Схема: core
 * Поля:
 *      id:integer - Идентификатор
 *      n_code:integer - Код
 *      c_name:text - Наименование
 *      c_short_name:text - Краткое наименование
 *      c_const:text - Константа
 *      n_order:integer - Сортировка
 *      b_default:boolean - Отключено
 *      b_disabled:boolean - Отключено
 * // примеры выборки
 * db.cs_setting_types().Query({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры выборки через функцию
 * db.cf_cs_setting_types().Select({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры добавления
 * db.cs_setting_types().Add({...}|[{...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры обновления
 * db.cs_setting_types().Update({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры создания или обновления
 * db.cs_setting_types().AddOrUpdate({id:any ...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры удаления
 * db.cs_setting_types().Delete({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры получения количества записей
 * db.cs_setting_types().Count({...}, function(data) {
 *      if(data.meta.success) {
 *          // results.result.total
 *      }   
 * });
 */
exports.cs_setting_types = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.select('core', 'cs_setting_types', query_param, filter.security(session), callback);
        },
        Select: function (query_param, callback) {
            provider.select('core', 'cf_mui_cs_setting_types()', query_param, filter.security(session), callback);
        },
        Add: function (data, callback) {
            provider.insert('core', 'cs_setting_types', data, callback);
        },
        AddOrUpdate: function (data, callback) {
            provider.insertOrUpdate('core', 'cs_setting_types', 'id', data, callback);
        },
        Update: function (data, callback) {
            provider.update('core', 'cs_setting_types', 'id', data, callback);
        },
        Delete: function (data, callback) {
            provider.delete('core', 'cs_setting_types', 'id', data, callback);
        },
        Count: function (query_param, callback) {
            provider.count('core', 'cs_setting_types', query_param, callback);
        }
    }
}

/**
 * Улицы
 * @example
 * Тип: BASE TABLE
 * Первичный ключ: id
 * Схема: dbo
 * Поля:
 *      id:uuid - Идентификатор
 *      b_disabled:boolean - b_disabled
 *      b_yandex:boolean - b_yandex
 *      b_yandex_fail:boolean - b_yandex_fail
 *      c_name:text - улица
 *      c_short_type:text - c_short_type
 *      c_type:text - Тип
 *      c_yandex_description:text - c_yandex_description
 *      c_yandex_name:text - c_yandex_name
 *      dx_date:timestamp with time zone - dx_date
 *      f_division:integer (core.sd_divisions.id) - f_division
 *      f_user:integer (core.pd_users.id) - f_user
 *      jb_yandex_res:jsonb - jb_yandex_res
 *      n_latitude:numeric - n_latitude
 *      n_longitude:numeric - n_longitude
 * // примеры выборки
 * db.cs_street().Query({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры выборки через функцию
 * db.cf_cs_street().Select({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры добавления
 * db.cs_street().Add({...}|[{...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры обновления
 * db.cs_street().Update({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры создания или обновления
 * db.cs_street().AddOrUpdate({id:any ...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры удаления
 * db.cs_street().Delete({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры получения количества записей
 * db.cs_street().Count({...}, function(data) {
 *      if(data.meta.success) {
 *          // results.result.total
 *      }   
 * });
 */
exports.cs_street = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.select('dbo', 'cs_street', query_param, filter.security(session), callback);
        },
        Select: function (query_param, callback) {
            provider.select('dbo', 'cf_mui_cs_street()', query_param, filter.security(session), callback);
        },
        Add: function (data, callback) {
            provider.insert('dbo', 'cs_street', data, callback);
        },
        AddOrUpdate: function (data, callback) {
            provider.insertOrUpdate('dbo', 'cs_street', 'id', data, callback);
        },
        Update: function (data, callback) {
            provider.update('dbo', 'cs_street', 'id', data, callback);
        },
        Delete: function (data, callback) {
            provider.delete('dbo', 'cs_street', 'id', data, callback);
        },
        Count: function (query_param, callback) {
            provider.count('dbo', 'cs_street', query_param, callback);
        }
    }
}

/**
 * Адреса
 * @example
 * Тип: VIEW
 * Схема: dbo
 * Поля:
 *      b_fail:boolean - b_fail
 *      b_private:boolean - b_private
 *      c_build_num:text - c_build_num
 *      c_floor:text - c_floor
 *      c_house_num:text - c_house_num
 *      c_porch:text - c_porch
 *      c_street_type:text - c_street_type
 *      c_subdivision:text - c_subdivision
 *      f_division:integer - f_division
 *      f_subdivision:integer - f_subdivision
 *      id:uuid - id
 *      n_appartament:bigint - n_appartament
 *      n_uik:integer - n_uik
 *      street_id:uuid - street_id
 *      street_name:text - street_name
 * // примеры выборки
 * db.cv_house().Query({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры получения количества записей
 * db.cv_house().Count({...}, function(data) {
 *      if(data.meta.success) {
 *          // results.result.total
 *      }   
 * });
 */
exports.cv_house = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.select('dbo', 'cv_house', query_param, filter.security(session), callback);
        },
        Count: function (query_param, callback) {
            provider.count('dbo', 'cv_house', query_param, callback);
        }
    }
}

/**
 * Список домов к которым привязаны пользователи
 * @example
 * Тип: VIEW
 * Схема: dbo
 * Поля:
 *      c_build_num:text - c_build_num
 *      c_house_num:text - c_house_num
 *      c_street_name:text - c_street_name
 *      c_street_type:text - c_street_type
 *      f_street:uuid - f_street
 *      f_subdivision:integer - f_subdivision
 *      f_users:json - f_users
 *      id:uuid - id
 *      n_appartament_count:bigint - n_appartament_count
 *      n_appartament_max:integer - n_appartament_max
 *      n_appartament_min:integer - n_appartament_min
 *      n_uik:integer - n_uik
 * // примеры выборки
 * db.cv_house_bind().Query({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры получения количества записей
 * db.cv_house_bind().Count({...}, function(data) {
 *      if(data.meta.success) {
 *          // results.result.total
 *      }   
 * });
 */
exports.cv_house_bind = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.select('dbo', 'cv_house_bind', query_param, filter.security(session), callback);
        },
        Count: function (query_param, callback) {
            provider.count('dbo', 'cv_house_bind', query_param, callback);
        }
    }
}

/**
 * 
 * @example
 * Тип: VIEW
 * Схема: dbo
 * Поля:
 *      b_disabled:boolean - b_disabled
 *      c_description:text - c_description
 *      c_divisions:text - c_divisions
 *      c_email:text - c_email
 *      c_login:text - c_login
 *      c_subdivisions:text - c_subdivisions
 *      c_tel:text - c_tel
 *      id:integer - id
 *      n_uik:integer - n_uik
 * // примеры выборки
 * db.cv_inspector().Query({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры получения количества записей
 * db.cv_inspector().Count({...}, function(data) {
 *      if(data.meta.success) {
 *          // results.result.total
 *      }   
 * });
 */
exports.cv_inspector = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.select('dbo', 'cv_inspector', query_param, filter.security(session), callback);
        },
        Count: function (query_param, callback) {
            provider.count('dbo', 'cv_inspector', query_param, callback);
        }
    }
}

/**
 * Список пользователей, которым разрешено заполнение таблицы cd_vote_man
 * @example
 * Тип: VIEW
 * Схема: dbo
 * Поля:
 *      b_disabled:boolean - b_disabled
 *      c_login:text - c_login
 *      c_password:text - c_password
 *      dx_created:timestamp with time zone - dx_created
 *      id:integer - id
 * // примеры выборки
 * db.cv_manual_edit_users().Query({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры получения количества записей
 * db.cv_manual_edit_users().Count({...}, function(data) {
 *      if(data.meta.success) {
 *          // results.result.total
 *      }   
 * });
 */
exports.cv_manual_edit_users = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.select('dbo', 'cv_manual_edit_users', query_param, filter.security(session), callback);
        },
        Count: function (query_param, callback) {
            provider.count('dbo', 'cv_manual_edit_users', query_param, callback);
        }
    }
}

/**
 * 
 * @example
 * Тип: VIEW
 * Схема: dbo
 * Поля:
 *      c_appartament_num:text - c_appartament_num
 *      c_area:text - c_area
 *      c_first_name:text - c_first_name
 *      c_house_build:text - c_house_build
 *      c_house_num:text - c_house_num
 *      c_last_name:text - c_last_name
 *      c_org:text - c_org
 *      c_patronymic:text - c_patronymic
 *      c_people_type:text - c_people_type
 *      c_phone:text - c_phone
 *      c_street_name:text - c_street_name
 *      c_street_type:text - c_street_type
 *      c_subdivision:text - c_subdivision
 *      f_appartament:uuid - f_appartament
 *      f_house:uuid - f_house
 *      f_street:uuid - f_street
 *      n_birth_year:integer - n_birth_year
 *      n_uik:integer - n_uik
 * // примеры выборки
 * db.cv_people().Query({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры получения количества записей
 * db.cv_people().Count({...}, function(data) {
 *      if(data.meta.success) {
 *          // results.result.total
 *      }   
 * });
 */
exports.cv_people = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.select('dbo', 'cv_people', query_param, filter.security(session), callback);
        },
        Count: function (query_param, callback) {
            provider.count('dbo', 'cv_people', query_param, callback);
        }
    }
}

/**
 * 
 * @example
 * Тип: VIEW
 * Схема: dbo
 * Поля:
 *      c_login:text - c_login
 *      c_number:text - c_number
 *      c_status:text - c_status
 *      c_type:text - c_type
 *      d_date_end:date - d_date_end
 *      d_date_start:date - d_date_start
 *      f_route:uuid - f_route
 *      f_type:integer - f_type
 *      f_user:integer - f_user
 * // примеры выборки
 * db.cv_routes().Query({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры получения количества записей
 * db.cv_routes().Count({...}, function(data) {
 *      if(data.meta.success) {
 *          // results.result.total
 *      }   
 * });
 */
exports.cv_routes = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.select('dbo', 'cv_routes', query_param, filter.security(session), callback);
        },
        Count: function (query_param, callback) {
            provider.count('dbo', 'cv_routes', query_param, callback);
        }
    }
}

/**
 * 
 * @example
 * Тип: VIEW
 * Схема: dbo
 * Поля:
 *      c_short_type:text - c_short_type
 *      c_type:text - c_type
 * // примеры выборки
 * db.cv_street_types().Query({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры получения количества записей
 * db.cv_street_types().Count({...}, function(data) {
 *      if(data.meta.success) {
 *          // results.result.total
 *      }   
 * });
 */
exports.cv_street_types = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.select('dbo', 'cv_street_types', query_param, filter.security(session), callback);
        },
        Count: function (query_param, callback) {
            provider.count('dbo', 'cv_street_types', query_param, callback);
        }
    }
}

/**
 * 
 * @example
 * Тип: VIEW
 * Схема: dbo
 * Поля:
 *      c_network_status:text - c_network_status
 *      d_date:timestamp with time zone - d_date
 *      d_date_str:text - d_date_str
 *      f_user:integer - f_user
 *      n_latitude:numeric - n_latitude
 *      n_longitude:numeric - n_longitude
 * // примеры выборки
 * db.cv_tracking().Query({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры получения количества записей
 * db.cv_tracking().Count({...}, function(data) {
 *      if(data.meta.success) {
 *          // results.result.total
 *      }   
 * });
 */
exports.cv_tracking = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.select('dbo', 'cv_tracking', query_param, filter.security(session), callback);
        },
        Count: function (query_param, callback) {
            provider.count('dbo', 'cv_tracking', query_param, callback);
        }
    }
}

/**
 * 
 * @example
 * Тип: VIEW
 * Схема: dbo
 * Поля:
 *      n_uik:integer - n_uik
 * // примеры выборки
 * db.cv_uik().Query({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры получения количества записей
 * db.cv_uik().Count({...}, function(data) {
 *      if(data.meta.success) {
 *          // results.result.total
 *      }   
 * });
 */
exports.cv_uik = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.select('dbo', 'cv_uik', query_param, filter.security(session), callback);
        },
        Count: function (query_param, callback) {
            provider.count('dbo', 'cv_uik', query_param, callback);
        }
    }
}

/**
 * 
 * @example
 * Тип: VIEW
 * Схема: dbo
 * Поля:
 *      c_claims:text - c_claims
 *      c_fio:text - c_fio
 *      c_login:text - c_login
 *      c_number:text - c_number
 *      c_route_type_name:text - c_route_type_name
 *      f_subdivision:integer - f_subdivision
 *      f_type:integer - f_type
 *      id:integer - id
 *      n_all:bigint - n_all
 *      n_count:bigint - n_count
 *      n_today_count:bigint - n_today_count
 *      n_uik:integer - n_uik
 * // примеры выборки
 * db.cv_userinroutes().Query({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры получения количества записей
 * db.cv_userinroutes().Count({...}, function(data) {
 *      if(data.meta.success) {
 *          // results.result.total
 *      }   
 * });
 */
exports.cv_userinroutes = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.select('dbo', 'cv_userinroutes', query_param, filter.security(session), callback);
        },
        Count: function (query_param, callback) {
            provider.count('dbo', 'cv_userinroutes', query_param, callback);
        }
    }
}

/**
 * Закрепление волонтеров
 * @example
 * Тип: VIEW
 * Схема: dbo
 * Поля:
 *      c_appartament:text - c_appartament
 *      c_build_num:text - c_build_num
 *      c_division:text - c_division
 *      c_house_num:text - c_house_num
 *      c_street:text - c_street
 *      c_subdivision:text - c_subdivision
 *      c_type:text - c_type
 *      n_appartament:bigint - n_appartament
 *      n_uik:integer - n_uik
 *      user_id:integer - user_id
 * // примеры выборки
 * db.cv_user_bind().Query({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры получения количества записей
 * db.cv_user_bind().Count({...}, function(data) {
 *      if(data.meta.success) {
 *          // results.result.total
 *      }   
 * });
 */
exports.cv_user_bind = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.select('dbo', 'cv_user_bind', query_param, filter.security(session), callback);
        },
        Count: function (query_param, callback) {
            provider.count('dbo', 'cv_user_bind', query_param, callback);
        }
    }
}

/**
 * Права доступа
 * @example
 * Тип: BASE TABLE
 * Первичный ключ: id
 * Схема: core
 * Поля:
 *      id:integer - Идентификатор
 *      f_user:integer (core.pd_users.id) - Пользователь
 *      f_role:integer (core.pd_roles.id) - Роль
 *      c_name:text - Табл./Предст./Функц.
 *      c_criteria:text - Серверный фильтр
 *      c_path:text - Путь в файловой системе
 *      c_function:text - Функция RPC или её часть
 *      c_columns:text - Запрещенные колонки
 *      b_deletable:boolean - Разрешено удалени
 *      b_creatable:boolean - Разрешено создание
 *      b_editable:boolean - Разрешено редактирование
 *      b_full_control:boolean - Дополнительный доступ
 *      sn_delete:boolean - Удален
 * // примеры выборки
 * db.pd_accesses().Query({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры выборки через функцию
 * db.cf_pd_accesses().Select({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры добавления
 * db.pd_accesses().Add({...}|[{...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры обновления
 * db.pd_accesses().Update({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры создания или обновления
 * db.pd_accesses().AddOrUpdate({id:any ...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры удаления
 * db.pd_accesses().Delete({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры получения количества записей
 * db.pd_accesses().Count({...}, function(data) {
 *      if(data.meta.success) {
 *          // results.result.total
 *      }   
 * });
 */
exports.pd_accesses = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.select('core', 'pd_accesses', query_param, filter.security(session), callback);
        },
        Select: function (query_param, callback) {
            provider.select('core', 'cf_mui_pd_accesses()', query_param, filter.security(session), callback);
        },
        Add: function (data, callback) {
            provider.insert('core', 'pd_accesses', data, callback);
        },
        AddOrUpdate: function (data, callback) {
            provider.insertOrUpdate('core', 'pd_accesses', 'id', data, callback);
        },
        Update: function (data, callback) {
            provider.update('core', 'pd_accesses', 'id', data, callback);
        },
        Delete: function (data, callback) {
            provider.delete('core', 'pd_accesses', 'id', data, callback);
        },
        Count: function (query_param, callback) {
            provider.count('core', 'pd_accesses', query_param, callback);
        }
    }
}

/**
 * Роли
 * @example
 * Тип: BASE TABLE
 * Первичный ключ: id
 * Схема: core
 * Поля:
 *      id:integer - Идентификатор
 *      c_name:text - Наименование
 *      c_description:text - Описание роли
 *      n_weight:integer - Приоритет
 *      sn_delete:boolean - Удален
 * // примеры выборки
 * db.pd_roles().Query({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры выборки через функцию
 * db.cf_pd_roles().Select({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры добавления
 * db.pd_roles().Add({...}|[{...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры обновления
 * db.pd_roles().Update({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры создания или обновления
 * db.pd_roles().AddOrUpdate({id:any ...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры удаления
 * db.pd_roles().Delete({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры получения количества записей
 * db.pd_roles().Count({...}, function(data) {
 *      if(data.meta.success) {
 *          // results.result.total
 *      }   
 * });
 */
exports.pd_roles = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.select('core', 'pd_roles', query_param, filter.security(session), callback);
        },
        Select: function (query_param, callback) {
            provider.select('core', 'cf_mui_pd_roles()', query_param, filter.security(session), callback);
        },
        Add: function (data, callback) {
            provider.insert('core', 'pd_roles', data, callback);
        },
        AddOrUpdate: function (data, callback) {
            provider.insertOrUpdate('core', 'pd_roles', 'id', data, callback);
        },
        Update: function (data, callback) {
            provider.update('core', 'pd_roles', 'id', data, callback);
        },
        Delete: function (data, callback) {
            provider.delete('core', 'pd_roles', 'id', data, callback);
        },
        Count: function (query_param, callback) {
            provider.count('core', 'pd_roles', query_param, callback);
        }
    }
}

/**
 * Привязка пользователей к отделению или участку
 * @example
 * Тип: BASE TABLE
 * Первичный ключ: id
 * Схема: core
 * Поля:
 *      id:integer - Идентификатор
 *      f_user:integer (core.pd_users.id) - Пользователь
 *      f_division:integer (core.sd_divisions.id) - Отделение
 *      f_subdivision:integer (core.sd_subdivisions.id) - Участок
 *      sn_delete:boolean - Признак удаленной записи
 * // примеры выборки
 * db.pd_userindivisions().Query({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры выборки через функцию
 * db.cf_pd_userindivisions().Select({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры добавления
 * db.pd_userindivisions().Add({...}|[{...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры обновления
 * db.pd_userindivisions().Update({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры создания или обновления
 * db.pd_userindivisions().AddOrUpdate({id:any ...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры удаления
 * db.pd_userindivisions().Delete({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры получения количества записей
 * db.pd_userindivisions().Count({...}, function(data) {
 *      if(data.meta.success) {
 *          // results.result.total
 *      }   
 * });
 */
exports.pd_userindivisions = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.select('core', 'pd_userindivisions', query_param, filter.security(session), callback);
        },
        Select: function (query_param, callback) {
            provider.select('core', 'cf_mui_pd_userindivisions()', query_param, filter.security(session), callback);
        },
        Add: function (data, callback) {
            provider.insert('core', 'pd_userindivisions', data, callback);
        },
        AddOrUpdate: function (data, callback) {
            provider.insertOrUpdate('core', 'pd_userindivisions', 'id', data, callback);
        },
        Update: function (data, callback) {
            provider.update('core', 'pd_userindivisions', 'id', data, callback);
        },
        Delete: function (data, callback) {
            provider.delete('core', 'pd_userindivisions', 'id', data, callback);
        },
        Count: function (query_param, callback) {
            provider.count('core', 'pd_userindivisions', query_param, callback);
        }
    }
}

/**
 * Пользователи в ролях
 * @example
 * Тип: BASE TABLE
 * Первичный ключ: id
 * Схема: core
 * Поля:
 *      id:integer - Идентификатор
 *      f_user:integer (core.pd_users.id) - Пользователь
 *      f_role:integer (core.pd_roles.id) - Роль
 *      sn_delete:boolean - Удален
 * // примеры выборки
 * db.pd_userinroles().Query({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры выборки через функцию
 * db.cf_pd_userinroles().Select({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры добавления
 * db.pd_userinroles().Add({...}|[{...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры обновления
 * db.pd_userinroles().Update({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры создания или обновления
 * db.pd_userinroles().AddOrUpdate({id:any ...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры удаления
 * db.pd_userinroles().Delete({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры получения количества записей
 * db.pd_userinroles().Count({...}, function(data) {
 *      if(data.meta.success) {
 *          // results.result.total
 *      }   
 * });
 */
exports.pd_userinroles = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.select('core', 'pd_userinroles', query_param, filter.security(session), callback);
        },
        Select: function (query_param, callback) {
            provider.select('core', 'cf_mui_pd_userinroles()', query_param, filter.security(session), callback);
        },
        Add: function (data, callback) {
            provider.insert('core', 'pd_userinroles', data, callback);
        },
        AddOrUpdate: function (data, callback) {
            provider.insertOrUpdate('core', 'pd_userinroles', 'id', data, callback);
        },
        Update: function (data, callback) {
            provider.update('core', 'pd_userinroles', 'id', data, callback);
        },
        Delete: function (data, callback) {
            provider.delete('core', 'pd_userinroles', 'id', data, callback);
        },
        Count: function (query_param, callback) {
            provider.count('core', 'pd_userinroles', query_param, callback);
        }
    }
}

/**
 * Пользователи
 * @example
 * Тип: BASE TABLE
 * Первичный ключ: id
 * Схема: core
 * Поля:
 *      id:integer - Идентификатор
 *      f_parent:integer (core.pd_users.id) - Ответственный за УИК
 *      c_login:text - Логин
 *      c_password:text - Пароль
 *      s_salt:text - Salt
 *      s_hash:text - Hash
 *      c_email:text - Адрес эл. почты
 *      c_tel:text - Телефон
 *      c_imei:text - IMEI
 *      c_description:text - Описание
 *      b_disabled:boolean - Отключен
 *      sn_delete:boolean - Удален
 *      c_fio:text - ФИО
 *      dx_created:timestamp with time zone - dx_created
 *      f_division:integer - f_division
 *      f_subdivision:integer - Округ для кандидата
 *      n_uik:integer - УИК
 * // примеры выборки
 * db.pd_users().Query({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры выборки через функцию
 * db.cf_pd_users().Select({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры добавления
 * db.pd_users().Add({...}|[{...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры обновления
 * db.pd_users().Update({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры создания или обновления
 * db.pd_users().AddOrUpdate({id:any ...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры удаления
 * db.pd_users().Delete({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры получения количества записей
 * db.pd_users().Count({...}, function(data) {
 *      if(data.meta.success) {
 *          // results.result.total
 *      }   
 * });
 */
exports.pd_users = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.select('core', 'pd_users', query_param, filter.security(session), callback);
        },
        Select: function (query_param, callback) {
            provider.select('core', 'cf_mui_pd_users()', query_param, filter.security(session), callback);
        },
        Add: function (data, callback) {
            provider.insert('core', 'pd_users', data, callback);
        },
        AddOrUpdate: function (data, callback) {
            provider.insertOrUpdate('core', 'pd_users', 'id', data, callback);
        },
        Update: function (data, callback) {
            provider.update('core', 'pd_users', 'id', data, callback);
        },
        Delete: function (data, callback) {
            provider.delete('core', 'pd_users', 'id', data, callback);
        },
        Count: function (query_param, callback) {
            provider.count('core', 'pd_users', query_param, callback);
        }
    }
}

/**
 * получение прав доступа для пользователя
 * @example
 * Тип: FUNCTION
 * Схема: core
 * // примеры выборки
 * db.pf_accesses().Query({params:{...}}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 */
exports.pf_accesses = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('core', 'pf_accesses', query_param.params, callback);
        },
        Select: function (query_param, callback) {
            provider.select('core', 'pf_accesses()', query_param, filter.security(session), callback);
        }
    }
}

/**
 * Открытый список пользователей
 * @example
 * Тип: VIEW
 * Схема: core
 * Поля:
 *      b_disabled:boolean - b_disabled
 *      c_all_divisions:text - c_all_divisions
 *      c_claims:text - c_claims
 *      c_description:text - c_description
 *      c_divisions:text - c_divisions
 *      c_email:text - c_email
 *      c_fio:text - c_fio
 *      c_login:text - c_login
 *      c_subdivision:text - c_subdivision
 *      c_subdivisions:text - c_subdivisions
 *      c_tel:text - c_tel
 *      f_division:integer - f_division
 *      f_parent:integer - f_parent
 *      f_subdivision:integer - f_subdivision
 *      id:integer - id
 *      n_uik:integer - n_uik
 * // примеры выборки
 * db.pv_users().Query({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры получения количества записей
 * db.pv_users().Count({...}, function(data) {
 *      if(data.meta.success) {
 *          // results.result.total
 *      }   
 * });
 */
exports.pv_users = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.select('core', 'pv_users', query_param, filter.security(session), callback);
        },
        Count: function (query_param, callback) {
            provider.count('core', 'pv_users', query_param, callback);
        }
    }
}

/**
 * Клиентские ошибки
 * @example
 * Тип: BASE TABLE
 * Первичный ключ: id
 * Схема: core
 * Поля:
 *      id:uuid - Идентификатор
 *      c_message:text - Текст ошибки
 *      c_code:text - Код ошибки
 *      d_created:timestamp with time zone - Дата возникновения ошибки
 *      fn_user:integer (core.pd_users.id) - Идентификатор пользователя
 *      c_version:text - Версия приложения
 *      c_platform:text - Тип платформы
 *      jb_data:jsonb - Прочии данные
 *      dx_date:timestamp with time zone - Дата записи на сервере
 * // примеры выборки
 * db.sd_client_errors().Query({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры выборки через функцию
 * db.cf_sd_client_errors().Select({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры добавления
 * db.sd_client_errors().Add({...}|[{...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры обновления
 * db.sd_client_errors().Update({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры создания или обновления
 * db.sd_client_errors().AddOrUpdate({id:any ...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры удаления
 * db.sd_client_errors().Delete({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры получения количества записей
 * db.sd_client_errors().Count({...}, function(data) {
 *      if(data.meta.success) {
 *          // results.result.total
 *      }   
 * });
 */
exports.sd_client_errors = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.select('core', 'sd_client_errors', query_param, filter.security(session), callback);
        },
        Select: function (query_param, callback) {
            provider.select('core', 'cf_mui_sd_client_errors()', query_param, filter.security(session), callback);
        },
        Add: function (data, callback) {
            provider.insert('core', 'sd_client_errors', data, callback);
        },
        AddOrUpdate: function (data, callback) {
            provider.insertOrUpdate('core', 'sd_client_errors', 'id', data, callback);
        },
        Update: function (data, callback) {
            provider.update('core', 'sd_client_errors', 'id', data, callback);
        },
        Delete: function (data, callback) {
            provider.delete('core', 'sd_client_errors', 'id', data, callback);
        },
        Count: function (query_param, callback) {
            provider.count('core', 'sd_client_errors', query_param, callback);
        }
    }
}

/**
 * Журнал версий
 * @example
 * Тип: BASE TABLE
 * Первичный ключ: id
 * Схема: core
 * Поля:
 *      id:integer - Идентификатор
 *      c_version:text - Версия
 *      c_description:text - Описание
 *      f_division:integer (core.sd_divisions.id) - Отделение
 *      c_app_name:text - Имя приложения
 *      b_hidden:boolean - Скрыт
 *      ba_file:bytea - Файл для обновления
 *      dx_created:timestamp with time zone - dx_created
 * // примеры выборки
 * db.sd_digests().Query({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры выборки через функцию
 * db.cf_sd_digests().Select({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры добавления
 * db.sd_digests().Add({...}|[{...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры обновления
 * db.sd_digests().Update({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры создания или обновления
 * db.sd_digests().AddOrUpdate({id:any ...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры удаления
 * db.sd_digests().Delete({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры получения количества записей
 * db.sd_digests().Count({...}, function(data) {
 *      if(data.meta.success) {
 *          // results.result.total
 *      }   
 * });
 */
exports.sd_digests = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.select('core', 'sd_digests', query_param, filter.security(session), callback);
        },
        Select: function (query_param, callback) {
            provider.select('core', 'cf_mui_sd_digests()', query_param, filter.security(session), callback);
        },
        Add: function (data, callback) {
            provider.insert('core', 'sd_digests', data, callback);
        },
        AddOrUpdate: function (data, callback) {
            provider.insertOrUpdate('core', 'sd_digests', 'id', data, callback);
        },
        Update: function (data, callback) {
            provider.update('core', 'sd_digests', 'id', data, callback);
        },
        Delete: function (data, callback) {
            provider.delete('core', 'sd_digests', 'id', data, callback);
        },
        Count: function (query_param, callback) {
            provider.count('core', 'sd_digests', query_param, callback);
        }
    }
}

/**
 * Отделения
 * @example
 * Тип: BASE TABLE
 * Первичный ключ: id
 * Схема: core
 * Поля:
 *      id:integer - Идентификатор
 *      f_division:integer (core.sd_divisions.id) - Вышестоящее отделение
 *      c_name:text - Наименование
 *      c_dep_code:text - Код отделения (филиала)
 *      n_code:integer - Код
 *      b_disabled:boolean - Отключено
 *      c_email:text - Адреса для рассылки отчетов по кандидатам
 *      c_email_agitator:text - адреса почты для рассылки отчетов по агитаторам
 * // примеры выборки
 * db.sd_divisions().Query({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры выборки через функцию
 * db.cf_sd_divisions().Select({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры добавления
 * db.sd_divisions().Add({...}|[{...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры обновления
 * db.sd_divisions().Update({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры создания или обновления
 * db.sd_divisions().AddOrUpdate({id:any ...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры удаления
 * db.sd_divisions().Delete({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры получения количества записей
 * db.sd_divisions().Count({...}, function(data) {
 *      if(data.meta.success) {
 *          // results.result.total
 *      }   
 * });
 */
exports.sd_divisions = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.select('core', 'sd_divisions', query_param, filter.security(session), callback);
        },
        Select: function (query_param, callback) {
            provider.select('core', 'cf_mui_sd_divisions()', query_param, filter.security(session), callback);
        },
        Add: function (data, callback) {
            provider.insert('core', 'sd_divisions', data, callback);
        },
        AddOrUpdate: function (data, callback) {
            provider.insertOrUpdate('core', 'sd_divisions', 'id', data, callback);
        },
        Update: function (data, callback) {
            provider.update('core', 'sd_divisions', 'id', data, callback);
        },
        Delete: function (data, callback) {
            provider.delete('core', 'sd_divisions', 'id', data, callback);
        },
        Count: function (query_param, callback) {
            provider.count('core', 'sd_divisions', query_param, callback);
        }
    }
}

/**
 * Участки
 * @example
 * Тип: BASE TABLE
 * Первичный ключ: id
 * Схема: core
 * Поля:
 *      id:integer - Идентификатор
 *      f_division:integer (core.sd_divisions.id) - Отделение
 *      n_code:integer - Код
 *      c_name:text - Наименование
 *      b_disabled:boolean - Отключено
 *      c_email:text - Адреса для рассылки отчетов по кандидатам
 *      c_email_agitator:text - адреса почты для рассылки отчетов по агитаторам
 * // примеры выборки
 * db.sd_subdivisions().Query({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры выборки через функцию
 * db.cf_sd_subdivisions().Select({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры добавления
 * db.sd_subdivisions().Add({...}|[{...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры обновления
 * db.sd_subdivisions().Update({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры создания или обновления
 * db.sd_subdivisions().AddOrUpdate({id:any ...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры удаления
 * db.sd_subdivisions().Delete({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры получения количества записей
 * db.sd_subdivisions().Count({...}, function(data) {
 *      if(data.meta.success) {
 *          // results.result.total
 *      }   
 * });
 */
exports.sd_subdivisions = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.select('core', 'sd_subdivisions', query_param, filter.security(session), callback);
        },
        Select: function (query_param, callback) {
            provider.select('core', 'cf_mui_sd_subdivisions()', query_param, filter.security(session), callback);
        },
        Add: function (data, callback) {
            provider.insert('core', 'sd_subdivisions', data, callback);
        },
        AddOrUpdate: function (data, callback) {
            provider.insertOrUpdate('core', 'sd_subdivisions', 'id', data, callback);
        },
        Update: function (data, callback) {
            provider.update('core', 'sd_subdivisions', 'id', data, callback);
        },
        Delete: function (data, callback) {
            provider.delete('core', 'sd_subdivisions', 'id', data, callback);
        },
        Count: function (query_param, callback) {
            provider.count('core', 'sd_subdivisions', query_param, callback);
        }
    }
}

/**
 * 
 * @example
 * Тип: FUNCTION
 * Схема: core
 * // примеры выборки
 * db.sf_accesses().Query({params:{...}}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 */
exports.sf_accesses = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('core', 'sf_accesses', query_param.params, callback);
        },
        Select: function (query_param, callback) {
            provider.select('core', 'sf_accesses()', query_param, filter.security(session), callback);
        }
    }
}

/**
 * Генерация версии БД
 * @example
 * Тип: FUNCTION
 * Схема: core
 * // примеры выборки
 * db.sf_build_version().Query({params:{...}}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 */
exports.sf_build_version = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('core', 'sf_build_version', query_param.params, callback);
        },
        Select: function (query_param, callback) {
            provider.select('core', 'sf_build_version()', query_param, filter.security(session), callback);
        }
    }
}

/**
 * Преобразование номера агитатора в число
 * @example
 * Тип: FUNCTION
 * Схема: dbo
 * // примеры выборки
 * db.sf_convert_number().Query({params:{...}}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 */
exports.sf_convert_number = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('dbo', 'sf_convert_number', query_param.params, callback);
        },
        Select: function (query_param, callback) {
            provider.select('dbo', 'sf_convert_number()', query_param, filter.security(session), callback);
        }
    }
}

/**
 * Дистанция между двумя точками
 * @example
 * Тип: FUNCTION
 * Схема: dbo
 * // примеры выборки
 * db.sf_distance().Query({params:{...}}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 */
exports.sf_distance = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('dbo', 'sf_distance', query_param.params, callback);
        },
        Select: function (query_param, callback) {
            provider.select('dbo', 'sf_distance()', query_param, filter.security(session), callback);
        }
    }
}

/**
 * Версия БД
 * @example
 * Тип: FUNCTION
 * Схема: core
 * // примеры выборки
 * db.sf_get_version().Query({params:{...}}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 */
exports.sf_get_version = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('core', 'sf_get_version', query_param.params, callback);
        },
        Select: function (query_param, callback) {
            provider.select('core', 'sf_get_version()', query_param, filter.security(session), callback);
        }
    }
}

/**
 * Обновление версии БД
 * @example
 * Тип: FUNCTION
 * Схема: core
 * // примеры выборки
 * db.sf_update_version().Query({params:{...}}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 */
exports.sf_update_version = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('core', 'sf_update_version', query_param.params, callback);
        },
        Select: function (query_param, callback) {
            provider.select('core', 'sf_update_version()', query_param, filter.security(session), callback);
        }
    }
}

/**
 * Статусная схема
 * @example
 * Тип: BASE TABLE
 * Первичный ключ: id
 * Схема: core
 * Поля:
 *      id:integer - Идентификатор
 *      f_start:integer (core.cs_route_statuses.id) - Начальный статус
 *      f_end:integer (core.cs_route_statuses.id) - Конечный статус
 *      b_disabled:boolean - Признак отключенной записи
 * // примеры выборки
 * db.ss_status_schemas().Query({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры выборки через функцию
 * db.cf_ss_status_schemas().Select({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры добавления
 * db.ss_status_schemas().Add({...}|[{...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры обновления
 * db.ss_status_schemas().Update({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры создания или обновления
 * db.ss_status_schemas().AddOrUpdate({id:any ...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры удаления
 * db.ss_status_schemas().Delete({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры получения количества записей
 * db.ss_status_schemas().Count({...}, function(data) {
 *      if(data.meta.success) {
 *          // results.result.total
 *      }   
 * });
 */
exports.ss_status_schemas = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.select('core', 'ss_status_schemas', query_param, filter.security(session), callback);
        },
        Select: function (query_param, callback) {
            provider.select('core', 'cf_mui_ss_status_schemas()', query_param, filter.security(session), callback);
        },
        Add: function (data, callback) {
            provider.insert('core', 'ss_status_schemas', data, callback);
        },
        AddOrUpdate: function (data, callback) {
            provider.insertOrUpdate('core', 'ss_status_schemas', 'id', data, callback);
        },
        Update: function (data, callback) {
            provider.update('core', 'ss_status_schemas', 'id', data, callback);
        },
        Delete: function (data, callback) {
            provider.delete('core', 'ss_status_schemas', 'id', data, callback);
        },
        Count: function (query_param, callback) {
            provider.count('core', 'ss_status_schemas', query_param, callback);
        }
    }
}

/**
 * Закрытый список пользователей
 * @example
 * Тип: VIEW
 * Схема: core
 * Поля:
 *      b_disabled:boolean - b_disabled
 *      c_all_divisions:text - c_all_divisions
 *      c_claims:text - c_claims
 *      c_login:text - c_login
 *      c_password:text - c_password
 *      f_parent:integer - f_parent
 *      id:integer - id
 *      s_hash:text - s_hash
 *      s_salt:text - s_salt
 * // примеры выборки
 * db.sv_users().Query({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры получения количества записей
 * db.sv_users().Count({...}, function(data) {
 *      if(data.meta.success) {
 *          // results.result.total
 *      }   
 * });
 */
exports.sv_users = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.select('core', 'sv_users', query_param, filter.security(session), callback);
        },
        Count: function (query_param, callback) {
            provider.count('core', 'sv_users', query_param, callback);
        }
    }
}


/**
 * Проверка авторизации. 
 * Применяется только при включенной авторизации
 * @function
 * @param {string} login логин пользователя
 * @param {function} callback функция обратного вызова
 * @example
 * db.getUser('', function(data) {
 *      if(data.meta.success) {
 *      
 *      }   
 * });
 */
exports.getUser = function(login, callback) {
    this.sv_users().Query({
        filter: [{
            property: 'c_login',
            value: login
        }]
    }, function(data) {
        callback(data);
    });
}