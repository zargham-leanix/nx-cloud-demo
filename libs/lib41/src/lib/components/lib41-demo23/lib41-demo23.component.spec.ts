import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib41Demo23Component } from './lib41-demo23.component';

describe('Lib41Demo23Component', () => {
  let component: Lib41Demo23Component;
  let fixture: ComponentFixture<Lib41Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib41Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib41Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
