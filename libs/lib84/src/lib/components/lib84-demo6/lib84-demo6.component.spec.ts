import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib84Demo6Component } from './lib84-demo6.component';

describe('Lib84Demo6Component', () => {
  let component: Lib84Demo6Component;
  let fixture: ComponentFixture<Lib84Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib84Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib84Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
