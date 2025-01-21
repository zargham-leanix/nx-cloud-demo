import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib100Demo15Component } from './lib100-demo15.component';

describe('Lib100Demo15Component', () => {
  let component: Lib100Demo15Component;
  let fixture: ComponentFixture<Lib100Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib100Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib100Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
