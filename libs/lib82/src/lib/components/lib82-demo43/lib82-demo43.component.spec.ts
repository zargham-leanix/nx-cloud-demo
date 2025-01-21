import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib82Demo43Component } from './lib82-demo43.component';

describe('Lib82Demo43Component', () => {
  let component: Lib82Demo43Component;
  let fixture: ComponentFixture<Lib82Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib82Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib82Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
