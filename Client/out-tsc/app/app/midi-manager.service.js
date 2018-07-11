var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
var MidiManagerService = /** @class */ (function () {
    function MidiManagerService() {
        var _this = this;
        if (navigator['requestMIDIAccess']) {
            console.log('This browser supports WebMIDI!');
        }
        else {
            console.log('WebMIDI is not supported in this browser.');
        }
        navigator.requestMIDIAccess().then(function (m) { _this.onMIDISuccess(m); }, function (m) { _this.onMIDIFailure(m); });
    }
    MidiManagerService.prototype.onMIDISuccess = function (access) {
    };
    MidiManagerService.prototype.onMIDIFailure = function (access) {
    };
    MidiManagerService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], MidiManagerService);
    return MidiManagerService;
}());
export { MidiManagerService };
//# sourceMappingURL=midi-manager.service.js.map