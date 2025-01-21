import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib84Demo43Component } from './lib84-demo43.component';

describe('Lib84Demo43Component', () => {
  let component: Lib84Demo43Component;
  let fixture: ComponentFixture<Lib84Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib84Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib84Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
