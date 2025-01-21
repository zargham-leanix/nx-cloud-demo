import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib86Demo2Component } from './lib86-demo2.component';

describe('Lib86Demo2Component', () => {
  let component: Lib86Demo2Component;
  let fixture: ComponentFixture<Lib86Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib86Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib86Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
