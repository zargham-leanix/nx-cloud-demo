import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib59Demo7Component } from './lib59-demo7.component';

describe('Lib59Demo7Component', () => {
  let component: Lib59Demo7Component;
  let fixture: ComponentFixture<Lib59Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib59Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib59Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
