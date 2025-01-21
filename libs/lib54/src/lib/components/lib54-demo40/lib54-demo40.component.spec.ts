import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib54Demo40Component } from './lib54-demo40.component';

describe('Lib54Demo40Component', () => {
  let component: Lib54Demo40Component;
  let fixture: ComponentFixture<Lib54Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib54Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib54Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
