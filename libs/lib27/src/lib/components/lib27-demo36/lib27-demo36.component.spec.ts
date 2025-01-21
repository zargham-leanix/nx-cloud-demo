import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib27Demo36Component } from './lib27-demo36.component';

describe('Lib27Demo36Component', () => {
  let component: Lib27Demo36Component;
  let fixture: ComponentFixture<Lib27Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib27Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib27Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
