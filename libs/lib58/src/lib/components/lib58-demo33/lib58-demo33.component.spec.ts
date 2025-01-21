import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib58Demo33Component } from './lib58-demo33.component';

describe('Lib58Demo33Component', () => {
  let component: Lib58Demo33Component;
  let fixture: ComponentFixture<Lib58Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib58Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib58Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
