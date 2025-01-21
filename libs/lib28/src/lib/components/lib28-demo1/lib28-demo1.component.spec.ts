import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib28Demo1Component } from './lib28-demo1.component';

describe('Lib28Demo1Component', () => {
  let component: Lib28Demo1Component;
  let fixture: ComponentFixture<Lib28Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib28Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib28Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
