import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib84Demo42Component } from './lib84-demo42.component';

describe('Lib84Demo42Component', () => {
  let component: Lib84Demo42Component;
  let fixture: ComponentFixture<Lib84Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib84Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib84Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
