require("source-map-support").install();
(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apps/api/src/app/app.controller.ts":
/*!********************************************!*\
  !*** ./apps/api/src/app/app.controller.ts ***!
  \********************************************/
/*! exports provided: AppController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppController", function() { return AppController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.service */ "./apps/api/src/app/app.service.ts");



var AppController = /** @class */ (function () {
    function AppController(appService) {
        this.appService = appService;
    }
    AppController.prototype.getData = function () {
        return this.appService.getData();
    };
    AppController.prototype.addTodo = function () {
        return this.appService.addTodo();
    };
    var _a;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('todos'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AppController.prototype, "getData", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])('addTodo'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AppController.prototype, "addTodo", null);
    AppController = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [typeof (_a = typeof _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] !== "undefined" && _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]) === "function" ? _a : Object])
    ], AppController);
    return AppController;
}());



/***/ }),

/***/ "./apps/api/src/app/app.module.ts":
/*!****************************************!*\
  !*** ./apps/api/src/app/app.module.ts ***!
  \****************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.controller */ "./apps/api/src/app/app.controller.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.service */ "./apps/api/src/app/app.service.ts");
/* harmony import */ var _employees_employee_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employees/employee.module */ "./apps/api/src/app/employees/employee.module.ts");
/* harmony import */ var _department_department_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./department/department.module */ "./apps/api/src/app/department/department.module.ts");
/* harmony import */ var _assignment_assignment_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assignment/assignment.module */ "./apps/api/src/app/assignment/assignment.module.ts");
/* harmony import */ var _position_position_entity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./position/position.entity */ "./apps/api/src/app/position/position.entity.ts");
/* harmony import */ var _position_position_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./position/position.module */ "./apps/api/src/app/position/position.module.ts");
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _employees_employee_entity__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./employees/employee.entity */ "./apps/api/src/app/employees/employee.entity.ts");
/* harmony import */ var _department_department_entity__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./department/department.entity */ "./apps/api/src/app/department/department.entity.ts");
/* harmony import */ var _assignment_assignment_entity__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assignment/assignment.entity */ "./apps/api/src/app/assignment/assignment.entity.ts");














var AppModule = /** @class */ (function () {
    function AppModule(connection) {
        this.connection = connection;
    }
    var _a;
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
            imports: [
                _employees_employee_module__WEBPACK_IMPORTED_MODULE_4__["EmployeeModule"],
                _department_department_module__WEBPACK_IMPORTED_MODULE_5__["DepartmentModule"],
                _assignment_assignment_module__WEBPACK_IMPORTED_MODULE_6__["AssignmentModule"],
                _position_position_module__WEBPACK_IMPORTED_MODULE_8__["PositionModule"],
                _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_9__["TypeOrmModule"].forRoot({
                    "type": "postgres",
                    "host": "192.168.136.84",
                    "port": 5432,
                    "username": "postgres",
                    "password": "123456",
                    "database": "postgres",
                    "entities": [_employees_employee_entity__WEBPACK_IMPORTED_MODULE_11__["Employee"], _department_department_entity__WEBPACK_IMPORTED_MODULE_12__["Department"], _position_position_entity__WEBPACK_IMPORTED_MODULE_7__["Position"], _assignment_assignment_entity__WEBPACK_IMPORTED_MODULE_13__["Assignment"]],
                    "synchronize": true,
                    "logging": false
                }),
            ],
            controllers: [_app_controller__WEBPACK_IMPORTED_MODULE_2__["AppController"]],
            providers: [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [typeof (_a = typeof typeorm__WEBPACK_IMPORTED_MODULE_10__["Connection"] !== "undefined" && typeorm__WEBPACK_IMPORTED_MODULE_10__["Connection"]) === "function" ? _a : Object])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./apps/api/src/app/app.service.ts":
/*!*****************************************!*\
  !*** ./apps/api/src/app/app.service.ts ***!
  \*****************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);


var AppService = /** @class */ (function () {
    function AppService() {
        this.todos = [{ title: 'Todo 1' }, { title: 'Todo 2' }];
    }
    AppService.prototype.getData = function () {
        return this.todos;
    };
    AppService.prototype.addTodo = function () {
        this.todos.push({
            title: "New todo " + Math.floor(Math.random() * 1000)
        });
    };
    AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./apps/api/src/app/assignment/Assignment.entity.ts":
/*!**********************************************************!*\
  !*** ./apps/api/src/app/assignment/Assignment.entity.ts ***!
  \**********************************************************/
/*! exports provided: Assignment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Assignment", function() { return Assignment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_1__);


var Assignment = /** @class */ (function () {
    function Assignment() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["PrimaryColumn"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], Assignment.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], Assignment.prototype, "idEmployee", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], Assignment.prototype, "idDepartmentName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], Assignment.prototype, "idPosition", void 0);
    Assignment = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Entity"])('assignment')
    ], Assignment);
    return Assignment;
}());



