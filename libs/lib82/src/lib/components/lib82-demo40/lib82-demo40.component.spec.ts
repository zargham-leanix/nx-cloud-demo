import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib82Demo40Component } from './lib82-demo40.component';

describe('Lib82Demo40Component', () => {
  let component: Lib82Demo40Component;
  let fixture: ComponentFixture<Lib82Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib82Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib82Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
