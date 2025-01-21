import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib100Demo11Component } from './lib100-demo11.component';

describe('Lib100Demo11Component', () => {
  let component: Lib100Demo11Component;
  let fixture: ComponentFixture<Lib100Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib100Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib100Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
