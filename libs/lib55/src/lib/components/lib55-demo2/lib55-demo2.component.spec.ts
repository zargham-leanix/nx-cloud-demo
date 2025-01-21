import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib55Demo2Component } from './lib55-demo2.component';

describe('Lib55Demo2Component', () => {
  let component: Lib55Demo2Component;
  let fixture: ComponentFixture<Lib55Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib55Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib55Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
