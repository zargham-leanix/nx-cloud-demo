import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib98Demo9Component } from './lib98-demo9.component';

describe('Lib98Demo9Component', () => {
  let component: Lib98Demo9Component;
  let fixture: ComponentFixture<Lib98Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib98Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib98Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
