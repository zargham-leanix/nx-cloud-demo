import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib5Demo7Component } from './lib5-demo7.component';

describe('Lib5Demo7Component', () => {
  let component: Lib5Demo7Component;
  let fixture: ComponentFixture<Lib5Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib5Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib5Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
