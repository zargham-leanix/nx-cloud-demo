import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib84Demo32Component } from './lib84-demo32.component';

describe('Lib84Demo32Component', () => {
  let component: Lib84Demo32Component;
  let fixture: ComponentFixture<Lib84Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib84Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib84Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
