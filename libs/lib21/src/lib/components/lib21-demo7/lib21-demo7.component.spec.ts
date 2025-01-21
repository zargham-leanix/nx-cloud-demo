import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib21Demo7Component } from './lib21-demo7.component';

describe('Lib21Demo7Component', () => {
  let component: Lib21Demo7Component;
  let fixture: ComponentFixture<Lib21Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib21Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib21Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
