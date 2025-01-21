import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib32Demo10Component } from './lib32-demo10.component';

describe('Lib32Demo10Component', () => {
  let component: Lib32Demo10Component;
  let fixture: ComponentFixture<Lib32Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib32Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib32Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
