import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib22Demo47Component } from './lib22-demo47.component';

describe('Lib22Demo47Component', () => {
  let component: Lib22Demo47Component;
  let fixture: ComponentFixture<Lib22Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib22Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib22Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
