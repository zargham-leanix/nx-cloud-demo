import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib56Demo1Component } from './lib56-demo1.component';

describe('Lib56Demo1Component', () => {
  let component: Lib56Demo1Component;
  let fixture: ComponentFixture<Lib56Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib56Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib56Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
