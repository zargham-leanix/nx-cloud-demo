import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib41Demo33Component } from './lib41-demo33.component';

describe('Lib41Demo33Component', () => {
  let component: Lib41Demo33Component;
  let fixture: ComponentFixture<Lib41Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib41Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib41Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
