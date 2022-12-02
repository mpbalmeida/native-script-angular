import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'dev.marcosalmeida.ns.ng.course',
  appPath: 'src',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none'
  }
} as NativeScriptConfig;