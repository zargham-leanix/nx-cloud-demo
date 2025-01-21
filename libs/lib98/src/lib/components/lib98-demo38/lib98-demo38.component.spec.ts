import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib98Demo38Component } from './lib98-demo38.component';

describe('Lib98Demo38Component', () => {
  let component: Lib98Demo38Component;
  let fixture: ComponentFixture<Lib98Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib98Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib98Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
