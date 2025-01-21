import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib82Demo0Component } from './lib82-demo0.component';

describe('Lib82Demo0Component', () => {
  let component: Lib82Demo0Component;
  let fixture: ComponentFixture<Lib82Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib82Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib82Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
