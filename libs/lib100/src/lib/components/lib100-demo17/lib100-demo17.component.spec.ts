import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib100Demo17Component } from './lib100-demo17.component';

describe('Lib100Demo17Component', () => {
  let component: Lib100Demo17Component;
  let fixture: ComponentFixture<Lib100Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib100Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib100Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
