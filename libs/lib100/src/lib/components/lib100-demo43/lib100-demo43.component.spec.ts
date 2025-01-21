import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib100Demo43Component } from './lib100-demo43.component';

describe('Lib100Demo43Component', () => {
  let component: Lib100Demo43Component;
  let fixture: ComponentFixture<Lib100Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib100Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib100Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