/***/ }),

/***/ "./apps/api/src/app/assignment/assignment.controller.ts":
/*!**************************************************************!*\
  !*** ./apps/api/src/app/assignment/assignment.controller.ts ***!
  \**************************************************************/
/*! exports provided: assignmentController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignmentController", function() { return assignmentController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assignment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assignment.service */ "./apps/api/src/app/assignment/assignment.service.ts");
/* harmony import */ var _assignment_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assignment.entity */ "./apps/api/src/app/assignment/assignment.entity.ts");




var assignmentController = /** @class */ (function () {
    function assignmentController(assignmentService) {
        this.assignmentService = assignmentService;
    }
    assignmentController.prototype.index = function () {
        return this.assignmentService.findAll();
    };
    assignmentController.prototype.create = function (employData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, Promise, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.assignmentService.create(employData)];
            });
        });
    };
    /* @Put(':id/update')
     async update(@Param('id') id, @Body() emloyData: Assignment): Promise<any> {
         emloyData.idassignment = id;
         console.log('Update #' +  emloyData.idassignment)
         return this.assignmentService.update( emloyData);
     }*/
    assignmentController.prototype.delete = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, Promise, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.assignmentService.delete(id)];
            });
        });
    };
    var _a, _b, _c, _d, _e;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
    ], assignmentController.prototype, "index", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])('create'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [typeof (_b = typeof _assignment_entity__WEBPACK_IMPORTED_MODULE_3__["Assignment"] !== "undefined" && _assignment_entity__WEBPACK_IMPORTED_MODULE_3__["Assignment"]) === "function" ? _b : Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
    ], assignmentController.prototype, "create", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Delete"])(':id/delete'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('id')),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
    ], assignmentController.prototype, "delete", null);
    assignmentController = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])('assignment'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [typeof (_e = typeof _assignment_service__WEBPACK_IMPORTED_MODULE_2__["AssignmentService"] !== "undefined" && _assignment_service__WEBPACK_IMPORTED_MODULE_2__["AssignmentService"]) === "function" ? _e : Object])
    ], assignmentController);
    return assignmentController;
}());



/***/ }),

/***/ "./apps/api/src/app/assignment/assignment.entity.ts":
/*!**********************************************************!*\
  !*** ./apps/api/src/app/assignment/assignment.entity.ts ***!
  \**********************************************************/
/*! exports provided: Assignment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Assignment", function() { return Assignment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_1__);


var Assignment = /** @class */ (function () {
    function Assignment() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["PrimaryColumn"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], Assignment.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], Assignment.prototype, "idEmployee", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], Assignment.prototype, "idDepartmentName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], Assignment.prototype, "idPosition", void 0);
    Assignment = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Entity"])('assignment')
    ], Assignment);
    return Assignment;
}());



/***/ }),

/***/ "./apps/api/src/app/assignment/assignment.module.ts":
/*!**********************************************************!*\
  !*** ./apps/api/src/app/assignment/assignment.module.ts ***!
  \**********************************************************/
