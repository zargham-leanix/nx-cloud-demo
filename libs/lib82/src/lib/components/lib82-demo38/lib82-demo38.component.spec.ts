import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib82Demo38Component } from './lib82-demo38.component';

describe('Lib82Demo38Component', () => {
  let component: Lib82Demo38Component;
  let fixture: ComponentFixture<Lib82Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib82Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib82Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
