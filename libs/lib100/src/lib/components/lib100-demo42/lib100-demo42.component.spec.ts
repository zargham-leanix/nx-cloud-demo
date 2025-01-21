import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib100Demo42Component } from './lib100-demo42.component';

describe('Lib100Demo42Component', () => {
  let component: Lib100Demo42Component;
  let fixture: ComponentFixture<Lib100Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib100Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib100Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
