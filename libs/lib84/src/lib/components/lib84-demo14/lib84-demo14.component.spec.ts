import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib84Demo14Component } from './lib84-demo14.component';

describe('Lib84Demo14Component', () => {
  let component: Lib84Demo14Component;
  let fixture: ComponentFixture<Lib84Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib84Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib84Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
