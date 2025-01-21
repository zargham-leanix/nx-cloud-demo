import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib100Demo6Component } from './lib100-demo6.component';

describe('Lib100Demo6Component', () => {
  let component: Lib100Demo6Component;
  let fixture: ComponentFixture<Lib100Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib100Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib100Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
