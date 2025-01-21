import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib71Demo1Component } from './lib71-demo1.component';

describe('Lib71Demo1Component', () => {
  let component: Lib71Demo1Component;
  let fixture: ComponentFixture<Lib71Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib71Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib71Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
