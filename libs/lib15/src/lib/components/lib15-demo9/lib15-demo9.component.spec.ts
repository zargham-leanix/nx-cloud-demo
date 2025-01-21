import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib15Demo9Component } from './lib15-demo9.component';

describe('Lib15Demo9Component', () => {
  let component: Lib15Demo9Component;
  let fixture: ComponentFixture<Lib15Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib15Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib15Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
