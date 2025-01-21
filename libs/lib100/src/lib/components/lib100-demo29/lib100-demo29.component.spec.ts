import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib100Demo29Component } from './lib100-demo29.component';

describe('Lib100Demo29Component', () => {
  let component: Lib100Demo29Component;
  let fixture: ComponentFixture<Lib100Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib100Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib100Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
