import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib34Demo36Component } from './lib34-demo36.component';

describe('Lib34Demo36Component', () => {
  let component: Lib34Demo36Component;
  let fixture: ComponentFixture<Lib34Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib34Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib34Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
