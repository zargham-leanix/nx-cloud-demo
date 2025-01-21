import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib47Demo8Component } from './lib47-demo8.component';

describe('Lib47Demo8Component', () => {
  let component: Lib47Demo8Component;
  let fixture: ComponentFixture<Lib47Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib47Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib47Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
