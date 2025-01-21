import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib74Demo36Component } from './lib74-demo36.component';

describe('Lib74Demo36Component', () => {
  let component: Lib74Demo36Component;
  let fixture: ComponentFixture<Lib74Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib74Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib74Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
