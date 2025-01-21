import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib28Demo2Component } from './lib28-demo2.component';

describe('Lib28Demo2Component', () => {
  let component: Lib28Demo2Component;
  let fixture: ComponentFixture<Lib28Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib28Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib28Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
