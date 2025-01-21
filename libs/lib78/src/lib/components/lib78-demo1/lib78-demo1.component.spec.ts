import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib78Demo1Component } from './lib78-demo1.component';

describe('Lib78Demo1Component', () => {
  let component: Lib78Demo1Component;
  let fixture: ComponentFixture<Lib78Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib78Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib78Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
