import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib64Demo40Component } from './lib64-demo40.component';

describe('Lib64Demo40Component', () => {
  let component: Lib64Demo40Component;
  let fixture: ComponentFixture<Lib64Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib64Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib64Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