/*! exports provided: AssignmentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentModule", function() { return AssignmentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assignment_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assignment.entity */ "./apps/api/src/app/assignment/assignment.entity.ts");
/* harmony import */ var _assignment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assignment.service */ "./apps/api/src/app/assignment/assignment.service.ts");
/* harmony import */ var _assignment_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assignment.controller */ "./apps/api/src/app/assignment/assignment.controller.ts");






var AssignmentModule = /** @class */ (function () {
    function AssignmentModule() {
    }
    AssignmentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
            imports: [_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__["TypeOrmModule"].forFeature([_assignment_entity__WEBPACK_IMPORTED_MODULE_3__["Assignment"]])],
            providers: [_assignment_service__WEBPACK_IMPORTED_MODULE_4__["AssignmentService"]],
            controllers: [_assignment_controller__WEBPACK_IMPORTED_MODULE_5__["assignmentController"]],
        })
    ], AssignmentModule);
    return AssignmentModule;
}());



/***/ }),

/***/ "./apps/api/src/app/assignment/assignment.service.ts":
/*!***********************************************************!*\
  !*** ./apps/api/src/app/assignment/assignment.service.ts ***!
  \***********************************************************/
/*! exports provided: AssignmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentService", function() { return AssignmentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Assignment_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Assignment.entity */ "./apps/api/src/app/assignment/Assignment.entity.ts");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_4__);





var AssignmentService = /** @class */ (function () {
    function AssignmentService(AssignmentRepository) {
        this.AssignmentRepository = AssignmentRepository;
    }
    AssignmentService.prototype.findAll = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.AssignmentRepository.find()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AssignmentService.prototype.create = function (Assignment) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, Promise, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.AssignmentRepository.save(Assignment)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AssignmentService.prototype.delete = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, Promise, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.AssignmentRepository.delete(id)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    var _a;
    AssignmentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__["InjectRepository"])(_Assignment_entity__WEBPACK_IMPORTED_MODULE_3__["Assignment"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [typeof (_a = typeof typeorm__WEBPACK_IMPORTED_MODULE_4__["Repository"] !== "undefined" && typeorm__WEBPACK_IMPORTED_MODULE_4__["Repository"]) === "function" ? _a : Object])
    ], AssignmentService);
    return AssignmentService;
}());



/***/ }),

/***/ "./apps/api/src/app/department/department.controller.ts":
/*!**************************************************************!*\
  !*** ./apps/api/src/app/department/department.controller.ts ***!
  \**************************************************************/
/*! exports provided: DepartmentController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentController", function() { return DepartmentController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _department_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./department.service */ "./apps/api/src/app/department/department.service.ts");
/* harmony import */ var _department_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./department.entity */ "./apps/api/src/app/department/department.entity.ts");




var DepartmentController = /** @class */ (function () {
    function DepartmentController(departmentService) {
        this.departmentService = departmentService;
    }
    DepartmentController.prototype.index = function () {
        return this.departmentService.findAll();
    };
    DepartmentController.prototype.create = function (employData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, Promise, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.departmentService.create(employData)];
            });
        });
    };
    DepartmentController.prototype.update = function (id, deparData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, Promise, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                deparData.idDepartment = id;
                console.log('Update #' + deparData.idDepartment);
                return [2 /*return*/, this.departmentService.update(deparData)];
            });
        });
    };
    DepartmentController.prototype.delete = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, Promise, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.departmentService.delete(id)];
            });
        });
    };
    var _a, _b, _c, _d, _e, _f, _g;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
    ], DepartmentController.prototype, "index", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])('create'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [typeof (_b = typeof _department_entity__WEBPACK_IMPORTED_MODULE_3__["Department"] !== "undefined" && _department_entity__WEBPACK_IMPORTED_MODULE_3__["Department"]) === "function" ? _b : Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
    ], DepartmentController.prototype, "create", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Put"])(':id/update'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('id')), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, typeof (_d = typeof _department_entity__WEBPACK_IMPORTED_MODULE_3__["Department"] !== "undefined" && _department_entity__WEBPACK_IMPORTED_MODULE_3__["Department"]) === "function" ? _d : Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
    ], DepartmentController.prototype, "update", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Delete"])(':id/delete'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('id')),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
    ], DepartmentController.prototype, "delete", null);
    DepartmentController = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])('department'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [typeof (_g = typeof _department_service__WEBPACK_IMPORTED_MODULE_2__["DepartmentService"] !== "undefined" && _department_service__WEBPACK_IMPORTED_MODULE_2__["DepartmentService"]) === "function" ? _g : Object])
    ], DepartmentController);
    return DepartmentController;
}());



