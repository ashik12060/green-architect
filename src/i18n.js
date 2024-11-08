import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// import enCommon from './locales/en/common.json';
import enContact from './Language/en/encontact.json'
import bnContact from './Language/bn/bncontact.json'
import dnContact from './Language/dn/dncontact.json'

import dnServiceMain from './Language/dn/dnServiceMain.json'
import bnServiceMain from './Language/bn/bnServiceMain.json'
import enServiceMain from './Language/en/enServiceMain.json'

import enAdditionalService from './Language/en/enAdditionalServices.json'
import bnAdditionalService from './Language/bn/bnAdditionalServices.json'
import dnAdditionalService from './Language/dn/dnAdditionalServices.json'

import enService from './Language/en/enService.json'
import bnService from './Language/bn/bnService.json'
import dnService from './Language/dn/dnService.json'

import enAboutMain from './Language/en/enAboutMain.json'
import bnAboutMain from './Language/bn/bnAboutMain.json'
import dnAboutMain from './Language/dn/dnAboutMain.json'

import enAboutProcess from './Language/en/enAboutProcess.json'
import bnAboutProcess from './Language/bn/bnAboutProcess.json'
import dnAboutProcess from './Language/dn/dnAboutProcess.json'

import enAboutChoose from './Language/en/enAboutChoose.json'
import bnAboutChoose from './Language/bn/bnAboutChoose.json'
import dnAboutChoose from './Language/dn/dnAboutChoose.json'
 

import enAboutDiff from './Language/en/enAboutDiff.json'
import bnAboutDiff from './Language/bn/bnAboutDiff.json'
import dnAboutDiff from './Language/dn/dnAboutDiff.json'




import enFooter from './Language/en/enFooter.json'
import bnFooter from './Language/bn/bnFooter.json'
import dnFooter from './Language/dn/dnFooter.json'

import enHeader from './Language/en/enHeader.json'
import bnHeader from './Language/bn/bnHeader.json'
import dnHeader from './Language/dn/dnHeader.json'

import enHome from './Language/en/enHome.json'
import bnHome from './Language/bn/bnHome.json'
import dnHome from './Language/dn/dnHome.json'

import enProjectComplete from './Language/en/enProjectComplete.json'
import bnProjectComplete from './Language/bn/bnProjectComplete.json'
import dnProjectComplete from './Language/dn/dnProjectComplete.json'

import enVideo from './Language/en/enVideo.json'
import bnVideo from './Language/bn/bnVideo.json'
import dnVideo from './Language/dn/dnVideo.json'

import enClient from './Language/en/enCliend.json'
import bnClient from './Language/bn/bnCliend.json'
import dnClient from './Language/dn/dnCliend.json'

import enFaq from './Language/en/enFaq.json'
import bnFaq from './Language/bn/bnFaq.json'
import dnFaq from './Language/dn/dnFaq.json'




i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        contact:enContact,
        ServiceMain:enServiceMain,
        AdditionalService:enAdditionalService,
        Service:enService,
        AboutMain:enAboutMain,
        AboutProcess:enAboutProcess,
        AboutChoose:enAboutChoose,
        AboutDiff:enAboutDiff,
        Footer:enFooter,
        Header:enHeader,
        Home:enHome,
        ProjectComplete:enProjectComplete,
        Video:enVideo,
        Client:enClient,
        Faq:enFaq,
     
      },
      bn: {
        contact:bnContact,
        ServiceMain:bnServiceMain,
        AdditionalService:bnAdditionalService,
        Service:bnService,
        AboutMain:bnAboutMain,
        AboutProcess:bnAboutProcess,
        AboutChoose:bnAboutChoose,
        AboutDiff:bnAboutDiff,
        Footer:bnFooter,
        Header:bnHeader,
        Home:bnHome,
        ProjectComplete:bnProjectComplete,
        Video:bnVideo,
        Client:bnClient,
        Faq:bnFaq,
      
      },
      es: {
        contact:dnContact,
        ServiceMain:dnServiceMain,
        AdditionalService:dnAdditionalService,
        Service:dnService,
        AboutMain:dnAboutMain,
        AboutProcess:dnAboutProcess,
        AboutChoose:dnAboutChoose,
        AboutDiff:dnAboutDiff,
        Footer:dnFooter,
        Header:dnHeader,
        Home:dnHome,
        ProjectComplete:dnProjectComplete,
        Video:dnVideo,
        Client:dnClient,
        Faq:dnFaq,
        
      },
    },
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
