import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib100Demo2Component } from './lib100-demo2.component';

describe('Lib100Demo2Component', () => {
  let component: Lib100Demo2Component;
  let fixture: ComponentFixture<Lib100Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib100Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib100Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
