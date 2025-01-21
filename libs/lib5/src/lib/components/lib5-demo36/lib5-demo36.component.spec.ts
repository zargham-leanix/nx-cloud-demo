import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib5Demo36Component } from './lib5-demo36.component';

describe('Lib5Demo36Component', () => {
  let component: Lib5Demo36Component;
  let fixture: ComponentFixture<Lib5Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib5Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib5Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
