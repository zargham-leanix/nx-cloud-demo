import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib100Demo48Component } from './lib100-demo48.component';

describe('Lib100Demo48Component', () => {
  let component: Lib100Demo48Component;
  let fixture: ComponentFixture<Lib100Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib100Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib100Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
