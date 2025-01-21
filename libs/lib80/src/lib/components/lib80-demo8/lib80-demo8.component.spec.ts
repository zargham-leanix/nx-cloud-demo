import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib80Demo8Component } from './lib80-demo8.component';

describe('Lib80Demo8Component', () => {
  let component: Lib80Demo8Component;
  let fixture: ComponentFixture<Lib80Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib80Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib80Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
