import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib10Demo31Component } from './lib10-demo31.component';

describe('Lib10Demo31Component', () => {
  let component: Lib10Demo31Component;
  let fixture: ComponentFixture<Lib10Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib10Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib10Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
