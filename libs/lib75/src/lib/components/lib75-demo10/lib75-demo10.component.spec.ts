import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib75Demo10Component } from './lib75-demo10.component';

describe('Lib75Demo10Component', () => {
  let component: Lib75Demo10Component;
  let fixture: ComponentFixture<Lib75Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib75Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib75Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
