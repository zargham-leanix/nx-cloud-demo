import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib84Demo2Component } from './lib84-demo2.component';

describe('Lib84Demo2Component', () => {
  let component: Lib84Demo2Component;
  let fixture: ComponentFixture<Lib84Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib84Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib84Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
