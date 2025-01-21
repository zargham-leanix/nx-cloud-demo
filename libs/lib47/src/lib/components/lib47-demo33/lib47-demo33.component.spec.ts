import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib47Demo33Component } from './lib47-demo33.component';

describe('Lib47Demo33Component', () => {
  let component: Lib47Demo33Component;
  let fixture: ComponentFixture<Lib47Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib47Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib47Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