/***/ }),

/***/ "./apps/api/src/app/department/department.entity.ts":
/*!**********************************************************!*\
  !*** ./apps/api/src/app/department/department.entity.ts ***!
  \**********************************************************/
/*! exports provided: Department */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Department", function() { return Department; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_1__);


var Department = /** @class */ (function () {
    function Department() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["PrimaryColumn"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], Department.prototype, "idDepartment", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('text'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Department.prototype, "NameDepartment", void 0);
    Department = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Entity"])('department')
    ], Department);
    return Department;
}());



/***/ }),

/***/ "./apps/api/src/app/department/department.module.ts":
/*!**********************************************************!*\
  !*** ./apps/api/src/app/department/department.module.ts ***!
  \**********************************************************/
/*! exports provided: DepartmentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentModule", function() { return DepartmentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _department_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./department.entity */ "./apps/api/src/app/department/department.entity.ts");
/* harmony import */ var _department_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./department.service */ "./apps/api/src/app/department/department.service.ts");
/* harmony import */ var _department_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./department.controller */ "./apps/api/src/app/department/department.controller.ts");






var DepartmentModule = /** @class */ (function () {
    function DepartmentModule() {
    }
    DepartmentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
            imports: [_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__["TypeOrmModule"].forFeature([_department_entity__WEBPACK_IMPORTED_MODULE_3__["Department"]])],
            providers: [_department_service__WEBPACK_IMPORTED_MODULE_4__["DepartmentService"]],
            controllers: [_department_controller__WEBPACK_IMPORTED_MODULE_5__["DepartmentController"]],
        })
    ], DepartmentModule);
    return DepartmentModule;
}());



/***/ }),

/***/ "./apps/api/src/app/department/department.service.ts":
/*!***********************************************************!*\
  !*** ./apps/api/src/app/department/department.service.ts ***!
  \***********************************************************/
/*! exports provided: DepartmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentService", function() { return DepartmentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _department_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./department.entity */ "./apps/api/src/app/department/department.entity.ts");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_4__);





var DepartmentService = /** @class */ (function () {
    function DepartmentService(departmentRepository) {
        this.departmentRepository = departmentRepository;
    }
    DepartmentService.prototype.findAll = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.departmentRepository.find()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DepartmentService.prototype.create = function (department) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, Promise, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.departmentRepository.save(department)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DepartmentService.prototype.update = function (department) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, Promise, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.departmentRepository.update(department.idDepartment, department)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DepartmentService.prototype.delete = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, Promise, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.departmentRepository.delete(id)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    var _a;
    DepartmentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__["InjectRepository"])(_department_entity__WEBPACK_IMPORTED_MODULE_3__["Department"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [typeof (_a = typeof typeorm__WEBPACK_IMPORTED_MODULE_4__["Repository"] !== "undefined" && typeorm__WEBPACK_IMPORTED_MODULE_4__["Repository"]) === "function" ? _a : Object])
    ], DepartmentService);
    return DepartmentService;
}());



/***/ }),

/***/ "./apps/api/src/app/employees/employee.controller.ts":
/*!***********************************************************!*\
  !*** ./apps/api/src/app/employees/employee.controller.ts ***!
  \***********************************************************/
