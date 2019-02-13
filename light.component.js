"use strict";

const light = {
    template: `
    <section class = "container" ng-class="{ lighton: $ctrl.isOn }">
        <light-switch
        on-flip="$ctrl.onFlip()"></lightSwitch>
    </section>
    `,
    controller: [function(){
        const vm = this
        vm.isOn = true
        vm.onFlip = function (){
            console.log('works')
            vm.isOn = !vm.isOn
        }
    }]
}


angular
    .module("LightApp")
    .component("light", light)