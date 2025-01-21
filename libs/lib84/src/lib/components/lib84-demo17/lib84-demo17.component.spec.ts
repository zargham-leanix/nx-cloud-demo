import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib84Demo17Component } from './lib84-demo17.component';

describe('Lib84Demo17Component', () => {
  let component: Lib84Demo17Component;
  let fixture: ComponentFixture<Lib84Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib84Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib84Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
