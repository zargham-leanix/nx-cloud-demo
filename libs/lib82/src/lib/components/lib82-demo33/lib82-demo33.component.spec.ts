import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib82Demo33Component } from './lib82-demo33.component';

describe('Lib82Demo33Component', () => {
  let component: Lib82Demo33Component;
  let fixture: ComponentFixture<Lib82Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib82Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib82Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
