import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib82Demo45Component } from './lib82-demo45.component';

describe('Lib82Demo45Component', () => {
  let component: Lib82Demo45Component;
  let fixture: ComponentFixture<Lib82Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib82Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib82Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
