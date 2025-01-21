import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib27Demo40Component } from './lib27-demo40.component';

describe('Lib27Demo40Component', () => {
  let component: Lib27Demo40Component;
  let fixture: ComponentFixture<Lib27Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib27Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib27Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
