import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib30Demo1Component } from './lib30-demo1.component';

describe('Lib30Demo1Component', () => {
  let component: Lib30Demo1Component;
  let fixture: ComponentFixture<Lib30Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib30Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib30Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
