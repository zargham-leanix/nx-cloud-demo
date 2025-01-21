import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib84Demo34Component } from './lib84-demo34.component';

describe('Lib84Demo34Component', () => {
  let component: Lib84Demo34Component;
  let fixture: ComponentFixture<Lib84Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib84Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib84Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
