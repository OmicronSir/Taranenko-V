// Generated by DDC, the Dart Development Compiler (to JavaScript).
// Version: 2.19.2 (stable) (Tue Feb 7 18:37:17 2023 +0000) on "linux_x64"
// Module: zapp_user_main
// Flags: soundNullSafety(true), enableAsserts(true)
define('zapp_user_main', ['dart_sdk', 'flutter_sdk'], (function load__zapp_user_main(dart_sdk, flutter_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const js = dart_sdk.js;
  const ui = dart_sdk.ui;
  const _js_helper = dart_sdk._js_helper;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app = flutter_sdk.src__material__app;
  const framework = flutter_sdk.src__widgets__framework;
  const binding = flutter_sdk.src__widgets__binding;
  const scaffold = flutter_sdk.src__material__scaffold;
  const app_bar = flutter_sdk.src__material__app_bar;
  const text = flutter_sdk.src__widgets__text;
  const basic = flutter_sdk.src__widgets__basic;
  const flex = flutter_sdk.src__rendering__flex;
  const elevated_button = flutter_sdk.src__material__elevated_button;
  const navigator = flutter_sdk.src__widgets__navigator;
  const snack_bar = flutter_sdk.src__material__snack_bar;
  const scroll_view = flutter_sdk.src__widgets__scroll_view;
  const list_tile = flutter_sdk.src__material__list_tile;
  const divider = flutter_sdk.src__material__divider;
  var $46zapp_entry = Object.create(dart.library);
  var main = Object.create(dart.library);
  var web_plugin_registrant = Object.create(dart.library);
  var home_screen = Object.create(dart.library);
  var simple_list_screen = Object.create(dart.library);
  var infinity_list_screen = Object.create(dart.library);
  var infinity_math_screen = Object.create(dart.library);
  var choice_screen = Object.create(dart.library);
  var $toString = dartx.toString;
  var $isOdd = dartx.isOdd;
  var $truncate = dartx.truncate;
  var $length = dartx.length;
  var $addAll = dartx.addAll;
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    ListOfString: () => (T.ListOfString = dart.constFn(core.List$(core.String)))(),
    ListOfStringTodynamic: () => (T.ListOfStringTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T.ListOfString()])))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    dynamicToNull: () => (T.dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))(),
    VoidToNull: () => (T.VoidToNull = dart.constFn(dart.fnType(core.Null, [])))(),
    ObjectAndStackTraceTovoid: () => (T.ObjectAndStackTraceTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, core.StackTrace])))(),
    ZoneAndZoneDelegateAndZone__Tovoid: () => (T.ZoneAndZoneDelegateAndZone__Tovoid = dart.constFn(dart.fnType(dart.void, [async.Zone, async.ZoneDelegate, async.Zone, core.String])))(),
    BuildContextToHomeScreen: () => (T.BuildContextToHomeScreen = dart.constFn(dart.fnType(home_screen.HomeScreen, [framework.BuildContext])))(),
    BuildContextToSimpleListScreen: () => (T.BuildContextToSimpleListScreen = dart.constFn(dart.fnType(simple_list_screen.SimpleListScreen, [framework.BuildContext])))(),
    BuildContextToInfinityListScreen: () => (T.BuildContextToInfinityListScreen = dart.constFn(dart.fnType(infinity_list_screen.InfinityListScreen, [framework.BuildContext])))(),
    BuildContextToInfinityMathScreen: () => (T.BuildContextToInfinityMathScreen = dart.constFn(dart.fnType(infinity_math_screen.InfinityMathScreen, [framework.BuildContext])))(),
    BuildContextToChoiceScreen: () => (T.BuildContextToChoiceScreen = dart.constFn(dart.fnType(choice_screen.ChoiceScreen, [framework.BuildContext])))(),
    BuildContextToWidget: () => (T.BuildContextToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext])))(),
    IdentityMapOfString$BuildContextToWidget: () => (T.IdentityMapOfString$BuildContextToWidget = dart.constFn(_js_helper.IdentityMap$(core.String, T.BuildContextToWidget())))(),
    ObjectN: () => (T.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    FutureOfvoid: () => (T.FutureOfvoid = dart.constFn(async.Future$(dart.void)))(),
    VoidToFutureOfvoid: () => (T.VoidToFutureOfvoid = dart.constFn(dart.fnType(T.FutureOfvoid(), [])))(),
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))(),
    BuildContextAndintToStatelessWidget: () => (T.BuildContextAndintToStatelessWidget = dart.constFn(dart.fnType(framework.StatelessWidget, [framework.BuildContext, core.int])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(main.main, T.VoidTovoid());
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: home_screen.HomeScreen.prototype,
        [Widget_key]: null
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: simple_list_screen.SimpleListScreen.prototype,
        [Widget_key]: null
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: infinity_list_screen.InfinityListScreen.prototype,
        [Widget_key]: null
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: infinity_math_screen.InfinityMathScreen.prototype,
        [Widget_key]: null
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: choice_screen.ChoiceScreen.prototype,
        [Widget_key]: null
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: main.MyApp.prototype,
        [Widget_key]: null
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Главный экран"
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Простой список"
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 20,
        [SizedBox_width]: null
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Бесконечный список"
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Степени числа 2"
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Выбор Да/Нет"
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Первая строка"
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: list_tile.ListTile.prototype,
        [Widget_key]: null,
        [ListTile_minLeadingWidth]: null,
        [ListTile_minVerticalPadding]: null,
        [ListTile_horizontalTitleGap]: null,
        [ListTile_enableFeedback]: null,
        [ListTile_selectedTileColor]: null,
        [ListTile_tileColor]: null,
        [ListTile_autofocus]: false,
        [ListTile_focusNode]: null,
        [ListTile_splashColor]: null,
        [ListTile_hoverColor]: null,
        [ListTile_focusColor]: null,
        [ListTile_selected]: false,
        [ListTile_mouseCursor]: null,
        [ListTile_onFocusChange]: null,
        [ListTile_onLongPress]: null,
        [ListTile_onTap]: null,
        [ListTile_enabled]: true,
        [ListTile_contentPadding]: null,
        [ListTile_style]: null,
        [ListTile_textColor]: null,
        [ListTile_iconColor]: null,
        [ListTile_selectedColor]: null,
        [ListTile_shape]: null,
        [ListTile_visualDensity]: null,
        [ListTile_dense]: null,
        [ListTile_isThreeLine]: false,
        [ListTile_trailing]: null,
        [ListTile_subtitle]: null,
        [ListTile_title]: C[15] || CT.C15,
        [ListTile_leading]: null
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: divider.Divider.prototype,
        [Widget_key]: null,
        [Divider_color]: null,
        [Divider_endIndent]: null,
        [Divider_indent]: null,
        [Divider_thickness]: null,
        [Divider_height]: null
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Вторая строка"
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: list_tile.ListTile.prototype,
        [Widget_key]: null,
        [ListTile_minLeadingWidth]: null,
        [ListTile_minVerticalPadding]: null,
        [ListTile_horizontalTitleGap]: null,
        [ListTile_enableFeedback]: null,
        [ListTile_selectedTileColor]: null,
        [ListTile_tileColor]: null,
        [ListTile_autofocus]: false,
        [ListTile_focusNode]: null,
        [ListTile_splashColor]: null,
        [ListTile_hoverColor]: null,
        [ListTile_focusColor]: null,
        [ListTile_selected]: false,
        [ListTile_mouseCursor]: null,
        [ListTile_onFocusChange]: null,
        [ListTile_onLongPress]: null,
        [ListTile_onTap]: null,
        [ListTile_enabled]: true,
        [ListTile_contentPadding]: null,
        [ListTile_style]: null,
        [ListTile_textColor]: null,
        [ListTile_iconColor]: null,
        [ListTile_selectedColor]: null,
        [ListTile_shape]: null,
        [ListTile_visualDensity]: null,
        [ListTile_dense]: null,
        [ListTile_isThreeLine]: false,
        [ListTile_trailing]: null,
        [ListTile_subtitle]: null,
        [ListTile_title]: C[18] || CT.C18,
        [ListTile_leading]: null
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Третья строка"
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: list_tile.ListTile.prototype,
        [Widget_key]: null,
        [ListTile_minLeadingWidth]: null,
        [ListTile_minVerticalPadding]: null,
        [ListTile_horizontalTitleGap]: null,
        [ListTile_enableFeedback]: null,
        [ListTile_selectedTileColor]: null,
        [ListTile_tileColor]: null,
        [ListTile_autofocus]: false,
        [ListTile_focusNode]: null,
        [ListTile_splashColor]: null,
        [ListTile_hoverColor]: null,
        [ListTile_focusColor]: null,
        [ListTile_selected]: false,
        [ListTile_mouseCursor]: null,
        [ListTile_onFocusChange]: null,
        [ListTile_onLongPress]: null,
        [ListTile_onTap]: null,
        [ListTile_enabled]: true,
        [ListTile_contentPadding]: null,
        [ListTile_style]: null,
        [ListTile_textColor]: null,
        [ListTile_iconColor]: null,
        [ListTile_selectedColor]: null,
        [ListTile_shape]: null,
        [ListTile_visualDensity]: null,
        [ListTile_dense]: null,
        [ListTile_isThreeLine]: false,
        [ListTile_trailing]: null,
        [ListTile_subtitle]: null,
        [ListTile_title]: C[20] || CT.C20,
        [ListTile_leading]: null
      });
    },
    get C13() {
      return C[13] = dart.constList([C[14] || CT.C14, C[16] || CT.C16, C[17] || CT.C17, C[16] || CT.C16, C[19] || CT.C19], framework.Widget);
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Выбор"
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Да"
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Нет"
      });
    }
  }, false);
  var C = Array(24).fill(void 0);
  var I = [
    "file:///zapp/project/lib/main.dart",
    "file:///zapp/project/lib/screens/home_screen.dart",
    "file:///zapp/project/lib/screens/simple_list_screen.dart",
    "file:///zapp/project/lib/screens/infinity_list_screen.dart",
    "file:///zapp/project/lib/screens/infinity_math_screen.dart",
    "file:///zapp/project/lib/screens/choice_screen.dart"
  ];
  $46zapp_entry.runAppGuarded = function runAppGuarded() {
    async.runZonedGuarded(core.Null, dart.fn(() => {
      if (T.ListOfStringTodynamic().is(C[0] || CT.C0)) {
        T.ListOfStringTodynamic().as(C[0] || CT.C0)(T.JSArrayOfString().of([]));
      } else {
        (C[0] || CT.C0)();
      }
      if (js.context.hasProperty("__notifyFlutterRendered")) {
        async.Future.delayed(new core.Duration.new({milliseconds: 250})).then(core.Null, dart.fn(_ => {
          js.context.callMethod("__notifyFlutterRendered", [false]);
        }, T.dynamicToNull()));
      }
    }, T.VoidToNull()), dart.fn((e, stackTrace) => {
      if (js.context.hasProperty("zappHandlerUserError")) {
        js.context.callMethod("zappHandlerUserError", [e[$toString](), stackTrace.toString()]);
      }
    }, T.ObjectAndStackTraceTovoid()), {zoneSpecification: new async._ZoneSpecification.new({print: dart.fn((self, parent, zone, line) => {
          if (js.context.hasProperty("zappHandlerUserPrint")) {
            js.context.callMethod("zappHandlerUserPrint", [line]);
          }
        }, T.ZoneAndZoneDelegateAndZone__Tovoid())})});
  };
  $46zapp_entry.main = function main$() {
    return async.async(dart.void, function* main() {
      yield ui.webOnlyWarmupEngine({runApp: dart.fn(() => {
          $46zapp_entry.runAppGuarded();
        }, T.VoidToNull()), registerPlugins: dart.fn(() => {
          web_plugin_registrant.registerPlugins();
        }, T.VoidToNull())});
    });
  };
  var Widget_key = dart.privateName(framework, "Widget.key");
  main.MyApp = class MyApp extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new main.MyApp.new({key: key});
    }
    build(context) {
      return new app.MaterialApp.new({title: "Объединенная работа", initialRoute: "/", routes: new (T.IdentityMapOfString$BuildContextToWidget()).from(["/", dart.fn(context => C[1] || CT.C1, T.BuildContextToHomeScreen()), "/simple", dart.fn(context => C[2] || CT.C2, T.BuildContextToSimpleListScreen()), "/infinity", dart.fn(context => C[3] || CT.C3, T.BuildContextToInfinityListScreen()), "/math", dart.fn(context => C[4] || CT.C4, T.BuildContextToInfinityMathScreen()), "/choice", dart.fn(context => C[5] || CT.C5, T.BuildContextToChoiceScreen())])});
    }
  };
  (main.MyApp.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    main.MyApp.__proto__.new.call(this, {key: key});
    ;
  }).prototype = main.MyApp.prototype;
  dart.addTypeTests(main.MyApp);
  dart.addTypeCaches(main.MyApp);
  dart.setMethodSignature(main.MyApp, () => ({
    __proto__: dart.getMethods(main.MyApp.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main.MyApp, I[0]);
  main.main = function main$0() {
    return binding.runApp(C[6] || CT.C6);
  };
  web_plugin_registrant.registerPlugins = function registerPlugins() {
  };
  var Text_selectionColor = dart.privateName(text, "Text.selectionColor");
  var Text_textHeightBehavior = dart.privateName(text, "Text.textHeightBehavior");
  var Text_textWidthBasis = dart.privateName(text, "Text.textWidthBasis");
  var Text_semanticsLabel = dart.privateName(text, "Text.semanticsLabel");
  var Text_maxLines = dart.privateName(text, "Text.maxLines");
  var Text_textScaleFactor = dart.privateName(text, "Text.textScaleFactor");
  var Text_overflow = dart.privateName(text, "Text.overflow");
  var Text_softWrap = dart.privateName(text, "Text.softWrap");
  var Text_locale = dart.privateName(text, "Text.locale");
  var Text_textDirection = dart.privateName(text, "Text.textDirection");
  var Text_textAlign = dart.privateName(text, "Text.textAlign");
  var Text_strutStyle = dart.privateName(text, "Text.strutStyle");
  var Text_style = dart.privateName(text, "Text.style");
  var Text_textSpan = dart.privateName(text, "Text.textSpan");
  var Text_data = dart.privateName(text, "Text.data");
  var SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  var SizedBox_height = dart.privateName(basic, "SizedBox.height");
  var SizedBox_width = dart.privateName(basic, "SizedBox.width");
  home_screen.HomeScreen = class HomeScreen extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new home_screen.HomeScreen.new({key: key});
    }
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: C[7] || CT.C7}), body: new basic.Center.new({child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: T.JSArrayOfWidget().of([new elevated_button.ElevatedButton.new({child: C[8] || CT.C8, onPressed: dart.fn(() => navigator.Navigator.pushNamed(T.ObjectN(), context, "/simple"), T.VoidTovoid())}), C[9] || CT.C9, new elevated_button.ElevatedButton.new({child: C[10] || CT.C10, onPressed: dart.fn(() => navigator.Navigator.pushNamed(T.ObjectN(), context, "/infinity"), T.VoidTovoid())}), C[9] || CT.C9, new elevated_button.ElevatedButton.new({child: C[11] || CT.C11, onPressed: dart.fn(() => navigator.Navigator.pushNamed(T.ObjectN(), context, "/math"), T.VoidTovoid())}), C[9] || CT.C9, new elevated_button.ElevatedButton.new({child: C[12] || CT.C12, onPressed: dart.fn(() => async.async(dart.void, function*() {
                  let result = (yield navigator.Navigator.pushNamed(T.ObjectN(), context, "/choice"));
                  if (result != null) {
                    scaffold.ScaffoldMessenger.of(context).showSnackBar(new snack_bar.SnackBar.new({content: new text.Text.new("Вы выбрали: " + dart.str(result))}));
                  }
                }), T.VoidToFutureOfvoid())})])})})});
    }
  };
  (home_screen.HomeScreen.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    home_screen.HomeScreen.__proto__.new.call(this, {key: key});
    ;
  }).prototype = home_screen.HomeScreen.prototype;
  dart.addTypeTests(home_screen.HomeScreen);
  dart.addTypeCaches(home_screen.HomeScreen);
  dart.setMethodSignature(home_screen.HomeScreen, () => ({
    __proto__: dart.getMethods(home_screen.HomeScreen.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(home_screen.HomeScreen, I[1]);
  var ListTile_minLeadingWidth = dart.privateName(list_tile, "ListTile.minLeadingWidth");
  var ListTile_minVerticalPadding = dart.privateName(list_tile, "ListTile.minVerticalPadding");
  var ListTile_horizontalTitleGap = dart.privateName(list_tile, "ListTile.horizontalTitleGap");
  var ListTile_enableFeedback = dart.privateName(list_tile, "ListTile.enableFeedback");
  var ListTile_selectedTileColor = dart.privateName(list_tile, "ListTile.selectedTileColor");
  var ListTile_tileColor = dart.privateName(list_tile, "ListTile.tileColor");
  var ListTile_autofocus = dart.privateName(list_tile, "ListTile.autofocus");
  var ListTile_focusNode = dart.privateName(list_tile, "ListTile.focusNode");
  var ListTile_splashColor = dart.privateName(list_tile, "ListTile.splashColor");
  var ListTile_hoverColor = dart.privateName(list_tile, "ListTile.hoverColor");
  var ListTile_focusColor = dart.privateName(list_tile, "ListTile.focusColor");
  var ListTile_selected = dart.privateName(list_tile, "ListTile.selected");
  var ListTile_mouseCursor = dart.privateName(list_tile, "ListTile.mouseCursor");
  var ListTile_onFocusChange = dart.privateName(list_tile, "ListTile.onFocusChange");
  var ListTile_onLongPress = dart.privateName(list_tile, "ListTile.onLongPress");
  var ListTile_onTap = dart.privateName(list_tile, "ListTile.onTap");
  var ListTile_enabled = dart.privateName(list_tile, "ListTile.enabled");
  var ListTile_contentPadding = dart.privateName(list_tile, "ListTile.contentPadding");
  var ListTile_style = dart.privateName(list_tile, "ListTile.style");
  var ListTile_textColor = dart.privateName(list_tile, "ListTile.textColor");
  var ListTile_iconColor = dart.privateName(list_tile, "ListTile.iconColor");
  var ListTile_selectedColor = dart.privateName(list_tile, "ListTile.selectedColor");
  var ListTile_shape = dart.privateName(list_tile, "ListTile.shape");
  var ListTile_visualDensity = dart.privateName(list_tile, "ListTile.visualDensity");
  var ListTile_dense = dart.privateName(list_tile, "ListTile.dense");
  var ListTile_isThreeLine = dart.privateName(list_tile, "ListTile.isThreeLine");
  var ListTile_trailing = dart.privateName(list_tile, "ListTile.trailing");
  var ListTile_subtitle = dart.privateName(list_tile, "ListTile.subtitle");
  var ListTile_title = dart.privateName(list_tile, "ListTile.title");
  var ListTile_leading = dart.privateName(list_tile, "ListTile.leading");
  var Divider_color = dart.privateName(divider, "Divider.color");
  var Divider_endIndent = dart.privateName(divider, "Divider.endIndent");
  var Divider_indent = dart.privateName(divider, "Divider.indent");
  var Divider_thickness = dart.privateName(divider, "Divider.thickness");
  var Divider_height = dart.privateName(divider, "Divider.height");
  simple_list_screen.SimpleListScreen = class SimpleListScreen extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new simple_list_screen.SimpleListScreen.new({key: key});
    }
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: C[8] || CT.C8}), body: new scroll_view.ListView.new({children: C[13] || CT.C13})});
    }
  };
  (simple_list_screen.SimpleListScreen.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    simple_list_screen.SimpleListScreen.__proto__.new.call(this, {key: key});
    ;
  }).prototype = simple_list_screen.SimpleListScreen.prototype;
  dart.addTypeTests(simple_list_screen.SimpleListScreen);
  dart.addTypeCaches(simple_list_screen.SimpleListScreen);
  dart.setMethodSignature(simple_list_screen.SimpleListScreen, () => ({
    __proto__: dart.getMethods(simple_list_screen.SimpleListScreen.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(simple_list_screen.SimpleListScreen, I[2]);
  infinity_list_screen.InfinityListScreen = class InfinityListScreen extends framework.StatefulWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new infinity_list_screen.InfinityListScreen.new({key: key});
    }
    createState() {
      return new infinity_list_screen._InfinityListScreenState.new();
    }
  };
  (infinity_list_screen.InfinityListScreen.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    infinity_list_screen.InfinityListScreen.__proto__.new.call(this, {key: key});
    ;
  }).prototype = infinity_list_screen.InfinityListScreen.prototype;
  dart.addTypeTests(infinity_list_screen.InfinityListScreen);
  dart.addTypeCaches(infinity_list_screen.InfinityListScreen);
  dart.setMethodSignature(infinity_list_screen.InfinityListScreen, () => ({
    __proto__: dart.getMethods(infinity_list_screen.InfinityListScreen.__proto__),
    createState: dart.fnType(framework.State$(infinity_list_screen.InfinityListScreen), [])
  }));
  dart.setLibraryUri(infinity_list_screen.InfinityListScreen, I[3]);
  var _items = dart.privateName(infinity_list_screen, "_items");
  infinity_list_screen._InfinityListScreenState = class _InfinityListScreenState extends framework.State$(infinity_list_screen.InfinityListScreen) {
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: C[10] || CT.C10}), body: new scroll_view.ListView.builder({itemBuilder: dart.fn((context, i) => {
            if (i[$isOdd]) return C[16] || CT.C16;
            let index = (i / 2)[$truncate]();
            if (index >= this[_items][$length]) {
              this[_items][$addAll](T.JSArrayOfString().of(["Строка " + dart.str(index), "Строка " + dart.str(index + 1)]));
            }
            return new list_tile.ListTile.new({title: new text.Text.new(this[_items][$_get](index))});
          }, T.BuildContextAndintToStatelessWidget())})});
    }
    static ['_#new#tearOff']() {
      return new infinity_list_screen._InfinityListScreenState.new();
    }
  };
  (infinity_list_screen._InfinityListScreenState.new = function() {
    this[_items] = T.JSArrayOfString().of([]);
    infinity_list_screen._InfinityListScreenState.__proto__.new.call(this);
    ;
  }).prototype = infinity_list_screen._InfinityListScreenState.prototype;
  dart.addTypeTests(infinity_list_screen._InfinityListScreenState);
  dart.addTypeCaches(infinity_list_screen._InfinityListScreenState);
  dart.setMethodSignature(infinity_list_screen._InfinityListScreenState, () => ({
    __proto__: dart.getMethods(infinity_list_screen._InfinityListScreenState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(infinity_list_screen._InfinityListScreenState, I[3]);
  dart.setFieldSignature(infinity_list_screen._InfinityListScreenState, () => ({
    __proto__: dart.getFields(infinity_list_screen._InfinityListScreenState.__proto__),
    [_items]: dart.finalFieldType(core.List$(core.String))
  }));
  infinity_math_screen.InfinityMathScreen = class InfinityMathScreen extends framework.StatefulWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new infinity_math_screen.InfinityMathScreen.new({key: key});
    }
    createState() {
      return new infinity_math_screen._InfinityMathScreenState.new();
    }
  };
  (infinity_math_screen.InfinityMathScreen.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    infinity_math_screen.InfinityMathScreen.__proto__.new.call(this, {key: key});
    ;
  }).prototype = infinity_math_screen.InfinityMathScreen.prototype;
  dart.addTypeTests(infinity_math_screen.InfinityMathScreen);
  dart.addTypeCaches(infinity_math_screen.InfinityMathScreen);
  dart.setMethodSignature(infinity_math_screen.InfinityMathScreen, () => ({
    __proto__: dart.getMethods(infinity_math_screen.InfinityMathScreen.__proto__),
    createState: dart.fnType(framework.State$(infinity_math_screen.InfinityMathScreen), [])
  }));
  dart.setLibraryUri(infinity_math_screen.InfinityMathScreen, I[4]);
  var _items$ = dart.privateName(infinity_math_screen, "_items");
  infinity_math_screen._InfinityMathScreenState = class _InfinityMathScreenState extends framework.State$(infinity_math_screen.InfinityMathScreen) {
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: C[11] || CT.C11}), body: new scroll_view.ListView.builder({itemBuilder: dart.fn((context, i) => {
            if (i[$isOdd]) return C[16] || CT.C16;
            let index = (i / 2)[$truncate]();
            if (index >= this[_items$][$length]) {
              this[_items$][$addAll](T.JSArrayOfString().of(["2^" + dart.str(index) + " = " + dart.str(math.pow(2, index)), "2^" + dart.str(index + 1) + " = " + dart.str(math.pow(2, index + 1))]));
            }
            return new list_tile.ListTile.new({title: new text.Text.new(this[_items$][$_get](index))});
          }, T.BuildContextAndintToStatelessWidget())})});
    }
    static ['_#new#tearOff']() {
      return new infinity_math_screen._InfinityMathScreenState.new();
    }
  };
  (infinity_math_screen._InfinityMathScreenState.new = function() {
    this[_items$] = T.JSArrayOfString().of([]);
    infinity_math_screen._InfinityMathScreenState.__proto__.new.call(this);
    ;
  }).prototype = infinity_math_screen._InfinityMathScreenState.prototype;
  dart.addTypeTests(infinity_math_screen._InfinityMathScreenState);
  dart.addTypeCaches(infinity_math_screen._InfinityMathScreenState);
  dart.setMethodSignature(infinity_math_screen._InfinityMathScreenState, () => ({
    __proto__: dart.getMethods(infinity_math_screen._InfinityMathScreenState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(infinity_math_screen._InfinityMathScreenState, I[4]);
  dart.setFieldSignature(infinity_math_screen._InfinityMathScreenState, () => ({
    __proto__: dart.getFields(infinity_math_screen._InfinityMathScreenState.__proto__),
    [_items$]: dart.finalFieldType(core.List$(core.String))
  }));
  choice_screen.ChoiceScreen = class ChoiceScreen extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new choice_screen.ChoiceScreen.new({key: key});
    }
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: C[21] || CT.C21}), body: new basic.Center.new({child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: T.JSArrayOfWidget().of([new elevated_button.ElevatedButton.new({onPressed: dart.fn(() => navigator.Navigator.pop(core.String, context, "Да"), T.VoidTovoid()), child: C[22] || CT.C22}), new elevated_button.ElevatedButton.new({onPressed: dart.fn(() => navigator.Navigator.pop(core.String, context, "Нет"), T.VoidTovoid()), child: C[23] || CT.C23})])})})});
    }
  };
  (choice_screen.ChoiceScreen.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    choice_screen.ChoiceScreen.__proto__.new.call(this, {key: key});
    ;
  }).prototype = choice_screen.ChoiceScreen.prototype;
  dart.addTypeTests(choice_screen.ChoiceScreen);
  dart.addTypeCaches(choice_screen.ChoiceScreen);
  dart.setMethodSignature(choice_screen.ChoiceScreen, () => ({
    __proto__: dart.getMethods(choice_screen.ChoiceScreen.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(choice_screen.ChoiceScreen, I[5]);
  dart.trackLibraries("zapp_user_main", {
    "file:///zapp/project/.zapp_entry.dart": $46zapp_entry,
    "file:///zapp/project/lib/main.dart": main,
    "file:///zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart": web_plugin_registrant,
    "file:///zapp/project/lib/screens/home_screen.dart": home_screen,
    "file:///zapp/project/lib/screens/simple_list_screen.dart": simple_list_screen,
    "file:///zapp/project/lib/screens/infinity_list_screen.dart": infinity_list_screen,
    "file:///zapp/project/lib/screens/infinity_math_screen.dart": infinity_math_screen,
    "file:///zapp/project/lib/screens/choice_screen.dart": choice_screen
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["/zapp/project/.zapp_entry.dart","/zapp/project/lib/main.dart","/zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart","/zapp/project/lib/screens/home_screen.dart","/zapp/project/lib/screens/simple_list_screen.dart","/zapp/project/lib/screens/infinity_list_screen.dart","/zapp/project/lib/screens/infinity_math_screen.dart","/zapp/project/lib/screens/choice_screen.dart"],"names":[],"mappings":"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","file":"main.js"}');
  // Exports:
  return {
    zapp__project__$46zapp_entry: $46zapp_entry,
    zapp__project__lib__main: main,
    zapp__project__$46dart_tool__dartpad__web_plugin_registrant: web_plugin_registrant,
    zapp__project__lib__screens__home_screen: home_screen,
    zapp__project__lib__screens__simple_list_screen: simple_list_screen,
    zapp__project__lib__screens__infinity_list_screen: infinity_list_screen,
    zapp__project__lib__screens__infinity_math_screen: infinity_math_screen,
    zapp__project__lib__screens__choice_screen: choice_screen
  };
}));

//# sourceMappingURL=main.js.map
