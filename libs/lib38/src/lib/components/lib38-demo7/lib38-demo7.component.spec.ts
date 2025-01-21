import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib38Demo7Component } from './lib38-demo7.component';

describe('Lib38Demo7Component', () => {
  let component: Lib38Demo7Component;
  let fixture: ComponentFixture<Lib38Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib38Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib38Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
