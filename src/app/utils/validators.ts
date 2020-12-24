import { AbstractControl,ValidatorFn } from "@angular/forms";
export function FirstNameValidator() :ValidatorFn
{
    return (control: AbstractControl): {[key:string]: boolean} | null=> {
        if(control.value == "")
        {
            return {'FirstNameisEmpty':true};
        }
    }
    return null;
}
export function LastNameValidator() :ValidatorFn
{
    return (control: AbstractControl): {[key:string]: boolean} | null=> {
        if(control.value == "")
        {
            return {'LastNameisEmpty':true};
        }
    }
    return null;
}
export function YearValidator() :ValidatorFn
{
    return (control: AbstractControl): {[key:string]: boolean} | null=> {
        if(control.value == null)
        {
            return {'YearisEmpty':true};
        }
        if(control.value.length !=4 )
        {
            return {'InvalidYear':true};
        }
    }
    return null;
}
export function PercentageValidator() :ValidatorFn
{
    return (control: AbstractControl): {[key:string]: boolean} | null=> {
        if(control.value == null)
        {
            return {'PercentageisEmpty':true};
        }
        if(control.value>100 || control.value<0)
        {
            return {'InvalidPercentage':true};
        }
    }
    return null;
}