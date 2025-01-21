import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib32Demo12Component } from './lib32-demo12.component';

describe('Lib32Demo12Component', () => {
  let component: Lib32Demo12Component;
  let fixture: ComponentFixture<Lib32Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib32Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib32Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
