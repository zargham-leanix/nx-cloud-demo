import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib10Demo19Component } from './lib10-demo19.component';

describe('Lib10Demo19Component', () => {
  let component: Lib10Demo19Component;
  let fixture: ComponentFixture<Lib10Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib10Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib10Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
