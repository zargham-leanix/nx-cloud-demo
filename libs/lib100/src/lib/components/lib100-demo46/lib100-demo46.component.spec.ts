import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib100Demo46Component } from './lib100-demo46.component';

describe('Lib100Demo46Component', () => {
  let component: Lib100Demo46Component;
  let fixture: ComponentFixture<Lib100Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib100Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib100Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
