import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib98Demo47Component } from './lib98-demo47.component';

describe('Lib98Demo47Component', () => {
  let component: Lib98Demo47Component;
  let fixture: ComponentFixture<Lib98Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib98Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib98Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
