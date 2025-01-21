import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib10Demo44Component } from './lib10-demo44.component';

describe('Lib10Demo44Component', () => {
  let component: Lib10Demo44Component;
  let fixture: ComponentFixture<Lib10Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib10Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib10Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
