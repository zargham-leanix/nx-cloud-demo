import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib98Demo7Component } from './lib98-demo7.component';

describe('Lib98Demo7Component', () => {
  let component: Lib98Demo7Component;
  let fixture: ComponentFixture<Lib98Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib98Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib98Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
