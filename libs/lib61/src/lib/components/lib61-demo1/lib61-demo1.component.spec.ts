import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib61Demo1Component } from './lib61-demo1.component';

describe('Lib61Demo1Component', () => {
  let component: Lib61Demo1Component;
  let fixture: ComponentFixture<Lib61Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib61Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib61Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
