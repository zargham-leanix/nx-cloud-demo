import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib40Demo40Component } from './lib40-demo40.component';

describe('Lib40Demo40Component', () => {
  let component: Lib40Demo40Component;
  let fixture: ComponentFixture<Lib40Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib40Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib40Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