/*! exports provided: EmployeeController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeController", function() { return EmployeeController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee.service */ "./apps/api/src/app/employees/employee.service.ts");
/* harmony import */ var _employee_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee.entity */ "./apps/api/src/app/employees/employee.entity.ts");




var EmployeeController = /** @class */ (function () {
    function EmployeeController(employeeService) {
        this.employeeService = employeeService;
    }
    EmployeeController.prototype.index = function () {
        return this.employeeService.findAll();
    };
    EmployeeController.prototype.read = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.employeeService.findId(id)];
            });
        });
    };
    EmployeeController.prototype.create = function (employData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, Promise, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.employeeService.create(employData)];
            });
        });
    };
    EmployeeController.prototype.update = function (id, emloyData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, Promise, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                emloyData.idEmployee = id;
                console.log('Update #' + emloyData.idEmployee);
                return [2 /*return*/, this.employeeService.update(emloyData)];
            });
        });
    };
    EmployeeController.prototype.delete = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, Promise, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.employeeService.delete(id)];
            });
        });
    };
    var _a, _b, _c, _d, _e, _f, _g, _h;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
    ], EmployeeController.prototype, "index", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])(':id'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('id')),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [typeof (_b = typeof String !== "undefined" && String) === "function" ? _b : Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", Promise)
    ], EmployeeController.prototype, "read", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])('create'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [typeof (_c = typeof _employee_entity__WEBPACK_IMPORTED_MODULE_3__["Employee"] !== "undefined" && _employee_entity__WEBPACK_IMPORTED_MODULE_3__["Employee"]) === "function" ? _c : Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
    ], EmployeeController.prototype, "create", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Put"])(':id/update'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('id')), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, typeof (_e = typeof _employee_entity__WEBPACK_IMPORTED_MODULE_3__["Employee"] !== "undefined" && _employee_entity__WEBPACK_IMPORTED_MODULE_3__["Employee"]) === "function" ? _e : Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
    ], EmployeeController.prototype, "update", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Delete"])(':id/delete'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('id')),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
    ], EmployeeController.prototype, "delete", null);
    EmployeeController = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])('employee'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [typeof (_h = typeof _employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"] !== "undefined" && _employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]) === "function" ? _h : Object])
    ], EmployeeController);
    return EmployeeController;
}());



/***/ }),

/***/ "./apps/api/src/app/employees/employee.entity.ts":
/*!*******************************************************!*\
  !*** ./apps/api/src/app/employees/employee.entity.ts ***!
  \*******************************************************/
/*! exports provided: Employee */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Employee", function() { return Employee; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_1__);


var Employee = /** @class */ (function () {
    function Employee() {
    }
    var _a;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["PrimaryColumn"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], Employee.prototype, "idEmployee", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('text'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Employee.prototype, "fullName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('text'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Employee.prototype, "address", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('boolean'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], Employee.prototype, "genDer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('date'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
    ], Employee.prototype, "birthday", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('text'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Employee.prototype, "mobile", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('text'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Employee.prototype, "email", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('boolean'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], Employee.prototype, "admin", void 0);
    Employee = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Entity"])('employees')
    ], Employee);
    return Employee;
}());



/***/ }),

/***/ "./apps/api/src/app/employees/employee.module.ts":
/*!*******************************************************!*\
  !*** ./apps/api/src/app/employees/employee.module.ts ***!
  \*******************************************************/
/*! exports provided: EmployeeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeModule", function() { return EmployeeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _employee_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee.entity */ "./apps/api/src/app/employees/employee.entity.ts");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employee.service */ "./apps/api/src/app/employees/employee.service.ts");
/* harmony import */ var _employee_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employee.controller */ "./apps/api/src/app/employees/employee.controller.ts");






