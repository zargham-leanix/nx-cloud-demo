import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib84Demo33Component } from './lib84-demo33.component';

describe('Lib84Demo33Component', () => {
  let component: Lib84Demo33Component;
  let fixture: ComponentFixture<Lib84Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib84Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib84Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
