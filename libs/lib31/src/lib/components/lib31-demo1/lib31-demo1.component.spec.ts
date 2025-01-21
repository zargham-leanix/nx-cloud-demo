import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib31Demo1Component } from './lib31-demo1.component';

describe('Lib31Demo1Component', () => {
  let component: Lib31Demo1Component;
  let fixture: ComponentFixture<Lib31Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib31Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib31Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
