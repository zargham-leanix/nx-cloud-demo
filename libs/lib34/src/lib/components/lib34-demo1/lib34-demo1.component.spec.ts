import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib34Demo1Component } from './lib34-demo1.component';

describe('Lib34Demo1Component', () => {
  let component: Lib34Demo1Component;
  let fixture: ComponentFixture<Lib34Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib34Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib34Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
