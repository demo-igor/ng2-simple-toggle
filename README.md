# AngularX Simple Toggle

Works with Angular Final and AOT compilation

Just a `<input type="checkbox">` tag to work with Reactive Forms or NgModel in AngularX

## Quick start options

* Clone the repo: `git clone https://github.com/demo-igor/ng2-simple-toggle.git`.
* Install with [npm](https://www.npmjs.com): `npm install ng2-simple-toggle --save`.

## Usage

Import `SimpleToggleComponent` into your @NgModule.

```js
import { SimpleToggleModule } from 'ng2-simple-toggle';

@NgModule({
  // ...
  imports: [
    SimpleToggleModule,
  ]
  // ...
})
```

Define options in your consuming component:

```js
export class MyClass implements OnInit {
  toggleModel: boolean;

  ngOnInit() {
    this.toggleModel = true;
  }

  onChange() {
    console.log(this.optionsModel);
  }
}
```

In your template, use the component directive:

```html
<simple-toggle
  [(ngModel)]="optionsModel"
  (ngModelChange)="onChange($event)"
>
</simple-toggle>
```

## Customize

### Settings
| Setting Item          | Description                                | Default Value     |
| --------------------- | ------------------------------------------ | ----------------  |
| isRounded             | Rounded/squared toggle design              | true              |
| extraClass            | Additional class to change toggle styles   | ''                |

Import the `SimpleToggleSettings` interfaces to enable/override settings:

```js
// Default value
toggleModel: boolean = true;

// Settings configuration
mySettings: SimpleToggleSettings = {
  isRounded: false,
  extraClass: 'margin-10'
};
```

```html
<simple-toggle
  [(ngModel)]="optionsModel"
  (ngModelChange)="onChange($event)"
  [settings]="mySettings"
>
</simple-toggle>
```

## Other examples

### Use model driven forms with ReactiveFormsModule:

```js
export class MyClass implements OnInit {
  myForm: FormGroup;

  ngOnInit() {
    this.myForm = new FormGroup({
      'someFlag'    : new FormControl(true, []),
    });

    this.myForm.controls['someFlag'].valueChanges
      .subscribe((val: boolean) => {
        // changes
      });
  }
```

```html
<form [formGroup]="myForm">
  <simple-toggle
    formControlName="someFlag"
  >
  </simple-toggle>
</form>
```

## License

[MIT]
