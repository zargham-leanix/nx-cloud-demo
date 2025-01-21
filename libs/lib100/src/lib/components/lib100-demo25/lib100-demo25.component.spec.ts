import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib100Demo25Component } from './lib100-demo25.component';

describe('Lib100Demo25Component', () => {
  let component: Lib100Demo25Component;
  let fixture: ComponentFixture<Lib100Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib100Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib100Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
