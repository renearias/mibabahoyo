import { join } from 'path';

import { SeedConfig } from './seed.config';
// import { ExtendPackages } from './seed.config.interfaces';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export class ProjectConfig extends SeedConfig {

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');

  constructor() {
    super();
    this.APP_TITLE = 'Mi Babahoyo encuentra trabajo y encuentra personal';

    this.ENABLE_SCSS = 1;

    /* Enable typeless compiler runs (faster) between typed compiler runs. */
    // this.TYPED_COMPILE_INTERVAL = 5;

    // Add `NPM` third-party libraries to be injected/bundled.
    this.NPM_DEPENDENCIES = [
      ...this.NPM_DEPENDENCIES,
      /* Materialize css*/
     // {src: 'materialize-css/dist/css/materialize.min.css', inject: true},
      /* Select a pre-built Material theme */
      //{src: '@angular/material/core/theming/prebuilt/materialize.min.css', inject: true},

      /* HammerJS is required if the app uses certain Material components (eg: md-slider and md-slide-toggle) */
      //{src: 'hammerjs/hammer.min.js', inject: 'libs'},

      // {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
      // {src: 'lodash/lodash.min.js', inject: 'libs'},
    ];

    // Add `local` third-party libraries to be injected/bundled.
    this.APP_ASSETS = [
      ...this.APP_ASSETS,
      // {src: `${this.APP_SRC}/your-path-to-lib/libs/jquery-ui.js`, inject: true, vendor: false}
      // {src: `${this.CSS_SRC}/path-to-lib/test-lib.css`, inject: true, vendor: false},
    ];


   // Add Firebase configuration to SystemJS
    this.addPackageBundles({
      name: 'firebase',
      path: 'node_modules/firebase/',
      packageMeta: {
        main: 'firebase.js',
        defaultExtension: 'js'
      }
    });

    // Add AngularFire configuration to SystemJS
    this.addPackageBundles({
      name: 'angularfire2',
      path: 'node_modules/angularfire2/bundles/angularfire2.umd.js',
      packageMeta: {
        main: 'angularfire2.js',
        defaultExtension: 'js'
      }
    });

    // add flex-layout configuration to SystemJS.
    this.addPackageBundles({
      name:'@angular/flex-layout',
      path:'node_modules/@angular/flex-layout/bundles/flex-layout.umd.js',
      packageMeta:{
        main: 'index.js',
        defaultExtension: 'js'
      }
    });

    // add Material configuration to SystemJS.
    this.addPackageBundles({
      name:'@angular/material',
      path:'node_modules/@angular/material/bundles/material.umd.js',
      packageMeta:{
        main: 'index.js',
        defaultExtension: 'js'
      }
    });

    // Add packages (e.g. ng2-translate)
    // let additionalPackages: ExtendPackages[] = [{
    //   name: 'ng2-translate',
    //   // Path to the package's bundle
    //   path: 'node_modules/ng2-translate/bundles/ng2-translate.umd.js'
    // }];
    //
    // this.addPackagesBundles(additionalPackages);

    /* Add to or override NPM module configurations: */
    // this.mergeObject(this.PLUGIN_CONFIGS['browser-sync'], { ghostMode: false });
  }

}
