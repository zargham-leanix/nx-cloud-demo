import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib75Demo33Component } from './lib75-demo33.component';

describe('Lib75Demo33Component', () => {
  let component: Lib75Demo33Component;
  let fixture: ComponentFixture<Lib75Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib75Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib75Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
