import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib84Demo15Component } from './lib84-demo15.component';

describe('Lib84Demo15Component', () => {
  let component: Lib84Demo15Component;
  let fixture: ComponentFixture<Lib84Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib84Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib84Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
