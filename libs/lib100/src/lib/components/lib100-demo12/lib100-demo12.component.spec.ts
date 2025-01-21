import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib100Demo12Component } from './lib100-demo12.component';

describe('Lib100Demo12Component', () => {
  let component: Lib100Demo12Component;
  let fixture: ComponentFixture<Lib100Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib100Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib100Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
