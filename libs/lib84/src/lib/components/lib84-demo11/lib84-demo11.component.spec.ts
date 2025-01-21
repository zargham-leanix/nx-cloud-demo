import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib84Demo11Component } from './lib84-demo11.component';

describe('Lib84Demo11Component', () => {
  let component: Lib84Demo11Component;
  let fixture: ComponentFixture<Lib84Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib84Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib84Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
