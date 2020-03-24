#### Описание

Модуль для обработки [RPC](https://docs.sencha.com/extjs/6.7.0/guides/backend_connectors/direct/specification.html) запросов.

#### Способы получения и обработки данных

**Формат возвращения результата**

```
{
    meta: {
        success: boolean,
        msg: string,
        fullMsg: string
    },
    result: any|string
}
```
, где:

* meta: any - мета информация запроса
    * success: boolean - результат выполнения операции, если данный параметр равен **false**, то поле **msg** будет заполнено
    * msg: string - текст сообщения при ошибке (success = false)
    * fullMsg: string - иногда в данном свойстве выводиться полный текст ошибки, он предназначен для разработчика  
* result: any|string - результат запроса

#### Router (обработчики запросов)

* POST ~/changePassword - изменение пароля пользователя. См. [тут](/docs?project=mobnius-kes-node&file=modules/rpc/router/changePassword.js)
* POST ~/auth - авторизация пользователя. См.
* GET ~/rpc/meta - получение мета для RPC. См. [тут](/docs?project=mobnius-kes-node&file=modules/rpc/router/rpc.js)
* POST ~/rpc - выполнение RPC
* GET ~/viewactions См. [тут](/docs?project=mobnius-kes-node&file=modules/rpc/router/viewactions.js)
* GET ~/menu/NAVIGATION - получение навигации См. [тут](/docs?project=mobnius-kes-node&file=modules/rpc/router/menu.js)
* GET ~/audit/scripts.js - дополнительный модуль для передачи логирования на сервер см. https://www.appcode.pw/?p=1246
* POST ~/auth - авторизация. См. https://www.appcode.pw/?page_id=459
* GET ~/cache/reload - сброс кэша См. [тут](/docs?project=mobnius-kes-node&file=modules/rpc/router/cache.js)

#### Базовый shell команды

В файле [shell-context](/docs?project=mobnius-kes-node&file=modules/custom-context/shell.js) есть функции которые можно вызывать через команду PN.shell...

#### Генерация пароля и безопасность

Для безопасность пароля применяется модуль crypto. Подробнее см. [здесь](/docs?project=mobnius-kes-node&file=modules/authorize/saltHash.js)

#### Обработка запросов websocket

Статья на эту тему описана [тут](https://www.appcode.pw/?p=1256)

#### Обработка RPC запросов

Статья на эту тему описана [тут](https://www.appcode.pw/?p=463)