import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib41Demo10Component } from './lib41-demo10.component';

describe('Lib41Demo10Component', () => {
  let component: Lib41Demo10Component;
  let fixture: ComponentFixture<Lib41Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib41Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib41Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
