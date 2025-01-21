import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib100Demo33Component } from './lib100-demo33.component';

describe('Lib100Demo33Component', () => {
  let component: Lib100Demo33Component;
  let fixture: ComponentFixture<Lib100Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib100Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib100Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
