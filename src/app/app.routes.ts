import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Form1Component } from './form1/form1.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { APIComponent } from './api/api.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path:'',redirectTo:'/home',pathMatch:'full'},
{path:'Home',component:HomeComponent},
{path:'About',component:AboutComponent},
{path:'Contact',component:ContactComponent},
{path:'form1',component:Form1Component},
{path:'form2',component:ReactiveFormComponent},
{path:'form3',component:FormBuilderComponent},
{path:'Api',component:APIComponent},
{path:'Login',component:LoginComponent},
//{path:'**',component:NotFoundComponent}


];
