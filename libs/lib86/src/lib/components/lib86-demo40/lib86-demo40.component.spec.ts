import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib86Demo40Component } from './lib86-demo40.component';

describe('Lib86Demo40Component', () => {
  let component: Lib86Demo40Component;
  let fixture: ComponentFixture<Lib86Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib86Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib86Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