var EmployeeModule = /** @class */ (function () {
    function EmployeeModule() {
    }
    EmployeeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
            imports: [_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__["TypeOrmModule"].forFeature([_employee_entity__WEBPACK_IMPORTED_MODULE_3__["Employee"]])],
            providers: [_employee_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"]],
            controllers: [_employee_controller__WEBPACK_IMPORTED_MODULE_5__["EmployeeController"]],
        })
    ], EmployeeModule);
    return EmployeeModule;
}());



/***/ }),

/***/ "./apps/api/src/app/employees/employee.service.ts":
/*!********************************************************!*\
  !*** ./apps/api/src/app/employees/employee.service.ts ***!
  \********************************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _employee_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee.entity */ "./apps/api/src/app/employees/employee.entity.ts");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_4__);





var EmployeeService = /** @class */ (function () {
    function EmployeeService(employeeRepository) {
        this.employeeRepository = employeeRepository;
    }
    EmployeeService.prototype.findAll = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.employeeRepository.find()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EmployeeService.prototype.findId = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.employeeRepository.findOne(id)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EmployeeService.prototype.create = function (Employee) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, Promise, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.employeeRepository.save(Employee)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EmployeeService.prototype.update = function (Employee) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, Promise, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.employeeRepository.update(Employee.idEmployee, Employee)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EmployeeService.prototype.delete = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, Promise, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.employeeRepository.delete(id)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    var _a;
    EmployeeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__["InjectRepository"])(_employee_entity__WEBPACK_IMPORTED_MODULE_3__["Employee"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [typeof (_a = typeof typeorm__WEBPACK_IMPORTED_MODULE_4__["Repository"] !== "undefined" && typeorm__WEBPACK_IMPORTED_MODULE_4__["Repository"]) === "function" ? _a : Object])
    ], EmployeeService);
    return EmployeeService;
}());



/***/ }),

/***/ "./apps/api/src/app/position/position.controller.ts":
/*!**********************************************************!*\
  !*** ./apps/api/src/app/position/position.controller.ts ***!
  \**********************************************************/
/*! exports provided: PositionController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionController", function() { return PositionController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _position_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./position.service */ "./apps/api/src/app/position/position.service.ts");
/* harmony import */ var _position_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./position.entity */ "./apps/api/src/app/position/position.entity.ts");




var PositionController = /** @class */ (function () {
    function PositionController(positionService) {
        this.positionService = positionService;
    }
    PositionController.prototype.index = function () {
        return this.positionService.findAll();
    };
    PositionController.prototype.create = function (employData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, Promise, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.positionService.create(employData)];
            });
        });
    };
    PositionController.prototype.update = function (id, posiData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, Promise, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                posiData.idPosition = id;
                console.log('Update #' + posiData.idPosition);
                return [2 /*return*/, this.positionService.update(posiData)];
            });
        });
    };
    PositionController.prototype.delete = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, Promise, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.positionService.delete(id)];
            });
        });
    };
    var _a, _b, _c, _d, _e, _f, _g;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
    ], PositionController.prototype, "index", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])('create'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [typeof (_b = typeof _position_entity__WEBPACK_IMPORTED_MODULE_3__["Position"] !== "undefined" && _position_entity__WEBPACK_IMPORTED_MODULE_3__["Position"]) === "function" ? _b : Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
    ], PositionController.prototype, "create", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Put"])(':id/update'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('id')), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, typeof (_d = typeof _position_entity__WEBPACK_IMPORTED_MODULE_3__["Position"] !== "undefined" && _position_entity__WEBPACK_IMPORTED_MODULE_3__["Position"]) === "function" ? _d : Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
    ], PositionController.prototype, "update", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Delete"])(':id/delete'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('id')),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
    ], PositionController.prototype, "delete", null);
    PositionController = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])('position'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [typeof (_g = typeof _position_service__WEBPACK_IMPORTED_MODULE_2__["PositionService"] !== "undefined" && _position_service__WEBPACK_IMPORTED_MODULE_2__["PositionService"]) === "function" ? _g : Object])
    ], PositionController);
    return PositionController;
}());



/***/ }),

