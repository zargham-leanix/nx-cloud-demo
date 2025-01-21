import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib54Demo7Component } from './lib54-demo7.component';

describe('Lib54Demo7Component', () => {
  let component: Lib54Demo7Component;
  let fixture: ComponentFixture<Lib54Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib54Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib54Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
