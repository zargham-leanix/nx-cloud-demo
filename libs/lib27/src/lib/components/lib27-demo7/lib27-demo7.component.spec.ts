import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib27Demo7Component } from './lib27-demo7.component';

describe('Lib27Demo7Component', () => {
  let component: Lib27Demo7Component;
  let fixture: ComponentFixture<Lib27Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib27Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib27Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
