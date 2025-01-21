import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib82Demo21Component } from './lib82-demo21.component';

describe('Lib82Demo21Component', () => {
  let component: Lib82Demo21Component;
  let fixture: ComponentFixture<Lib82Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib82Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib82Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
