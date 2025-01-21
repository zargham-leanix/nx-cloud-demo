import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib82Demo49Component } from './lib82-demo49.component';

describe('Lib82Demo49Component', () => {
  let component: Lib82Demo49Component;
  let fixture: ComponentFixture<Lib82Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib82Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib82Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
