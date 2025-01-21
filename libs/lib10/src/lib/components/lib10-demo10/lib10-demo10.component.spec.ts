import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib10Demo10Component } from './lib10-demo10.component';

describe('Lib10Demo10Component', () => {
  let component: Lib10Demo10Component;
  let fixture: ComponentFixture<Lib10Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib10Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib10Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
