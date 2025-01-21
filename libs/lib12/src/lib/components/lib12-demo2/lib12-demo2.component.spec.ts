import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib12Demo2Component } from './lib12-demo2.component';

describe('Lib12Demo2Component', () => {
  let component: Lib12Demo2Component;
  let fixture: ComponentFixture<Lib12Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib12Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib12Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
