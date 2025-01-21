import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib51Demo7Component } from './lib51-demo7.component';

describe('Lib51Demo7Component', () => {
  let component: Lib51Demo7Component;
  let fixture: ComponentFixture<Lib51Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib51Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib51Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
