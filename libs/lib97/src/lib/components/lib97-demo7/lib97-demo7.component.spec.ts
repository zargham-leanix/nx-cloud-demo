import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib97Demo7Component } from './lib97-demo7.component';

describe('Lib97Demo7Component', () => {
  let component: Lib97Demo7Component;
  let fixture: ComponentFixture<Lib97Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib97Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib97Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
