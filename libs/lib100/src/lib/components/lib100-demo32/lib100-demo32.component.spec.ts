import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib100Demo32Component } from './lib100-demo32.component';

describe('Lib100Demo32Component', () => {
  let component: Lib100Demo32Component;
  let fixture: ComponentFixture<Lib100Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib100Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib100Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
