import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib32Demo23Component } from './lib32-demo23.component';

describe('Lib32Demo23Component', () => {
  let component: Lib32Demo23Component;
  let fixture: ComponentFixture<Lib32Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib32Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib32Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
