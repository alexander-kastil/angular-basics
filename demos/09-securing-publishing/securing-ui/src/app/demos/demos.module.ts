import { CommonModule } from '@angular/common';
import {
    HTTP_INTERCEPTORS,
    HttpClientModule
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoadingInterceptor } from '../shared/loading/loading-interceptor';
import { LoadingComponent } from '../shared/loading/loading.component';
import { LoadingService } from '../shared/loading/loading.service';
import { MarkdownEditorComponent } from '../shared/markdown-editor/markdown-editor.component';
import { MarkdownRendererComponent } from '../shared/markdown-renderer/markdown-renderer.component';
import { SidePanelComponent } from '../shared/side-panel/side-panel.component';
import { DemoService } from './demo-base/demo.service';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { demoRoutes } from './demo.routing.module';
import { UnitTestingComponent } from './samples/basic-tests/unit-testing.component';
import { ComponentClassComponent } from './samples/component-class/component-class.component';
import { ComponentEventsComponent } from './samples/component-events/component-events.component';
import { MaterialComponent } from './samples/component-harness/material.component';
import { FoodListComponent } from './samples/component-integration/food-list/food-list.component';
import { FoodRowComponent } from './samples/component-integration/food-row/food-row.component';
import { IntegrationTestComponent } from './samples/component-integration/integration-test.component';
import { MaterialAsyncComponent } from './samples/component-material-async/material-async.component';
import { MockHostComponent } from './samples/component-mocking/mock-host/mock-host.component';
import { SpyHostComponent } from './samples/component-mocking/spy-host/spy-host.component';
import { UseMockComponent } from './samples/component-mocking/use-mock/use-mock.component';
import { UseSpyComponent } from './samples/component-mocking/use-spy/use-spy.component';
import { ComponentTestComponent } from './samples/component-test/component-test.component';
import { SimpleFoodComponent } from './samples/component-test/simple-food/simple-food.component';
import { ComponentWriteComponent } from './samples/component-write/component-write.component';
import { CypressComponent } from './samples/cypress/cypress.component';
import { CapitalizeDirective } from './samples/directive/capitalize.directive';
import { DirectiveHostComponent } from './samples/directive/directive-host/directive-host.component';
import { DirectiveComponent } from './samples/directive/directive.component';
import { PhoneNumberPipe } from './samples/pipe/phonenumber.pipe';
import { RatingPipe } from './samples/pipe/rating.pipe';
import { TestPipeComponent } from './samples/pipe/test-pipe.component';
import { SimpleServiceComponent } from './samples/simple-service/simple-service.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(demoRoutes),
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RatingPipe,
        PhoneNumberPipe,
        CapitalizeDirective,
        FoodRowComponent,
        FoodListComponent,
        MaterialComponent,
        ComponentClassComponent,
        UseSpyComponent,
        UseMockComponent,
        CypressComponent,
        MaterialAsyncComponent,
        SimpleFoodComponent,
        ComponentTestComponent,
        SpyHostComponent,
        MockHostComponent,
        IntegrationTestComponent,
        MarkdownEditorComponent,
        MarkdownRendererComponent,
        SidePanelComponent,
        LoadingComponent,
        DemoContainerComponent,
        UnitTestingComponent,
        ComponentEventsComponent,
        ComponentClassComponent,
        ComponentWriteComponent,
        TestPipeComponent,
        DirectiveComponent,
        DirectiveHostComponent,
        SimpleServiceComponent,
        TestPipeComponent
    ],
    providers: [
        DemoService,
        LoadingService,
        { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    ],
})
export class DemosModule { }
