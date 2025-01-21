import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib98Demo49Component } from './lib98-demo49.component';

describe('Lib98Demo49Component', () => {
  let component: Lib98Demo49Component;
  let fixture: ComponentFixture<Lib98Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib98Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib98Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
