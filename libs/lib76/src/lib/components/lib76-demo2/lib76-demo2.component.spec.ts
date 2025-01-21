import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib76Demo2Component } from './lib76-demo2.component';

describe('Lib76Demo2Component', () => {
  let component: Lib76Demo2Component;
  let fixture: ComponentFixture<Lib76Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib76Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib76Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
