import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib41Demo45Component } from './lib41-demo45.component';

describe('Lib41Demo45Component', () => {
  let component: Lib41Demo45Component;
  let fixture: ComponentFixture<Lib41Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib41Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib41Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
