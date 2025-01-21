import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib86Demo7Component } from './lib86-demo7.component';

describe('Lib86Demo7Component', () => {
  let component: Lib86Demo7Component;
  let fixture: ComponentFixture<Lib86Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib86Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib86Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
