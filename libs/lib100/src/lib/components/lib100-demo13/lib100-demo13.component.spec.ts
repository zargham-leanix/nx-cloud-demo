import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib100Demo13Component } from './lib100-demo13.component';

describe('Lib100Demo13Component', () => {
  let component: Lib100Demo13Component;
  let fixture: ComponentFixture<Lib100Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib100Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib100Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
