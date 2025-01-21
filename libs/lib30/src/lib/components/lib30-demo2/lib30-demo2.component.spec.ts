import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib30Demo2Component } from './lib30-demo2.component';

describe('Lib30Demo2Component', () => {
  let component: Lib30Demo2Component;
  let fixture: ComponentFixture<Lib30Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib30Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib30Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
