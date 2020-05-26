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
 * Точки
 * @example
 * Тип: BASE TABLE
 * Первичный ключ: id
 * Схема: core
 * Поля:
 *      id:uuid - Идентификатор
 *      f_registr_pts:uuid (dbo.ed_registr_pts.id) - Учетный показатель
 *      f_route:uuid (core.cd_routes.id) - Маршрут
 *      c_notice:text - Примечание
 *      c_info:text - Информация
 *      jb_data:jsonb - JSON данные
 *      dx_created:timestamp with time zone - Дата создания в БД
 *      n_order:integer - Сортировка
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
 *      fn_question:integer - Вопрос
 *      fn_answer:integer - Ответ
 *      jb_data:jsonb - JSON данные
 *      dx_created:timestamp with time zone - Дата создания в БД
 *      n_order:integer - n_order
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
 * Обновление точек учета по всем пользователям
 * @example
 * Тип: FUNCTION
 * Схема: dbo
 * // примеры выборки
 * db.cf_imp_registr_pts().Query({params:{...}}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 */
exports.cf_imp_registr_pts = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('dbo', 'cf_imp_registr_pts', query_param.params, callback);
        },
        Select: function (query_param, callback) {
            provider.select('dbo', 'cf_imp_registr_pts()', query_param, filter.security(session), callback);
        }
    }
}

/**
 * Импорт пользователей
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
 * db.cf_mui_ed_registr_pts().Query({params:{...}}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 */
