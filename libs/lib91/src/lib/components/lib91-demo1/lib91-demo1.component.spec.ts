import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib91Demo1Component } from './lib91-demo1.component';

describe('Lib91Demo1Component', () => {
  let component: Lib91Demo1Component;
  let fixture: ComponentFixture<Lib91Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib91Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib91Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
