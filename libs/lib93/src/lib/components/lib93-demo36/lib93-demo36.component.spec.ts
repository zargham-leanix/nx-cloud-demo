import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib93Demo36Component } from './lib93-demo36.component';

describe('Lib93Demo36Component', () => {
  let component: Lib93Demo36Component;
  let fixture: ComponentFixture<Lib93Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib93Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib93Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
