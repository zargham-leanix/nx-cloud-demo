import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib100Demo44Component } from './lib100-demo44.component';

describe('Lib100Demo44Component', () => {
  let component: Lib100Demo44Component;
  let fixture: ComponentFixture<Lib100Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib100Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib100Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