exports.cf_mui_ed_registr_pts = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('dbo', 'cf_mui_ed_registr_pts', query_param.params, callback);
        },
        Select: function (query_param, callback) {
            provider.select('dbo', 'cf_mui_ed_registr_pts()', query_param, filter.security(session), callback);
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
 *      id:uuid - Идентификатор
 *      f_house:uuid (dbo.cs_house.id) - Дом
 *      c_number:text - Номер
 *      n_number:integer - Номер
 *      dx_created:timestamp with time zone - dx_created
 *      f_user:integer (core.pd_users.id) - f_user
 *      sn_delete:boolean - sn_delete
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
 * Улицы
 * @example
 * Тип: BASE TABLE
 * Первичный ключ: id
 * Схема: dbo
 * Поля:
 *      id:uuid - Идентификатор
 *      f_street:uuid (dbo.cs_street.id) - Улица
 *      c_house_num:text - Номер дома
 *      c_build_num:text - Корпус
 *      c_data:text - Дома/квартиры через запятую
 *      b_mkd:boolean - МКД
 *      c_number:text - Номер дома
 *      dx_created:timestamp with time zone - dx_created
 *      sn_delete:boolean - sn_delete
 *      b_self:boolean - Самострой
 *      n_appartament:integer - Кол-во кв. в доме
 *      n_height_num:integer - Кол-во кв. в доме
 *      n_latitude:numeric - n_latitude
 *      n_longitude:numeric - n_longitude
 *      n_number:integer - n_number
 *      n_porch:integer - Кол-во подъездов в доме
 *      b_private:boolean - b_private
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
 *      c_name:text - Наименование
 *      c_type:text - Тип
 *      c_street_name:text - Имя
 *      c_yandex_name:text - Имя в yandex
 *      dx_created:timestamp with time zone - Дата создания
 *      sn_delete:boolean - Признак удаленной записи
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
 * Избирательный участок
 * @example
 * Тип: BASE TABLE
 * Первичный ключ: id
 * Схема: dbo
 * Поля:
 *      id:bigint - № округа
 *      c_area:text - Район
 *      n_area:text - № округа
 *      c_name:text - Здание УИК
 *      c_address:text - Адрес
 *      c_phone:text - Телефон
 *      dx_created:timestamp with time zone - Дата создания
 *      sn_delete:boolean - Признак удаленной записи
 *      f_user:integer (core.pd_users.id) - f_user
 *      c_boundary:text - Границы УИК
 *      n_count:integer - Количество избирателей
 * // примеры выборки
 * db.cs_uik().Query({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры выборки через функцию
 * db.cf_cs_uik().Select({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры добавления
 * db.cs_uik().Add({...}|[{...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры обновления
 * db.cs_uik().Update({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры создания или обновления
 * db.cs_uik().AddOrUpdate({id:any ...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры удаления
 * db.cs_uik().Delete({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры получения количества записей
 * db.cs_uik().Count({...}, function(data) {
 *      if(data.meta.success) {
 *          // results.result.total
 *      }   
 * });
 */
exports.cs_uik = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.select('dbo', 'cs_uik', query_param, filter.security(session), callback);
        },
        Select: function (query_param, callback) {
            provider.select('dbo', 'cf_mui_cs_uik()', query_param, filter.security(session), callback);
        },
        Add: function (data, callback) {
            provider.insert('dbo', 'cs_uik', data, callback);
        },
        AddOrUpdate: function (data, callback) {
            provider.insertOrUpdate('dbo', 'cs_uik', 'id', data, callback);
        },
        Update: function (data, callback) {
            provider.update('dbo', 'cs_uik', 'id', data, callback);
        },
        Delete: function (data, callback) {
            provider.delete('dbo', 'cs_uik', 'id', data, callback);
        },
        Count: function (query_param, callback) {
            provider.count('dbo', 'cs_uik', query_param, callback);
        }
    }
}

/**
 * Адреса
 * @example
 * Тип: VIEW
 * Схема: dbo
 * Поля:
 *      b_private:boolean - b_private
 *      id:uuid - id
 *      b_self:boolean - b_self
 *      c_build_num:text - c_build_num
 *      c_data:text - c_data
 *      c_house_num:text - c_house_num
 *      b_mkd:boolean - b_mkd
 *      n_appartament:integer - n_appartament
 *      n_height_num:integer - n_height_num
 *      n_porch:integer - n_porch
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
 * Сведения о Кураторах, ОзаУИК и волонтерах, закрепленных за УИК
 * @example
 * Тип: VIEW
 * Схема: dbo
 * Поля:
 *      c_fio:text - c_fio
 *      c_tel_uik:text - c_tel_uik
 *      c_fio_main:text - c_fio_main
 *      c_fio_uik:text - c_fio_uik
 *      c_post:text - c_post
 *      c_post_uik:text - c_post_uik
 *      c_tel:text - c_tel
 *      c_tel_main:text - c_tel_main
 *      c_area:text - c_area
 *      c_work:text - c_work
 *      c_work_uik:text - c_work_uik
 *      id_uik:bigint - id_uik
 *      n_area:text - n_area
 *      user_id:integer - user_id
 *      user_id_main:integer - user_id_main
 *      user_id_uik:integer - user_id_uik
 * // примеры выборки
 * db.cv_users().Query({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры получения количества записей
 * db.cv_users().Count({...}, function(data) {
 *      if(data.meta.success) {
 *          // results.result.total
 *      }   
 * });
 */
exports.cv_users = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.select('dbo', 'cv_users', query_param, filter.security(session), callback);
        },
        Count: function (query_param, callback) {
            provider.count('dbo', 'cv_users', query_param, callback);
        }
    }
}

/**
 * Закрепление волонтеров
 * @example
 * Тип: VIEW
 * Схема: dbo
 * Поля:
 *      c_area:text - c_area
 *      n_mkd_count:bigint - n_mkd_count
 *      house_build:text - house_build
 *      house_number:text - house_number
 *      n_area:text - n_area
 *      c_appartament:text - c_appartament
 *      n_private_count:bigint - n_private_count
 *      n_total:bigint - n_total
 *      street_name:text - street_name
 *      uik_id:bigint - uik_id
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
 * Учетный показатель
 * @example
 * Тип: BASE TABLE
 * Первичный ключ: id
 * Схема: dbo
 * Поля:
 *      id:uuid - Идентификатор
 *      c_appartament_num:text - Номер квартиры (строковая)
 *      n_appartament_num:integer - Номер квартиры
 *      c_house_num:text - Номер дома (строковая)
 *      n_house_num:integer - Номер дома
 *      jb_tel:jsonb - Номер телефона
 *      jb_email:jsonb - Эл. почта
 *      n_longitude:numeric - Долгота
 *      n_latitude:numeric - Широта
 *      f_user:integer (core.pd_users.id) - Пользователь
 *      f_division:integer (core.sd_divisions.id) - Отделение
 *      f_subdivision:integer (core.sd_divisions.id) - Участок
 *      b_disabled:boolean - Отлючено
 *      gx_geodata:USER-DEFINED - Вычисляемое поле
 *      dx_created:timestamp with time zone - Дата создания
 *      sn_delete:boolean - Признак удаленной записи
 *      c_address:text - Адрес
 *      c_fio:text - ФИО потребителя
 * // примеры выборки
 * db.ed_registr_pts().Query({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры выборки через функцию
 * db.cf_ed_registr_pts().Select({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры добавления
 * db.ed_registr_pts().Add({...}|[{...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры обновления
 * db.ed_registr_pts().Update({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры создания или обновления
 * db.ed_registr_pts().AddOrUpdate({id:any ...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры удаления
 * db.ed_registr_pts().Delete({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры получения количества записей
 * db.ed_registr_pts().Count({...}, function(data) {
 *      if(data.meta.success) {
 *          // results.result.total
 *      }   
 * });
 */
exports.ed_registr_pts = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.select('dbo', 'ed_registr_pts', query_param, filter.security(session), callback);
        },
        Select: function (query_param, callback) {
            provider.select('dbo', 'cf_mui_ed_registr_pts()', query_param, filter.security(session), callback);
        },
        Add: function (data, callback) {
            provider.insert('dbo', 'ed_registr_pts', data, callback);
        },
        AddOrUpdate: function (data, callback) {
            provider.insertOrUpdate('dbo', 'ed_registr_pts', 'id', data, callback);
        },
        Update: function (data, callback) {
            provider.update('dbo', 'ed_registr_pts', 'id', data, callback);
        },
        Delete: function (data, callback) {
            provider.delete('dbo', 'ed_registr_pts', 'id', data, callback);
        },
        Count: function (query_param, callback) {
            provider.count('dbo', 'ed_registr_pts', query_param, callback);
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
 *      f_action:integer (core.sd_ui_actions.id) - Действие
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
 * Навигация
 * @example
 * Тип: BASE TABLE
 * Первичный ключ: id
 * Схема: core
 * Поля:
 *      id:integer - Идентификатор
 *      c_view_type:text - Тип представления
 *      c_alias:text - Корневое представление
 *      b_leaf:boolean - Без дочерних элементов
 *      c_icon_cls:text - Класс иконки
 *      f_parent:integer (core.pd_navigations.id) - Родительская запись
 *      c_name:text - Заголовок
 *      b_default_token:boolean - Страница по умолчанию
 *      c_type:text - Тип меню
 *      b_visible:boolean - Видимость
 *      c_icon:text - Иконка в формате base64
 *      b_selectable:boolean - Выбираемый
 *      b_expanded:boolean - В развернутом виде
 *      n_sort:integer - Сортировка
 *      b_not_auth:boolean - Доступен без авторизации
 *      sn_delete:boolean - Удален
 * // примеры выборки
 * db.pd_navigations().Query({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры выборки через функцию
 * db.cf_pd_navigations().Select({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры добавления
 * db.pd_navigations().Add({...}|[{...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры обновления
 * db.pd_navigations().Update({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры создания или обновления
 * db.pd_navigations().AddOrUpdate({id:any ...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры удаления
 * db.pd_navigations().Delete({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры получения количества записей
 * db.pd_navigations().Count({...}, function(data) {
 *      if(data.meta.success) {
 *          // results.result.total
 *      }   
 * });
 */
exports.pd_navigations = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.select('core', 'pd_navigations', query_param, filter.security(session), callback);
        },
        Select: function (query_param, callback) {
            provider.select('core', 'cf_mui_pd_navigations()', query_param, filter.security(session), callback);
        },
        Add: function (data, callback) {
            provider.insert('core', 'pd_navigations', data, callback);
        },
        AddOrUpdate: function (data, callback) {
            provider.insertOrUpdate('core', 'pd_navigations', 'id', data, callback);
        },
        Update: function (data, callback) {
            provider.update('core', 'pd_navigations', 'id', data, callback);
        },
        Delete: function (data, callback) {
            provider.delete('core', 'pd_navigations', 'id', data, callback);
        },
        Count: function (query_param, callback) {
            provider.count('core', 'pd_navigations', query_param, callback);
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
 *      f_subdivision:integer (core.sd_divisions.id) - Участок
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
 *      c_firstname:text - Имя
 *      c_lastname:text - Фамилия
 *      c_patronymic:text - Отчество
 *      c_email:text - Адрес эл. почты
 *      c_tel:text - Телефон
 *      c_imei:text - IMEI
 *      c_description:text - Описание
 *      b_disabled:boolean - Отключен
 *      sn_delete:boolean - Удален
 *      f_uik:bigint (dbo.cs_uik.id) - УИК
 *      c_work:text - Место работы волонтера
 *      c_post:text - Должность
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
 * Получение списка хранилищ
 * @example
 * Тип: FUNCTION
 * Схема: core
 * // примеры выборки
 * db.pf_stores().Query({params:{...}}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 */
exports.pf_stores = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('core', 'pf_stores', query_param.params, callback);
        },
        Select: function (query_param, callback) {
            provider.select('core', 'pf_stores()', query_param, filter.security(session), callback);
        }
    }
}

/**
 * возвращается список кнопок, которые могут выводиться для viewId
 * @example
 * Тип: FUNCTION
 * Схема: core
 * // примеры выборки
 * db.pf_ui_actions().Query({params:{...}}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 */
exports.pf_ui_actions = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('core', 'pf_ui_actions', query_param.params, callback);
        },
        Select: function (query_param, callback) {
            provider.select('core', 'pf_ui_actions()', query_param, filter.security(session), callback);
        }
    }
}

/**
 * Безопасность
 * @example
 * Тип: FUNCTION
 * Схема: core
 * // примеры выборки
 * db.pf_ui_navigations().Query({params:{...}}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 */
exports.pf_ui_navigations = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('core', 'pf_ui_navigations', query_param.params, callback);
        },
        Select: function (query_param, callback) {
            provider.select('core', 'pf_ui_navigations()', query_param, filter.security(session), callback);
        }
    }
}

/**
 * Открытый список пользователей
 * @example
 * Тип: VIEW
 * Схема: core
 * Поля:
 *      c_all_divisions:text - c_all_divisions
 *      c_lastname:text - c_lastname
 *      c_claims:text - c_claims
 *      c_description:text - c_description
 *      c_divisions:text - c_divisions
 *      c_email:text - c_email
 *      c_firstname:text - c_firstname
 *      b_disabled:boolean - b_disabled
 *      c_login:text - c_login
 *      c_patronymic:text - c_patronymic
 *      c_subdivisions:text - c_subdivisions
 *      c_tel:text - c_tel
 *      f_parent:integer - f_parent
 *      id:integer - id
 *      n_uik:bigint - n_uik
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
 * Операции
 * @example
 * Тип: BASE TABLE
 * Первичный ключ: id
 * Схема: core
 * Поля:
 *      id:integer - Идентификатор
 *      c_view_id:text - Идентификатор представления
 *      c_text:text - Имя команды
 *      c_icon:text - Иконка
 *      c_operation:text - Метод
 *      c_action_view:text - Представление
 *      c_xtype:text - Тип операции
 *      c_place:text - Место установки
 *      n_sort:integer - Сортировка по умолчанию
 *      c_tooltip:text - Описание операции
 *      c_ui:text - Стиль
 *      f_parent:integer (core.sd_ui_actions.id) - Родительский элемент
 *      c_selectiondependencytype:text - Условие выполнения
 *      c_confirmationmessage:text - Сообщение с текстом перед выполнением
 *      c_javascript_fn:text - JavaScript-функция
 *      sn_delete:boolean - Удален
 * // примеры выборки
 * db.sd_ui_actions().Query({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры выборки через функцию
 * db.cf_sd_ui_actions().Select({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры добавления
 * db.sd_ui_actions().Add({...}|[{...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры обновления
 * db.sd_ui_actions().Update({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры создания или обновления
 * db.sd_ui_actions().AddOrUpdate({id:any ...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры удаления
 * db.sd_ui_actions().Delete({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры получения количества записей
 * db.sd_ui_actions().Count({...}, function(data) {
 *      if(data.meta.success) {
 *          // results.result.total
 *      }   
 * });
 */
exports.sd_ui_actions = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.select('core', 'sd_ui_actions', query_param, filter.security(session), callback);
        },
        Select: function (query_param, callback) {
            provider.select('core', 'cf_mui_sd_ui_actions()', query_param, filter.security(session), callback);
        },
        Add: function (data, callback) {
            provider.insert('core', 'sd_ui_actions', data, callback);
        },
        AddOrUpdate: function (data, callback) {
            provider.insertOrUpdate('core', 'sd_ui_actions', 'id', data, callback);
        },
        Update: function (data, callback) {
            provider.update('core', 'sd_ui_actions', 'id', data, callback);
        },
        Delete: function (data, callback) {
            provider.delete('core', 'sd_ui_actions', 'id', data, callback);
        },
        Count: function (query_param, callback) {
            provider.count('core', 'sd_ui_actions', query_param, callback);
        }
    }
}

/**
 * Критерии
 * @example
 * Тип: BASE TABLE
 * Первичный ключ: id
 * Схема: core
 * Поля:
 *      id:integer - Идентификатор
 *      c_view_id:text - Идентификатор представления
 *      c_type:text - Тип
 *      c_filter_criteria:text - Фильтр
 *      c_filter_fn:text - JavaScript-функция
 *      c_cls:text - CSS класс
 *      c_styles:text - Стили|Свойства
 *      c_message:text - Сообщение
 *      c_roles:text - Роли
 *      c_field:text - Поле
 * // примеры выборки
 * db.sd_ui_criteries().Query({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры выборки через функцию
 * db.cf_sd_ui_criteries().Select({...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры добавления
 * db.sd_ui_criteries().Add({...}|[{...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры обновления
 * db.sd_ui_criteries().Update({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры создания или обновления
 * db.sd_ui_criteries().AddOrUpdate({id:any ...}, function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
 * // примеры удаления
 * db.sd_ui_criteries().Delete({id:any ...}|[{id:any ...}], function(data) {
 *      if(data.meta.success) {
 *          // data.result.records
 *      }   
 * });
  * // примеры получения количества записей
 * db.sd_ui_criteries().Count({...}, function(data) {
 *      if(data.meta.success) {
 *          // results.result.total
 *      }   
 * });
 */
exports.sd_ui_criteries = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.select('core', 'sd_ui_criteries', query_param, filter.security(session), callback);
        },
        Select: function (query_param, callback) {
            provider.select('core', 'cf_mui_sd_ui_criteries()', query_param, filter.security(session), callback);
        },
        Add: function (data, callback) {
            provider.insert('core', 'sd_ui_criteries', data, callback);
        },
        AddOrUpdate: function (data, callback) {
            provider.insertOrUpdate('core', 'sd_ui_criteries', 'id', data, callback);
        },
        Update: function (data, callback) {
            provider.update('core', 'sd_ui_criteries', 'id', data, callback);
        },
        Delete: function (data, callback) {
            provider.delete('core', 'sd_ui_criteries', 'id', data, callback);
        },
        Count: function (query_param, callback) {
            provider.count('core', 'sd_ui_criteries', query_param, callback);
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