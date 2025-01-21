import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib75Demo23Component } from './lib75-demo23.component';

describe('Lib75Demo23Component', () => {
  let component: Lib75Demo23Component;
  let fixture: ComponentFixture<Lib75Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib75Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib75Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
