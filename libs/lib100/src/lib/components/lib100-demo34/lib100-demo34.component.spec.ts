import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib100Demo34Component } from './lib100-demo34.component';

describe('Lib100Demo34Component', () => {
  let component: Lib100Demo34Component;
  let fixture: ComponentFixture<Lib100Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib100Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib100Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
