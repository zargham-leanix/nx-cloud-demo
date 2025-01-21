import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib82Demo36Component } from './lib82-demo36.component';

describe('Lib82Demo36Component', () => {
  let component: Lib82Demo36Component;
  let fixture: ComponentFixture<Lib82Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib82Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib82Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
