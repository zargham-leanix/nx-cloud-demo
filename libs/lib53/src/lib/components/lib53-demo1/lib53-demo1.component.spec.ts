import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib53Demo1Component } from './lib53-demo1.component';

describe('Lib53Demo1Component', () => {
  let component: Lib53Demo1Component;
  let fixture: ComponentFixture<Lib53Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib53Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib53Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
