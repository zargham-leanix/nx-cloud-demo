import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib75Demo26Component } from './lib75-demo26.component';

describe('Lib75Demo26Component', () => {
  let component: Lib75Demo26Component;
  let fixture: ComponentFixture<Lib75Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib75Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib75Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
