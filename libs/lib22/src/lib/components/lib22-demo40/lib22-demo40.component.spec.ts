import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib22Demo40Component } from './lib22-demo40.component';

describe('Lib22Demo40Component', () => {
  let component: Lib22Demo40Component;
  let fixture: ComponentFixture<Lib22Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib22Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib22Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
