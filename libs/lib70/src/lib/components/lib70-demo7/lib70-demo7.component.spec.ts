import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib70Demo7Component } from './lib70-demo7.component';

describe('Lib70Demo7Component', () => {
  let component: Lib70Demo7Component;
  let fixture: ComponentFixture<Lib70Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib70Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib70Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
