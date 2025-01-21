import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib64Demo7Component } from './lib64-demo7.component';

describe('Lib64Demo7Component', () => {
  let component: Lib64Demo7Component;
  let fixture: ComponentFixture<Lib64Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib64Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib64Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
