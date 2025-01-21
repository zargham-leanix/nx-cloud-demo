import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib82Demo17Component } from './lib82-demo17.component';

describe('Lib82Demo17Component', () => {
  let component: Lib82Demo17Component;
  let fixture: ComponentFixture<Lib82Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib82Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib82Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
