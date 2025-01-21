import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib100Demo35Component } from './lib100-demo35.component';

describe('Lib100Demo35Component', () => {
  let component: Lib100Demo35Component;
  let fixture: ComponentFixture<Lib100Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib100Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib100Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
