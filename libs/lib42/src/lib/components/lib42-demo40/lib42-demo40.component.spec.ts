import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib42Demo40Component } from './lib42-demo40.component';

describe('Lib42Demo40Component', () => {
  let component: Lib42Demo40Component;
  let fixture: ComponentFixture<Lib42Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib42Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib42Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
