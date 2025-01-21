import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib100Demo14Component } from './lib100-demo14.component';

describe('Lib100Demo14Component', () => {
  let component: Lib100Demo14Component;
  let fixture: ComponentFixture<Lib100Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib100Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib100Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
