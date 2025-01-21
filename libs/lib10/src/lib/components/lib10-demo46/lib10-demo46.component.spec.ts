import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib10Demo46Component } from './lib10-demo46.component';

describe('Lib10Demo46Component', () => {
  let component: Lib10Demo46Component;
  let fixture: ComponentFixture<Lib10Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib10Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib10Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
