import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib82Demo42Component } from './lib82-demo42.component';

describe('Lib82Demo42Component', () => {
  let component: Lib82Demo42Component;
  let fixture: ComponentFixture<Lib82Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib82Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib82Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
