import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib75Demo45Component } from './lib75-demo45.component';

describe('Lib75Demo45Component', () => {
  let component: Lib75Demo45Component;
  let fixture: ComponentFixture<Lib75Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib75Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib75Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
