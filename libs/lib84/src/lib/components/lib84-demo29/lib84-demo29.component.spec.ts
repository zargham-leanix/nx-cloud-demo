import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib84Demo29Component } from './lib84-demo29.component';

describe('Lib84Demo29Component', () => {
  let component: Lib84Demo29Component;
  let fixture: ComponentFixture<Lib84Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib84Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib84Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
