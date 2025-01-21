import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib40Demo7Component } from './lib40-demo7.component';

describe('Lib40Demo7Component', () => {
  let component: Lib40Demo7Component;
  let fixture: ComponentFixture<Lib40Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib40Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib40Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
