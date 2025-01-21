import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib82Demo32Component } from './lib82-demo32.component';

describe('Lib82Demo32Component', () => {
  let component: Lib82Demo32Component;
  let fixture: ComponentFixture<Lib82Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib82Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib82Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
