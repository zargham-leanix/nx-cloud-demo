import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib84Demo45Component } from './lib84-demo45.component';

describe('Lib84Demo45Component', () => {
  let component: Lib84Demo45Component;
  let fixture: ComponentFixture<Lib84Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib84Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib84Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
