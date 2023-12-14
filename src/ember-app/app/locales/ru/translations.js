import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISModul_ucheta_sroka_dejjstviya_dogovoraДирОтдПоРабСКлLForm from './forms/i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-дир-отд-по-раб-с-кл-l';
import IISModul_ucheta_sroka_dejjstviya_dogovoraДоговорLForm from './forms/i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-договор-l';
import IISModul_ucheta_sroka_dejjstviya_dogovoraКлиентLForm from './forms/i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-клиент-l';
import IISModul_ucheta_sroka_dejjstviya_dogovoraРасчетОстВремLForm from './forms/i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-расчет-ост-врем-l';
import IISModul_ucheta_sroka_dejjstviya_dogovoraУслугиLForm from './forms/i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-услуги-l';
import IISModul_ucheta_sroka_dejjstviya_dogovoraДирОтдПоРабСКлEForm from './forms/i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-дир-отд-по-раб-с-кл-e';
import IISModul_ucheta_sroka_dejjstviya_dogovoraДоговорEForm from './forms/i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-договор-e';
import IISModul_ucheta_sroka_dejjstviya_dogovoraКлиентEForm from './forms/i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-клиент-e';
import IISModul_ucheta_sroka_dejjstviya_dogovoraРасчетОстВремEForm from './forms/i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-расчет-ост-врем-e';
import IISModul_ucheta_sroka_dejjstviya_dogovoraУслугиEForm from './forms/i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-услуги-e';
import IISModul_ucheta_sroka_dejjstviya_dogovoraДоговорModel from './models/i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-договор';
import IISModul_ucheta_sroka_dejjstviya_dogovoraКлиентModel from './models/i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-клиент';
import IISModul_ucheta_sroka_dejjstviya_dogovoraОказУслугModel from './models/i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-оказ-услуг';
import IISModul_ucheta_sroka_dejjstviya_dogovoraРасчетОстВремModel from './models/i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-расчет-ост-врем';
import IISModul_ucheta_sroka_dejjstviya_dogovoraУслугиModel from './models/i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-услуги';
import ДиректорModel from './models/директор';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-договор': IISModul_ucheta_sroka_dejjstviya_dogovoraДоговорModel,
    'i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-клиент': IISModul_ucheta_sroka_dejjstviya_dogovoraКлиентModel,
    'i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-оказ-услуг': IISModul_ucheta_sroka_dejjstviya_dogovoraОказУслугModel,
    'i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-расчет-ост-врем': IISModul_ucheta_sroka_dejjstviya_dogovoraРасчетОстВремModel,
    'i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-услуги': IISModul_ucheta_sroka_dejjstviya_dogovoraУслугиModel,
    'директор': ДиректорModel
  },

  'application-name': 'Modul_ucheta_sroka_dejjstviya_dogovora',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Modul_ucheta_sroka_dejjstviya_dogovora',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Modul_ucheta_sroka_dejjstviya_dogovora',
          title: 'Modul_ucheta_sroka_dejjstviya_dogovora'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'modul-ucheta-sroka-dejjstviya-dogovora': {
          caption: 'Modul_ucheta_sroka_dejjstviya_dogovora',
          title: 'Modul_ucheta_sroka_dejjstviya_dogovora',
          'i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-услуги-l': {
            caption: 'Услуги',
            title: ''
          },
          'i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-дир-отд-по-раб-с-кл-l': {
            caption: 'Дир отд по раб с кл',
            title: ''
          },
          'i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-расчет-ост-врем-l': {
            caption: 'Расчет ост врем',
            title: ''
          },
          'i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-клиент-l': {
            caption: 'Клиент',
            title: ''
          },
          'i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-договор-l': {
            caption: 'Договор',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-дир-отд-по-раб-с-кл-l': IISModul_ucheta_sroka_dejjstviya_dogovoraДирОтдПоРабСКлLForm,
    'i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-договор-l': IISModul_ucheta_sroka_dejjstviya_dogovoraДоговорLForm,
    'i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-клиент-l': IISModul_ucheta_sroka_dejjstviya_dogovoraКлиентLForm,
    'i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-расчет-ост-врем-l': IISModul_ucheta_sroka_dejjstviya_dogovoraРасчетОстВремLForm,
    'i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-услуги-l': IISModul_ucheta_sroka_dejjstviya_dogovoraУслугиLForm,
    'i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-дир-отд-по-раб-с-кл-e': IISModul_ucheta_sroka_dejjstviya_dogovoraДирОтдПоРабСКлEForm,
    'i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-договор-e': IISModul_ucheta_sroka_dejjstviya_dogovoraДоговорEForm,
    'i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-клиент-e': IISModul_ucheta_sroka_dejjstviya_dogovoraКлиентEForm,
    'i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-расчет-ост-врем-e': IISModul_ucheta_sroka_dejjstviya_dogovoraРасчетОстВремEForm,
    'i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-услуги-e': IISModul_ucheta_sroka_dejjstviya_dogovoraУслугиEForm
  },

});

export default translations;
