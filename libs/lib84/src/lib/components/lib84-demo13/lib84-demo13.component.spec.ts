import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib84Demo13Component } from './lib84-demo13.component';

describe('Lib84Demo13Component', () => {
  let component: Lib84Demo13Component;
  let fixture: ComponentFixture<Lib84Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib84Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib84Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
