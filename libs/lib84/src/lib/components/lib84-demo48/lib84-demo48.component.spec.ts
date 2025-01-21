import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib84Demo48Component } from './lib84-demo48.component';

describe('Lib84Demo48Component', () => {
  let component: Lib84Demo48Component;
  let fixture: ComponentFixture<Lib84Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib84Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib84Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
