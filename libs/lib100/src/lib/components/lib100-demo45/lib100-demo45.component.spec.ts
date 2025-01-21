import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib100Demo45Component } from './lib100-demo45.component';

describe('Lib100Demo45Component', () => {
  let component: Lib100Demo45Component;
  let fixture: ComponentFixture<Lib100Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib100Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib100Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
