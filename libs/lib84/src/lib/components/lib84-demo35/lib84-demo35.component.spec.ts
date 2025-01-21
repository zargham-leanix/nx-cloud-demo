import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib84Demo35Component } from './lib84-demo35.component';

describe('Lib84Demo35Component', () => {
  let component: Lib84Demo35Component;
  let fixture: ComponentFixture<Lib84Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib84Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib84Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