/***/ "./apps/api/src/app/position/position.entity.ts":
/*!******************************************************!*\
  !*** ./apps/api/src/app/position/position.entity.ts ***!
  \******************************************************/
/*! exports provided: Position */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return Position; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_1__);


var Position = /** @class */ (function () {
    function Position() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["PrimaryColumn"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], Position.prototype, "idPosition", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('text'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Position.prototype, "NamePosition", void 0);
    Position = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Entity"])('position')
    ], Position);
    return Position;
}());



/***/ }),

/***/ "./apps/api/src/app/position/position.module.ts":
/*!******************************************************!*\
  !*** ./apps/api/src/app/position/position.module.ts ***!
  \******************************************************/
/*! exports provided: PositionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionModule", function() { return PositionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _position_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./position.entity */ "./apps/api/src/app/position/position.entity.ts");
/* harmony import */ var _position_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./position.service */ "./apps/api/src/app/position/position.service.ts");
/* harmony import */ var _position_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./position.controller */ "./apps/api/src/app/position/position.controller.ts");






var PositionModule = /** @class */ (function () {
    function PositionModule() {
    }
    PositionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
            imports: [_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__["TypeOrmModule"].forFeature([_position_entity__WEBPACK_IMPORTED_MODULE_3__["Position"]])],
            providers: [_position_service__WEBPACK_IMPORTED_MODULE_4__["PositionService"]],
            controllers: [_position_controller__WEBPACK_IMPORTED_MODULE_5__["PositionController"]],
        })
    ], PositionModule);
    return PositionModule;
}());



/***/ }),

/***/ "./apps/api/src/app/position/position.service.ts":
/*!*******************************************************!*\
  !*** ./apps/api/src/app/position/position.service.ts ***!
  \*******************************************************/
/*! exports provided: PositionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionService", function() { return PositionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _position_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./position.entity */ "./apps/api/src/app/position/position.entity.ts");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_4__);





var PositionService = /** @class */ (function () {
    function PositionService(positionRepository) {
        this.positionRepository = positionRepository;
    }
    PositionService.prototype.findAll = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.positionRepository.find()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PositionService.prototype.create = function (position) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, Promise, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.positionRepository.save(position)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PositionService.prototype.update = function (position) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, Promise, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.positionRepository.update(position.idPosition, position)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PositionService.prototype.delete = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, Promise, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.positionRepository.delete(id)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    var _a;
    PositionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__["InjectRepository"])(_position_entity__WEBPACK_IMPORTED_MODULE_3__["Position"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [typeof (_a = typeof typeorm__WEBPACK_IMPORTED_MODULE_4__["Repository"] !== "undefined" && typeorm__WEBPACK_IMPORTED_MODULE_4__["Repository"]) === "function" ? _a : Object])
    ], PositionService);
    return PositionService;
}());



/***/ }),

/***/ "./apps/api/src/main.ts":
/*!******************************!*\
  !*** ./apps/api/src/main.ts ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./apps/api/src/app/app.module.ts");
/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/




function bootstrap() {
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
        var app, globalPrefix, port;
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _nestjs_core__WEBPACK_IMPORTED_MODULE_1__["NestFactory"].create(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])];
                case 1:
                    app = _a.sent();
                    globalPrefix = 'api/v1';
                    app.setGlobalPrefix(globalPrefix);
                    app.enableCors();
                    port = process.env.port || 8080;
                    return [4 /*yield*/, app.listen(port)];
                case 2:
                    _a.sent();
                    _nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Logger"].log('Server running on http://localhost:' + port, 'Bootstrap');
                    return [2 /*return*/];
            }
        });
    });
}
bootstrap();


/***/ }),

/***/ 0:
/*!************************************!*\
  !*** multi ./apps/api/src/main.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\demoapp\Dev\nxnest-dev\myorg\apps\api\src\main.ts */"./apps/api/src/main.ts");


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/typeorm":
/*!**********************************!*\
  !*** external "@nestjs/typeorm" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/typeorm");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("typeorm");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map