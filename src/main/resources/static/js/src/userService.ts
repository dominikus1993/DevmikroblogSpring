///<reference path="tsd.d.ts"/>

module Services{
    export interface IUserService{
        login():void;
        register():void;
    }

    export class UserService implements IUserService{

        constructor(private $http: ng.IHttpService) {
        }

        login():void{

        }

        register():void{

        }
    }
}