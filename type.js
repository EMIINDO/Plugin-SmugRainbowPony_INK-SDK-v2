"use strict";

{
    const SDK = globalThis.SDK;

    const PLUGIN_CLASS = SDK.Plugins.SmugRainbowPony_INK;

    PLUGIN_CLASS.Type = class InkType extends SDK.ITypeBase {
        constructor(sdkPlugin, iObjectType) {
            super(sdkPlugin, iObjectType);
        }
    };
}