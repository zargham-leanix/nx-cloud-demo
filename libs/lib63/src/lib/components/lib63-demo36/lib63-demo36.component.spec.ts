import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib63Demo36Component } from './lib63-demo36.component';

describe('Lib63Demo36Component', () => {
  let component: Lib63Demo36Component;
  let fixture: ComponentFixture<Lib63Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib63Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib63Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
